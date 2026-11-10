import { HOME_FAQ } from "@/lib/homeContent";

export default function HomeFaqSection() {
  return (
    <section className="bg-white border-t border-neutral-100 py-12 md:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h2 className="text-2xl lg:text-3xl font-light text-neutral-900 mb-8">
          Frequently asked questions
        </h2>
        <dl className="space-y-6">
          {HOME_FAQ.map((item) => (
            <div key={item.q}>
              <dt className="text-base font-semibold text-neutral-900 mb-1">
                {item.q}
              </dt>
              <dd className="text-sm text-neutral-600 leading-relaxed">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
