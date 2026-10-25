const serviceGroups = [
  {
    label: "Business & Management Consultancy",
    description:
      "Business strategy, growth planning, commercial development, operational improvement, process optimisation and management advisory.",
    items: [
      "Business Strategy",
      "Go-To-Market Planning",
      "Export & Market Entry",
      "Market Intelligence Reports",
    ],
  },
  {
    label: "AI & Technology Consultancy",
    description:
      "AI adoption, digital transformation, workflow automation, systems integration and technology implementation.",
    items: [
      "AI Adoption",
      "Workflow Automation",
      "Digital Transformation",
      "Systems Integration",
    ],
  },
  {
    label: "Software & Digital Product Development",
    description:
      "Business software, SaaS applications, web platforms, digital products and custom software solutions.",
    items: [
      "Business Software",
      "SaaS & Web Platforms",
      "Dashboard Systems",
      "Custom Software",
    ],
  },
  {
    label: "Digital Marketing & Growth",
    description:
      "SEO, digital advertising, lead generation, campaign management, marketing automation and performance optimisation.",
    items: [
      "SEO",
      "Digital Advertising",
      "Lead Generation",
      "Marketing Automation",
    ],
  },
];

export default function WhatWeDoSection() {
  return (
    <section className="bg-white py-14 md:py-20 lg:py-32 border-t border-neutral-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 md:mb-14 lg:mb-20">
          <p className="text-xs font-normal tracking-[0.2em] uppercase text-neutral-400 mb-6">
            What We Do
          </p>
          <h2 className="text-4xl sm:text-6xl lg:text-8xl font-light text-neutral-900 max-w-4xl leading-tight">
            Four service areas. One digital consultancy.
          </h2>
        </div>

        {/* Group blocks */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-100">
          {serviceGroups.map((group, i) => (
            <div
              key={group.label}
              className="bg-white p-6 sm:p-8 flex flex-col gap-5 sm:gap-6 group hover:bg-neutral-50 transition-colors duration-300"
            >
              <span className="text-xs font-mono text-neutral-300">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-base font-semibold text-neutral-900 mb-3">
                  {group.label}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {group.description}
                </p>
              </div>
              <ul className="space-y-1.5 mt-auto">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-neutral-400">
                    <span className="w-1 h-1 rounded-full bg-neutral-300 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-6 max-w-3xl text-xs text-neutral-500 leading-relaxed">
          Fixed-price consulting packages and reports can be bought online.
          Software development, marketing campaigns and retainers are quoted per
          project and agreed in writing. We do not currently offer
          subscriptions. Results depend on many factors and are not guaranteed.
        </p>
      </div>
    </section>
  );
}
