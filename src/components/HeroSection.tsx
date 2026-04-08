export default function HeroSection() {
  return (
    <section className="relative bg-white min-h-screen flex items-center">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #f0f0f0 1px, transparent 1px), linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-8">
            RiseTech Advisory
          </p>

          {/* Headline */}
          <h1 className="text-5xl lg:text-7xl font-light tracking-tight text-neutral-900 leading-[1.05] mb-8">
            Build Smarter Businesses With Data, Strategy and Execution
          </h1>

          {/* Subheadline */}
          <p className="text-lg lg:text-xl font-light text-neutral-500 leading-relaxed max-w-2xl mb-12">
            From export growth to AI dashboards and investment intelligence —
            we help companies scale faster with high-impact consulting and
            systems.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 bg-neutral-900 text-white text-sm font-medium tracking-wide transition-all duration-200 hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2"
            >
              Explore Services
            </a>
            <a
              href="mailto:advisory@risetech.info"
              className="inline-flex items-center justify-center px-8 py-4 border border-neutral-300 text-neutral-900 text-sm font-medium tracking-wide transition-all duration-200 hover:border-neutral-900 hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2"
            >
              Book Strategy Call
            </a>
          </div>

          {/* Social proof strip */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-neutral-400">
              Trusted by
            </span>
            {[
              "50+ founders",
              "20+ international expansion projects",
              "$120M+ revenue influenced",
            ].map((item, i) => (
              <span key={item} className="flex items-center gap-6">
                {i !== 0 && (
                  <span className="w-1 h-1 rounded-full bg-neutral-300" />
                )}
                <span className="text-xs font-medium text-neutral-600">
                  {item}
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* Bottom rule */}
        <div className="absolute bottom-12 left-6 lg:left-8 right-6 lg:right-8 h-px bg-neutral-100" />
      </div>
    </section>
  );
}
