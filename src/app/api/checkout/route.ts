import { randomUUID } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { SERVICES_BY_SLUG } from "@/lib/services";

function getBaseUrl(req: NextRequest): string | null {
  if (process.env.NEXT_PUBLIC_BASE_URL) {
    return process.env.NEXT_PUBLIC_BASE_URL.replace(/\/$/, "");
  }
  // The Host header is client-controlled, so only trust it outside production.
  if (process.env.NODE_ENV === "production") return null;
  const host = req.headers.get("host") ?? "localhost:3000";
  const proto = req.headers.get("x-forwarded-proto") ?? "http";
  return `${proto}://${host}`;
}

// Best-effort limiter: state is per server instance (not shared across serverless instances).
const WINDOW_MS = 60_000;
const MAX_REQUESTS = 10;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5_000) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(key);
    }
  }
  return recent.length > MAX_REQUESTS;
}

function isAllowedOrigin(req: NextRequest, baseUrl: string): boolean {
  const origin = req.headers.get("origin");
  if (!origin) return true;
  try {
    const originHost = new URL(origin).host;
    return originHost === new URL(baseUrl).host || originHost === req.headers.get("host");
  } catch {
    return false;
  }
}

export async function POST(req: NextRequest) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  const baseUrl = getBaseUrl(req);
  if (!secretKey || !baseUrl) {
    return NextResponse.json(
      { error: "Payment processing is not configured." },
      { status: 503 },
    );
  }

  if (!isAllowedOrigin(req, baseUrl)) {
    return NextResponse.json({ error: "Forbidden." }, { status: 403 });
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again shortly." },
      { status: 429 },
    );
  }

  let body: { serviceSlug?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { serviceSlug } = body;
  if (!serviceSlug || typeof serviceSlug !== "string") {
    return NextResponse.json({ error: "serviceSlug is required." }, { status: 400 });
  }

  const service = SERVICES_BY_SLUG[serviceSlug];
  if (!service) {
    return NextResponse.json({ error: "Unknown service." }, { status: 400 });
  }

  const stripe = new Stripe(secretKey);
  const orderId = randomUUID();
  const metadata = {
    orderId,
    serviceSlug: service.slug,
    serviceTitle: service.title,
  };

  const params: Stripe.Checkout.SessionCreateParams = {
    mode: "payment",
    client_reference_id: orderId,
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: "gbp",
          unit_amount: service.priceGBP * 100, // priceGBP is whole pounds; Stripe requires pence
          product_data: {
            name: service.title,
            description: service.description,
          },
        },
      },
    ],
    billing_address_collection: "required",
    customer_creation: "always",
    phone_number_collection: { enabled: true },
    invoice_creation: {
      enabled: true,
      invoice_data: {
        description: service.title,
        metadata,
        footer: "Werrise Digital Ltd, Company No. 16345678, 85 Great Portland Street, London, W1W 7LT, United Kingdom. Prices include VAT where applicable.",
      },
    },
    payment_intent_data: { description: service.title, metadata },
    locale: "en",
    expires_at: Math.floor(Date.now() / 1000) + 60 * 60,
    success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${baseUrl}/cancel?service=${encodeURIComponent(service.slug)}`,
    metadata,
  };

  const withConsent: Stripe.Checkout.SessionCreateParams = {
    ...params,
    consent_collection: { terms_of_service: "required" },
    custom_text: {
      terms_of_service_acceptance: {
        message: `I agree to the [Terms](${baseUrl}/terms), [Refund Policy](${baseUrl}/refund) and [Billing Policy](${baseUrl}/billing).`,
      },
    },
  };

  try {
    let session: Stripe.Checkout.Session;
    try {
      session = await stripe.checkout.sessions.create(withConsent);
    } catch (err) {
      // Stripe rejects consent_collection until a Terms URL is saved in the Dashboard.
      // Fall back to the on-site agreement checkbox rather than blocking all payments.
      if (err instanceof Stripe.errors.StripeInvalidRequestError && /terms of service/i.test(err.message)) {
        console.warn("[checkout] Terms URL not set in Stripe Dashboard; creating session without consent_collection.");
        session = await stripe.checkout.sessions.create(params);
      } else {
        throw err;
      }
    }
    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("[checkout] Failed to create Stripe Checkout Session:", err instanceof Error ? err.message : err);
    return NextResponse.json(
      { error: "We could not start the payment. Please try again or contact support@wealwaysrise.com." },
      { status: 502 },
    );
  }
}
