import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES_BY_SLUG } from "@/lib/services";

export const metadata: Metadata = {
  title: "Payment Cancelled — RiseTech Information Ltd",
  description: "Your payment was not completed. You can try again at any time.",
};

interface CancelPageProps {
  searchParams: Promise<{ service?: string }>;
}

export default async function CancelPage({ searchParams }: CancelPageProps) {
  const { service } = await searchParams;
  const selectedService = service ? SERVICES_BY_SLUG[service] : null;

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
          {/* Icon */}
          <div className="w-14 h-14 rounded-full bg-neutral-100 flex items-center justify-center mb-8">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-7 h-7 text-neutral-400"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>

          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4">
            Payment Not Completed
          </p>
          <h1 className="text-4xl lg:text-5xl font-light text-neutral-900 mb-6">
            No charge was made.
          </h1>

          <p className="text-neutral-500 leading-relaxed mb-8">
            Your payment was cancelled and you have not been charged. You can
            return to checkout and try again whenever you are ready.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            {selectedService ? (
              <Link
                href={`/checkout?service=${selectedService.slug}`}
                className="inline-flex items-center justify-center px-6 py-3 bg-neutral-900 text-white text-sm font-medium tracking-wide hover:bg-neutral-700 transition-colors"
              >
                Try Again — {selectedService.title}
              </Link>
            ) : (
              <Link
                href="/checkout"
                className="inline-flex items-center justify-center px-6 py-3 bg-neutral-900 text-white text-sm font-medium tracking-wide hover:bg-neutral-700 transition-colors"
              >
                Return to Checkout
              </Link>
            )}
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-6 py-3 border border-neutral-200 text-neutral-700 text-sm font-medium tracking-wide hover:border-neutral-400 hover:text-neutral-900 transition-colors"
            >
              Browse Pricing
            </Link>
          </div>

          <p className="mt-8 text-sm text-neutral-400">
            Questions? Email{" "}
            <a
              href="mailto:advisory@risetech.info"
              className="underline underline-offset-2 text-neutral-600 hover:text-neutral-900"
            >
              advisory@risetech.info
            </a>
          </p>
        </div>
      </main>
    </>
  );
}
