import Link from "next/link";
import { caseStudies } from "@/lib/caseStudies";

const preview = caseStudies.slice(0, 3);

export default function CaseStudiesPreviewSection() {
  return (
    <section className="bg-neutral-50 py-24 lg:py-32 border-t border-neutral-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16 lg:mb-20">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4">
              Case Studies
            </p>
            <h2 className="text-3xl lg:text-4xl font-light text-neutral-900">
              Work that speaks for itself.
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="text-xs font-semibold tracking-widest uppercase text-neutral-500 hover:text-neutral-900 transition-colors duration-200 whitespace-nowrap"
          >
            View All 10 Cases →
          </Link>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {preview.map((cs, i) => (
            <Link
              key={cs.slug}
              href={`/case-studies#${cs.slug}`}
              className="group bg-white border border-neutral-200 p-8 flex flex-col hover:border-neutral-900 hover:shadow-sm transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono text-neutral-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-xs font-medium text-neutral-400 border border-neutral-200 px-2 py-0.5 group-hover:border-neutral-400 transition-colors duration-200">
                  {cs.tag}
                </span>
              </div>
              <p className="text-xs font-semibold tracking-wide uppercase text-neutral-400 mb-3">
                {cs.client}
              </p>
              <h3 className="text-base font-semibold text-neutral-900 leading-snug mb-4 flex-1">
                {cs.headline}
              </h3>
              {/* Key metric */}
              <div className="pt-4 border-t border-neutral-100 flex items-center gap-4">
                <span className="text-2xl font-light text-neutral-900">
                  {cs.metrics[0].value}
                </span>
                <span className="text-xs text-neutral-400">
                  {cs.metrics[0].label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
