import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { insights, InsightCategory } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Insights — RiseTech Intelligence Hub",
  description:
    "Strategic intelligence for founders, operators, and investors. Market analysis, startup strategy, growth frameworks, and investor intelligence from RiseTech Advisory.",
};

const categories: InsightCategory[] = [
  "Market Intelligence",
  "Startup Strategy",
  "Growth & SEO",
  "Investor Intelligence",
];

const categoryColors: Record<InsightCategory, string> = {
  "Market Intelligence": "text-blue-600 bg-blue-50 border-blue-100",
  "Startup Strategy": "text-violet-600 bg-violet-50 border-violet-100",
  "Growth & SEO": "text-emerald-600 bg-emerald-50 border-emerald-100",
  "Investor Intelligence": "text-amber-600 bg-amber-50 border-amber-100",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function InsightsPage() {
  const sorted = [...insights].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Hero */}
        <div className="bg-neutral-950 text-white py-24 lg:py-32">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <p className="text-xs font-normal tracking-[0.2em] uppercase text-neutral-500 mb-6">
              Intelligence Hub
            </p>
            <h1 className="text-4xl lg:text-6xl font-light leading-tight text-white max-w-3xl mb-8">
              Strategic intelligence for builders and investors.
            </h1>
            <p className="text-base text-neutral-400 leading-relaxed max-w-xl">
              Market analysis, startup frameworks, growth playbooks, and
              investor intelligence — published by the RiseTech Advisory team.
            </p>
          </div>
        </div>

        {/* Category pills */}
        <div className="border-b border-neutral-100 bg-white sticky top-16 z-40">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 h-14 flex items-center gap-3 overflow-x-auto">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`flex-shrink-0 text-xs font-medium px-3 py-1 border ${categoryColors[cat]}`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>

        {/* Articles grid */}
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sorted.map((post) => (
              <Link
                key={post.slug}
                href={`/insights/${post.slug}`}
                className="group flex flex-col border border-neutral-200 bg-white hover:border-neutral-900 hover:shadow-sm transition-all duration-300"
              >
                {/* Category bar */}
                <div
                  className={`px-6 py-2 border-b ${categoryColors[post.category]} text-xs font-medium`}
                >
                  {post.category}
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-base font-semibold text-neutral-900 leading-snug mb-3 group-hover:text-neutral-700 transition-colors duration-200">
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

          {/* Reports CTA */}
          <div className="mt-20 pt-16 border-t border-neutral-100">
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
      </main>
      <SiteFooter />
    </>
  );
}
