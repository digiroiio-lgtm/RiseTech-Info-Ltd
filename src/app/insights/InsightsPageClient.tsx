"use client";

import { useEffect } from "react";
import Link from "next/link";
import { insights, InsightCategory } from "@/lib/insights";

const categories: InsightCategory[] = [
  "Market Intelligence",
  "Startup Strategy",
  "Growth & SEO",
  "Investor Intelligence",
];

const categoryColors: Record<InsightCategory, string> = {
  "Market Intelligence": "text-blue-400 bg-blue-950/40 border-blue-800/50",
  "Startup Strategy": "text-violet-400 bg-violet-950/40 border-violet-800/50",
  "Growth & SEO": "text-emerald-400 bg-emerald-950/40 border-emerald-800/50",
  "Investor Intelligence": "text-amber-400 bg-amber-950/40 border-amber-800/50",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function InsightsPageClient() {
  const sorted = [...insights].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Intersection Observer — adds .active to every .fade-up element on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── Hero ── glass panel over dark bg */}
      <div className="bg-neutral-950 text-white py-24 lg:py-32 relative overflow-hidden">
        {/* Subtle radial glow behind the glass panel */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Glass content panel */}
          <div className="glass border border-white/10 rounded-sm px-10 py-10 lg:px-14 lg:py-12 inline-block max-w-3xl">
            <p className="text-xs font-normal tracking-[0.2em] uppercase text-neutral-400 mb-6">
              Intelligence Hub
            </p>
            <h1 className="text-4xl lg:text-6xl font-light leading-tight text-white mb-8">
              Strategic intelligence for builders and investors.
            </h1>
            <p className="text-base text-neutral-400 leading-relaxed">
              Market analysis, startup frameworks, growth playbooks, and investor
              intelligence — published by the RiseTech Advisory team.
            </p>
          </div>
        </div>
      </div>

      {/* ── Category pills ── */}
      <div className="border-b border-neutral-100 bg-white sticky top-16 z-40">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 h-14 flex items-center gap-3 overflow-x-auto">
          {categories.map((cat) => (
            <span
              key={cat}
              className="flex-shrink-0 text-xs font-medium px-3 py-1 border border-neutral-200 text-neutral-500 bg-white"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>

      {/* ── Articles grid ── glow-border + fade-up per card */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sorted.map((post, i) => (
            <Link
              key={post.slug}
              href={`/insights/${post.slug}`}
              // glow-border provides the gradient border; fade-up is activated by the observer
              className="fade-up glow-border group flex flex-col"
              style={{ transitionDelay: `${(i % 3) * 90}ms` }}
            >
              {/* Category bar — dark band matching card design */}
              <div
                className={`px-6 py-2 border-b border-inherit ${categoryColors[post.category]} text-xs font-medium`}
              >
                {post.category}
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-base font-semibold text-neutral-900 leading-snug mb-3 group-hover:text-indigo-700 transition-colors duration-200">
                  {post.title}
                </h2>
                <p className="text-sm text-neutral-500 leading-relaxed flex-1 mb-6">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-neutral-400 pt-4 border-t border-neutral-100">
                  <span>{formatDate(post.date)}</span>
                  <span>{post.readTime} min read</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* ── Reports CTA ── fade-up on the block */}
        <div className="fade-up mt-20 pt-16 border-t border-neutral-100">
          <div className="bg-neutral-950 p-10 lg:p-14 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <p className="text-xs font-normal tracking-[0.2em] uppercase text-neutral-500 mb-4">
                Premium Intelligence
              </p>
              <h2 className="text-2xl lg:text-3xl font-light text-white mb-3">
                Need the full report?
              </h2>
              <p className="text-sm text-neutral-400 leading-relaxed max-w-md">
                Our premium reports go deeper — 40–55 pages of investment-grade
                analysis with data, frameworks, and actionable recommendations.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <Link
                href="/reports"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-neutral-900 text-xs font-semibold tracking-wide hover:bg-neutral-200 transition-colors duration-200"
              >
                Browse Reports
              </Link>
              <a
                href="mailto:support@wealwaysrise.com"
                className="inline-flex items-center justify-center px-8 py-4 border border-neutral-700 text-white text-xs font-semibold tracking-wide hover:border-white transition-colors duration-200"
              >
                Request Custom Report
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
