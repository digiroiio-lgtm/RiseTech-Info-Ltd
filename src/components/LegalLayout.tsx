import Link from "next/link";
import type { ReactNode } from "react";

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}

export default function LegalLayout({
  title,
  lastUpdated,
  children,
}: LegalLayoutProps) {
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
          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: "Services", href: "/#services" },
              { label: "Intelligence", href: "/#services" },
              { label: "Advisory", href: "/#contact" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-medium tracking-widest uppercase text-neutral-500 hover:text-neutral-900 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <Link
            href="/#contact"
            className="inline-flex items-center px-5 py-2.5 bg-neutral-900 text-white text-xs font-medium tracking-wide hover:bg-neutral-700 transition-colors duration-200"
          >
            Request Advisory
          </Link>
        </div>
      </header>

      {/* Page content */}
      <main className="flex-1 pt-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4">
            Legal
          </p>
          <h1 className="text-4xl lg:text-5xl font-light text-neutral-900 mb-3">
            {title}
          </h1>
          <p className="text-sm text-neutral-400 mb-12">
            Last updated: {lastUpdated}
          </p>
          <div className="prose-legal">{children}</div>
        </div>
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
