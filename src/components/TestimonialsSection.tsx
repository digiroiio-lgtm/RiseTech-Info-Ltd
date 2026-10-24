import Link from "next/link";
import { testimonials } from "@/lib/testimonials";

const featured = testimonials.slice(0, 4);

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-24 lg:py-32 border-t border-neutral-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16 lg:mb-20">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4">
              Client Feedback
            </p>
            <h2 className="text-3xl lg:text-4xl font-light text-neutral-900">
              What clients say.
            </h2>
          </div>
          <Link
            href="/love"
            className="text-xs font-semibold tracking-widest uppercase text-neutral-500 hover:text-neutral-900 transition-colors duration-200 whitespace-nowrap"
          >
            See All Reviews →
          </Link>
        </div>

        {/* Testimonial grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {featured.map((t) => (
            <div
              key={t.id}
              className="border border-neutral-200 bg-neutral-50 p-8 flex flex-col justify-between hover:border-neutral-400 transition-colors duration-300"
            >
              <div>
                <div className="flex gap-0.5 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-3.5 h-3.5 fill-neutral-900"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-sm text-neutral-700 leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>
              <div className="pt-4 border-t border-neutral-200">
                <p className="text-sm font-semibold text-neutral-900">
                  {t.name}
                </p>
                <p className="text-xs text-neutral-500 mt-0.5">
                  {t.title}, {t.company}
                </p>
                <p className="text-xs text-neutral-400 mt-1 border border-neutral-200 inline-block px-2 py-0.5 mt-2">
                  {t.service}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* See more CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/love"
            className="inline-flex items-center justify-center px-8 py-4 border border-neutral-300 text-neutral-900 text-sm font-medium tracking-wide hover:border-neutral-900 hover:bg-neutral-50 transition-all duration-200"
          >
            See All {testimonials.length} Reviews on Our Wall of Love →
          </Link>
        </div>
      </div>
    </section>
  );
}
