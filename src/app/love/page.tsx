import type { Metadata } from "next";
import Link from "next/link";
import { LEGAL_LINKS } from "@/lib/legalLinks";
import { testimonials } from "@/lib/testimonials";

export const metadata: Metadata = {
  title: "Wall of Love — RiseTech Advisory",
  description:
    "Hear from the founders, operators, and investors who have worked with RiseTech Advisory.",
};

// All 12 testimonials for the animated wall — 6 per column so the
// duplicate copies used for seamless looping never fit in the viewport
// at the same time, eliminating visible repetition.
const col1 = testimonials.slice(0, 6);
const col2 = testimonials.slice(6, 12);

// Sector colour map
const sectorColour: Record<string, string> = {
  Export: "text-emerald-400 border-emerald-800/60 bg-emerald-950/40",
  Retail: "text-blue-400 border-blue-800/60 bg-blue-950/40",
  SaaS: "text-violet-400 border-violet-800/60 bg-violet-950/40",
  VC: "text-amber-400 border-amber-800/60 bg-amber-950/40",
  "Real Estate": "text-rose-400 border-rose-800/60 bg-rose-950/40",
  FinTech: "text-cyan-400 border-cyan-800/60 bg-cyan-950/40",
  EdTech: "text-orange-400 border-orange-800/60 bg-orange-950/40",
};

function StarRow() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="w-3.5 h-3.5 fill-neutral-400"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

interface WallCardProps {
  t: (typeof col1)[number];
}

function WallCard({ t }: WallCardProps) {
  const sectorCls =
    sectorColour[t.sector] ??
    "text-neutral-400 border-neutral-700 bg-neutral-900/40";
  return (
    <div className="testi-card relative mb-4 rounded-[20px] cursor-default">
      {/* Glow layer */}
      <div
        className="absolute -inset-[2px] rounded-[22px] opacity-40"
        style={{
          background:
            "linear-gradient(120deg, #a855f7, #ec4899, #3b82f6, #06b6d4)",
          filter: "blur(18px)",
        }}
      />
      {/* Card body */}
      <div
        className="relative rounded-[20px] p-5 flex flex-col gap-3"
        style={{
          background: "rgba(255,255,255,0.04)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow:
            "0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
      >
        {/* Logo badge + name */}
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(168,85,247,0.3), rgba(6,182,212,0.2))",
              border: "1px solid rgba(168,85,247,0.3)",
            }}
          >
            <span className="text-[9px] font-bold text-purple-300 tracking-wide">
              {t.initials}
            </span>
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold text-white truncate">{t.name}</p>
            <p className="text-[10px] text-neutral-500 truncate">
              {t.title}, {t.company}
            </p>
          </div>
          {/* Sector tag */}
          <span
            className={`ml-auto flex-shrink-0 text-[9px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-full border ${sectorCls}`}
          >
            {t.sector}
          </span>
        </div>

        <StarRow />

        <blockquote className="text-xs text-neutral-300 leading-relaxed">
          &ldquo;{t.quote}&rdquo;
        </blockquote>

        <div className="pt-1 border-t border-white/[0.06]">
          <span className="text-[10px] text-neutral-600">{t.service}</span>
        </div>
      </div>
    </div>
  );
}

function ScrollColumn({
  cards,
  direction,
}: {
  cards: typeof col1;
  direction: "up" | "down";
}) {
  const doubled = [...cards, ...cards];
  const trackClass =
    direction === "up" ? "proof-track-up" : "proof-track-down";

  return (
    <div className="proof-col relative overflow-hidden" style={{ height: 560 }}>
      <div
        className="absolute top-0 left-0 right-0 z-10 pointer-events-none"
        style={{
          height: 80,
          background:
            "linear-gradient(to bottom, rgb(3,7,18) 0%, transparent 100%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none"
        style={{
          height: 80,
          background:
            "linear-gradient(to top, rgb(3,7,18) 0%, transparent 100%)",
        }}
      />
      <div className={trackClass}>
        {doubled.map((t, i) => (
          <WallCard key={`${t.id}-${i}`} t={t} />
        ))}
      </div>
    </div>
  );
}

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
        {/* ── Hero ──────────────────────────────────────── */}
        <div className="bg-neutral-950 text-white py-20 lg:py-28">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-500 mb-6">
              Wall of Love
            </p>
            <h1 className="text-4xl lg:text-6xl font-light leading-tight text-white max-w-3xl mb-6">
              What our clients say about working with us.
            </h1>
            <p className="text-lg text-neutral-400 max-w-xl leading-relaxed mb-14">
              Real feedback from founders, operators, and investors across every
              practice area.
            </p>

            {/* Impact metrics bar */}
            <div className="grid grid-cols-3 gap-px rounded-2xl overflow-hidden border border-neutral-800">
              {[
                { value: "£120M+", label: "Revenue influenced" },
                { value: "50+", label: "Engagements delivered" },
                { value: "20+", label: "Markets entered" },
              ].map((m) => (
                <div
                  key={m.label}
                  className="bg-neutral-900/60 px-6 py-6 text-center"
                >
                  <p className="text-2xl lg:text-3xl font-light text-white mb-1">
                    {m.value}
                  </p>
                  <p className="text-xs text-neutral-500 uppercase tracking-widest">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Top 3 Highlights ─────────────────────────── */}
        <div className="bg-neutral-950 border-t border-neutral-900 pb-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-600 pt-14 mb-8">
              Headline results
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  stat: "6 months",
                  context: "UK brand entered three EU markets",
                  sector: "Export",
                  icon: "🌍",
                },
                {
                  stat: "22%",
                  context: "Overstocking waste cut in one quarter",
                  sector: "Retail",
                  icon: "📊",
                },
                {
                  stat: "3×",
                  context: "Organic traffic growth in 90 days",
                  sector: "SaaS",
                  icon: "🚀",
                },
              ].map((h) => (
                <div
                  key={h.stat}
                  className="testi-card relative rounded-[20px] p-6"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div
                    className="absolute -inset-[1px] rounded-[21px] opacity-30 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(120deg,#a855f7,#ec4899,#3b82f6,#06b6d4)",
                      filter: "blur(12px)",
                    }}
                  />
                  <div className="relative">
                    <span className="text-2xl mb-3 block">{h.icon}</span>
                    <p
                      className="text-4xl font-light mb-2"
                      style={{
                        background: "linear-gradient(90deg,#c084fc,#67e8f9)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {h.stat}
                    </p>
                    <p className="text-sm text-neutral-400 leading-snug">
                      {h.context}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Featured Case Study ───────────────────────── */}
        <div className="bg-neutral-950 border-t border-neutral-900 pb-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-600 pt-14 mb-8">
              Featured engagement
            </p>
            <div
              className="testi-card relative rounded-[20px] overflow-hidden"
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div
                className="absolute -inset-[2px] rounded-[22px] opacity-25 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(120deg,#a855f7,#ec4899,#3b82f6,#06b6d4)",
                  filter: "blur(20px)",
                }}
              />
              <div
                className="relative grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.06]"
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                <div className="p-8">
                  <p className="text-[10px] font-bold tracking-widest uppercase text-neutral-600 mb-3">
                    Challenge
                  </p>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    A Turkish textile manufacturer had a single EU buyer
                    representing 90% of their export revenue. They needed
                    structured market development across Germany, France, and
                    Poland — with no existing buyer network.
                  </p>
                </div>
                <div className="p-8">
                  <p className="text-[10px] font-bold tracking-widest uppercase text-neutral-600 mb-3">
                    Solution
                  </p>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    We ran a 12-month Export Growth Program: market entry
                    sequencing, buyer intelligence across three verticals, trade
                    show preparation, and ongoing commercial strategy support.
                  </p>
                </div>
                <div className="p-8">
                  <p className="text-[10px] font-bold tracking-widest uppercase text-neutral-600 mb-3">
                    Result
                  </p>
                  <div className="space-y-3">
                    {[
                      { v: "€3.1M", l: "EU export revenue" },
                      { v: "7", l: "New EU buyers" },
                      { v: "90%→28%", l: "Concentration risk" },
                    ].map((r) => (
                      <div key={r.l}>
                        <p
                          className="text-2xl font-light"
                          style={{
                            background:
                              "linear-gradient(90deg,#c084fc,#67e8f9)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                          }}
                        >
                          {r.v}
                        </p>
                        <p className="text-xs text-neutral-500">{r.l}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 text-right">
              <Link
                href="/case-studies"
                className="text-xs font-semibold tracking-widest uppercase text-neutral-600 hover:text-white transition-colors duration-200"
              >
                View All 10 Case Studies →
              </Link>
            </div>
          </div>
        </div>

        {/* ── Video Testimonials ────────────────────────── */}
        <div className="bg-neutral-950 border-t border-neutral-900 pb-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-600 pt-14 mb-8">
              Video testimonials
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  name: "Sara M.",
                  title: "COO, National Retail Group",
                  preview: "22% waste cut. Real-time dashboards. One quarter.",
                  initials: "SM",
                },
                {
                  name: "Ali R.",
                  title: "Founder & CEO, EdTech Startup",
                  preview: "We avoided a £400K mistake in two weeks.",
                  initials: "AR",
                },
              ].map((v) => (
                <div
                  key={v.name}
                  className="testi-card relative rounded-[20px] overflow-hidden"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div
                    className="absolute -inset-[2px] rounded-[22px] opacity-20 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(120deg,#a855f7,#ec4899,#3b82f6,#06b6d4)",
                      filter: "blur(18px)",
                    }}
                  />
                  <div className="relative">
                    {/* Thumbnail placeholder */}
                    <div
                      className="h-40 flex items-center justify-center"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(168,85,247,0.1), rgba(6,182,212,0.08))",
                        borderBottom: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-white ml-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </div>
                    </div>
                    <div className="p-5 flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{
                          background:
                            "linear-gradient(135deg,rgba(168,85,247,0.3),rgba(6,182,212,0.2))",
                          border: "1px solid rgba(168,85,247,0.3)",
                        }}
                      >
                        <span className="text-[9px] font-bold text-purple-300">
                          {v.initials}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">
                          {v.name}
                        </p>
                        <p className="text-xs text-neutral-500">{v.title}</p>
                        <p className="text-xs text-neutral-400 mt-1 italic">
                          &ldquo;{v.preview}&rdquo;
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Auto-scroll Testimonial Wall ──────────────── */}
        <div
          style={{ background: "rgb(3,7,18)" }}
          className="py-20 overflow-hidden border-t border-neutral-900"
        >
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-600 mb-8">
              12 client voices
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <ScrollColumn cards={col1} direction="up" />
              <ScrollColumn cards={col2} direction="down" />
            </div>
          </div>
        </div>

        {/* ── CTA ───────────────────────────────────────── */}
        <div className="bg-white py-20 lg:py-28 border-t border-neutral-100">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4">
              Ready to get started?
            </p>
            <h2 className="text-3xl lg:text-5xl font-light text-neutral-900 mb-4 max-w-2xl mx-auto leading-tight">
              See how we can do this for you.
            </h2>
            <p className="text-neutral-500 text-base mb-10 max-w-md mx-auto leading-relaxed">
              Every engagement is scoped to your specific challenge. No
              retainers, no fluff — just a clear deliverable and a measurable
              outcome.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:advisory@risetech.info"
                className="inline-flex items-center justify-center px-8 py-4 bg-neutral-900 text-white text-sm font-medium tracking-wide hover:bg-neutral-700 transition-colors duration-200"
              >
                Book a Strategy Call →
              </a>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center px-8 py-4 border border-neutral-300 text-neutral-900 text-sm font-medium tracking-wide hover:border-neutral-900 transition-colors duration-200"
              >
                Read the Case Studies
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

