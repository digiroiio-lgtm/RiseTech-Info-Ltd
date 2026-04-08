"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import {
  teamMembers,
  PRACTICE_AREAS,
  REGIONS,
  TITLES,
  type Tab,
  type TeamMember,
} from "@/lib/team";
import { LEGAL_LINKS } from "@/lib/legalLinks";

// ── Initials Avatar ──────────────────────────────────────────────────────────

function InitialsAvatar({
  initials,
  size = "lg",
}: {
  initials: string;
  size?: "sm" | "lg";
}) {
  if (size === "lg") {
    return (
      <div className="w-full aspect-[3/4] bg-neutral-100 flex items-center justify-center">
        <span className="text-3xl font-light text-neutral-400 tracking-widest">
          {initials}
        </span>
      </div>
    );
  }
  return (
    <div className="w-10 h-10 bg-neutral-100 flex items-center justify-center flex-shrink-0">
      <span className="text-xs font-semibold text-neutral-500 tracking-wide">
        {initials}
      </span>
    </div>
  );
}

// ── Executive Card ───────────────────────────────────────────────────────────

function ExecutiveCard({ member }: { member: TeamMember }) {
  return (
    <div className="group border border-neutral-200 bg-white hover:border-neutral-400 hover:-translate-y-0.5 transition-all duration-200 flex flex-col">
      <InitialsAvatar initials={member.initials} size="lg" />
      <div className="p-6 flex flex-col gap-3 flex-1">
        <div>
          <p className="text-sm font-semibold text-neutral-900">{member.name}</p>
          <p className="text-xs text-neutral-500 mt-0.5 leading-relaxed">{member.title}</p>
        </div>
        <p className="text-xs text-neutral-600 leading-relaxed flex-1">
          {member.roleDescriptor}
        </p>
        <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
          <span className="text-[10px] font-semibold tracking-widest uppercase text-neutral-400">
            {member.practiceArea}
          </span>
          <span className="text-xs text-neutral-400 group-hover:text-neutral-700 transition-colors duration-150">
            Read Profile →
          </span>
        </div>
      </div>
    </div>
  );
}

// ── Filter Bar ───────────────────────────────────────────────────────────────

function FilterBar({
  search,
  title,
  practiceArea,
  region,
  onSearch,
  onTitle,
  onPracticeArea,
  onRegion,
}: {
  search: string;
  title: string;
  practiceArea: string;
  region: string;
  onSearch: (v: string) => void;
  onTitle: (v: string) => void;
  onPracticeArea: (v: string) => void;
  onRegion: (v: string) => void;
}) {
  const selectCls =
    "h-10 border border-neutral-300 bg-white text-xs text-neutral-700 px-3 pr-8 focus:outline-none focus:border-neutral-700 transition-colors duration-150 appearance-none cursor-pointer min-w-[160px]";

  return (
    <div className="border border-neutral-200 bg-white p-4 flex flex-col sm:flex-row gap-3 flex-wrap">
      {/* Search */}
      <div className="relative flex items-center border border-neutral-300 bg-white flex-1 min-w-[180px]">
        <svg
          className="absolute left-3 w-3.5 h-3.5 text-neutral-400 pointer-events-none"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search by name or title"
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          className="h-10 w-full pl-9 pr-3 text-xs text-neutral-700 bg-transparent focus:outline-none placeholder:text-neutral-400"
        />
      </div>

      {/* Title */}
      <div className="relative">
        <select
          value={title}
          onChange={(e) => onTitle(e.target.value)}
          className={selectCls}
        >
          {TITLES.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
        <svg
          className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3 h-3 text-neutral-400 pointer-events-none"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Practice Area */}
      <div className="relative">
        <select
          value={practiceArea}
          onChange={(e) => onPracticeArea(e.target.value)}
          className={selectCls}
        >
          {PRACTICE_AREAS.map((p) => (
            <option key={p}>{p}</option>
          ))}
        </select>
        <svg
          className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3 h-3 text-neutral-400 pointer-events-none"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Region */}
      <div className="relative">
        <select
          value={region}
          onChange={(e) => onRegion(e.target.value)}
          className={selectCls}
        >
          {REGIONS.map((r) => (
            <option key={r}>{r}</option>
          ))}
        </select>
        <svg
          className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3 h-3 text-neutral-400 pointer-events-none"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}

// ── Expandable Directory Row ─────────────────────────────────────────────────

function DirectoryRow({ member }: { member: TeamMember }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Main row */}
      <tr
        className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors duration-150 cursor-pointer"
        onClick={() => setOpen((o) => !o)}
      >
        <td className="py-5 px-4 text-sm text-neutral-900 font-medium whitespace-nowrap">
          <div className="flex items-center gap-3">
            <InitialsAvatar initials={member.initials} size="sm" />
            {member.name}
          </div>
        </td>
        <td className="py-5 px-4 text-sm text-neutral-600 hidden sm:table-cell">
          {member.title}
        </td>
        <td className="py-5 px-4 text-sm text-neutral-600 hidden md:table-cell">
          {member.practiceArea}
        </td>
        <td className="py-5 px-4 text-sm text-neutral-600 hidden lg:table-cell">
          {member.region}
        </td>
        <td className="py-5 px-4 text-right">
          <button
            aria-label={open ? "Collapse profile" : "Expand profile"}
            className="w-7 h-7 flex items-center justify-center text-neutral-400 hover:text-neutral-900 transition-colors duration-150 ml-auto"
          >
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-45" : ""}`}
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </td>
      </tr>
      {/* Expanded details */}
      {open && (
        <tr className="border-b border-neutral-100 bg-neutral-50/60">
          <td colSpan={5} className="px-4 py-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl">
              <div className="sm:col-span-2">
                <p className="text-[10px] font-semibold tracking-widest uppercase text-neutral-400 mb-3">
                  Biography
                </p>
                <p className="text-xs text-neutral-600 leading-relaxed">{member.bio}</p>
              </div>
              <div>
                <p className="text-[10px] font-semibold tracking-widest uppercase text-neutral-400 mb-3">
                  Areas of Expertise
                </p>
                <ul className="space-y-1.5">
                  {member.expertise.map((e) => (
                    <li key={e} className="flex items-start gap-2 text-xs text-neutral-600">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-neutral-400 flex-shrink-0" />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-5">
                <div>
                  <p className="text-[10px] font-semibold tracking-widest uppercase text-neutral-400 mb-2">
                    Location
                  </p>
                  <p className="text-xs text-neutral-600">{member.location}</p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold tracking-widest uppercase text-neutral-400 mb-2">
                    Sectors
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {member.sectors.map((s) => (
                      <span
                        key={s}
                        className="text-[10px] text-neutral-500 border border-neutral-200 px-2 py-0.5 bg-white"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}

// ── Mobile Directory Card ────────────────────────────────────────────────────

function MobileDirectoryCard({ member }: { member: TeamMember }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-neutral-200 bg-white">
      <button
        className="w-full p-5 flex items-center gap-4 text-left"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <InitialsAvatar initials={member.initials} size="sm" />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-neutral-900">{member.name}</p>
          <p className="text-xs text-neutral-500 mt-0.5 truncate">{member.title}</p>
        </div>
        <svg
          className={`w-4 h-4 text-neutral-400 transition-transform duration-200 flex-shrink-0 ${open ? "rotate-45" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>
      {open && (
        <div className="px-5 pb-6 border-t border-neutral-100 space-y-5 pt-5">
          <div>
            <p className="text-[10px] font-semibold tracking-widest uppercase text-neutral-400 mb-2">Biography</p>
            <p className="text-xs text-neutral-600 leading-relaxed">{member.bio}</p>
          </div>
          <div>
            <p className="text-[10px] font-semibold tracking-widest uppercase text-neutral-400 mb-2">Practice Area</p>
            <p className="text-xs text-neutral-600">{member.practiceArea} · {member.region}</p>
          </div>
          <div>
            <p className="text-[10px] font-semibold tracking-widest uppercase text-neutral-400 mb-2">Expertise</p>
            <ul className="space-y-1">
              {member.expertise.map((e) => (
                <li key={e} className="flex items-start gap-2 text-xs text-neutral-600">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-neutral-400 flex-shrink-0" />
                  {e}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[10px] font-semibold tracking-widest uppercase text-neutral-400 mb-2">Sectors</p>
            <div className="flex flex-wrap gap-1.5">
              {member.sectors.map((s) => (
                <span key={s} className="text-[10px] text-neutral-500 border border-neutral-200 px-2 py-0.5 bg-white">{s}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Main Page Client Component ───────────────────────────────────────────────

const TABS: { id: Tab; label: string }[] = [
  { id: "executive", label: "Executive Team" },
  { id: "management", label: "Senior Management" },
  { id: "board", label: "Board of Directors" },
];

export default function TeamPageClient() {
  const [activeTab, setActiveTab] = useState<Tab>("executive");

  // Filter state
  const [search, setSearch] = useState("");
  const [titleFilter, setTitleFilter] = useState("All Titles");
  const [practiceFilter, setPracticeFilter] = useState("All Practice Areas");
  const [regionFilter, setRegionFilter] = useState("All Regions");

  const tabMembers = useMemo(
    () => teamMembers.filter((m) => m.tab === activeTab),
    [activeTab]
  );

  const filteredMembers = useMemo(() => {
    return tabMembers.filter((m) => {
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        m.name.toLowerCase().includes(q) ||
        m.title.toLowerCase().includes(q) ||
        m.practiceArea.toLowerCase().includes(q);
      const matchTitle =
        titleFilter === "All Titles" ||
        m.title.toLowerCase().includes(titleFilter.toLowerCase());
      const matchPractice =
        practiceFilter === "All Practice Areas" ||
        m.practiceArea === practiceFilter;
      const matchRegion =
        regionFilter === "All Regions" || m.region === regionFilter;
      return matchSearch && matchTitle && matchPractice && matchRegion;
    });
  }, [tabMembers, search, titleFilter, practiceFilter, regionFilter]);

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col">
      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-100">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="text-sm font-semibold tracking-[0.15em] uppercase text-neutral-900"
          >
            RiseTech
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: "Services", href: "/#services" },
              { label: "Intelligence", href: "/#services" },
              { label: "Our Team", href: "/team" },
              { label: "Advisory", href: "/#contact" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs font-medium tracking-widest uppercase text-neutral-500 hover:text-neutral-900 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/#contact"
            className="inline-flex items-center px-5 py-2.5 bg-neutral-900 text-white text-xs font-medium tracking-wide hover:bg-neutral-700 transition-colors duration-200"
          >
            Request Advisory
          </Link>
        </div>
      </header>

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="pt-16 bg-neutral-950 text-white">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[11px] text-neutral-500 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-neutral-300 transition-colors">Home</Link>
            <span>›</span>
            <span>About</span>
            <span>›</span>
            <span className="text-neutral-300">Our Team</span>
          </nav>
          <h1 className="text-5xl lg:text-6xl font-light text-white tracking-tight mb-6">
            Our Team
          </h1>
          <p className="text-base text-neutral-400 max-w-xl leading-relaxed">
            Meet our team of experts, including our executive leadership, senior advisors, and board members.
          </p>
        </div>
      </section>

      {/* ── Main Content ─────────────────────────────────────────────────────── */}
      <main className="flex-1 max-w-[1320px] mx-auto w-full px-6 lg:px-10 py-16 lg:py-24">

        {/* ── Tab Navigation ─────────────────────────────────────────────── */}
        <div className="border-b border-neutral-200 mb-14">
          <nav className="flex gap-0" role="tablist" aria-label="Team sections">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setSearch("");
                  setTitleFilter("All Titles");
                  setPracticeFilter("All Practice Areas");
                  setRegionFilter("All Regions");
                }}
                className={`px-6 py-4 text-xs font-semibold tracking-widest uppercase transition-colors duration-150 border-b-2 -mb-px ${
                  activeTab === tab.id
                    ? "border-neutral-900 text-neutral-900"
                    : "border-transparent text-neutral-500 hover:text-neutral-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* ── Executive Grid (top cards for active tab) ──────────────────── */}
        <div className="mb-20">
          <div className="flex items-baseline justify-between mb-10">
            <h2 className="text-xl font-light text-neutral-900 tracking-tight">
              {TABS.find((t) => t.id === activeTab)?.label}
            </h2>
            <span className="text-xs text-neutral-400">
              {tabMembers.length} {tabMembers.length === 1 ? "member" : "members"}
            </span>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {tabMembers.map((m) => (
              <ExecutiveCard key={m.id} member={m} />
            ))}
          </div>
        </div>

        {/* ── Directory Section ───────────────────────────────────────────── */}
        <div>
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="text-xl font-light text-neutral-900 tracking-tight">
              Directory
            </h2>
            <span className="text-xs text-neutral-400">
              {filteredMembers.length} of {tabMembers.length} shown
            </span>
          </div>

          {/* Filter bar */}
          <div className="mb-8 sticky top-16 z-30">
            <FilterBar
              search={search}
              title={titleFilter}
              practiceArea={practiceFilter}
              region={regionFilter}
              onSearch={setSearch}
              onTitle={setTitleFilter}
              onPracticeArea={setPracticeFilter}
              onRegion={setRegionFilter}
            />
          </div>

          {/* Desktop table */}
          <div className="hidden sm:block border border-neutral-200 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-neutral-200 bg-neutral-50">
                  <th className="py-4 px-4 text-left text-[11px] font-semibold tracking-widest uppercase text-neutral-500">
                    Name
                  </th>
                  <th className="py-4 px-4 text-left text-[11px] font-semibold tracking-widest uppercase text-neutral-500 hidden sm:table-cell">
                    Title
                  </th>
                  <th className="py-4 px-4 text-left text-[11px] font-semibold tracking-widest uppercase text-neutral-500 hidden md:table-cell">
                    Practice Area
                  </th>
                  <th className="py-4 px-4 text-left text-[11px] font-semibold tracking-widest uppercase text-neutral-500 hidden lg:table-cell">
                    Region
                  </th>
                  <th className="py-4 px-4 w-14" />
                </tr>
              </thead>
              <tbody>
                {filteredMembers.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="py-16 text-center text-sm text-neutral-400">
                      No results match your criteria.
                    </td>
                  </tr>
                ) : (
                  filteredMembers.map((m) => (
                    <DirectoryRow key={m.id} member={m} />
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Mobile stacked cards */}
          <div className="sm:hidden space-y-2">
            {filteredMembers.length === 0 ? (
              <p className="py-12 text-center text-sm text-neutral-400">
                No results match your criteria.
              </p>
            ) : (
              filteredMembers.map((m) => (
                <MobileDirectoryCard key={m.id} member={m} />
              ))
            )}
          </div>
        </div>
      </main>

      {/* ── Footer ───────────────────────────────────────────────────────────── */}
      <footer className="bg-neutral-950 text-neutral-500 mt-20">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          {/* Top section */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 py-16 border-b border-neutral-800">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link
                href="/"
                className="text-sm font-semibold tracking-[0.15em] uppercase text-white"
              >
                RiseTech
              </Link>
              <p className="text-xs leading-relaxed mt-4 max-w-xs">
                Strategic intelligence, market entry advisory, and technology systems for growth-stage and institutional clients.
              </p>
            </div>

            {/* Services */}
            <div>
              <p className="text-[10px] font-semibold tracking-widest uppercase text-neutral-400 mb-4">
                Services
              </p>
              <ul className="space-y-2.5">
                {["Export Strategy", "Market Intelligence", "Technology & Systems", "Startup Strategy"].map((s) => (
                  <li key={s}>
                    <span className="text-xs text-neutral-500">{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <p className="text-[10px] font-semibold tracking-widest uppercase text-neutral-400 mb-4">
                Company
              </p>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/team" className="text-xs hover:text-neutral-300 transition-colors">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="/founder-story" className="text-xs hover:text-neutral-300 transition-colors">
                    Founder Story
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies" className="text-xs hover:text-neutral-300 transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-xs hover:text-neutral-300 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal + Offices */}
            <div>
              <p className="text-[10px] font-semibold tracking-widest uppercase text-neutral-400 mb-4">
                Legal
              </p>
              <ul className="space-y-2.5 mb-8">
                {LEGAL_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs hover:text-neutral-300 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="text-[10px] font-semibold tracking-widest uppercase text-neutral-400 mb-3">
                Offices
              </p>
              <p className="text-xs leading-relaxed">London, UK<br />Dubai, UAE<br />New York, USA</p>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[11px] tracking-widest uppercase">
              &copy; {new Date().getFullYear()} RiseTech Information Ltd
            </p>
            <p className="text-[11px] text-neutral-600">
              Strategic Advisory &middot; Market Intelligence &middot; Growth Architecture
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
