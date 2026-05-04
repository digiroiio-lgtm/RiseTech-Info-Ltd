import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { insights, InsightCategory } from "@/lib/insights";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return insights.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = insights.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} — RiseTech Insights`,
    description: post.excerpt,
  };
}

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

export default async function InsightPostPage({ params }: Props) {
  const { slug } = await params;
  const post = insights.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = insights
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);

  const paragraphs = post.body.split("\n\n").filter(Boolean);

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Hero */}
        <div className="bg-neutral-950 text-white py-24 lg:py-28">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <Link
                href="/insights"
                className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors duration-200"
              >
                ← Insights
              </Link>
              <span className="text-neutral-700">/</span>
              <span
                className={`text-xs font-medium px-3 py-1 border ${categoryColors[post.category]}`}
              >
                {post.category}
              </span>
            </div>
            <h1 className="text-3xl lg:text-5xl font-light leading-tight text-white mb-6">
              {post.title}
            </h1>
            <p className="text-base text-neutral-400 leading-relaxed mb-8 max-w-2xl">
              {post.excerpt}
            </p>
            <div className="flex items-center gap-6 text-xs text-neutral-600">
              <span>{formatDate(post.date)}</span>
              <span>{post.readTime} min read</span>
              <span className="hidden sm:inline">RiseTech Advisory</span>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <div className="prose prose-neutral max-w-none">
            {paragraphs.map((para, i) => (
              <p
                key={i}
                className="text-base lg:text-lg text-neutral-700 leading-relaxed mb-6"
              >
                {para}
              </p>
            ))}
          </div>

          {/* CTA block */}
          <div className="mt-16 border-t border-neutral-100 pt-16">
            <div className="bg-neutral-950 p-8 lg:p-12">
              <p className="text-xs font-normal tracking-[0.2em] uppercase text-neutral-500 mb-4">
                Go Deeper
              </p>
              <h2 className="text-2xl font-light text-white mb-3">
                Want the full intelligence report?
              </h2>
              <p className="text-sm text-neutral-400 leading-relaxed mb-8 max-w-lg">
                Our premium reports go 40–55 pages deep — investment-grade
                analysis with proprietary data, frameworks, and strategic
                recommendations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/reports"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-neutral-900 text-xs font-semibold tracking-wide hover:bg-neutral-200 transition-colors duration-200"
                >
                  Browse Premium Reports
                </Link>
                <a
                  href="mailto:support@wealwaysrise.com"
                  className="inline-flex items-center justify-center px-8 py-4 border border-neutral-700 text-white text-xs font-semibold tracking-wide hover:border-white transition-colors duration-200"
                >
                  Request Advisory Call
                </a>
              </div>
            </div>
          </div>

          {/* Related posts */}
          {related.length > 0 && (
            <div className="mt-20">
              <p className="text-xs font-normal tracking-[0.2em] uppercase text-neutral-400 mb-8">
                Related Insights
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/insights/${r.slug}`}
                    className="group flex flex-col border border-neutral-200 p-6 hover:border-neutral-900 hover:shadow-sm transition-all duration-300"
                  >
                    <span
                      className={`text-xs font-medium mb-4 self-start px-2 py-0.5 border ${categoryColors[r.category]}`}
                    >
                      {r.category}
                    </span>
                    <h3 className="text-sm font-semibold text-neutral-900 leading-snug mb-3 group-hover:text-neutral-700 transition-colors duration-200">
                      {r.title}
                    </h3>
                    <span className="text-xs text-neutral-400 mt-auto">
                      {r.readTime} min read →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
