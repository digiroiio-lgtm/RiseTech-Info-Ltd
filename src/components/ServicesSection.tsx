import ServiceCategory from "./ServiceCategory";
import { SERVICE_CATEGORIES } from "@/lib/services";

interface ServicesSectionProps {
  showCheckoutLinks?: boolean;
}

export default function ServicesSection({
  showCheckoutLinks = false,
}: ServicesSectionProps) {
  return (
    <section id="services" className="bg-white py-24 lg:py-32 border-t border-neutral-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-16 lg:mb-24">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4">
            Services
          </p>
          <h2 className="text-3xl lg:text-4xl font-light text-neutral-900 max-w-xl">
            Strategic services for every stage of growth.
          </h2>
        </div>

        {SERVICE_CATEGORIES.map((cat) => (
          <ServiceCategory
            key={cat.index}
            index={cat.index}
            name={cat.name}
            tagline={cat.tagline}
            services={cat.services}
            showCheckoutLinks={showCheckoutLinks}
          />
        ))}
      </div>
    </section>
  );
}
