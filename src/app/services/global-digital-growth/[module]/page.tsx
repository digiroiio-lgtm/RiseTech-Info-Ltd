import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { GG_CTA_LABEL, GG_MODELS_NOTE, GG_PATH } from "@/lib/globalGrowth";
import { GG_MODULE_PAGES, GG_MODULE_PAGES_BY_SLUG } from "@/lib/globalGrowthModules";
import { SITE_URL, breadcrumbJsonLd, jsonLdString } from "@/lib/jsonLd";
import { fitDescription, fitTitle } from "@/lib/seo";

type Props = { params: Promise<{ module: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return GG_MODULE_PAGES.map((m) => ({ module: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { module } = await params;
  const page = GG_MODULE_PAGES_BY_SLUG[module];
  if (!page) return {};
  const title = fitTitle(page.seoTitle);
  const description = fitDescription(page.seoDescription);
  const path = `${GG_PATH}/${page.slug}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: "Werrise Digital Ltd",
      url: path,
      title,
      description,
    },
  };
}

const label = "text-xs font-semibold tracking-[0.15em] uppercase text-neutral-400 mb-4";

export default async function GlobalGrowthModulePage({ params }: Props) {
  const { module } = await params;
  const page = GG_MODULE_PAGES_BY_SLUG[module];
  if (!page) notFound();

  const path = `${GG_PATH}/${page.slug}`;
  const related = page.related.map((s) => GG_MODULE_PAGES_BY_SLUG[s]).filter(Boolean);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.name,
      serviceType: page.name,
      description: page.seoDescription,
      url: `${SITE_URL}${path}`,
      provider: { "@id": `${SITE_URL}/#organization` },
      isPartOf: { "@type": "Service", name: "Global Digital Growth", url: `${SITE_URL}${GG_PATH}` },
      audience: { "@type": "Audience", audienceType: "Small and medium-sized businesses" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "Global Digital Growth", path: GG_PATH },
      { name: page.name, path },
    ]),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(jsonLd) }}
      />
      <Navbar />
      <main className="flex-1 pt-16">
        <section className="bg-white border-b border-neutral-100 py-12 md:py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="text-xs text-neutral-500 mb-6">
              <Link href={GG_PATH} className="hover:text-neutral-900">
                Global Digital Growth
              </Link>{" "}
              / <span>{page.name}</span>
            </nav>
            <p className={label}>Global Digital Growth</p>
            <h1 className="text-3xl lg:text-5xl font-light text-neutral-900 leading-tight mb-6">
              {page.h1}
            </h1>
            <p className="text-lg font-light text-neutral-600 leading-relaxed mb-8">
              {page.summary}
            </p>
            <Link
              href={`${GG_PATH}#review`}
              className="inline-flex items-center justify-center px-8 py-4 bg-neutral-900 text-white text-sm font-medium tracking-wide hover:bg-neutral-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2"
            >
              {GG_CTA_LABEL}
            </Link>
            <p className="text-xs text-neutral-500 mt-4">{GG_MODELS_NOTE}</p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12 md:py-16 space-y-14">
          <section>
            <h2 className={label}>The problem</h2>
            <ul className="space-y-2">
              {page.problem.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-neutral-600 leading-relaxed">
                  <span className="w-1 h-1 rounded-full bg-neutral-400 flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className={label}>What we do</h2>
            <div className="grid sm:grid-cols-2 gap-px bg-neutral-100">
              {page.included.map((item) => (
                <div key={item.title} className="bg-white p-6">
                  <h3 className="text-base font-semibold text-neutral-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className={label}>Who it is for</h2>
            <ul className="space-y-2">
              {page.whoFor.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-neutral-600 leading-relaxed">
                  <span className="w-1 h-1 rounded-full bg-neutral-400 flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className={label}>FAQ</h2>
            <dl className="space-y-7">
              {page.faq.map((f) => (
                <div key={f.q}>
                  <dt className="text-base font-semibold text-neutral-900 mb-2">{f.q}</dt>
                  <dd className="text-sm text-neutral-500 leading-relaxed">{f.a}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section>
            <h2 className={label}>Part of Global Digital Growth</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href={GG_PATH} className="border border-neutral-200 p-5 hover:border-neutral-900 transition-colors duration-300">
                <span className="block text-sm font-semibold text-neutral-900">Global Digital Growth</span>
                <span className="block text-xs text-neutral-500 mt-1">Overview and request form</span>
              </Link>
              {related.map((r) => (
                <Link key={r.slug} href={`${GG_PATH}/${r.slug}`} className="border border-neutral-200 p-5 hover:border-neutral-900 transition-colors duration-300">
                  <span className="block text-sm font-semibold text-neutral-900">{r.name}</span>
                  <span className="block text-xs text-neutral-500 mt-1">Module</span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
