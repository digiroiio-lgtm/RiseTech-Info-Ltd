import Link from "next/link";

interface ServiceCardProps {
  slug: string;
  title: string;
  description: string;
  price: string;
  showCheckoutLink?: boolean;
}

export default function ServiceCard({
  slug,
  title,
  description,
  price,
  showCheckoutLink = false,
}: ServiceCardProps) {
  return (
    <div className="group border border-neutral-200 bg-white p-8 flex flex-col justify-between hover:border-neutral-900 hover:shadow-sm transition-all duration-300">
      {/* Top */}
      <div>
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-base font-semibold text-neutral-900 leading-snug">
            {title}
          </h3>
        </div>
        <p className="text-sm text-neutral-500 leading-relaxed mb-6">
          {description}
        </p>
      </div>

      {/* Bottom */}
      <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
        <span className="text-xl font-light text-neutral-900">{price}</span>
        {showCheckoutLink ? (
          <Link
            href={`/checkout?service=${slug}`}
            className="text-xs font-semibold tracking-widest uppercase text-neutral-500 group-hover:text-neutral-900 transition-colors duration-200 underline-offset-4 hover:underline"
          >
            Select &amp; Pay →
          </Link>
        ) : (
          <a
            href="#contact"
            className="text-xs font-semibold tracking-widest uppercase text-neutral-500 group-hover:text-neutral-900 transition-colors duration-200 underline-offset-4 hover:underline"
          >
            Learn More →
          </a>
        )}
      </div>
    </div>
  );
}

