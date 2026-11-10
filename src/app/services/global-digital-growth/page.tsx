import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import GlobalGrowthForm from "@/components/GlobalGrowthForm";
import SiteFooter from "@/components/SiteFooter";
import { ILLUSTRATIVE_NOTE } from "@/lib/services";
import { SITE_URL, breadcrumbJsonLd, jsonLdString } from "@/lib/jsonLd";
import {
  GG_CASES,
  GG_CTA_LABEL,
  GG_FAQ,
  GG_MODELS,
  GG_MODELS_NOTE,
  GG_MODULES,
  GG_PATH,
  GG_PROBLEMS,
  GG_STEPS,
} from "@/lib/globalGrowth";

const TITLE = "Global Digital Growth for SMEs — Werrise Digital Ltd";
const DESCRIPTION =
  "Turn your website into an international growth engine: multi-market SEO, Geo-SEO, website transformation and RFQ automation for ambitious SMEs.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: GG_PATH },
  openGraph: {
    type: "website",
    siteName: "Werrise Digital Ltd",
    url: GG_PATH,
    title: TITLE,
    description: DESCRIPTION,
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: GG_FAQ.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Global Digital Growth",
  serviceType: "International SEO, Geo-SEO, website transformation and RFQ automation",
  description: DESCRIPTION,
  url: `${SITE_URL}${GG_PATH}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  audience: { "@type": "Audience", audienceType: "Small and medium-sized businesses" },
};

const breadcrumbs = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Global Digital Growth", path: GG_PATH },
]);

const ctaClass =
  "inline-flex items-center justify-center px-8 py-4 bg-neutral-900 text-white text-sm font-medium tracking-wide hover:bg-neutral-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2";

export default function GlobalDigitalGrowthPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        {/* 1. Hero */}
        <section className="bg-white border-b border-neutral-100 py-12 md:py-20 lg:py-28">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4">
              Global Digital Growth
            </p>
            <h1 className="text-4xl lg:text-6xl font-light text-neutral-900 leading-tight mb-6 max-w-3xl">
              Your Next Market Is Closer Than You Think.
            </h1>
            <p className="text-lg font-light text-neutral-500 leading-relaxed max-w-2xl mb-8">
              We help ambitious SMEs turn their websites into international
              growth engines through multi-market SEO, digital transformation
              and automated lead generation.
            </p>
            <ul className="flex flex-wrap gap-2 mb-10">
              {["International SEO", "Geo-SEO", "Digital Transformation", "RFQ Automation"].map(
                (tag) => (
                  <li
                    key={tag}
                    className="text-xs text-neutral-600 border border-neutral-200 px-3 py-1.5"
                  >
                    {tag}
                  </li>
                ),
              )}
            </ul>
            <a href="#review" className={ctaClass}>
              {GG_CTA_LABEL}
            </a>
            <p className="text-sm text-neutral-500 mt-4">
              Identify your website&apos;s opportunities across three target
              markets.
            </p>
          </div>
        </section>

        {/* 2. Problem */}
        <section className="bg-neutral-50 border-b border-neutral-100 py-12 md:py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4">
              The Problem
            </p>
            <h2 className="text-3xl lg:text-4xl font-light text-neutral-900 mb-10 max-w-2xl">
              Good businesses, invisible abroad.
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {GG_PROBLEMS.map((item) => (
                <div key={item.title}>
                  <h3 className="text-base font-semibold text-neutral-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Solution */}
        <section className="bg-white border-b border-neutral-100 py-12 md:py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4">
              Our Solution
            </p>
            <h2 className="text-3xl lg:text-4xl font-light text-neutral-900 mb-10 max-w-2xl">
              Four modules. One growth system.
            </h2>
            <div className="grid sm:grid-cols-2 gap-px bg-neutral-100">
              {GG_MODULES.map((item, i) => (
                <div key={item.title} className="bg-white p-6 sm:p-8">
                  <span className="text-xs font-mono text-neutral-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-base font-semibold text-neutral-900 mt-3 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. How it works */}
        <section className="bg-neutral-50 border-b border-neutral-100 py-12 md:py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4">
              How It Works
            </p>
            <h2 className="text-3xl lg:text-4xl font-light text-neutral-900 mb-10">
              From review to repeatable enquiries.
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {GG_STEPS.map((item) => (
                <div key={item.step} className="flex gap-4">
                  <span className="text-xs font-mono text-neutral-300 pt-0.5 flex-shrink-0">
                    {item.step}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-neutral-900 mb-1">
                      {item.title}
                    </p>
                    <p className="text-sm text-neutral-500 leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Related case studies */}
        <section className="bg-white border-b border-neutral-100 py-12 md:py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4">
              Related Experience
            </p>
            <h2 className="text-3xl lg:text-4xl font-light text-neutral-900 mb-3">
              Work in export growth and organic search.
            </h2>
            <p className="text-xs text-neutral-500 mb-10 max-w-2xl">
              These engagements were delivered under our existing export and
              SEO services, not under Global Digital Growth. {ILLUSTRATIVE_NOTE}
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {GG_CASES.map((cs) => (
                <Link
                  key={cs.slug}
                  href={`/case-studies/${cs.slug}`}
                  className="group border border-neutral-200 p-6 sm:p-8 hover:border-neutral-900 transition-colors duration-300"
                >
                  <p className="text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-3">
                    {cs.label}
                  </p>
                  <h3 className="text-base font-semibold text-neutral-900 mb-2">
                    {cs.title}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed mb-4">
                    {cs.body}
                  </p>
                  <span className="text-xs font-semibold tracking-widest uppercase text-neutral-500 group-hover:text-neutral-900">
                    Read case study →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Engagement models */}
        <section className="bg-neutral-50 border-b border-neutral-100 py-12 md:py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4">
              Engagement Models
            </p>
            <h2 className="text-3xl lg:text-4xl font-light text-neutral-900 mb-10">
              Start small. Grow when it works.
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {GG_MODELS.map((model) => (
                <div
                  key={model.name}
                  className="bg-white border border-neutral-200 p-6 sm:p-8 flex flex-col"
                >
                  <p className="text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-3">
                    {model.stage}
                  </p>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                    {model.name}
                  </h3>
                  <p className="text-sm text-neutral-500 mb-5">{model.body}</p>
                  <ul className="space-y-2 mt-auto">
                    {model.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-neutral-600"
                      >
                        <span className="w-1 h-1 rounded-full bg-neutral-400 flex-shrink-0 mt-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-6 max-w-3xl text-xs text-neutral-500 leading-relaxed">
              {GG_MODELS_NOTE}
            </p>
          </div>
        </section>

        {/* 7. FAQ */}
        <section className="bg-white border-b border-neutral-100 py-12 md:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4">
              FAQ
            </p>
            <h2 className="text-3xl lg:text-4xl font-light text-neutral-900 mb-10">
              Common questions.
            </h2>
            <dl className="space-y-8">
              {GG_FAQ.map((item) => (
                <div key={item.q}>
                  <dt className="text-base font-semibold text-neutral-900 mb-2">
                    {item.q}
                  </dt>
                  <dd className="text-sm text-neutral-500 leading-relaxed">
                    {item.a}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* 8. CTA + request form */}
        <section id="review" className="bg-neutral-900 text-white py-12 md:py-16 lg:py-20 scroll-mt-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <h2 className="text-2xl lg:text-3xl font-light text-white mb-3">
                Find out where your website can win abroad.
              </h2>
              <p className="text-neutral-400 text-sm max-w-lg mb-4">
                Send us your website and up to three target countries. We
                review them and get back to you. If it is a good fit, we offer
                a 30-minute strategy call.
              </p>
              <p className="text-neutral-500 text-xs max-w-lg">
                Prefer email? Write to{" "}
                <a href="mailto:support@wealwaysrise.com" className="underline underline-offset-2">
                  support@wealwaysrise.com
                </a>
                .
              </p>
            </div>
            <GlobalGrowthForm />
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLdString([faqJsonLd, serviceJsonLd, breadcrumbs]),
          }}
        />
      </main>
      <SiteFooter />
    </>
  );
}
