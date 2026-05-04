import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { SERVICE_CATEGORIES } from "@/lib/services";

export const metadata: Metadata = {
  title: "Pricing — RiseTech Information Ltd",
  description:
    "Transparent, fixed-price advisory and consulting services. Browse all packages and purchase securely online.",
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Header */}
        <section className="bg-white border-b border-neutral-100 py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4">
              Pricing
            </p>
            <h1 className="text-4xl lg:text-5xl font-light text-neutral-900 leading-tight mb-6 max-w-2xl">
              Fixed-price. No surprises.
            </h1>
            <p className="text-lg font-light text-neutral-500 leading-relaxed max-w-xl">
              Every service is a clearly scoped deliverable at a fixed price.
              All amounts are in GBP and exclusive of VAT where applicable.
              Payment is processed securely by Stripe.
            </p>
          </div>
        </section>

        {/* Pricing tables */}
        <section className="bg-white py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-16">
            {SERVICE_CATEGORIES.map((cat) => (
              <div key={cat.index}>
                {/* Category header */}
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-xs font-semibold tracking-[0.2em] text-neutral-300 uppercase font-mono">
                    {String(cat.index).padStart(2, "0")}
                  </span>
                  <h2 className="text-xl lg:text-2xl font-semibold text-neutral-900">
                    {cat.name}
                  </h2>
                </div>
                <p className="text-sm text-neutral-400 mb-6 ml-[2.5rem]">
                  {cat.tagline}
                </p>

                {/* Table */}
                <div className="border border-neutral-200 divide-y divide-neutral-100">
                  {cat.services.map((svc, i) => (
                    <div
                      key={svc.slug}
                      className={`flex flex-col sm:flex-row sm:items-center gap-4 p-5 sm:p-6 hover:bg-neutral-50 transition-colors ${
                        i === 0 ? "rounded-t-none" : ""
                      }`}
                    >
                      {/* Service info */}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-neutral-900 mb-1">
                          {svc.title}
                        </p>
                        <p className="text-sm text-neutral-400 leading-relaxed line-clamp-2">
                          {svc.description}
                        </p>
                      </div>

                      {/* Price + CTA */}
                      <div className="flex items-center gap-6 flex-shrink-0">
                        <span className="text-xl font-light text-neutral-900 w-20 text-right">
                          {svc.price}
                        </span>
                        <Link
                          href={`/checkout?service=${svc.slug}`}
                          className="inline-flex items-center justify-center px-5 py-2.5 bg-neutral-900 text-white text-xs font-medium tracking-wide hover:bg-neutral-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2 whitespace-nowrap"
                        >
                          Select &amp; Pay
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Trust signals */}
        <section className="bg-neutral-50 border-t border-neutral-100 py-12">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="grid sm:grid-cols-3 gap-8">
              {[
                {
                  title: "Secure payment",
                  body: "All transactions are processed by Stripe. We never store your card details.",
                },
                {
                  title: "Fixed scope",
                  body: "You know exactly what you are getting before you pay. No hidden costs, no scope creep.",
                },
                {
                  title: "Refund policy",
                  body: "Not satisfied? Review our Refund Policy for eligibility and how to request a refund.",
                  link: { label: "Refund Policy →", href: "/refund" },
                },
              ].map((item) => (
                <div key={item.title}>
                  <p className="text-sm font-semibold text-neutral-900 mb-2">
                    {item.title}
                  </p>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    {item.body}
                  </p>
                  {item.link && (
                    <Link
                      href={item.link.href}
                      className="mt-2 inline-block text-xs font-medium text-neutral-900 underline underline-offset-2 hover:no-underline"
                    >
                      {item.link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-neutral-950 text-neutral-600 py-8 border-t border-neutral-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <p className="text-xs tracking-widest uppercase">
              © {new Date().getFullYear()} RiseTech Information Ltd
            </p>
            <p className="text-xs">
              Strategic Advisory · Market Intelligence · Growth Architecture
            </p>
          </div>
          <div className="flex flex-wrap justify-center sm:justify-end gap-x-6 gap-y-2">
            {[
              { label: "Services", href: "/services" },
              { label: "Pricing", href: "/pricing" },
              { label: "Terms", href: "/terms" },
              { label: "Privacy", href: "/privacy" },
              { label: "Refund Policy", href: "/refund" },
              { label: "Billing Policy", href: "/billing" },
              { label: "Support", href: "/support" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
