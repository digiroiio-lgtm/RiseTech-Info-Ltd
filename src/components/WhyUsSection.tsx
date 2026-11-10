const values = [
  {
    title: "Strategic Thinking",
    description:
      "We approach every engagement with structured, first-principles analysis. Our frameworks are borrowed from top-tier consulting and adapted for the speed of digital business.",
  },
  {
    title: "Founder Perspective",
    description:
      "We understand the pressure of building. Our advisory is grounded in real operational experience—not theory—giving founders practical clarity when it matters most.",
  },
  {
    title: "Data-Driven Intelligence",
    description:
      "Every recommendation is backed by market data, competitive analysis, and quantitative insight. We replace assumption with evidence.",
  },
  {
    title: "Execution Clarity",
    description:
      "Strategy without execution is noise. We deliver actionable roadmaps, prioritized by impact, that translate insight into measurable outcomes.",
  },
];

export default function WhyUsSection() {
  return (
    <section className="bg-white py-14 md:py-20 lg:py-32 border-t border-neutral-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 md:mb-14 lg:mb-20">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4">
            Why Clients Work With Us
          </p>
          <h2 className="text-3xl lg:text-4xl font-light text-neutral-900 max-w-xl">
            Built for leaders who need more than advice.
          </h2>
          <p className="text-base text-neutral-600 leading-relaxed mt-6 max-w-2xl">
            Werrise Digital&apos;s approach rests on four principles: structured strategic thinking, a founder&apos;s practical perspective, evidence from market data and competitive analysis, and clear execution roadmaps. The aim is to turn analysis into prioritised actions that a business can act on.
          </p>
        </div>

        {/* Value blocks */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {values.map((v, i) => (
            <div key={v.title} className="group">
              <span className="text-xs font-mono text-neutral-300 mb-4 block">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="w-8 h-px bg-neutral-200 mb-5 group-hover:w-12 group-hover:bg-neutral-900 transition-all duration-300" />
              <p className="text-base font-semibold text-neutral-900 mb-3">
                {v.title}
              </p>
              <p className="text-sm text-neutral-500 leading-relaxed">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
