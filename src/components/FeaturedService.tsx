export default function FeaturedService() {
  return (
    <section className="bg-neutral-950 text-white py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-500 mb-6">
              Featured Service
            </p>
            <h2 className="text-3xl lg:text-5xl font-light text-white leading-tight mb-6">
              Programmatic SEO Plan
            </h2>
            <p className="text-lg text-neutral-400 leading-relaxed mb-8 max-w-md">
              Scalable organic growth architecture for SaaS and digital
              platforms. Build defensible traffic moats through structured,
              data-driven content and technical SEO systems.
            </p>
            <ul className="space-y-3 mb-10">
              {[
                "Full technical SEO architecture review",
                "Programmatic content strategy & templates",
                "Keyword clustering and topical authority map",
                "Implementation roadmap with milestone KPIs",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-neutral-400">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-6">
              <span className="text-3xl font-light text-white">£1,000</span>
              <a
                href="#contact"
                className="inline-flex items-center px-7 py-3.5 border border-white text-white text-sm font-medium tracking-wide hover:bg-white hover:text-neutral-900 transition-all duration-200"
              >
                Request This Service
              </a>
            </div>
          </div>

          {/* Right: decorative panel */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="w-full max-w-sm border border-neutral-800 p-10">
              <div className="space-y-6">
                {["Strategy", "Architecture", "Intelligence", "Growth"].map(
                  (word, i) => (
                    <div key={word} className="flex items-center gap-4">
                      <span className="text-xs text-neutral-600 font-mono w-4">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="flex-1 h-px bg-neutral-800" />
                      <span className="text-sm font-light text-neutral-300 tracking-wide">
                        {word}
                      </span>
                    </div>
                  )
                )}
              </div>
              <div className="mt-10 pt-8 border-t border-neutral-800">
                <p className="text-xs text-neutral-600 uppercase tracking-widest">
                  Organic · Scalable · Defensible
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
