"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

// ── Types ─────────────────────────────────────────────────────────────────────

interface Listing {
  id: string;
  category: string;
  categoryShort: string;
  abbrev: string;
  title: string;
  description: string;
  price: string;
  rating: number;
  reviews: number;
  bgFrom: string;
  bgTo: string;
  badge?: string;
}

// ── Listings data ─────────────────────────────────────────────────────────────

const listings: Listing[] = [
  // SEO & Growth Intelligence
  {
    id: "seo-1",
    category: "SEO & Growth Intelligence",
    categoryShort: "SEO & Growth",
    abbrev: "SEO",
    title: "SEO Audit + Optimization",
    description:
      "Everything in the SEO Audit, plus hands-on optimisations. We fix the issues and implement quick-win improvements directly.",
    price: "£250",
    rating: 5.0,
    reviews: 47,
    bgFrom: "from-neutral-800",
    bgTo: "to-neutral-950",
    badge: "Best Value",
  },
  {
    id: "seo-2",
    category: "SEO & Growth Intelligence",
    categoryShort: "SEO & Growth",
    abbrev: "SEO",
    title: "SEO Strategy & Consulting",
    description:
      "A full strategic SEO roadmap tailored to your industry, competitors, and growth objectives. Includes keyword strategy and content planning.",
    price: "£500",
    rating: 4.9,
    reviews: 31,
    bgFrom: "from-neutral-800",
    bgTo: "to-neutral-950",
  },
  {
    id: "seo-3",
    category: "SEO & Growth Intelligence",
    categoryShort: "SEO & Growth",
    abbrev: "SEO",
    title: "Programmatic SEO Plan",
    description:
      "Scalable organic growth architecture for SaaS and digital platforms. Build defensible traffic moats through structured, data-driven systems.",
    price: "£1,000",
    rating: 5.0,
    reviews: 18,
    bgFrom: "from-neutral-800",
    bgTo: "to-neutral-950",
  },

  // Market & Business Intelligence
  {
    id: "mbi-1",
    category: "Market & Business Intelligence",
    categoryShort: "Market Intelligence",
    abbrev: "MI",
    title: "Market Research Report",
    description:
      "Targeted market analysis covering segment size, competitive landscape, and key trends to validate a business opportunity.",
    price: "£1,500",
    rating: 5.0,
    reviews: 62,
    bgFrom: "from-slate-800",
    bgTo: "to-slate-950",
    badge: "Top Rated",
  },
  {
    id: "mbi-2",
    category: "Market & Business Intelligence",
    categoryShort: "Market Intelligence",
    abbrev: "MI",
    title: "Market Research Report (Detailed)",
    description:
      "In-depth primary and secondary research delivering comprehensive market maps, buyer personas, and strategic entry recommendations.",
    price: "£3,000",
    rating: 4.9,
    reviews: 28,
    bgFrom: "from-slate-800",
    bgTo: "to-slate-950",
  },
  {
    id: "mbi-3",
    category: "Market & Business Intelligence",
    categoryShort: "Market Intelligence",
    abbrev: "MI",
    title: "Business Intelligence Report",
    description:
      "Structured business analysis covering performance benchmarks, competitive positioning, and operational insights.",
    price: "£1,000",
    rating: 5.0,
    reviews: 41,
    bgFrom: "from-slate-800",
    bgTo: "to-slate-950",
  },
  {
    id: "mbi-4",
    category: "Market & Business Intelligence",
    categoryShort: "Market Intelligence",
    abbrev: "MI",
    title: "Business Intelligence Report (Detailed)",
    description:
      "Advanced BI covering multi-market data synthesis, KPI modelling, and decision-support frameworks for leadership teams.",
    price: "£2,000",
    rating: 4.9,
    reviews: 23,
    bgFrom: "from-slate-800",
    bgTo: "to-slate-950",
  },
  {
    id: "mbi-5",
    category: "Market & Business Intelligence",
    categoryShort: "Market Intelligence",
    abbrev: "MI",
    title: "Business Intelligence Report (Comprehensive)",
    description:
      "Board-ready strategic intelligence. Full competitive landscape, market sizing, financial benchmarks, and executive summary.",
    price: "£5,000",
    rating: 5.0,
    reviews: 15,
    bgFrom: "from-slate-800",
    bgTo: "to-slate-950",
  },

  // Startup Advisory
  {
    id: "sa-1",
    category: "Startup Advisory",
    categoryShort: "Startup Advisory",
    abbrev: "SA",
    title: "Pitch Deck Design & Review",
    description:
      "Investor-grade pitch deck crafted to communicate your vision, traction, and market opportunity with precision and confidence.",
    price: "£600",
    rating: 5.0,
    reviews: 84,
    bgFrom: "from-zinc-800",
    bgTo: "to-zinc-950",
    badge: "Top Rated",
  },
  {
    id: "sa-2",
    category: "Startup Advisory",
    categoryShort: "Startup Advisory",
    abbrev: "SA",
    title: "Business Model Review",
    description:
      "A structured review of your revenue model, unit economics, and scalability assumptions. Identify gaps before investors do.",
    price: "£900",
    rating: 4.9,
    reviews: 37,
    bgFrom: "from-zinc-800",
    bgTo: "to-zinc-950",
  },
  {
    id: "sa-3",
    category: "Startup Advisory",
    categoryShort: "Startup Advisory",
    abbrev: "SA",
    title: "Go-To-Market Strategy Review",
    description:
      "Validate and sharpen your GTM approach. We pressure-test channels, pricing, ICP definition, and acquisition strategy.",
    price: "£1,200",
    rating: 5.0,
    reviews: 29,
    bgFrom: "from-zinc-800",
    bgTo: "to-zinc-950",
  },
  {
    id: "sa-4",
    category: "Startup Advisory",
    categoryShort: "Startup Advisory",
    abbrev: "SA",
    title: "Founder Advisory Session",
    description:
      "A dedicated strategic session with an experienced advisor. Tackle your most critical decision with structured thinking and an outside perspective.",
    price: "£1,800",
    rating: 5.0,
    reviews: 56,
    bgFrom: "from-zinc-800",
    bgTo: "to-zinc-950",
  },
  {
    id: "sa-5",
    category: "Startup Advisory",
    categoryShort: "Startup Advisory",
    abbrev: "SA",
    title: "Startup Reframing Package",
    description:
      "Full strategic repositioning for startups at an inflection point. Reframe your narrative, model, and positioning for the next stage.",
    price: "£1,500",
    rating: 4.9,
    reviews: 22,
    bgFrom: "from-zinc-800",
    bgTo: "to-zinc-950",
  },
  {
    id: "sa-6",
    category: "Startup Advisory",
    categoryShort: "Startup Advisory",
    abbrev: "SA",
    title: "Founder Strategy Session",
    description:
      "A focused 60-minute strategy call with an experienced advisor. Tackle your most pressing challenge with structured thinking.",
    price: "£500",
    rating: 5.0,
    reviews: 91,
    bgFrom: "from-zinc-800",
    bgTo: "to-zinc-950",
    badge: "Top Rated",
  },
  {
    id: "sa-7",
    category: "Startup Advisory",
    categoryShort: "Startup Advisory",
    abbrev: "SA",
    title: "Startup Health Diagnostic",
    description:
      "In-depth analysis of your startup across product, market, team, and traction. Surfaces critical gaps and quick wins.",
    price: "£750",
    rating: 5.0,
    reviews: 44,
    bgFrom: "from-zinc-800",
    bgTo: "to-zinc-950",
  },
  {
    id: "sa-8",
    category: "Startup Advisory",
    categoryShort: "Startup Advisory",
    abbrev: "SA",
    title: "Investor Readiness Audit",
    description:
      "Pre-investment review of your pitch deck, traction metrics, financial model, and storytelling. Delivered as a detailed report.",
    price: "£1,200",
    rating: 4.9,
    reviews: 36,
    bgFrom: "from-zinc-800",
    bgTo: "to-zinc-950",
  },

  // Fundraising
  {
    id: "fr-1",
    category: "Fundraising Services",
    categoryShort: "Fundraising",
    abbrev: "FR",
    title: "Fundraising Strategy Plan",
    description:
      "Full investment strategy covering valuation approach, investor targeting, round structure, and fundraising narrative.",
    price: "£2,000",
    rating: 5.0,
    reviews: 33,
    bgFrom: "from-stone-800",
    bgTo: "to-stone-950",
    badge: "Best Value",
  },
  {
    id: "fr-2",
    category: "Fundraising Services",
    categoryShort: "Fundraising",
    abbrev: "FR",
    title: "VC Target List + Outreach Strategy",
    description:
      "A curated list of 50–100 matched VCs, a tailored outreach plan, and a warm intro strategy to maximise your chances of a first meeting.",
    price: "£1,500",
    rating: 4.9,
    reviews: 27,
    bgFrom: "from-stone-800",
    bgTo: "to-stone-950",
  },

  // Growth & Strategy
  {
    id: "gs-1",
    category: "Growth & Strategy",
    categoryShort: "Growth & Strategy",
    abbrev: "GS",
    title: "Product Positioning Strategy",
    description:
      "Redesign your product's position in the market. Covers ICP definition, core messaging, and differentiation to sharpen buyer perception.",
    price: "£1,200",
    rating: 5.0,
    reviews: 44,
    bgFrom: "from-neutral-700",
    bgTo: "to-neutral-900",
  },
  {
    id: "gs-2",
    category: "Growth & Strategy",
    categoryShort: "Growth & Strategy",
    abbrev: "GS",
    title: "Competitive Intelligence Report",
    description:
      "In-depth analysis of competitor traffic, pricing, and strategy. Identify gaps, threats, and opportunities to sharpen your competitive edge.",
    price: "£1,800",
    rating: 4.9,
    reviews: 31,
    bgFrom: "from-neutral-700",
    bgTo: "to-neutral-900",
  },
  {
    id: "gs-3",
    category: "Growth & Strategy",
    categoryShort: "Growth & Strategy",
    abbrev: "GS",
    title: "Monthly Founder Advisory",
    description:
      "Ongoing strategic advisory throughout the month — decision support, growth guidance, and sounding-board access when it matters most.",
    price: "£3,000/mo",
    rating: 5.0,
    reviews: 18,
    bgFrom: "from-neutral-700",
    bgTo: "to-neutral-900",
  },

  // AI & Automation
  {
    id: "ai-1",
    category: "AI & Automation",
    categoryShort: "AI & Automation",
    abbrev: "AI",
    title: "AI Content Engine Setup",
    description:
      "Design and setup of an SEO-driven content automation system. Combines AI tooling with structured workflows to scale content output.",
    price: "£1,500",
    rating: 5.0,
    reviews: 38,
    bgFrom: "from-zinc-700",
    bgTo: "to-zinc-900",
  },
  {
    id: "ai-2",
    category: "AI & Automation",
    categoryShort: "AI & Automation",
    abbrev: "AI",
    title: "AI Marketing Automation Plan",
    description:
      "Full growth automation plan powered by AI tools — lead generation, nurture sequences, and performance reporting.",
    price: "£2,000",
    rating: 4.9,
    reviews: 24,
    bgFrom: "from-zinc-700",
    bgTo: "to-zinc-900",
  },
  {
    id: "ai-3",
    category: "AI & Automation",
    categoryShort: "AI & Automation",
    abbrev: "AI",
    title: "AI Adoption Strategy",
    description:
      "A prioritised AI adoption roadmap tailored to your business — identifying highest-impact use cases and a phased implementation plan.",
    price: "£3,000",
    rating: 5.0,
    reviews: 21,
    bgFrom: "from-zinc-700",
    bgTo: "to-zinc-900",
  },
  {
    id: "ai-4",
    category: "AI & Automation",
    categoryShort: "AI & Automation",
    abbrev: "AI",
    title: "AI Workflow Architecture",
    description:
      "Design of AI-powered workflows to automate core business processes — tool selection, integration architecture, and workflow blueprints.",
    price: "£3,500",
    rating: 4.9,
    reviews: 15,
    bgFrom: "from-zinc-700",
    bgTo: "to-zinc-900",
  },
  {
    id: "ai-5",
    category: "AI & Automation",
    categoryShort: "AI & Automation",
    abbrev: "AI",
    title: "AI Business Transformation Plan",
    description:
      "Comprehensive AI transformation strategy covering organisational readiness and a multi-phase roadmap to become an AI-native business.",
    price: "£7,000",
    rating: 5.0,
    reviews: 10,
    bgFrom: "from-zinc-700",
    bgTo: "to-zinc-900",
  },

  // Export Consulting
  {
    id: "ec-1",
    category: "Export Consulting",
    categoryShort: "Export Consulting",
    abbrev: "EC",
    title: "Export Market Scan",
    description:
      "Targeted analysis of demand in your chosen export market — competitor overview, import statistics, and distributor profiles.",
    price: "£900",
    rating: 5.0,
    reviews: 29,
    bgFrom: "from-stone-700",
    bgTo: "to-stone-900",
  },
  {
    id: "ec-2",
    category: "Export Consulting",
    categoryShort: "Export Consulting",
    abbrev: "EC",
    title: "Export Market Entry Strategy",
    description:
      "Full market analysis with pricing benchmark, distributor model selection, and a clear go-to-market roadmap for a new market.",
    price: "£1,800",
    rating: 4.9,
    reviews: 21,
    bgFrom: "from-stone-700",
    bgTo: "to-stone-900",
  },
  {
    id: "ec-3",
    category: "Export Consulting",
    categoryShort: "Export Consulting",
    abbrev: "EC",
    title: "Export Expansion Blueprint",
    description:
      "Multi-country expansion strategy covering distributor network design, logistics structure, and a 12-month export roadmap.",
    price: "£3,500",
    rating: 5.0,
    reviews: 17,
    bgFrom: "from-stone-700",
    bgTo: "to-stone-900",
  },
  {
    id: "ec-4",
    category: "Export Consulting",
    categoryShort: "Export Consulting",
    abbrev: "EC",
    title: "Distributor Finder Package",
    description:
      "Identification of qualified potential distributors in your target market, with curated outreach list and contact intelligence.",
    price: "£2,500",
    rating: 4.9,
    reviews: 19,
    bgFrom: "from-stone-700",
    bgTo: "to-stone-900",
  },
  {
    id: "ec-5",
    category: "Export Consulting",
    categoryShort: "Export Consulting",
    abbrev: "EC",
    title: "Export Sales System Setup",
    description:
      "End-to-end export sales process — distributor pipeline system, outreach templates, and CRM export workflow to convert leads at scale.",
    price: "£4,000",
    rating: 5.0,
    reviews: 14,
    bgFrom: "from-stone-700",
    bgTo: "to-stone-900",
  },

  // Due Diligence
  {
    id: "dd-1",
    category: "Due Diligence Services",
    categoryShort: "Due Diligence",
    abbrev: "DD",
    title: "Startup Due Diligence Report",
    description:
      "Comprehensive due diligence on a startup's market position, competitive landscape, unit economics, and investment risk.",
    price: "£4,000",
    rating: 5.0,
    reviews: 22,
    bgFrom: "from-neutral-800",
    bgTo: "to-neutral-950",
    badge: "Expert Verified",
  },
  {
    id: "dd-2",
    category: "Due Diligence Services",
    categoryShort: "Due Diligence",
    abbrev: "DD",
    title: "Market Due Diligence",
    description:
      "In-depth validation of a target market — covering market size, growth dynamics, customer segmentation, and demand signals.",
    price: "£4,500",
    rating: 4.9,
    reviews: 16,
    bgFrom: "from-neutral-800",
    bgTo: "to-neutral-950",
  },
  {
    id: "dd-3",
    category: "Due Diligence Services",
    categoryShort: "Due Diligence",
    abbrev: "DD",
    title: "Competitive Due Diligence",
    description:
      "Detailed competitive intelligence report mapping key players, positioning, capabilities, and strategic vulnerabilities.",
    price: "£3,500",
    rating: 5.0,
    reviews: 19,
    bgFrom: "from-neutral-800",
    bgTo: "to-neutral-950",
  },
  {
    id: "dd-4",
    category: "Due Diligence Services",
    categoryShort: "Due Diligence",
    abbrev: "DD",
    title: "Investment Opportunity Brief",
    description:
      "Concise investment brief covering market validation, competitor overview, unit economics, and key risk factors for VC and PE review.",
    price: "£2,500",
    rating: 4.9,
    reviews: 28,
    bgFrom: "from-neutral-800",
    bgTo: "to-neutral-950",
  },

  // M&A Intelligence
  {
    id: "ma-1",
    category: "M&A Intelligence",
    categoryShort: "M&A Intelligence",
    abbrev: "M&A",
    title: "Acquisition Target Analysis",
    description:
      "Identification and analysis of strategic acquisition targets — company profiles, financials, competitive positioning, and fit assessment.",
    price: "£4,000",
    rating: 5.0,
    reviews: 13,
    bgFrom: "from-slate-800",
    bgTo: "to-slate-950",
  },
  {
    id: "ma-2",
    category: "M&A Intelligence",
    categoryShort: "M&A Intelligence",
    abbrev: "M&A",
    title: "Market Consolidation Map",
    description:
      "Strategic overview of consolidation dynamics within a sector — mapping acquisition activity, fragmentation opportunities, and platform-building potential.",
    price: "£3,500",
    rating: 4.9,
    reviews: 11,
    bgFrom: "from-slate-800",
    bgTo: "to-slate-950",
  },
  {
    id: "ma-3",
    category: "M&A Intelligence",
    categoryShort: "M&A Intelligence",
    abbrev: "M&A",
    title: "Strategic Acquisition Brief",
    description:
      "End-to-end acquisition intelligence covering target identification, competitor buyout opportunities, and strategic rationale for consolidation.",
    price: "£5,000",
    rating: 5.0,
    reviews: 9,
    bgFrom: "from-slate-800",
    bgTo: "to-slate-950",
  },

  // Corporate Strategy
  {
    id: "cs-1",
    category: "Corporate Strategy",
    categoryShort: "Corporate Strategy",
    abbrev: "CS",
    title: "Corporate Growth Strategy",
    description:
      "Structured growth strategy for established companies — revenue expansion levers, market positioning, and a sequenced roadmap to the next phase of scale.",
    price: "£8,000",
    rating: 5.0,
    reviews: 12,
    bgFrom: "from-zinc-800",
    bgTo: "to-zinc-950",
    badge: "Premium",
  },
  {
    id: "cs-2",
    category: "Corporate Strategy",
    categoryShort: "Corporate Strategy",
    abbrev: "CS",
    title: "New Market Strategy",
    description:
      "Strategic blueprint for entering a new market segment or geography — market sizing, competitive landscape, entry model, and GTM roadmap.",
    price: "£9,000",
    rating: 4.9,
    reviews: 8,
    bgFrom: "from-zinc-800",
    bgTo: "to-zinc-950",
  },
  {
    id: "cs-3",
    category: "Corporate Strategy",
    categoryShort: "Corporate Strategy",
    abbrev: "CS",
    title: "Digital Transformation Blueprint",
    description:
      "Comprehensive digital transformation strategy covering technology adoption, process redesign, and a phased implementation roadmap.",
    price: "£12,000",
    rating: 5.0,
    reviews: 6,
    bgFrom: "from-zinc-800",
    bgTo: "to-zinc-950",
  },
  {
    id: "cs-4",
    category: "Corporate Strategy",
    categoryShort: "Corporate Strategy",
    abbrev: "CS",
    title: "Market Entry Strategy",
    description:
      "Comprehensive strategy for entering a new country or market — positioning, channels, partnerships, and go-to-market sequencing.",
    price: "£3,500",
    rating: 5.0,
    reviews: 26,
    bgFrom: "from-zinc-800",
    bgTo: "to-zinc-950",
  },
  {
    id: "cs-5",
    category: "Corporate Strategy",
    categoryShort: "Corporate Strategy",
    abbrev: "CS",
    title: "Strategic Growth Blueprint",
    description:
      "Board-ready growth architecture. Covers expansion plan, revenue model design, and a sequenced roadmap to the next stage of scale.",
    price: "£5,000",
    rating: 4.9,
    reviews: 14,
    bgFrom: "from-zinc-800",
    bgTo: "to-zinc-950",
  },
  {
    id: "cs-6",
    category: "Corporate Strategy",
    categoryShort: "Corporate Strategy",
    abbrev: "CS",
    title: "Executive Strategic Advisory",
    description:
      "Senior-level advisory for executives and leadership teams — board-level thinking, high-stakes decision support, and executive growth strategy.",
    price: "£10,000/mo",
    rating: 5.0,
    reviews: 9,
    bgFrom: "from-zinc-800",
    bgTo: "to-zinc-950",
  },
];

// ── Constants ─────────────────────────────────────────────────────────────────

const ALL = "All Services";
const categoryTabs = [
  ALL,
  "SEO & Growth",
  "Market Intelligence",
  "Startup Advisory",
  "Fundraising",
  "Growth & Strategy",
  "AI & Automation",
  "Export Consulting",
  "Due Diligence",
  "M&A Intelligence",
  "Corporate Strategy",
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function MarketplacePage() {
  const [activeTab, setActiveTab] = useState(ALL);
  const [query, setQuery] = useState("");

  const filtered = listings.filter((l) => {
    const matchesTab = activeTab === ALL || l.categoryShort === activeTab;
    const matchesQuery =
      !query ||
      l.title.toLowerCase().includes(query.toLowerCase()) ||
      l.description.toLowerCase().includes(query.toLowerCase());
    return matchesTab && matchesQuery;
  });

  return (
    <>
      <Navbar />

      <main className="flex-1 pt-16 bg-white">
        {/* ── Category strip ── */}
        <div className="border-b border-neutral-200 bg-white sticky top-16 z-40">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="flex items-center overflow-x-auto">
              {categoryTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`shrink-0 px-4 py-4 text-xs font-medium tracking-widest uppercase whitespace-nowrap border-b-2 transition-colors duration-200 ${
                    activeTab === tab
                      ? "border-neutral-900 text-neutral-900"
                      : "border-transparent text-neutral-500 hover:text-neutral-900"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Hero ── */}
        <div className="bg-white pt-16 pb-14 text-center border-b border-neutral-100">
          <div className="max-w-3xl mx-auto px-6">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4">
              RiseTech Marketplace
            </p>
            <h1 className="text-4xl lg:text-5xl font-light tracking-tight text-neutral-900 leading-[1.05] mb-4">
              Access World-Class Strategic Advisory
            </h1>
            <p className="text-base lg:text-lg font-light text-neutral-500 leading-relaxed mb-10 max-w-xl mx-auto">
              Discover expert-led services to help you scale, raise capital, and
              enter new markets.
            </p>

            {/* Search bar */}
            <div className="flex items-stretch max-w-lg mx-auto mb-8">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search advisory services..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full h-12 pl-4 pr-10 border border-neutral-300 border-r-0 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                  </svg>
                </span>
              </div>
              <button
                onClick={() => {}}
                className="h-12 px-6 bg-neutral-900 text-white text-xs font-semibold tracking-widest uppercase hover:bg-neutral-700 transition-colors shrink-0"
              >
                Search
              </button>
            </div>

            <a
              href="mailto:advisory@risetech.info"
              className="inline-flex items-center px-8 py-4 bg-neutral-900 text-white text-xs font-semibold tracking-widest uppercase hover:bg-neutral-700 transition-colors duration-200"
            >
              Request Advisory
            </a>
          </div>
        </div>

        {/* ── Listings ── */}
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10">
          {/* Count */}
          <p className="text-xs text-neutral-500 mb-6 pb-5 border-b border-neutral-100">
            <span className="text-neutral-900 font-semibold">
              {filtered.length}
            </span>{" "}
            services available
          </p>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          ) : (
            <div className="py-24 text-center">
              <p className="text-neutral-400 text-sm mb-4">
                No services found for your search.
              </p>
              <button
                onClick={() => {
                  setQuery("");
                  setActiveTab(ALL);
                }}
                className="text-xs font-semibold tracking-widest uppercase text-neutral-900 underline underline-offset-4"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </main>

      {/* ── Footer ── */}
      <footer className="bg-neutral-950 text-neutral-600 py-8 border-t border-neutral-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/"
            className="text-xs tracking-widest uppercase hover:text-neutral-400 transition-colors duration-200"
          >
            © {new Date().getFullYear()} RiseTech Information Ltd
          </Link>
          <p className="text-xs">
            Strategic Advisory · Market Intelligence · Growth Architecture ·{" "}
            <span className="text-neutral-400">Advisory Marketplace</span>
          </p>
        </div>
      </footer>
    </>
  );
}

// ── Listing card ──────────────────────────────────────────────────────────────

function ListingCard({ listing }: { listing: Listing }) {
  return (
    <div className="group border border-neutral-200 bg-white overflow-hidden hover:shadow-md hover:border-neutral-400 transition-all duration-300 flex flex-col">
      {/* Thumbnail */}
      <div
        className={`relative h-44 bg-gradient-to-br ${listing.bgFrom} ${listing.bgTo} overflow-hidden flex items-center justify-center shrink-0`}
      >
        {/* Large background abbreviation */}
        <span className="text-7xl font-black text-white/5 select-none tracking-tighter pointer-events-none">
          {listing.abbrev}
        </span>

        {/* Category label */}
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-3">
          <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-white/40">
            {listing.categoryShort}
          </span>
        </div>

        {/* Badge */}
        {listing.badge && (
          <div className="absolute top-3 left-3">
            <span className="bg-white text-neutral-900 text-[9px] font-bold tracking-widest uppercase px-2 py-0.5">
              {listing.badge}
            </span>
          </div>
        )}

        {/* Bookmark button */}
        <button
          aria-label="Save service"
          className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 text-white/60 hover:text-white transition-all"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>

      {/* Card body */}
      <div className="p-4 flex flex-col flex-1">
        {/* Seller */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-full bg-neutral-900 flex items-center justify-center shrink-0">
            <span className="text-[9px] font-bold text-white">RT</span>
          </div>
          <span className="text-xs font-medium text-neutral-700 truncate">
            RiseTech Advisory
          </span>
          <span className="ml-auto bg-neutral-100 text-neutral-600 text-[9px] font-semibold tracking-widest uppercase px-1.5 py-0.5 shrink-0">
            Verified
          </span>
        </div>

        {/* Title */}
        <h3 className="text-sm font-semibold text-neutral-900 leading-snug mb-2 line-clamp-2 min-h-[2.5rem]">
          {listing.title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <span className="text-amber-400 text-xs leading-none">★</span>
          <span className="text-xs font-semibold text-neutral-800">
            {listing.rating.toFixed(1)}
          </span>
          <span className="text-xs text-neutral-400">({listing.reviews})</span>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Price row */}
        <div className="border-t border-neutral-100 pt-3 flex items-center justify-between mt-2">
          <div>
            <span className="text-[10px] text-neutral-400 uppercase tracking-widest block leading-none mb-0.5">
              From
            </span>
            <p className="text-sm font-semibold text-neutral-900">
              {listing.price}
            </p>
          </div>
          <a
            href="mailto:advisory@risetech.info"
            className="text-[10px] font-semibold tracking-widest uppercase text-neutral-400 group-hover:text-neutral-900 transition-colors duration-200 hover:underline underline-offset-2"
          >
            Enquire →
          </a>
        </div>
      </div>
    </div>
  );
}
