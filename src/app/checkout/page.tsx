"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { SERVICE_CATEGORIES, SERVICES_BY_SLUG, type Service } from "@/lib/services";

function CheckoutFlow() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [selected, setSelected] = useState<Service | null>(null);
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Pre-select from URL param on mount
  useEffect(() => {
    const slug = searchParams.get("service");
    if (slug && SERVICES_BY_SLUG[slug]) {
      setSelected(SERVICES_BY_SLUG[slug]);
    }
  }, [searchParams]);

  function selectService(service: Service) {
    setSelected(service);
    setAgreed(false);
    setError(null);
    // Update URL without navigation
    const params = new URLSearchParams(searchParams.toString());
    params.set("service", service.slug);
    router.replace(`/checkout?${params.toString()}`, { scroll: false });
  }

  async function handlePay() {
    if (!selected || !agreed) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ serviceSlug: selected.slug }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) {
        setError(data.error ?? "Something went wrong. Please try again.");
        return;
      }
      window.location.href = data.url;
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
      {/* Header */}
      <div className="mb-12">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4">
          Checkout
        </p>
        <h1 className="text-4xl lg:text-5xl font-light text-neutral-900 mb-4">
          Purchase a Service
        </h1>
        <p className="text-neutral-500 text-base max-w-lg">
          Select a service, accept our terms, and complete payment via Stripe.
          All prices are in GBP and exclusive of VAT where applicable.
        </p>
      </div>

      {/* Step indicators */}
      <div className="flex items-center gap-3 mb-12">
        {[
          { n: "1", label: "Select service", active: true },
          { n: "2", label: "Accept terms", active: !!selected },
          { n: "3", label: "Pay securely", active: !!selected && agreed },
        ].map((step, i) => (
          <div key={step.n} className="flex items-center gap-3">
            {i > 0 && (
              <div className={`h-px w-8 ${step.active ? "bg-neutral-900" : "bg-neutral-200"}`} />
            )}
            <div className="flex items-center gap-2">
              <span
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold transition-colors ${
                  step.active
                    ? "bg-neutral-900 text-white"
                    : "bg-neutral-100 text-neutral-400"
                }`}
              >
                {step.n}
              </span>
              <span
                className={`text-xs font-medium hidden sm:block ${
                  step.active ? "text-neutral-900" : "text-neutral-400"
                }`}
              >
                {step.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Step 1: Service selection */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold text-neutral-900 mb-6">
          1. Select a service
        </h2>
        <div className="space-y-8">
          {SERVICE_CATEGORIES.map((cat) => (
            <div key={cat.index}>
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-neutral-400 mb-3">
                {cat.name}
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {cat.services.map((svc) => {
                  const isSelected = selected?.slug === svc.slug;
                  return (
                    <button
                      key={svc.slug}
                      type="button"
                      onClick={() => selectService(svc)}
                      className={`text-left border p-5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2 ${
                        isSelected
                          ? "border-neutral-900 bg-neutral-900 text-white"
                          : "border-neutral-200 bg-white hover:border-neutral-400"
                      }`}
                    >
                      <p
                        className={`text-sm font-semibold mb-1 ${isSelected ? "text-white" : "text-neutral-900"}`}
                      >
                        {svc.title}
                      </p>
                      <p
                        className={`text-lg font-light ${isSelected ? "text-neutral-300" : "text-neutral-900"}`}
                      >
                        {svc.price}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Steps 2 + 3: Terms + payment — only shown when a service is selected */}
      {selected && (
        <section className="border-t border-neutral-100 pt-10">
          {/* Selected service summary */}
          <div className="bg-neutral-50 border border-neutral-200 p-6 mb-8 max-w-xl">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-neutral-400 mb-3">
              You are purchasing
            </p>
            <p className="text-base font-semibold text-neutral-900 mb-1">
              {selected.title}
            </p>
            <p className="text-sm text-neutral-500 mb-4">{selected.description}</p>
            <div className="flex items-center justify-between pt-3 border-t border-neutral-200">
              <span className="text-xs text-neutral-400">Total (excl. VAT)</span>
              <span className="text-2xl font-light text-neutral-900">
                {selected.price}
              </span>
            </div>
          </div>

          {/* Step 2: Legal acceptance */}
          <div className="mb-6 max-w-xl">
            <h2 className="text-lg font-semibold text-neutral-900 mb-4">
              2. Accept terms
            </h2>
            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-0.5 w-4 h-4 flex-shrink-0 cursor-pointer accent-neutral-900"
              />
              <span className="text-sm text-neutral-600 leading-relaxed group-hover:text-neutral-900 transition-colors">
                I agree to the{" "}
                <Link
                  href="/terms"
                  target="_blank"
                  className="underline underline-offset-2 font-medium"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/billing"
                  target="_blank"
                  className="underline underline-offset-2 font-medium"
                >
                  Billing Policy
                </Link>
                . I understand that payment is due immediately and the service
                will be delivered within the agreed timeline. Refunds are subject
                to the{" "}
                <Link
                  href="/refund"
                  target="_blank"
                  className="underline underline-offset-2 font-medium"
                >
                  Refund Policy
                </Link>
                .
              </span>
            </label>
          </div>

          {/* Step 3: Pay */}
          <div className="max-w-xl">
            <h2 className="text-lg font-semibold text-neutral-900 mb-4">
              3. Pay securely
            </h2>
            {error && (
              <p className="text-sm text-red-600 mb-4 border border-red-200 bg-red-50 px-4 py-3">
                {error}
              </p>
            )}
            <button
              type="button"
              onClick={handlePay}
              disabled={!agreed || loading}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-neutral-900 text-white text-sm font-medium tracking-wide hover:bg-neutral-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    />
                  </svg>
                  Redirecting to Stripe…
                </>
              ) : (
                <>Proceed to Payment — {selected.price}</>
              )}
            </button>
            <p className="mt-3 text-xs text-neutral-400">
              Payments are processed securely by{" "}
              <span className="font-medium text-neutral-600">Stripe</span>. We
              never store your card details.
            </p>
          </div>
        </section>
      )}
    </div>
  );
}

export default function CheckoutPage() {
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
          <Link
            href="/services"
            className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            ← Back to Services
          </Link>
        </div>
      </header>

      <main className="flex-1 pt-16 min-h-screen bg-white">
        <Suspense fallback={<div className="max-w-6xl mx-auto px-6 py-20 text-neutral-400 text-sm">Loading…</div>}>
          <CheckoutFlow />
        </Suspense>
      </main>
    </>
  );
}
