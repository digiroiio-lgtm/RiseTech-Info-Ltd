import Link from "next/link";
import { reports } from "@/lib/reports";

export default function ReportsPreviewSection() {
  return (
    <section className="bg-neutral-950 py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16 lg:mb-20">
          <div>
            <p className="text-xs font-normal tracking-[0.2em] uppercase text-neutral-500 mb-4">
              Premium Intelligence
            </p>
            <h2 className="text-3xl lg:text-4xl font-light text-white">
              Market intelligence reports.
            </h2>
            <p className="text-sm text-neutral-400 leading-relaxed mt-4 max-w-md">
              Investment-grade analysis — 40–55 pages of proprietary research,
              competitive mapping, and strategic recommendations.
            </p>
          </div>
          <Link
            href="/reports"
            className="text-xs font-semibold tracking-widest uppercase text-neutral-500 hover:text-white transition-colors duration-200 whitespace-nowrap"
          >
            All Reports →
          </Link>
        </div>

        {/* Report cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-800">
          {reports.map((report, i) => (
            <div
              key={report.slug}
              className="bg-neutral-950 p-8 flex flex-col gap-6 group hover:bg-neutral-900 transition-colors duration-300"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-xs text-neutral-600 border border-neutral-800 px-2 py-0.5">
                  {report.pages} pages
                </span>
              </div>

              <div className="flex-1">
                <p className="text-xs font-medium text-neutral-500 mb-3">
                  {report.category}
                </p>
                <h3 className="text-base font-semibold text-white leading-snug mb-3">
                  {report.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed line-clamp-3">
                  {report.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-neutral-800">
                <span className="text-xl font-light text-white">
                  £{report.priceGBP.toLocaleString()}
                </span>
                <Link
                  href="/reports"
                  className="text-xs font-semibold tracking-wide text-neutral-400 hover:text-white transition-colors duration-200"
                >
                  Preview →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 pt-12 border-t border-neutral-800">
          <Link
            href="/reports"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-neutral-900 text-xs font-semibold tracking-wide hover:bg-neutral-200 transition-colors duration-200"
          >
            View All Reports
          </Link>
          <a
            href="mailto:support@wealwaysrise.com?subject=Custom Intelligence Report Enquiry"
            className="inline-flex items-center justify-center px-8 py-4 border border-neutral-700 text-white text-xs font-semibold tracking-wide hover:border-white transition-colors duration-200"
          >
            Request Custom Report
          </a>
        </div>
      </div>
    </section>
  );
}
