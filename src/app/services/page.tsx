import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";

export const metadata: Metadata = {
  title: "Services & Pricing — RiseTech Information Ltd",
  description:
    "Full list of RiseTech Information Ltd advisory, SEO, market intelligence, and startup consulting services with transparent pricing.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Page header */}
        <section className="bg-white border-b border-neutral-100 py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4">
              Services &amp; Pricing
            </p>
            <h1 className="text-4xl lg:text-5xl font-light text-neutral-900 leading-tight mb-6 max-w-2xl">
              What We Deliver — and What It Costs
            </h1>
            <p className="text-lg font-light text-neutral-500 leading-relaxed max-w-2xl">
              Every engagement is a fixed-price, clearly scoped deliverable.
              You know exactly what you are purchasing before any payment is
              made. All prices are in GBP and exclusive of VAT where applicable.
            </p>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-neutral-50 border-b border-neutral-100 py-12">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="grid sm:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Select a service",
                  body: "Browse the services below and identify the one that matches your current priority.",
                },
                {
                  step: "02",
                  title: "Accept terms & pay",
                  body: 'Click "Select & Pay" on any service. Review the scope, accept our Terms and Billing Policy, then complete payment via Stripe.',
                },
                {
                  step: "03",
                  title: "Receive your deliverable",
                  body: "We deliver the agreed output on time. You pay only once scope is confirmed in writing.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-5">
                  <span className="text-xs font-mono text-neutral-300 pt-0.5 flex-shrink-0">
                    {item.step}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-neutral-900 mb-1">
                      {item.title}
                    </p>
                    <p className="text-sm text-neutral-500 leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All services with prices — "Select & Pay" links to checkout */}
        <ServicesSection showCheckoutLinks />

        {/* Bottom CTA */}
        <section className="bg-neutral-900 text-white py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl lg:text-3xl font-light text-white mb-2">
                Ready to get started?
              </h2>
              <p className="text-neutral-400 text-sm max-w-lg">
                Contact us to confirm scope and receive a formal engagement
                confirmation before any payment is required. See our{" "}
                <Link
                  href="/billing"
                  className="underline underline-offset-2 hover:text-white transition-colors"
                >
                  Billing Policy
                </Link>{" "}
                and{" "}
                <Link
                  href="/refund"
                  className="underline underline-offset-2 hover:text-white transition-colors"
                >
                  Refund Policy
                </Link>
                .
              </p>
            </div>
            <Link
              href="/contact"
              className="flex-shrink-0 inline-flex items-center justify-center px-8 py-4 bg-white text-neutral-900 text-sm font-medium tracking-wide hover:bg-neutral-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-900"
            >
              Request a Service
            </Link>
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
