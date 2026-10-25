import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function logPaid(event: Stripe.Event, session: Stripe.Checkout.Session) {
  console.info("[stripe] order paid", {
    event: event.type,
    sessionId: session.id,
    orderId: session.client_reference_id,
    service: session.metadata?.serviceSlug,
    amount: session.amount_total,
    currency: session.currency,
    email: session.customer_details?.email,
  });
}

export async function POST(req: NextRequest) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secretKey || !webhookSecret) {
    return NextResponse.json({ error: "Webhook is not configured." }, { status: 503 });
  }

  const signature = req.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.json({ error: "Missing signature." }, { status: 400 });
  }

  // The raw body is required for signature verification.
  const payload = await req.text();
  const stripe = new Stripe(secretKey);

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(payload, signature, webhookSecret);
  } catch {
    return NextResponse.json({ error: "Invalid signature." }, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object;
      // Delayed payment methods complete the session before the money arrives.
      if (session.payment_status === "paid") {
        logPaid(event, session);
      } else {
        console.info("[stripe] session completed, awaiting payment", { sessionId: session.id });
      }
      break;
    }
    case "checkout.session.async_payment_succeeded":
      logPaid(event, event.data.object);
      break;
    case "checkout.session.async_payment_failed":
      console.warn("[stripe] async payment failed", { sessionId: event.data.object.id });
      break;
    case "checkout.session.expired":
      console.info("[stripe] session expired", { sessionId: event.data.object.id });
      break;
    case "charge.refunded":
      console.warn("[stripe] charge refunded", {
        chargeId: event.data.object.id,
        amountRefunded: event.data.object.amount_refunded,
      });
      break;
    case "charge.dispute.created":
      console.error("[stripe] DISPUTE opened - respond in the Stripe Dashboard", {
        disputeId: event.data.object.id,
        chargeId: event.data.object.charge,
        reason: event.data.object.reason,
      });
      break;
    default:
      break;
  }

  return NextResponse.json({ received: true });
}
