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
    label: "Business Teams",
    description: "Teams conducting market due diligence.",
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
    <section className="bg-neutral-50 py-14 md:py-20 lg:py-32 border-t border-neutral-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 md:mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4">
            Who We Work With
          </p>
          <h2 className="text-3xl lg:text-4xl font-light text-neutral-900">
            The right partner for ambitious teams.
          </h2>
          <p className="text-base text-neutral-600 leading-relaxed mt-6 max-w-2xl">
            Werrise Digital works with startups, export companies, retail brands, SaaS founders and finance teams. Each group has different needs, from validating a market to planning export growth or building a growth channel, so the starting point and the services chosen vary by client.
          </p>
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
              <p className="text-sm font-semibold text-neutral-900 mb-2">
                {ct.label}
              </p>
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
