const metrics = [
  { value: "50+", label: "Strategy reports delivered" },
  { value: "$120M+", label: "Revenue influenced" },
  { value: "20+", label: "International expansion projects" },
];

const clientCategories = ["Startups", "Export companies", "Retail brands", "SaaS founders", "CFO teams"];

// Monogram accent colour per badge
const logoMeta: { name: string; accent: string }[] = [
  { name: "NordExport",    accent: "#1e3a5f" },
  { name: "AlphaVentures", accent: "#1a4731" },
  { name: "PrimeBrands",   accent: "#6b1f2a" },
  { name: "CrestCapital",  accent: "#1f3464" },
  { name: "VistaTrade",    accent: "#0d4f4f" },
  { name: "ScaleOps",      accent: "#2d3748" },
  { name: "OrbitRetail",   accent: "#7c4a00" },
  { name: "MeridianGroup", accent: "#2c1f5e" },
];

export default function TrustSection() {
  return (
    <>
      {/* ── Dark credentials section ── */}
      <section className="bg-neutral-950 text-white py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
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
        </div>
      </section>

      {/* ── Light logo marquee bar ── */}
      <section
        style={{ background: "#f7f5f0" }}
        className="border-y border-neutral-200 py-10"
      >
        <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-neutral-400 text-center mb-8">
          Companies We&apos;ve Worked With
        </p>

        {/* Scrolling track */}
        <div className="logo-marquee relative overflow-hidden">
          {/* Left fade */}
          <div
            className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none w-20"
            style={{
              background: "linear-gradient(to right, #f7f5f0, transparent)",
            }}
          />
          {/* Right fade */}
          <div
            className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none w-20"
            style={{
              background: "linear-gradient(to left, #f7f5f0, transparent)",
            }}
          />

          {/* Doubled list for seamless loop */}
          <div className="logo-track flex items-center">
            {[...logoMeta, ...logoMeta].map(({ name, accent }, i) => (
              <div
                key={`${name}-${i}`}
                className="flex items-center flex-shrink-0"
              >
                {/* Badge */}
                <div className="flex items-center gap-2.5 px-8">
                  {/* Monogram */}
                  <div
                    className="w-7 h-7 rounded-[6px] flex items-center justify-center flex-shrink-0"
                    style={{ background: accent }}
                  >
                    <span className="text-[9px] font-bold text-white leading-none">
                      {name.slice(0, 2).toUpperCase()}
                    </span>
                  </div>
                  <span className="text-sm font-semibold text-neutral-700 whitespace-nowrap tracking-tight">
                    {name}
                  </span>
                </div>
                {/* Divider */}
                <div className="h-5 w-px bg-neutral-300 flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
