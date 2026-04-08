"use client";

import Link from "next/link";
import { useState } from "react";
import SiteFooter from "@/components/SiteFooter";
import ThemeToggleButton from "@/components/ThemeToggleButton";

// ── Category data ─────────────────────────────────────────────────────────────

const categories = [
  {
    id: "advisory",
    title: "Advisory Services",
    description: "How our advisory engagements work, scoping, and delivery.",
    href: "/contact",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
      </svg>
    ),
  },
  {
    id: "strategy",
    title: "Strategy Projects",
    description: "Timelines, deliverables, and project management.",
    href: "/contact",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm0 0V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10m-6 0a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2m0 0V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z" />
      </svg>
    ),
  },
  {
    id: "export",
    title: "Export Programs",
    description: "Market entry, UKEF-backed programmes, and distributor networks.",
    href: "/contact",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 0 1 2 2v1a2 2 0 0 0 2 2 2 2 0 0 1 2 2v2.945M8 3.935V5.5A2.5 2.5 0 0 0 10.5 8h.5a2 2 0 0 1 2 2 2 2 0 0 0 4 0 2 2 0 0 1 2-2h1.064M15 20.488V18a2 2 0 0 1 2-2h3.064M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
      </svg>
    ),
  },
  {
    id: "dashboard",
    title: "Dashboard Systems",
    description: "BI platforms, data infrastructure, and analytics systems.",
    href: "/contact",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    id: "billing",
    title: "Payments & Billing",
    description: "Invoicing, payment methods, refunds, and billing enquiries.",
    href: "/billing-policy",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3z" />
      </svg>
    ),
  },
  {
    id: "client",
    title: "Client Support",
    description: "Onboarding, account queries, and getting in touch with our team.",
    href: "/contact",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
      </svg>
    ),
  },
];

// ── Main component ────────────────────────────────────────────────────────────

export default function SupportPageClient() {
  const [query, setQuery] = useState("");

  const filtered = query.trim()
    ? categories.filter(
        (c) =>
          c.title.toLowerCase().includes(query.toLowerCase()) ||
          c.description.toLowerCase().includes(query.toLowerCase())
      )
    : categories;

  return (
    <div className="min-h-screen bg-white dark:bg-[#0f172a] text-neutral-900 dark:text-neutral-100 flex flex-col transition-colors duration-200">
      {/* ── Header ────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-white/95 dark:bg-[#0f172a]/95 backdrop-blur-sm border-b border-neutral-100 dark:border-neutral-800 transition-colors duration-200">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 h-14 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="text-sm font-semibold tracking-[0.15em] uppercase text-neutral-900 dark:text-white"
          >
            RiseTech
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {[
              { label: "Home", href: "/" },
              { label: "Advisory", href: "/#contact" },
              { label: "Contact", href: "/contact" },
            ].map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-xs font-medium tracking-widest uppercase text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggleButton />
          </div>
        </div>
      </header>

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="bg-neutral-50 dark:bg-[#111827] py-20 lg:py-28 transition-colors duration-200">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 flex flex-col items-center text-center">
          <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-white mb-3">
            RiseTech Support
          </h1>
          <p className="text-base text-neutral-500 dark:text-neutral-400 mb-10">
            How can we help you today?
          </p>

          {/* Search bar */}
          <div className="w-full max-w-[700px] relative">
            <svg
              className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 pointer-events-none"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.75}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
              />
            </svg>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search our advisory knowledge base"
              className="w-full h-[54px] pl-14 pr-5 rounded-full border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-[#1f2937] text-sm text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-neutral-300 dark:focus:ring-neutral-600 transition"
            />
          </div>
        </div>
      </section>

      {/* ── Categories ────────────────────────────────────────────────────── */}
      <main className="flex-1 max-w-[1200px] mx-auto w-full px-6 lg:px-10 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white">
            Browse by Category
          </h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2">
            Explore guides and answers to common questions.
          </p>
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-sm text-neutral-400 py-12">
            No categories match your search.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((cat) => (
              <Link
                key={cat.id}
                href={cat.href}
                className="group flex flex-col items-center text-center p-7 rounded-[14px] bg-white dark:bg-[#1f2937] border border-neutral-100 dark:border-neutral-700/50 shadow-sm hover:-translate-y-1 hover:shadow-md dark:hover:shadow-neutral-900 transition-all duration-200"
              >
                <span className="mb-5 text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors duration-200">
                  {cat.icon}
                </span>
                <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-2">
                  {cat.title}
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  {cat.description}
                </p>
              </Link>
            ))}
          </div>
        )}

        {/* Contact nudge */}
        <div className="mt-20 text-center">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Can&apos;t find what you&apos;re looking for?{" "}
            <a
              href="mailto:support@wealwaysrise.com"
              className="font-medium text-neutral-700 dark:text-neutral-200 hover:underline"
            >
              Email us at support@wealwaysrise.com
            </a>
          </p>
        </div>
      </main>

      {/* ── Footer ────────────────────────────────────────────────────────── */}
      <SiteFooter />
    </div>
  );
}
