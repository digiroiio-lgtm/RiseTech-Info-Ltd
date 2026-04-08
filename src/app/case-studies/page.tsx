import type { Metadata } from "next";
import Link from "next/link";
import { LEGAL_LINKS } from "@/lib/legalLinks";
import { caseStudies } from "@/lib/caseStudies";

export const metadata: Metadata = {
  title: "Case Studies — RiseTech Advisory",
  description:
    "Real results from real engagements. Explore how RiseTech Advisory has helped founders, operators, and investors scale faster.",
};

export default function CaseStudiesPage() {
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
              { label: "Case Studies", href: "/case-studies" },
              { label: "Advisory", href: "/#contact" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs font-medium tracking-widest uppercase text-neutral-500 hover:text-neutral-900 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <a
            href="mailto:advisory@risetech.info"
            className="inline-flex items-center px-5 py-2.5 bg-neutral-900 text-white text-xs font-medium tracking-wide hover:bg-neutral-700 transition-colors duration-200"
          >
            Book Strategy Call
          </a>
        </div>
      </header>

      <main className="flex-1 pt-16">
        {/* Hero */}
        <div className="bg-neutral-950 text-white py-24 lg:py-32">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-500 mb-6">
              Case Studies
            </p>
            <h1 className="text-4xl lg:text-6xl font-light leading-tight text-white max-w-3xl mb-8">
              Work that speaks for itself.
            </h1>
            <p className="text-lg text-neutral-400 leading-relaxed max-w-xl">
              Ten engagements across export strategy, market intelligence,
              technology systems, and growth consulting. Real clients, real
              results.
            </p>
          </div>
        </div>

        {/* Case study list */}
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <div className="space-y-8">
            {caseStudies.map((cs, i) => (
              <article
                key={cs.slug}
                id={cs.slug}
                className="border border-neutral-200 bg-white hover:border-neutral-900 hover:shadow-sm transition-all duration-300"
              >
                {/* Card header */}
                <div className="p-8 lg:p-10 border-b border-neutral-100">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-mono text-neutral-300">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-xs font-medium text-neutral-500 border border-neutral-200 px-2 py-0.5">
                        {cs.tag}
                      </span>
                    </div>
                    <span className="text-xs font-semibold tracking-wide uppercase text-neutral-400">
                      {cs.service}
                    </span>
                  </div>
                  <p className="text-xs font-semibold tracking-wide uppercase text-neutral-400 mb-3">
                    {cs.client}
                  </p>
                  <h2 className="text-xl lg:text-2xl font-light text-neutral-900 leading-snug">
                    {cs.headline}
                  </h2>
                </div>

                {/* Body */}
                <div className="p-8 lg:p-10 grid lg:grid-cols-3 gap-8">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.15em] uppercase text-neutral-400 mb-3">
                      Challenge
                    </p>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {cs.challenge}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-[0.15em] uppercase text-neutral-400 mb-3">
                      Our Approach
                    </p>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {cs.approach}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-[0.15em] uppercase text-neutral-400 mb-3">
                      Result
                    </p>
                    <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                      {cs.result}
                    </p>
                    {/* Metrics */}
                    <div className="space-y-3">
                      {cs.metrics.map((m) => (
                        <div key={m.label} className="flex items-center gap-3">
                          <span className="text-lg font-light text-neutral-900 whitespace-nowrap">
                            {m.value}
                          </span>
                          <span className="text-xs text-neutral-400 leading-tight">
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 pt-16 border-t border-neutral-100 text-center">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4">
              Ready to build your case study?
            </p>
            <h2 className="text-3xl lg:text-4xl font-light text-neutral-900 mb-8">
              Let&apos;s work together.
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:advisory@risetech.info"
                className="inline-flex items-center justify-center px-8 py-4 bg-neutral-900 text-white text-sm font-medium tracking-wide hover:bg-neutral-700 transition-colors duration-200"
              >
                Book Strategy Call
              </a>
              <Link
                href="/#services"
                className="inline-flex items-center justify-center px-8 py-4 border border-neutral-300 text-neutral-900 text-sm font-medium tracking-wide hover:border-neutral-900 transition-colors duration-200"
              >
                Explore Services
              </Link>
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
