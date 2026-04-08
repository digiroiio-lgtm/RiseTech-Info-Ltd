import type { Metadata } from "next";
import Link from "next/link";
import { LEGAL_LINKS } from "@/lib/legalLinks";
import { testimonials } from "@/lib/testimonials";

export const metadata: Metadata = {
  title: "Wall of Love — RiseTech Advisory",
  description:
    "Hear from the founders, operators, and investors who have worked with RiseTech Advisory.",
};

export default function WallOfLovePage() {
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
              Wall of Love
            </p>
            <h1 className="text-4xl lg:text-6xl font-light leading-tight text-white max-w-3xl mb-8">
              What our clients say about working with us.
            </h1>
            <p className="text-lg text-neutral-400 max-w-xl leading-relaxed">
              Real feedback from founders, operators, and investors across every
              practice area.
            </p>
          </div>
        </div>

        {/* Testimonial masonry grid */}
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="border border-neutral-200 bg-white p-8 flex flex-col justify-between hover:border-neutral-400 transition-colors duration-300 hover:shadow-sm"
              >
                <div>
                  {/* Stars */}
                  <div className="flex gap-0.5 mb-6">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className="w-3.5 h-3.5 fill-neutral-900"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-sm text-neutral-700 leading-relaxed mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                </div>
                <div className="pt-4 border-t border-neutral-100">
                  <p className="text-sm font-semibold text-neutral-900">
                    {t.name}
                  </p>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    {t.title}, {t.company}
                  </p>
                  <span className="text-xs text-neutral-400 border border-neutral-200 inline-block px-2 py-0.5 mt-2">
                    {t.service}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 pt-16 border-t border-neutral-100 text-center">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4">
              Ready to get started?
            </p>
            <h2 className="text-3xl lg:text-4xl font-light text-neutral-900 mb-8">
              Join our growing client base.
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
