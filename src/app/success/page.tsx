import type { Metadata } from "next";
import Link from "next/link";
import Stripe from "stripe";

export const metadata: Metadata = {
  title: "Payment Confirmed — RiseTech Information Ltd",
  description: "Your payment has been received. Thank you for choosing RiseTech Information Ltd.",
};

interface SuccessPageProps {
  searchParams: Promise<{ session_id?: string }>;
}

async function getSessionDetails(sessionId: string) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) return null;
  try {
    const stripe = new Stripe(secretKey);
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    return session;
  } catch {
    return null;
  }
}

export default async function SuccessPage({ searchParams }: SuccessPageProps) {
  const { session_id } = await searchParams;
  const session = session_id ? await getSessionDetails(session_id) : null;

  const serviceName =
    session?.metadata?.serviceTitle ??
    (session?.line_items as { data?: { description?: string }[] } | undefined)
      ?.data?.[0]?.description ??
    null;

  const amountTotal = session?.amount_total;
  const currency = session?.currency?.toUpperCase() ?? "GBP";

  return (
    <>
      {/* Minimal header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-neutral-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="text-sm font-semibold tracking-[0.15em] uppercase text-neutral-900"
          >
            RiseTech
          </Link>
        </div>
      </header>

      <main className="flex-1 pt-16 min-h-screen bg-white">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          {/* Success icon */}
          <div className="w-14 h-14 rounded-full bg-neutral-900 flex items-center justify-center mb-8">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-7 h-7 text-white"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4">
            Payment Confirmed
          </p>
          <h1 className="text-4xl lg:text-5xl font-light text-neutral-900 mb-6">
            Thank you.
          </h1>

          {/* Purchase summary */}
          {serviceName && (
            <div className="border border-neutral-200 p-6 mb-8">
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-neutral-400 mb-3">
                Order summary
              </p>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-neutral-900">
                    {serviceName}
                  </p>
                  <p className="text-xs text-neutral-400 mt-1">
                    RiseTech Information Ltd
                  </p>
                </div>
                {amountTotal != null && (
                  <span className="text-xl font-light text-neutral-900 flex-shrink-0">
                    {currency === "GBP" ? "£" : currency}
                    {(amountTotal / 100).toFixed(2)}
                  </span>
                )}
              </div>
              {session_id && (
                <p className="text-xs text-neutral-300 mt-4 break-all">
                  Ref: {session_id}
                </p>
              )}
            </div>
          )}

          <p className="text-neutral-500 leading-relaxed mb-4">
            Your payment has been received. We will contact you at the email
            address provided to begin the engagement.
          </p>
          <p className="text-neutral-500 leading-relaxed mb-10">
            Expect to hear from us within{" "}
            <strong className="text-neutral-900">1 business day</strong>{" "}
            (Monday–Friday, 09:00–17:30 GMT). For any questions, email{" "}
            <a
              href="mailto:advisory@risetech.info"
              className="underline underline-offset-2 text-neutral-900"
            >
              advisory@risetech.info
            </a>
            .
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-neutral-900 text-white text-sm font-medium tracking-wide hover:bg-neutral-700 transition-colors"
            >
              Back to Home
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-6 py-3 border border-neutral-200 text-neutral-700 text-sm font-medium tracking-wide hover:border-neutral-400 hover:text-neutral-900 transition-colors"
            >
              Browse Other Services
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
