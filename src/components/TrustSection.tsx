const metrics = [
  { value: "50+", label: "Strategy reports delivered" },
  { value: "$120M+", label: "Revenue influenced" },
  { value: "20+", label: "International expansion projects" },
];

const clientCategories = ["Startups", "Export companies", "Retail brands", "SaaS founders", "CFO teams"];

const logos = [
  "NordExport",
  "AlphaVentures",
  "PrimeBrands",
  "CrestCapital",
  "VistaTrade",
  "ScaleOps",
  "OrbitRetail",
  "MeridianGroup",
];

export default function TrustSection() {
  return (
    <section className="bg-neutral-950 text-white py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left: credibility message */}
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-500 mb-6">
              Trusted by Founders &amp; Operators
            </p>
            <p className="text-2xl lg:text-3xl font-light leading-relaxed text-neutral-100 mb-10">
              Used by founders, operators, and investors to validate strategy,
              understand markets, and prepare for growth.
            </p>
            <div className="flex flex-wrap gap-2">
              {clientCategories.map((cat) => (
                <span
                  key={cat}
                  className="text-xs font-medium text-neutral-500 border border-neutral-800 px-3 py-1.5"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>

          {/* Right: hard metrics */}
          <div className="grid grid-cols-1 gap-6">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="border border-neutral-800 p-6 flex items-center gap-6 group hover:border-neutral-600 transition-colors duration-200"
              >
                <span className="text-3xl lg:text-4xl font-light text-white whitespace-nowrap">
                  {m.value}
                </span>
                <div className="w-px h-8 bg-neutral-800 group-hover:bg-neutral-600 transition-colors duration-200 flex-shrink-0" />
                <p className="text-sm text-neutral-400">{m.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Client logos */}
        <div className="border-t border-neutral-800 pt-14">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-600 mb-10 text-center">
            Companies We&apos;ve Worked With
          </p>
          <div className="grid grid-cols-4 lg:grid-cols-8 gap-4">
            {logos.map((name) => (
              <div
                key={name}
                className="border border-neutral-800 px-3 py-4 flex items-center justify-center hover:border-neutral-600 transition-colors duration-200"
              >
                <span className="text-xs font-semibold tracking-wide text-neutral-500 text-center leading-tight">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
