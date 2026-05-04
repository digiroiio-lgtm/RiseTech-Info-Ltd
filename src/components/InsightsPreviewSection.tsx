import Link from "next/link";
import { insights, InsightCategory } from "@/lib/insights";

const categoryColors: Record<InsightCategory, string> = {
  "Market Intelligence": "text-blue-600 bg-blue-50 border-blue-100",
  "Startup Strategy": "text-violet-600 bg-violet-50 border-violet-100",
  "Growth & SEO": "text-emerald-600 bg-emerald-50 border-emerald-100",
  "Investor Intelligence": "text-amber-600 bg-amber-50 border-amber-100",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

const featured = [...insights]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 3);

export default function InsightsPreviewSection() {
  return (
    <section className="bg-white py-24 lg:py-32 border-t border-neutral-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16 lg:mb-20">
          <div>
            <p className="text-xs font-normal tracking-[0.2em] uppercase text-neutral-400 mb-4">
              Intelligence Hub
            </p>
            <h2 className="text-3xl lg:text-4xl font-light text-neutral-900">
              Latest insights from RiseTech.
            </h2>
          </div>
          <Link
            href="/insights"
            className="text-xs font-semibold tracking-widest uppercase text-neutral-500 hover:text-neutral-900 transition-colors duration-200 whitespace-nowrap"
          >
            All Insights →
          </Link>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map((post) => (
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
                <h3 className="text-base font-semibold text-neutral-900 leading-snug mb-3 group-hover:text-neutral-700 transition-colors duration-200 flex-1">
                  {post.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed line-clamp-3 mb-6">
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
      </div>
    </section>
  );
}
