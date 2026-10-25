import Link from "next/link";

interface TeamCard {
  initials: string;
  name: string;
  title: string;
  /** Founder card: editorial layout */
  positioning?: string;
  description?: string[];
  tags?: string[];
  /** Other cards: bullet layout */
  credentials?: string[];
  focus?: string;
}

const team: TeamCard[] = [
  {
    initials: "OY",
    name: "Oğuz Yumuk",
    title: "Founder & Managing Director",
    positioning: "Strategic Generalist & Operator",
    description: [
      "Connects business strategy, technology, people and execution to turn complex challenges into practical growth opportunities.",
      "Brings a cross-disciplinary perspective to building scalable businesses, stronger operations and commercially valuable partnerships.",
    ],
    tags: ["Strategy", "Technology", "People", "Execution", "Growth"],
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
  { value: "B2B", label: "Consulting and advisory" },
  { value: "Export", label: "Market entry and expansion planning" },
  { value: "Data", label: "Business and market intelligence" },
  { value: "Growth", label: "Revenue growth & business transformation" },
];

export default function FounderCredibilitySection() {
  return (
    <section className="bg-neutral-950 text-white py-14 md:py-20 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 md:mb-14 lg:mb-20">
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
          {/* Founder story teaser */}
          <p className="text-neutral-500 mt-5 max-w-xl text-sm leading-relaxed">
            The idea behind Werrise Digital was born on an open American highway — a moment
            that captured the philosophy we&apos;d been living for years.
          </p>
          <div className="flex flex-wrap items-center gap-6 mt-3">
            <Link
              href="/founder-story"
              className="inline-flex items-center gap-1.5 text-xs font-medium tracking-widest uppercase text-neutral-400 hover:text-white transition-colors duration-200"
            >
              Read the full story
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/team"
              className="inline-flex items-center gap-1.5 text-xs font-medium tracking-widest uppercase text-neutral-400 hover:text-white transition-colors duration-200"
            >
              Meet the full team
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* Team cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 md:mb-16">
          {team.map((member) =>
            member.description ? (
              <div
                key={member.name}
                className="border border-neutral-800 p-5 sm:p-6 flex flex-col gap-3 hover:border-neutral-600 transition-colors duration-200"
              >
                {/* Name, title and positioning */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 shrink-0 bg-neutral-800 flex items-center justify-center">
                    <span className="text-xs font-semibold text-neutral-300 tracking-wide">
                      {member.initials}
                    </span>
                  </div>
                  <div>
                    <p className="text-base font-semibold text-white">
                      {member.name}
                    </p>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      {member.title}
                    </p>
                  </div>
                </div>
                <p className="text-xs font-medium tracking-wide text-neutral-300">{member.positioning}</p>

                {/* Description */}
                <div className="space-y-2 flex-1">
                  {member.description.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-[13px] text-neutral-400 leading-[1.55]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Expertise tags */}
                <div className="pt-3 border-t border-neutral-800">
                  <p className="text-xs text-neutral-500">
                    {member.tags?.join(" · ")}
                  </p>
                </div>
              </div>
            ) : (
              <div
                key={member.name}
                className="border border-neutral-800 p-6 sm:p-8 flex flex-col gap-5 sm:gap-6 hover:border-neutral-600 transition-colors duration-200"
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
                  {member.credentials?.map((c) => (
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
            ),
          )}
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
