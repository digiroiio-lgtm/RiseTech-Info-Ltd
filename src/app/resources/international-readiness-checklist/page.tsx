import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import ChecklistGate from "@/components/ChecklistGate";
import {
  CHECKLIST,
  CHECKLIST_UPDATED,
  CHECKLIST_UPDATED_LABEL,
  CHECKLIST_VISIBLE_COUNT,
} from "@/lib/checklist";
import { SITE_URL, breadcrumbJsonLd, jsonLdString } from "@/lib/jsonLd";
import { fitDescription, fitTitle } from "@/lib/seo";

const PATH = "/resources/international-readiness-checklist";
const TITLE = fitTitle("International Readiness Checklist for SMEs");
const DESCRIPTION = fitDescription(
  "A 15-point checklist for SMEs preparing a website to win customers in other countries: markets, site structure, localisation, technical SEO and enquiries.",
);

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    type: "article",
    siteName: "Werrise Digital Ltd",
    url: PATH,
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function ChecklistPage() {
  const visible = CHECKLIST.slice(0, CHECKLIST_VISIBLE_COUNT);
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${SITE_URL}${PATH}#webpage`,
      url: `${SITE_URL}${PATH}`,
      name: "International Readiness Checklist for SMEs",
      description: DESCRIPTION,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      publisher: { "@id": `${SITE_URL}/#organization` },
      dateModified: CHECKLIST_UPDATED,
      inLanguage: "en-GB",
    },
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Resources", path: "/resources" },
      { name: "International Readiness Checklist", path: PATH },
    ]),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(jsonLd) }} />
      <Navbar />
      <main className="flex-1 pt-16">
        <section className="bg-white border-b border-neutral-100 py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="text-xs text-neutral-500 mb-6">
              <Link href="/resources" className="hover:text-neutral-900">Resources</Link>
            </nav>
            <h1 className="text-3xl lg:text-5xl font-light text-neutral-900 leading-tight mb-5">
              International Readiness Checklist for SMEs
            </h1>
            <p className="text-xs text-neutral-500">
              By Werrise Digital · Updated <time dateTime={CHECKLIST_UPDATED}>{CHECKLIST_UPDATED_LABEL}</time>
            </p>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-6 lg:px-8 py-12 md:py-16 space-y-12">
          <section className="bg-neutral-50 border border-neutral-200 p-6 sm:p-8">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-neutral-400 mb-3">Short answer</p>
            <p className="text-base text-neutral-800 leading-relaxed">
              A website is ready to win customers abroad when it has researched markets and keywords, a clear
              structure for each country and language, content written for each market, sound technical
              foundations, and an enquiry process that records where every request came from. This checklist
              has {CHECKLIST.length} points across those five areas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-neutral-900 mb-4">How to use this checklist</h2>
            <p className="text-neutral-600 leading-relaxed">
              Go through the points in order and mark what is done, partly done or missing. Start with up to
              three target markets, and fix the structural points before you write more content. It is general
              guidance for SMEs, not legal or professional advice, and results depend on many factors and are
              not guaranteed. The first {CHECKLIST_VISIBLE_COUNT} points are below, and the rest unlock with
              your email.
            </p>
          </section>

          <section>
            <ol className="space-y-6">
              {visible.map((item) => (
                <li key={item.id}>
                  <p className="text-xs font-semibold tracking-[0.15em] uppercase text-neutral-400 mb-2">{item.group}</p>
                  <h3 className="text-base font-semibold text-neutral-900 mb-1">
                    {item.id}. {item.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{item.body}</p>
                  {item.guide && (
                    <Link href={item.guide.href} className="text-xs text-neutral-500 underline underline-offset-4 hover:text-neutral-900">
                      {item.guide.label}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </section>

          <ChecklistGate />
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
