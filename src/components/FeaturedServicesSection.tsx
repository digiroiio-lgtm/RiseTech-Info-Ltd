import Link from "next/link";

const featured = [
  {
    index: "01",
    title: "Programmatic SEO Plan",
    promise: "Build scalable search traffic using automated SEO architecture.",
    bullets: [
      "Keyword universe mapping",
      "Page generation system",
      "Content automation plan",
    ],
    price: "£1,000",
    category: "Technology",
  },
  {
    index: "02",
    title: "Export Market Entry",
    promise: "Enter new international markets with a data-backed strategy.",
    bullets: [
      "Target market validation",
      "Regulatory & logistics mapping",
      "Entry roadmap with milestones",
    ],
    price: "£2,500",
    category: "Export",
  },
  {
    index: "03",
    title: "Business Intelligence Report",
    promise: "Comprehensive market analysis to support strategic decisions.",
    bullets: [
      "Market sizing & segmentation",
      "Competitive landscape deep-dive",
      "Investment-grade executive summary",
    ],
    price: "£3,000",
    category: "Intelligence",
  },
  {
    index: "04",
    title: "Dashboard System Setup",
    promise: "Turn raw business data into real-time executive visibility.",
    bullets: [
      "KPI architecture & data model",
      "Dashboard design & build",
      "Team onboarding & documentation",
    ],
    price: "£1,800",
    category: "Technology",
  },
  {
    index: "05",
    title: "Distributor Finder",
    promise: "Identify and qualify distribution partners in your target market.",
    bullets: [
      "Distributor landscape mapping",
      "Qualification & shortlisting",
      "Outreach templates & intro support",
    ],
    price: "£1,500",
    category: "Export",
  },
  {
    index: "06",
    title: "Startup Diagnostic",
    promise: "A structured audit of your strategy, model, and growth levers.",
    bullets: [
      "Business model stress-test",
      "Market fit & positioning review",
      "Priority action plan",
    ],
    price: "£950",
    category: "Strategy",
  },
];

export default function FeaturedServicesSection() {
  return (
    <section className="bg-white py-24 lg:py-32 border-t border-neutral-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16 lg:mb-20">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4">
              Featured Services
            </p>
            <h2 className="text-3xl lg:text-4xl font-light text-neutral-900">
              Our most-requested engagements.
            </h2>
          </div>
          <a
            href="#services"
            className="text-xs font-semibold tracking-widest uppercase text-neutral-500 hover:text-neutral-900 transition-colors duration-200 whitespace-nowrap"
          >
            View All Services →
          </a>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map((svc) => (
            <div
              key={svc.title}
              className="group border border-neutral-200 bg-white p-8 flex flex-col justify-between hover:border-neutral-900 hover:shadow-sm transition-all duration-300"
            >
              {/* Top */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono text-neutral-300">
                    {svc.index}
                  </span>
                  <span className="text-xs font-medium text-neutral-400 border border-neutral-200 px-2 py-0.5">
                    {svc.category}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-neutral-900 mb-3 leading-snug">
                  {svc.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed mb-5">
                  {svc.promise}
                </p>
                <ul className="space-y-2 mb-6">
                  {svc.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-xs text-neutral-400">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-neutral-300 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom */}
              <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                <span className="text-xl font-light text-neutral-900">
                  {svc.price}
                </span>
                <a
                  href="#contact"
                  className="inline-flex items-center px-4 py-2 bg-neutral-900 text-white text-xs font-medium tracking-wide hover:bg-neutral-700 transition-colors duration-200"
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
