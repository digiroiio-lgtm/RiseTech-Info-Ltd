export default function CTASection() {
  return (
    <section id="contact" className="bg-neutral-900 text-white py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-500 mb-6">
            Get Started
          </p>
          <h2 className="text-4xl lg:text-6xl font-light text-white leading-tight mb-6">
            Need Strategic Clarity?
          </h2>
          <p className="text-lg text-neutral-400 leading-relaxed mb-12 max-w-lg">
            Work with us to evaluate your strategy, refine your positioning, and
            accelerate growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:advisory@risetech.info"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-neutral-900 text-sm font-medium tracking-wide hover:bg-neutral-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-900"
            >
              Request Advisory
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 border border-neutral-700 text-white text-sm font-medium tracking-wide hover:border-neutral-400 hover:bg-neutral-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-900"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
