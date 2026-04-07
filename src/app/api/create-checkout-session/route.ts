import Stripe from "stripe";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
if (!stripeSecretKey) {
  throw new Error("STRIPE_SECRET_KEY environment variable is not set");
}

const stripe = new Stripe(stripeSecretKey);

export async function POST(request: Request) {
  const domain = process.env.DOMAIN;
  if (!domain) {
    return Response.json(
      { error: "Server configuration error" },
      { status: 500 }
    );
  }

  const { name, amount } = await request.json();

  if (!name || typeof amount !== "number" || amount <= 0) {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "gbp",
            product_data: {
              name,
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      success_url: `${domain}/success`,
      cancel_url: `${domain}/marketplace`,
    });

    return Response.json({ url: session.url });
  } catch {
    return Response.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
