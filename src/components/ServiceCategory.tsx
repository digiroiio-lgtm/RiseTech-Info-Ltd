import ServiceCard from "./ServiceCard";

interface Service {
  title: string;
  description: string;
  price: string;
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
    <div className="mb-24 lg:mb-32">
      {/* Category header */}
      <div className="flex items-baseline gap-6 mb-2">
        <span className="text-xs font-semibold tracking-[0.2em] text-neutral-400 uppercase">
          {indexStr}
        </span>
        <h2 className="text-2xl lg:text-3xl font-light text-neutral-900">
          {name}
        </h2>
      </div>
      <div className="ml-[3.5rem] mb-10">
        <p className="text-sm text-neutral-400 leading-relaxed">{tagline}</p>
        <div className="mt-4 h-px w-12 bg-neutral-200" />
      </div>

      {/* Service cards grid */}
      <div className="ml-0 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((svc) => (
          <ServiceCard
            key={svc.title}
            title={svc.title}
            description={svc.description}
            price={svc.price}
          />
        ))}
      </div>
    </div>
  );
}
