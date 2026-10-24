import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { SERVICES_BY_SLUG } from "@/lib/services";

function getBaseUrl(req: NextRequest): string {
  if (process.env.NEXT_PUBLIC_BASE_URL) {
    return process.env.NEXT_PUBLIC_BASE_URL.replace(/\/$/, "");
  }
  const host = req.headers.get("host") ?? "localhost:3000";
  const proto = req.headers.get("x-forwarded-proto") ?? "https";
  return `${proto}://${host}`;
}

export async function POST(req: NextRequest) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return NextResponse.json(
      { error: "Payment processing is not configured." },
      { status: 503 },
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
  const baseUrl = getBaseUrl(req);

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
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
    success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${baseUrl}/cancel?service=${serviceSlug}`,
    metadata: {
      serviceSlug: service.slug,
      serviceTitle: service.title,
    },
  });

  return NextResponse.json({ url: session.url });
}
