import ServiceCard from "./ServiceCard";
import CollapsibleCategory from "./CollapsibleCategory";

interface Service {
  slug?: string;
  title: string;
  description: string;
  price?: string;
}

interface ServiceCategoryProps {
  index: number;
  name: string;
  tagline: string;
  services: Service[];
}

export default function ServiceCategory({
  index,
  name,
  tagline,
  services,
}: ServiceCategoryProps) {
  const indexStr = String(index).padStart(2, "0");
  return (
    <CollapsibleCategory
      className="md:mb-20 lg:mb-32"
      openClassName="mb-12 border-b border-neutral-200 pb-8 md:border-0 md:pb-0"
      closedClassName="mb-0 border-b border-neutral-200 py-5 md:border-0 md:py-0"
      meta={`${services.length} ${services.length === 1 ? "service" : "services"}`}
      header={
        <>
          <div className="flex items-baseline gap-4 md:gap-6 mb-2">
            <span className="text-xs font-semibold tracking-[0.2em] text-neutral-400 uppercase">
              {indexStr}
            </span>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-neutral-900">
              {name}
            </h2>
          </div>
          <div className="ml-[2.75rem] md:ml-[3.5rem]">
            <p className="text-sm text-neutral-400 leading-relaxed">{tagline}</p>
            <div className="mt-4 h-px w-12 bg-neutral-200 hidden md:block" />
          </div>
        </>
      }
    >
      {/* Service cards grid */}
      <div className="mt-6 md:mt-10 ml-0 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((svc) => (
          <ServiceCard
            key={svc.slug ?? svc.title}
            slug={svc.slug}
            title={svc.title}
            description={svc.description}
            price={svc.price}
          />
        ))}
      </div>
    </CollapsibleCategory>
  );
}
