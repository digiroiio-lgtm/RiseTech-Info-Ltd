import Link from "next/link";

interface ProofCard {
  logo: string;
  company: string;
  result: string;
  metric: string;
  metricLabel: string;
  href: string;
}

const allCards: ProofCard[] = [
  {
    logo: "SKB",
    company: "UK Luxury Skincare",
    result: "From UK-only to three EU markets in six months",
    metric: "£1.2M",
    metricLabel: "Projected first-year EU revenue",
    href: "/case-studies#luxury-skincare-germany",
  },
  {
    logo: "EDT",
    company: "EdTech Startup, UAE",
    result: "Avoided a £400K pivot with a 2-week diagnostic",
    metric: "18% → 7%",
    metricLabel: "Monthly churn reduction",
    href: "/case-studies#edtech-saas-pivot",
  },
  {
    logo: "NRC",
    company: "National Retail Chain",
    result: "Real-time BI dashboards across 52 stores",
    metric: "22%",
    metricLabel: "Reduction in overstocking waste",
    href: "/case-studies#retail-bi-dashboard",
  },
  {
    logo: "TTM",
    company: "Turkish Textile Manufacturer",
    result: "EU export revenue scaled from €800K to €3.1M",
    metric: "€3.1M",
    metricLabel: "EU export revenue at 18 months",
    href: "/case-studies#textile-export-eu",
  },
  {
    logo: "FNB",
    company: "UK Premium Food & Beverage",
    result: "Six qualified Nordic distributors in eight weeks",
    metric: "3",
    metricLabel: "Distribution deals signed in 4 months",
    href: "/case-studies#nordic-food-distributor",
  },
  {
    logo: "RED",
    company: "London Property Developer",
    result: "Intelligence that redirected £45M allocation",
    metric: "68%",
    metricLabel: "Pre-sales on recommended project",
    href: "/case-studies#london-real-estate-intelligence",
  },
  {
    logo: "HRS",
    company: "B2B HR SaaS Platform",
    result: "3× organic traffic growth in 90 days",
    metric: "140%",
    metricLabel: "Increase in organic-sourced trials",
    href: "/case-studies#hr-saas-programmatic-seo",
  },
  {
    logo: "FTK",
    company: "FinTech Startup",
    result: "GTM strategy that secured a £1.8M seed round",
    metric: "£1.8M",
    metricLabel: "Seed round closed",
    href: "/case-studies#fintech-gtm-uk",
  },
  {
    logo: "RLG",
    company: "Multi-Brand Retail Group",
    result: "40% repeat purchase increase via loyalty platform",
    metric: "18%",
    metricLabel: "Cross-brand purchase behaviour",
    href: "/case-studies#retail-loyalty-platform",
  },
  {
    logo: "VCF",
    company: "Growth-Stage VC Fund",
    result: "Investment intelligence behind a £6M decision",
    metric: "£14M",
    metricLabel: "Series B raised by portfolio company",
    href: "/case-studies#vc-due-diligence",
  },
];

// Split cards into two columns
const col1 = allCards.slice(0, 5);
const col2 = allCards.slice(5, 10);

function GlowCard({ card }: { card: ProofCard }) {
  return (
    <Link href={card.href} className="block group/card mb-4">
      <div className="relative">
        {/* Glow layer */}
        <div
          className="absolute -inset-[2px] rounded-[22px] opacity-50 group-hover/card:opacity-70 transition-opacity duration-300"
          style={{
            background:
              "linear-gradient(120deg, #a855f7, #ec4899, #3b82f6, #06b6d4)",
            filter: "blur(18px)",
          }}
        />
        {/* Card */}
        <div
          className="relative rounded-[20px] p-5 flex flex-col gap-3"
          style={{
            background: "rgba(255, 255, 255, 0.04)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            boxShadow:
              "0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
          }}
        >
          {/* Logo badge */}
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(168,85,247,0.3), rgba(6,182,212,0.2))",
                border: "1px solid rgba(168,85,247,0.3)",
              }}
            >
              <span className="text-[9px] font-bold text-purple-300 tracking-wide">
                {card.logo}
              </span>
            </div>
            <span className="text-xs text-neutral-400 font-medium truncate">
              {card.company}
            </span>
          </div>

          {/* Result headline */}
          <p className="text-sm font-medium text-white leading-snug">
            {card.result}
          </p>

          {/* Metric */}
          <div className="flex items-center gap-2 pt-1 border-t border-white/[0.06]">
            <span
              className="text-lg font-light"
              style={{
                background:
                  "linear-gradient(90deg, #c084fc, #67e8f9)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {card.metric}
            </span>
            <span className="text-xs text-neutral-500 leading-tight">
              {card.metricLabel}
            </span>
          </div>

          {/* Arrow */}
          <div className="flex justify-end">
            <span className="text-xs text-neutral-600 group-hover/card:text-neutral-400 transition-colors duration-200">
              →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function ScrollColumn({
  cards,
  direction,
}: {
  cards: ProofCard[];
  direction: "up" | "down";
}) {
  // Duplicate for seamless loop
  const doubled = [...cards, ...cards];
  const trackClass =
    direction === "up" ? "proof-track-up" : "proof-track-down";

  return (
    <div className="proof-col relative overflow-hidden" style={{ height: 520 }}>
      {/* Top fade mask */}
      <div
        className="absolute top-0 left-0 right-0 z-10 pointer-events-none"
        style={{
          height: 80,
          background:
            "linear-gradient(to bottom, rgb(3,7,18) 0%, transparent 100%)",
        }}
      />
      {/* Bottom fade mask */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none"
        style={{
          height: 80,
          background:
            "linear-gradient(to top, rgb(3,7,18) 0%, transparent 100%)",
        }}
      />
      {/* Scrolling track */}
      <div className={trackClass}>
        {doubled.map((card, i) => (
          <GlowCard key={`${card.logo}-${i}`} card={card} />
        ))}
      </div>
    </div>
  );
}

export default function AnimatedProofSection() {
  return (
    <section
      style={{ background: "rgb(3,7,18)" }}
      className="py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-500 mb-4">
              Proven Results
            </p>
            <h2 className="text-3xl lg:text-4xl font-light text-white max-w-lg leading-snug">
              Real clients. Measurable outcomes.
            </h2>
            <p className="mt-4 text-neutral-400 text-base leading-relaxed max-w-md">
              A live view of our recent engagements — across export strategy,
              market intelligence, and technology systems.
            </p>
          </div>
          <Link
            href="/case-studies"
            className="text-xs font-semibold tracking-widest uppercase text-neutral-500 hover:text-white transition-colors duration-200 whitespace-nowrap"
          >
            View All Case Studies →
          </Link>
        </div>

        {/* Two-column animated grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          <ScrollColumn cards={col1} direction="up" />
          <ScrollColumn cards={col2} direction="down" />
        </div>
      </div>
    </section>
  );
}
