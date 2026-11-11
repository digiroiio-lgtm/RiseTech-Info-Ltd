import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { GUIDES, GUIDES_BY_SLUG } from "@/lib/guides";
import { SITE_URL, breadcrumbJsonLd, jsonLdString } from "@/lib/jsonLd";
import { fitDescription, fitTitle } from "@/lib/seo";
import InlineCta from "@/components/InlineCta";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const g = GUIDES_BY_SLUG[slug];
  if (!g) return {};
  return {
    title: fitTitle(g.title),
    description: fitDescription(g.description),
    alternates: { canonical: `/guides/${g.slug}` },
    openGraph: {
      type: "article",
      siteName: "Werrise Digital Ltd",
      url: `/guides/${g.slug}`,
      title: g.title,
      description: g.description,
      publishedTime: g.published,
      modifiedTime: g.updated,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const label = "text-xs font-semibold tracking-[0.15em] uppercase text-neutral-400 mb-4";

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const g = GUIDES_BY_SLUG[slug];
  if (!g) notFound();

  const url = `${SITE_URL}/guides/${g.slug}`;
  const related = g.relatedGuides.map((s) => GUIDES_BY_SLUG[s]).filter(Boolean);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: g.title,
      description: g.description,
      datePublished: g.published,
      dateModified: g.updated,
      mainEntityOfPage: url,
      author: { "@id": `${SITE_URL}/#organization` },
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: g.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Guides", path: "/guides" },
      { name: g.title, path: `/guides/${g.slug}` },
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
        <section className="bg-white border-b border-neutral-100 py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="text-xs text-neutral-500 mb-6">
              <Link href="/guides" className="hover:text-neutral-900">
                Guides
              </Link>
            </nav>
            <h1 className="text-3xl lg:text-5xl font-light text-neutral-900 leading-tight mb-5">
              {g.title}
            </h1>
            <p className="text-xs text-neutral-500">
              By Werrise Digital · Updated {formatDate(g.updated)} · {g.readTime} min read
            </p>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-6 lg:px-8 py-12 md:py-16 space-y-12">
          <section className="bg-neutral-50 border border-neutral-200 p-6 sm:p-8">
            <p className={label}>Short answer</p>
            <p className="text-base text-neutral-800 leading-relaxed">{g.answer}</p>
          </section>

          {g.sections.map((s) => (
            <section key={s.heading}>
              <h2 className="text-2xl font-light text-neutral-900 mb-4">{s.heading}</h2>
              {s.paragraphs?.map((p) =>
                p.startsWith("<") ? (
                  <pre
                    key={p}
                    className="bg-neutral-50 border border-neutral-200 p-3 mb-3 text-xs text-neutral-800 overflow-x-auto"
                  >
                    <code>{p}</code>
                  </pre>
                ) : (
                  <p key={p} className="text-neutral-600 leading-relaxed mb-4">{p}</p>
                ),
              )}
              {s.items && (
                <ul className="space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className="flex gap-3 text-neutral-600 leading-relaxed">
                      <span className="w-1 h-1 rounded-full bg-neutral-400 flex-shrink-0 mt-2.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <section>
            <h2 className="text-2xl font-light text-neutral-900 mb-4">FAQ</h2>
            <dl className="space-y-6">
              {g.faq.map((f) => (
                <div key={f.q}>
                  <dt className="font-semibold text-neutral-900 mb-1">{f.q}</dt>
                  <dd className="text-neutral-600 leading-relaxed">{f.a}</dd>
                </div>
              ))}
            </dl>
          </section>

          <InlineCta
            source={`guide-${g.slug}`.slice(0, 50)}
            heading="Need help applying this to your business?"
            body="Tell us about your website and the markets you want to reach. We will suggest where to start. The first Global Visibility Review is free."
            extra={g.relatedLinks[0]}
          />

          <section className="border-t border-neutral-100 pt-10">
            <p className={label}>How we can help</p>
            <ul className="space-y-2 mb-8">
              {g.relatedLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-neutral-900 underline underline-offset-4 hover:text-neutral-600">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-xs text-neutral-500">
              General information, not legal or professional advice. Search
              engines and AI tools change often and results are not guaranteed.
            </p>
          </section>

          {related.length > 0 && (
            <section>
              <p className={label}>More guides</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/guides/${r.slug}`}
                    className="border border-neutral-200 p-5 hover:border-neutral-900 transition-colors duration-300"
                  >
                    <span className="text-sm font-semibold text-neutral-900">{r.title}</span>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
