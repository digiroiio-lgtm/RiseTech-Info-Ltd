"use client";

import { useRef } from "react";

const services = [
  {
    label: "Real Estate Market Scan",
    tagline: "Data-driven investment snapshot.",
    price: "£1,200",
    icon: "scan",
    bestFor: ["first-time investors", "international buyers", "market exploration"],
  },
  {
    label: "Real Estate Investment Intelligence",
    tagline: "ROI-focused property analysis.",
    price: "£3,000",
    icon: "intelligence",
    bestFor: ["serious property investors", "buy-to-let buyers", "short-term rental investors"],
  },
  {
    label: "Strategic Property Acquisition Blueprint",
    tagline: "High-conviction property investment strategy.",
    price: "£7,500",
    icon: "blueprint",
    bestFor: ["portfolio investors", "family offices", "international property investors"],
  },
];

function RealEstateIcon({ type }: { type: string }) {
  if (type === "scan") {
    return (
      <svg viewBox="0 0 160 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Buildings */}
        <rect x="18" y="64" width="18" height="46" rx="2" fill="#e8e8e8" stroke="#1a1a1a" strokeWidth="2"/>
        <rect x="40" y="46" width="22" height="64" rx="2" fill="#f0f0f0" stroke="#1a1a1a" strokeWidth="2"/>
        <rect x="66" y="54" width="18" height="56" rx="2" fill="#e8e8e8" stroke="#1a1a1a" strokeWidth="2"/>
        <rect x="88" y="36" width="26" height="74" rx="2" fill="#f4f4f4" stroke="#1a1a1a" strokeWidth="2"/>
        {/* Windows */}
        <rect x="23" y="70" width="6" height="6" rx="1" fill="#1a1a1a" opacity="0.3"/>
        <rect x="23" y="82" width="6" height="6" rx="1" fill="#1a1a1a" opacity="0.3"/>
        <rect x="45" y="52" width="6" height="6" rx="1" fill="#1a1a1a" opacity="0.3"/>
        <rect x="55" y="52" width="6" height="6" rx="1" fill="#1a1a1a" opacity="0.3"/>
        <rect x="93" y="44" width="7" height="7" rx="1" fill="#1a1a1a" opacity="0.3"/>
        <rect x="104" y="44" width="7" height="7" rx="1" fill="#1a1a1a" opacity="0.3"/>
        <rect x="93" y="58" width="7" height="7" rx="1" fill="#1a1a1a" opacity="0.3"/>
        <rect x="104" y="58" width="7" height="7" rx="1" fill="#1a1a1a" opacity="0.3"/>
        {/* Ground */}
        <line x1="10" y1="110" x2="150" y2="110" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
        {/* Magnifying glass */}
        <circle cx="130" cy="44" r="18" fill="white" stroke="#1a1a1a" strokeWidth="2.5"/>
        <circle cx="130" cy="44" r="11" stroke="#1a1a1a" strokeWidth="1.5" strokeDasharray="3 2"/>
        <line x1="143" y1="57" x2="154" y2="68" stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    );
  }

  if (type === "intelligence") {
    return (
      <svg viewBox="0 0 160 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* House body */}
        <rect x="30" y="62" width="64" height="50" rx="3" fill="#f0f0f0" stroke="#1a1a1a" strokeWidth="2.5"/>
        {/* Roof */}
        <path d="M22 64 L62 24 L102 64" fill="#e4e4e4" stroke="#1a1a1a" strokeWidth="2.5" strokeLinejoin="round"/>
        {/* Door */}
        <rect x="52" y="84" width="20" height="28" rx="2" fill="white" stroke="#1a1a1a" strokeWidth="1.5"/>
        <circle cx="69" cy="98" r="2" fill="#1a1a1a"/>
        {/* Window */}
        <rect x="34" y="68" width="16" height="14" rx="1" fill="white" stroke="#1a1a1a" strokeWidth="1.5"/>
        <line x1="42" y1="68" x2="42" y2="82" stroke="#1a1a1a" strokeWidth="1"/>
        <line x1="34" y1="75" x2="50" y2="75" stroke="#1a1a1a" strokeWidth="1"/>
        {/* ROI chart */}
        <rect x="108" y="46" width="42" height="34" rx="3" fill="white" stroke="#1a1a1a" strokeWidth="1.5"/>
        <line x1="114" y1="74" x2="114" y2="54" stroke="#c0c0c0" strokeWidth="1"/>
        <line x1="114" y1="74" x2="144" y2="74" stroke="#c0c0c0" strokeWidth="1"/>
        <path d="M115 72 L122 66 L129 68 L137 58 L142 54" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="142" cy="54" r="2.5" fill="#1a1a1a"/>
        <text x="118" y="44" fill="#1a1a1a" fontSize="9" fontWeight="bold">ROI</text>
      </svg>
    );
  }

  // blueprint
  return (
    <svg viewBox="0 0 160 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Blueprint paper */}
      <rect x="14" y="18" width="90" height="94" rx="4" fill="#2c4a8a"/>
      <rect x="22" y="26" width="74" height="78" rx="2" fill="none" stroke="white" strokeWidth="1.5"/>
      <line x1="22" y1="65" x2="96" y2="65" stroke="white" strokeWidth="1"/>
      <line x1="59" y1="26" x2="59" y2="104" stroke="white" strokeWidth="1"/>
      <path d="M59 82 Q70 82 70 93" stroke="white" strokeWidth="1" fill="none"/>
      <circle cx="38" cy="46" r="2" fill="white" opacity="0.6"/>
      <circle cx="78" cy="46" r="2" fill="white" opacity="0.6"/>
      <circle cx="38" cy="84" r="2" fill="white" opacity="0.6"/>
      {/* Compass */}
      <circle cx="122" cy="56" r="28" fill="white" stroke="#1a1a1a" strokeWidth="2"/>
      <circle cx="122" cy="56" r="4" fill="#1a1a1a"/>
      <path d="M122 28 L118 44 L122 52 L126 44 Z" fill="#1a1a1a"/>
      <path d="M122 84 L126 68 L122 60 L118 68 Z" fill="#c0c0c0"/>
      <path d="M94 56 L108 60 L116 56 L108 52 Z" fill="#c0c0c0"/>
      <path d="M150 56 L136 52 L128 56 L136 60 Z" fill="#1a1a1a"/>
      <text x="119" y="24" fill="#1a1a1a" fontSize="8" fontWeight="bold">N</text>
    </svg>
  );
}

export default function RealEstateCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = 288 + 16;
    el.scrollBy({ left: direction === "right" ? cardWidth : -cardWidth, behavior: "smooth" });
  };

  return (
    <div
      className="mb-24 lg:mb-32 -mx-6 lg:-mx-8 px-6 lg:px-8 py-16 lg:py-20"
      style={{ backgroundColor: "#f0ede6" }}
    >
      {/* Header row */}
      <div className="max-w-6xl mx-auto flex items-start justify-between mb-10">
        <div>
          <div className="flex items-baseline gap-6 mb-2">
            <span className="text-xs font-semibold tracking-[0.2em] text-neutral-400 uppercase">
              18
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 leading-tight">
              Real Estate Intelligence
            </h2>
          </div>
          <p className="ml-[3.5rem] text-sm text-neutral-500 leading-relaxed max-w-md">
            Strategic real estate intelligence designed to help investors identify high-ROI locations,
            evaluate opportunities, and make data-driven acquisition decisions.
          </p>
        </div>
        {/* Arrow buttons */}
        <div className="flex gap-2 mt-1 shrink-0">
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="w-10 h-10 flex items-center justify-center border border-neutral-300 bg-white hover:bg-neutral-900 hover:border-neutral-900 hover:text-white text-neutral-700 transition-all duration-200"
          >
            ←
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="w-10 h-10 flex items-center justify-center border border-neutral-300 bg-white hover:bg-neutral-900 hover:border-neutral-900 hover:text-white text-neutral-700 transition-all duration-200"
          >
            →
          </button>
        </div>
      </div>

      {/* Scrollable card row */}
      <div
        ref={scrollRef}
        className="max-w-6xl mx-auto flex gap-4 overflow-x-auto pb-2 scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}
      >
        {services.map((svc) => (
          <div
            key={svc.label}
            className="flex-none bg-white rounded-2xl p-6 flex flex-col justify-between overflow-hidden"
            style={{ width: "288px", minHeight: "400px" }}
          >
            {/* Top */}
            <div>
              <p className="text-xs font-semibold text-neutral-400 tracking-wide uppercase mb-3">
                {svc.label}
              </p>
              <h3 className="text-xl font-bold text-neutral-900 leading-snug mb-4">
                {svc.tagline}
              </h3>
              <a
                href="#contact"
                className="text-xs font-bold text-neutral-900 underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-900 transition-colors duration-200"
              >
                Learn more
              </a>
              {/* Best for tags */}
              <div className="mt-4 flex flex-wrap gap-1">
                {svc.bestFor.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom: icon + price */}
            <div className="mt-6">
              <div className="h-28 flex items-end justify-center mb-4">
                <RealEstateIcon type={svc.icon} />
              </div>
              <div className="pt-4 border-t border-neutral-100">
                <span className="text-lg font-light text-neutral-900">{svc.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
