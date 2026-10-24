import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { reports } from "@/lib/reports";

export const metadata: Metadata = {
  title: "Intelligence Reports — RiseTech Advisory",
  description:
    "Investment-grade market intelligence reports for founders, operators, and investors. Deep-dive analysis, proprietary data, and strategic recommendations.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    month: "long",
    year: "numeric",
  });
}

export default function ReportsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Hero */}
        <div className="bg-neutral-950 text-white py-24 lg:py-32">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <p className="text-xs font-normal tracking-[0.2em] uppercase text-neutral-500 mb-6">
              Premium Intelligence
            </p>
            <h1 className="text-4xl lg:text-6xl font-light leading-tight text-white max-w-3xl mb-8">
              Investment-grade reports. Real data. Actionable outcomes.
            </h1>
            <p className="text-base text-neutral-400 leading-relaxed max-w-xl">
              Each report is 40–55 pages of proprietary analysis — market
              sizing, competitive landscape, investment signals, and strategic
              recommendations built for decision-makers.
            </p>
          </div>
        </div>

        {/* What you get */}
        <div className="border-b border-neutral-100 bg-white py-10">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="grid sm:grid-cols-3 gap-8">
              {[
                {
                  label: "Proprietary Data",
                  desc: "Original research, interviews, and sourced datasets — not aggregated third-party stats.",
                },
                {
                  label: "Decision-Ready Format",
                  desc: "Executive summary, key findings, and full analysis. Structured for board packs and investor decks.",
                },
                {
                  label: "Instant PDF Delivery",
                  desc: "Delivered as a high-resolution PDF within minutes of purchase confirmation.",
                },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <span className="w-1 flex-shrink-0 bg-neutral-900 self-stretch" />
                  <div>
                    <p className="text-sm font-semibold text-neutral-900 mb-1">
                      {item.label}
                    </p>
                    <p className="text-sm text-neutral-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reports list */}
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <div className="space-y-8">
            {reports.map((report, i) => (
              <article
                key={report.slug}
                className="border border-neutral-200 bg-white hover:border-neutral-900 hover:shadow-sm transition-all duration-300"
              >
                {/* Header */}
                <div className="p-8 lg:p-10 border-b border-neutral-100">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-mono text-neutral-300">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-xs font-medium text-neutral-500 border border-neutral-200 px-2 py-0.5">
                        {report.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-neutral-400">
                        {report.pages} pages · {formatDate(report.publishedDate)}
                      </span>
                      <span className="text-lg font-light text-neutral-900">
                        £{report.priceGBP.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <h2 className="text-xl lg:text-2xl font-light text-neutral-900 mb-3">
                    {report.title}
                  </h2>
                  <p className="text-sm text-neutral-500 leading-relaxed max-w-3xl">
                    {report.description}
                  </p>
                </div>

                {/* Preview & CTA */}
                <div className="p-8 lg:p-10 grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <p className="text-xs font-semibold tracking-[0.15em] uppercase text-neutral-400 mb-4">
                      Free Preview — What&apos;s Inside
                    </p>
                    <ul className="space-y-2">
                      {report.previewPoints.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2.5 text-sm text-neutral-600"
                        >
                          <span className="w-1 h-1 rounded-full bg-neutral-400 flex-shrink-0 mt-2" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col gap-4">
                    <p className="text-xs font-semibold tracking-[0.15em] uppercase text-neutral-400 mb-2">
                      Topics Covered
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {report.coverTopics.map((topic) => (
                        <span
                          key={topic}
                          className="text-xs text-neutral-500 border border-neutral-200 px-2 py-0.5"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                    <a
                      href={`mailto:support@wealwaysrise.com?subject=Report Purchase: ${report.title}&body=Hi, I would like to purchase the ${report.title} (£${report.priceGBP}). Please send payment instructions.`}
                      className="inline-flex items-center justify-center px-6 py-3 bg-neutral-900 text-white text-xs font-semibold tracking-wide hover:bg-neutral-700 transition-colors duration-200"
                    >
                      Purchase — £{report.priceGBP.toLocaleString()}
                    </a>
                    <a
                      href="mailto:support@wealwaysrise.com"
                      className="inline-flex items-center justify-center px-6 py-3 border border-neutral-200 text-neutral-700 text-xs font-semibold tracking-wide hover:border-neutral-900 transition-colors duration-200"
                    >
                      Request Custom Report
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Enterprise CTA */}
          <div className="mt-20 pt-16 border-t border-neutral-100">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xs font-normal tracking-[0.2em] uppercase text-neutral-400 mb-4">
                  Enterprise Intelligence
                </p>
                <h2 className="text-3xl font-light text-neutral-900 mb-4">
                  Need a custom intelligence brief?
                </h2>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  We produce bespoke market intelligence reports for investors,
                  PE firms, and enterprise leadership teams. Typical turnaround
                  is two to three weeks. Starting from £3,000.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
                <a
                  href="mailto:support@wealwaysrise.com?subject=Custom Intelligence Report Enquiry"
                  className="inline-flex items-center justify-center px-8 py-4 bg-neutral-900 text-white text-xs font-semibold tracking-wide hover:bg-neutral-700 transition-colors duration-200"
                >
                  Discuss Your Brief
                </a>
                <Link
                  href="/insights"
                  className="inline-flex items-center justify-center px-8 py-4 border border-neutral-300 text-neutral-900 text-xs font-semibold tracking-wide hover:border-neutral-900 transition-colors duration-200"
                >
                  Browse Free Insights
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
