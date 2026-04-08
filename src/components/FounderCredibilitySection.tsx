const team = [
  {
    initials: "OY",
    name: "Oguz Y.",
    title: "Founder & Managing Director",
    credentials: [
      "10+ years in international trade strategy",
      "Former export advisor to UKEF-backed programmes",
      "Led market entry for 30+ companies across EU, MENA & Asia",
    ],
    focus: "Export Strategy · Market Intelligence · Investor Advisory",
  },
  {
    initials: "HB",
    name: "Huseyin B.",
    title: "Head of Technology & Systems",
    credentials: [
      "Background in data engineering & BI architecture",
      "Built dashboard systems for retail, logistics and SaaS",
      "Specialist in programmatic SEO and growth infrastructure",
    ],
    focus: "Dashboard Systems · Programmatic SEO · Loyalty Platforms",
  },
  {
    initials: "DO",
    name: "Dimitri O.",
    title: "Senior Strategy Analyst",
    credentials: [
      "Former strategy consultant, Big Four background",
      "Specialist in competitive intelligence and market sizing",
      "MBA, London Business School",
    ],
    focus: "Startup Strategy · Go-To-Market · BI Reports",
  },
];

const credentials = [
  { value: "10+", label: "Years in B2B consulting" },
  { value: "50+", label: "Strategy engagements delivered" },
  { value: "15+", label: "Countries covered across export projects" },
  { value: "£120M+", label: "Client revenue influenced" },
];

export default function FounderCredibilitySection() {
  return (
    <section className="bg-neutral-950 text-white py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-500 mb-4">
            Our Team
          </p>
          <h2 className="text-3xl lg:text-4xl font-light text-white max-w-xl">
            Senior practitioners, not junior analysts.
          </h2>
          <p className="text-neutral-400 mt-4 max-w-xl text-base leading-relaxed">
            Every engagement is led by experienced operators who have built,
            scaled, and advised real businesses — not recent graduates working
            from templates.
          </p>
        </div>

        {/* Team cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {team.map((member) => (
            <div
              key={member.name}
              className="border border-neutral-800 p-8 flex flex-col gap-6 hover:border-neutral-600 transition-colors duration-200"
            >
              {/* Avatar initials */}
              <div className="w-12 h-12 bg-neutral-800 flex items-center justify-center">
                <span className="text-sm font-semibold text-neutral-300 tracking-wide">
                  {member.initials}
                </span>
              </div>

              {/* Name & title */}
              <div>
                <p className="text-base font-semibold text-white">
                  {member.name}
                </p>
                <p className="text-xs text-neutral-500 mt-0.5">{member.title}</p>
              </div>

              {/* Credentials */}
              <ul className="space-y-2 flex-1">
                {member.credentials.map((c) => (
                  <li key={c} className="flex items-start gap-2.5 text-xs text-neutral-400">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-neutral-600 flex-shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>

              {/* Focus areas */}
              <div className="pt-4 border-t border-neutral-800">
                <p className="text-xs text-neutral-600">{member.focus}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Firm-level credentials bar */}
        <div className="border-t border-neutral-800 pt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((c) => (
            <div key={c.label}>
              <p className="text-2xl lg:text-3xl font-light text-white mb-1">
                {c.value}
              </p>
              <p className="text-xs text-neutral-500">{c.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
