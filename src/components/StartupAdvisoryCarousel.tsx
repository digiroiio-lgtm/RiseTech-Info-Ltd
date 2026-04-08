"use client";

import { useRef } from "react";

const services = [
  {
    label: "Pitch Deck Design & Review",
    tagline: "Decks that open investor doors.",
    price: "£600",
    icon: "deck",
  },
  {
    label: "Business Model Review",
    tagline: "Find gaps before investors do.",
    price: "£900",
    icon: "model",
  },
  {
    label: "Go-To-Market Strategy Review",
    tagline: "Pressure-test your GTM for traction.",
    price: "£1,200",
    icon: "gtm",
  },
  {
    label: "Founder Advisory Session",
    tagline: "Clarity for high-stakes decisions.",
    price: "£1,800",
    icon: "advisory",
  },
  {
    label: "Startup Reframing Package",
    tagline: "Reposition for the next stage of growth.",
    price: "£1,500",
    icon: "reframe",
  },
  {
    label: "Business Content Package",
    tagline: "Strategic content that moves capital.",
    price: "£1,300",
    icon: "content",
  },
];

function ServiceIcon({ type }: { type: string }) {
  if (type === "deck") {
    return (
      <svg viewBox="0 0 160 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Back slide */}
        <rect x="32" y="28" width="88" height="62" rx="5" fill="#e4e4e4" stroke="#1a1a1a" strokeWidth="2"/>
        {/* Front slide */}
        <rect x="22" y="18" width="88" height="62" rx="5" fill="white" stroke="#1a1a1a" strokeWidth="2.5"/>
        {/* Bar chart inside */}
        <rect x="34" y="54" width="10" height="16" rx="2" fill="#1a1a1a"/>
        <rect x="49" y="44" width="10" height="26" rx="2" fill="#1a1a1a"/>
        <rect x="64" y="36" width="10" height="34" rx="2" fill="#1a1a1a"/>
        <rect x="79" y="42" width="10" height="28" rx="2" fill="#c0c0c0"/>
        {/* Trend arrow */}
        <path d="M34 60 L49 48 L64 40 L90 34" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="90" cy="34" r="3" fill="#1a1a1a"/>
        {/* Stand */}
        <line x1="66" y1="82" x2="66" y2="98" stroke="#1a1a1a" strokeWidth="2"/>
        <line x1="50" y1="98" x2="82" y2="98" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    );
  }
  if (type === "model") {
    return (
      <svg viewBox="0 0 160 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Funnel */}
        <path d="M28 28 L132 28 L96 64 L96 102 L64 102 L64 64 Z" fill="#f0f0f0" stroke="#1a1a1a" strokeWidth="2.5" strokeLinejoin="round"/>
        {/* Funnel segments */}
        <line x1="36" y1="46" x2="124" y2="46" stroke="#1a1a1a" strokeWidth="1.5" strokeDasharray="4 3"/>
        <line x1="52" y1="64" x2="108" y2="64" stroke="#1a1a1a" strokeWidth="1.5" strokeDasharray="4 3"/>
        {/* Coins/output at bottom */}
        <ellipse cx="80" cy="110" rx="16" ry="5" fill="#d4d4d4" stroke="#1a1a1a" strokeWidth="1.5"/>
        <ellipse cx="80" cy="107" rx="16" ry="5" fill="white" stroke="#1a1a1a" strokeWidth="1.5"/>
        <text x="74" y="111" fill="#1a1a1a" fontSize="9" fontWeight="bold">£</text>
      </svg>
    );
  }
  if (type === "gtm") {
    return (
      <svg viewBox="0 0 160 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Target rings */}
        <circle cx="80" cy="68" r="46" stroke="#e0e0e0" strokeWidth="2"/>
        <circle cx="80" cy="68" r="34" stroke="#c8c8c8" strokeWidth="2"/>
        <circle cx="80" cy="68" r="22" stroke="#a8a8a8" strokeWidth="2"/>
        <circle cx="80" cy="68" r="10" fill="#1a1a1a"/>
        {/* Arrow hitting target */}
        <path d="M124 22 L84 62" stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round"/>
        <path d="M108 18 L126 20 L128 38" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    );
  }
  if (type === "advisory") {
    return (
      <svg viewBox="0 0 160 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Person silhouette */}
        <circle cx="80" cy="42" r="18" fill="#e8e8e8" stroke="#1a1a1a" strokeWidth="2.5"/>
        <path d="M44 108 C44 86 116 86 116 108" fill="#e8e8e8" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Speech / thought bubble */}
        <rect x="92" y="22" width="46" height="30" rx="8" fill="white" stroke="#1a1a1a" strokeWidth="2"/>
        <path d="M100 52 L94 62 L108 52" fill="white" stroke="#1a1a1a" strokeWidth="2" strokeLinejoin="round"/>
        {/* Dots inside bubble */}
        <circle cx="106" cy="37" r="3" fill="#1a1a1a"/>
        <circle cx="115" cy="37" r="3" fill="#1a1a1a"/>
        <circle cx="124" cy="37" r="3" fill="#1a1a1a"/>
      </svg>
    );
  }
  if (type === "reframe") {
    return (
      <svg viewBox="0 0 160 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Circular arrows — transformation */}
        <path d="M80 26 A44 44 0 0 1 124 70" stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round" fill="none"/>
        <path d="M120 56 L124 70 L110 72" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M80 110 A44 44 0 0 1 36 66" stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round" fill="none"/>
        <path d="M40 80 L36 66 L50 64" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        {/* Star / spark in centre */}
        <circle cx="80" cy="68" r="12" fill="#f4f4f4" stroke="#1a1a1a" strokeWidth="2"/>
        <path d="M80 60 L82 66 L88 68 L82 70 L80 76 L78 70 L72 68 L78 66 Z" fill="#1a1a1a"/>
      </svg>
    );
  }
  // content
  return (
    <svg viewBox="0 0 160 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Document stack */}
      <rect x="48" y="30" width="68" height="84" rx="5" fill="#e4e4e4" stroke="#1a1a1a" strokeWidth="2"/>
      <rect x="38" y="22" width="68" height="84" rx="5" fill="white" stroke="#1a1a1a" strokeWidth="2.5"/>
      {/* Text lines */}
      <line x1="52" y1="44" x2="94" y2="44" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
      <line x1="52" y1="56" x2="94" y2="56" stroke="#c0c0c0" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="52" y1="66" x2="86" y2="66" stroke="#c0c0c0" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="52" y1="76" x2="90" y2="76" stroke="#c0c0c0" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="52" y1="86" x2="78" y2="86" stroke="#c0c0c0" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Pen */}
      <rect x="86" y="78" width="8" height="26" rx="2" transform="rotate(-35 90 91)" fill="#1a1a1a"/>
      <path d="M96 98 L102 104 L97 106 Z" fill="#1a1a1a"/>
    </svg>
  );
}

export default function StartupAdvisoryCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = 272 + 16; // card width + gap
    el.scrollBy({ left: direction === "right" ? cardWidth : -cardWidth, behavior: "smooth" });
  };

  return (
    <div className="mb-24 lg:mb-32 -mx-6 lg:-mx-8 px-6 lg:px-8 py-16 lg:py-20" style={{ backgroundColor: "#f0ede6" }}>
      {/* Header row */}
      <div className="max-w-6xl mx-auto flex items-start justify-between mb-10">
        <div>
          <div className="flex items-baseline gap-6 mb-2">
            <span className="text-xs font-semibold tracking-[0.2em] text-neutral-400 uppercase">03</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 leading-tight">
              Startup Advisory
            </h2>
          </div>
          <p className="ml-[3.5rem] text-sm text-neutral-500 leading-relaxed max-w-md">
            Investor-ready positioning and strategic clarity for founders at every stage.
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
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {services.map((svc) => (
          <div
            key={svc.label}
            className="flex-none w-68 bg-white rounded-2xl p-6 flex flex-col justify-between overflow-hidden"
            style={{ width: "272px", minHeight: "360px" }}
          >
            {/* Top: label + tagline + link */}
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
            </div>

            {/* Bottom: icon + price */}
            <div className="mt-6">
              <div className="h-28 flex items-end justify-center mb-4">
                <ServiceIcon type={svc.icon} />
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
