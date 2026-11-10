import Link from "next/link";
import {
  HOME_ANSWER_BLOCKS,
  HOME_LAST_UPDATED,
  HOME_LAST_UPDATED_LABEL,
} from "@/lib/homeContent";

export default function HomeAnswerSection() {
  return (
    <section
      aria-label="About Werrise Digital"
      className="bg-neutral-50 border-y border-neutral-100 py-12 md:py-16 lg:py-20"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <p className="text-xs text-neutral-500 mb-8">
          Last updated:{" "}
          <time dateTime={HOME_LAST_UPDATED}>{HOME_LAST_UPDATED_LABEL}</time>
        </p>
        <div className="space-y-12">
          {HOME_ANSWER_BLOCKS.map((block) => (
            <article key={block.id} id={block.id}>
              <h2 className="text-2xl lg:text-3xl font-light text-neutral-900 mb-4">
                {block.heading}
              </h2>
              <p className="text-base text-neutral-800 leading-relaxed mb-4">
                {block.opener}
              </p>
              {block.paragraphs.map((p) => (
                <p key={p} className="text-sm text-neutral-600 leading-relaxed mb-4">
                  {p}
                </p>
              ))}
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {block.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-xs font-semibold tracking-widest uppercase text-neutral-500 hover:text-neutral-900"
                    >
                      {l.label} →
                    </Link>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
