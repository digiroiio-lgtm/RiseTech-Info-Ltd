const serviceGroups = [
  {
    label: "Strategy & Growth",
    description:
      "Startup strategy, go-to-market planning, and business intelligence to build and scale with confidence.",
    items: ["Startup Strategy", "Go To Market", "Business Intelligence"],
  },
  {
    label: "Export & Trade",
    description:
      "End-to-end export consulting, distributor discovery, and market entry execution for cross-border growth.",
    items: ["Export Consulting", "Distributor Finder", "Export Growth Program"],
  },
  {
    label: "Market Intelligence",
    description:
      "Deep research reports covering market sizing, competitive landscape, and investment-grade analysis.",
    items: [
      "Market Reports",
      "Business Intelligence Reports",
      "Real Estate Intelligence",
    ],
  },
  {
    label: "Technology Systems",
    description:
      "Productized tech delivery — from data dashboards and loyalty platforms to programmatic SEO systems.",
    items: ["Dashboard Systems", "Loyalty Platforms", "Programmatic SEO"],
  },
];

export default function WhatWeDoSection() {
  return (
    <section className="bg-white py-24 lg:py-32 border-t border-neutral-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4">
            What We Do
          </p>
          <h2 className="text-3xl lg:text-4xl font-light text-neutral-900 max-w-xl">
            Four practice areas. One high-impact firm.
          </h2>
        </div>

        {/* Group blocks */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-100">
          {serviceGroups.map((group, i) => (
            <div
              key={group.label}
              className="bg-white p-8 flex flex-col gap-6 group hover:bg-neutral-50 transition-colors duration-300"
            >
              <span className="text-xs font-mono text-neutral-300">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-base font-semibold text-neutral-900 mb-3">
                  {group.label}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {group.description}
                </p>
              </div>
              <ul className="space-y-1.5 mt-auto">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-neutral-400">
                    <span className="w-1 h-1 rounded-full bg-neutral-300 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
