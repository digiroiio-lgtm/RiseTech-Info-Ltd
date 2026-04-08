import type { Metadata } from "next";
import Link from "next/link";
import { LEGAL_LINKS } from "@/lib/legalLinks";

export const metadata: Metadata = {
  title: "Contact — RiseTech Advisory",
  description:
    "Get in touch with RiseTech Info Ltd for advisory enquiries, support, or billing questions.",
};

export default function ContactPage() {
  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-neutral-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="text-sm font-semibold tracking-[0.15em] uppercase text-neutral-900"
          >
            RiseTech
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center px-5 py-2.5 bg-neutral-900 text-white text-xs font-medium tracking-wide hover:bg-neutral-700 transition-colors duration-200"
          >
            Request Advisory
          </Link>
        </div>
      </header>

      <main className="flex-1 pt-16">
        {/* Header */}
        <div className="bg-neutral-950 text-white py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-500 mb-4">
              Get in Touch
            </p>
            <h1 className="text-4xl lg:text-5xl font-light leading-tight">
              Contact
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid md:grid-cols-2 gap-12">
            {/* General & Advisory */}
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4">
                Advisory Enquiries
              </p>
              <p className="text-neutral-600 leading-relaxed mb-6">
                For strategic advisory, consulting, and marketplace enquiries,
                reach out directly to our team.
              </p>
              <a
                href="mailto:support@wealwaysrise.com"
                className="inline-flex items-center px-6 py-3 bg-neutral-900 text-white text-sm font-medium tracking-wide hover:bg-neutral-700 transition-colors duration-200"
              >
                support@wealwaysrise.com
              </a>
            </div>

            {/* Company Details */}
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4">
                Company Details
              </p>
              <ul className="space-y-2 text-sm text-neutral-600 leading-relaxed">
                <li>
                  <span className="font-medium text-neutral-900">
                    Legal Entity:
                  </span>{" "}
                  RISETECH INFO LTD.
                </li>
                <li>
                  <span className="font-medium text-neutral-900">
                    Company Number:
                  </span>{" "}
                  14876900
                </li>
                <li>
                  <span className="font-medium text-neutral-900">
                    Registered Office:
                  </span>{" "}
                  71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United
                  Kingdom
                </li>
                <li>
                  <span className="font-medium text-neutral-900">Website:</span>{" "}
                  wealwaysrise.com
                </li>
              </ul>
            </div>
          </div>

          {/* Legal links */}
          <div className="mt-16 pt-10 border-t border-neutral-100">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-6">
              Legal Pages
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                { label: "Terms and Conditions", href: "/terms" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Refund Policy", href: "/refund-policy" },
                { label: "Billing Policy", href: "/billing-policy" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-neutral-500 underline underline-offset-4 hover:text-neutral-900 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-neutral-950 text-neutral-600 py-8 border-t border-neutral-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs tracking-widest uppercase">
            © {new Date().getFullYear()} RiseTech Information Ltd
          </p>
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs hover:text-neutral-400 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </footer>
    </>
  );
}
