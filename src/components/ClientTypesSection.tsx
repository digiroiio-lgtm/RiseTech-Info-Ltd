const clientTypes = [
  {
    icon: "◆",
    label: "Startups",
    description: "Early-stage and growth-stage companies building for scale.",
  },
  {
    icon: "◈",
    label: "SaaS Companies",
    description: "Product-led businesses optimizing for ARR and retention.",
  },
  {
    icon: "◇",
    label: "Investors",
    description: "VCs and angels conducting market due diligence.",
  },
  {
    icon: "○",
    label: "Digital Platforms",
    description: "Online marketplaces and platforms entering new verticals.",
  },
  {
    icon: "◻",
    label: "Market Expansion Teams",
    description: "Operators entering new geographies and industries.",
  },
];

export default function ClientTypesSection() {
  return (
    <section className="bg-neutral-50 py-24 lg:py-32 border-t border-neutral-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4">
            Who We Work With
          </p>
          <h2 className="text-3xl lg:text-4xl font-light text-neutral-900">
            The right partner for ambitious teams.
          </h2>
        </div>

        {/* Client type blocks */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {clientTypes.map((ct) => (
            <div
              key={ct.label}
              className="bg-white border border-neutral-200 p-6 hover:border-neutral-900 hover:shadow-sm transition-all duration-300 group"
            >
              <span className="text-2xl text-neutral-300 group-hover:text-neutral-900 transition-colors duration-300 block mb-4">
                {ct.icon}
              </span>
              <h3 className="text-sm font-semibold text-neutral-900 mb-2">
                {ct.label}
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {ct.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
