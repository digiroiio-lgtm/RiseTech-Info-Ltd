const bullets = [
  "Founder advisory",
  "Market intelligence",
  "Growth architecture",
  "Strategic positioning",
];

export default function TrustSection() {
  return (
    <section className="bg-neutral-950 text-white py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: credibility message */}
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-500 mb-6">
              Trusted By
            </p>
            <p className="text-2xl lg:text-3xl font-light leading-relaxed text-neutral-100">
              Used by founders, operators, and investors to validate strategy,
              understand markets, and prepare for growth.
            </p>
          </div>

          {/* Right: credibility bullets */}
          <div className="grid grid-cols-2 gap-6">
            {bullets.map((bullet) => (
              <div
                key={bullet}
                className="border border-neutral-800 p-6 group hover:border-neutral-600 transition-colors duration-200"
              >
                <div className="w-6 h-px bg-neutral-500 mb-4 group-hover:bg-neutral-300 transition-colors duration-200" />
                <p className="text-sm font-medium text-neutral-300">{bullet}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
