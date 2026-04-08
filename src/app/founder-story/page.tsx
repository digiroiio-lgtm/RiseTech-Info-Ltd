import type { Metadata } from "next";
import Link from "next/link";
import { LEGAL_LINKS } from "@/lib/legalLinks";

export const metadata: Metadata = {
  title: "Founder Story — RiseTech Advisory",
  description:
    "The moment that started everything. How a song on an American highway gave birth to the philosophy behind RiseTech.",
};

export default function FounderStoryPage() {
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

        {/* ── 1. HERO ──────────────────────────────────────────── */}
        <div className="bg-neutral-950 text-white py-24 lg:py-36">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-500 mb-6">
              Founder Story
            </p>
            <h1 className="text-4xl lg:text-6xl font-light leading-tight mb-8">
              The Moment That Started Everything
            </h1>
            <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl">
              Every brand has a beginning. Ours began on an open highway in the
              United States.
            </p>
          </div>
        </div>

        {/* ── 2. HIGHWAY STORY ─────────────────────────────────── */}
        <div className="bg-white py-20 lg:py-28">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-6 text-neutral-700 leading-relaxed text-base lg:text-lg">
            <p>
              Years before RiseTech was built, our team had already spent years
              working across different industries — building businesses, solving
              complex problems, and helping companies grow. But the real
              inspiration behind the brand came from a moment we didn&apos;t plan.
            </p>
            <p>
              During a long drive on an American highway, a song started playing
              in the background:{" "}
              <span className="italic text-neutral-900 font-medium">
                &ldquo;We Always Rise.&rdquo;
              </span>
            </p>
            <p>Something about that phrase resonated deeply with us.</p>
            <p>
              It captured a philosophy we had been living for years without
              putting it into words: no matter the market conditions, no matter
              the challenges, no matter the setbacks — the goal is always the
              same.
            </p>
            <p className="text-2xl font-light text-neutral-900 py-4">
              We rise.
            </p>
            <p>
              That moment became more than just a memory. It became the
              foundation of a mindset.
            </p>
            <p>
              We realized that the companies we had helped grow, the systems we
              had built, and the strategies we had implemented all shared the
              same underlying principle:
            </p>
            <div className="border-l-2 border-neutral-200 pl-6 space-y-2 my-8">
              <p className="text-neutral-900 font-medium">Resilience.</p>
              <p className="text-neutral-900 font-medium">Momentum.</p>
              <p className="text-neutral-900 font-medium">Forward motion.</p>
            </div>
            <p>
              So we turned that moment into something bigger.
            </p>
            <p>
              We built RiseTech around that philosophy — a company designed to
              help organizations navigate complexity, unlock growth opportunities,
              and move forward with clarity and confidence.
            </p>
            <p>
              Today, RiseTech works with founders, operators, and investors
              across multiple sectors — helping them build smarter systems,
              expand into new markets, and create measurable growth.
            </p>
            <p>
              But at its core, the idea remains simple: no matter the industry,
              the geography, or the challenge — the mission is always the same.
            </p>
            <p className="text-2xl font-light text-neutral-900 py-4">
              We Always Rise.
            </p>
          </div>
        </div>

        {/* ── 3. PHILOSOPHY ────────────────────────────────────── */}
        <div className="bg-neutral-950 text-white py-20 lg:py-28">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-500 mb-6">
              Our Philosophy
            </p>
            <h2 className="text-3xl lg:text-4xl font-light mb-8 leading-tight">
              RiseTech exists to help ambitious teams turn complexity into
              opportunity.
            </h2>
            <p className="text-neutral-400 leading-relaxed mb-8">
              We believe that growth is not random. It is engineered through:
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Clear strategy",
                "Intelligent systems",
                "Data-driven execution",
                "Relentless forward momentum",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-neutral-300">
                  <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-neutral-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-neutral-400 leading-relaxed">
              Because in business, as in life, progress belongs to those who
              keep moving. And when the path becomes difficult — the only
              direction left is up.
            </p>
            <p className="text-xl font-light text-white mt-8">
              We Always Rise.
            </p>
          </div>
        </div>

        {/* ── 4. FOUNDER'S NOTE ────────────────────────────────── */}
        <div className="bg-white py-20 lg:py-28">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-6">
              Founder&apos;s Note
            </p>
            <blockquote className="border-l-2 border-neutral-200 pl-8 space-y-5 text-neutral-700 leading-relaxed text-base lg:text-lg">
              <p>
                RiseTech was not built from a single idea. It was built from
                years of experience, countless projects, and a belief that the
                right strategy can transform how companies grow.
              </p>
              <p>
                The moment on that highway simply gave the philosophy a name.
              </p>
              <p>
                And from that moment forward, the direction was clear.
              </p>
              <p className="text-2xl font-light text-neutral-900 pt-2">
                Rise.
              </p>
            </blockquote>
          </div>
        </div>

        {/* ── 5. MANIFESTO ─────────────────────────────────────── */}
        <div className="bg-neutral-950 text-white py-24 lg:py-36">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-500 mb-8">
              We Always Rise
            </p>
            <h2 className="text-4xl lg:text-6xl font-light leading-tight mb-10">
              No matter the industry.<br />
              No matter the geography.<br />
              No matter the challenge.
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed max-w-xl mx-auto mb-12">
              The mission is always the same. The direction is always the same.
            </p>
            <p className="text-3xl lg:text-5xl font-light text-white tracking-wide">
              We Always Rise.
            </p>
            <div className="mt-16">
              <Link
                href="/#contact"
                className="inline-flex items-center px-8 py-4 bg-white text-neutral-900 text-xs font-semibold tracking-widest uppercase hover:bg-neutral-100 transition-colors duration-200"
              >
                Work With Us
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
