export type InsightCategory =
  | "Market Intelligence"
  | "Startup Strategy"
  | "Growth & SEO"
  | "Investor Intelligence";

export interface Insight {
  slug: string;
  category: InsightCategory;
  title: string;
  excerpt: string;
  date: string; // ISO date string
  readTime: number; // minutes
  body: string; // plain paragraphs separated by \n\n
}

export const insights: Insight[] = [
  {
    slug: "ai-market-size-2026",
    category: "Market Intelligence",
    title: "AI Market Size 2026: Where the Real Growth Is",
    excerpt:
      "Enterprise AI spend is projected to exceed $300B by 2026. But the opportunity isn't uniform — here's where the capital is flowing and which sub-sectors are attracting the most investment.",
    date: "2026-04-28",
    readTime: 6,
    body: `The AI market is not a monolith. When headlines cite a $300 billion market by 2026, they obscure a more important story: the majority of that capital is concentrated in a small number of sectors and use cases.

Infrastructure remains the largest single category. Compute, storage, and networking for AI workloads — driven largely by hyperscaler capex — account for roughly 40% of projected spend. This is not accessible to most founders and is dominated by a handful of players.

The second tier — enterprise AI software — is where the real founder opportunity lies. CRM intelligence, HR workflow automation, legal document analysis, and supply chain optimisation are all sub-sectors where purpose-built vertical SaaS is beating horizontal AI tools.

The third tier — AI services and consulting — is the fastest-growing but most fragmented. Companies are spending heavily on AI implementation, training, and strategy. This is where advisors and boutique firms are carving out significant positioning.

The geographic distribution matters too. North America leads total spend, but Europe is growing faster in regulated sectors: financial services AI, healthcare AI, and public sector AI all represent underserved markets where compliance expertise creates defensible moats.

For founders building in 2026, the strategic question is not "is the market big enough" but "which specific layer of the AI stack can I own with a team of our size." The winners will be those who resist platform ambition and go deep on a specific problem.`,
  },
  {
    slug: "saas-market-entry-uk-vs-us",
    category: "Market Intelligence",
    title: "SaaS Market Entry: UK vs US — A Founder's Comparison",
    excerpt:
      "Both markets are mature and competitive. But the sales cycles, pricing expectations, buyer behaviour, and regulatory environments are fundamentally different. Here's what to factor in before you choose.",
    date: "2026-04-14",
    readTime: 8,
    body: `The question most B2B SaaS founders face when scaling internationally is deceptively simple: UK first or US first? The answer depends less on market size and more on your product, team, and burn tolerance.

Sales cycle length is the most significant operational difference. US enterprise buyers move faster on average — especially in tech-forward sectors like MarTech and HRTech — but expect more polished demos, proof-of-concept agreements, and reference customers before signing. UK enterprise is often slower to evaluate but stickier post-contract.

Pricing expectations diverge sharply. US buyers are conditioned to pay 2–3× what UK buyers accept for equivalent software, but they also expect more — more integrations, more support hours, more customisation. A £500/month tool in the UK often commands $1,500/month in the US with the right packaging.

Regulatory posture matters more than most founders expect. If your product touches personal data — and most SaaS does — the UK's post-Brexit data regime requires different compliance documentation than GDPR and different again from CCPA in California. Factor legal cost into your expansion budget accordingly.

The talent angle is also underrated. Building a UK sales team in London is significantly cheaper than building a US sales team in New York or San Francisco, but the talent pool for enterprise SaaS sales is smaller. Many UK-first companies hit a ceiling at £1–2M ARR before talent constraints force them to open a US office anyway.

Our recommendation for most sub-£3M ARR SaaS companies: validate in the UK first, build your case studies, then cross-sell to US buyers with a remote-first approach. Open a physical US presence only when you have at least three US reference customers to anchor your positioning.`,
  },
  {
    slug: "why-90-percent-startups-fail-gtm",
    category: "Startup Strategy",
    title: "Why 90% of Startups Fail Their Go-To-Market",
    excerpt:
      "Product failure gets most of the blame — but the majority of startup deaths are GTM failures in disguise. Bad channel assumptions, wrong ICP definition, and premature scaling are the real killers.",
    date: "2026-04-07",
    readTime: 7,
    body: `The "product-market fit" narrative has done founders a disservice. Most startups that fail do not fail because their product is bad. They fail because they can't reach the right buyers, at the right time, through a channel that scales.

The most common GTM mistake we see is ICP (Ideal Customer Profile) definition that is too broad. "SMBs in the UK" is not an ICP. "Series A SaaS companies with 10–50 employees in the UK using Salesforce" is an ICP. The difference between these two definitions is the difference between a sales team that can book meetings and one that spends three months in outreach purgatory.

Channel selection is where the second-most founders go wrong. Founders with technical backgrounds default to SEO and content — channels with long feedback loops — before they've validated they can sell at all. Founders with sales backgrounds default to outbound — expensive and unscalable — before they know if they can retain customers. The correct GTM order is: manual sales to validate the pitch, then content to build inbound, then partnership or product-led to scale.

Premature hiring is the third killer. We routinely see founders hire a Head of Sales before they've personally closed ten deals. No sales leader can build a repeatable process from a product that's never been sold by a non-founder. Your GTM motion needs to be founded before it can be hired.

The antidote to all three is disciplined experimentation. Define three ICP hypotheses. Run structured outreach to each for six weeks. Measure response rates, conversion rates, and time-to-close by segment. Only scale what works. This is not a new idea — but very few founders execute it rigorously enough.`,
  },
  {
    slug: "investor-ready-pitch-deck-2026",
    category: "Startup Strategy",
    title: "How to Build an Investor-Ready Pitch Deck in 2026",
    excerpt:
      "The deck that worked in 2021 won't work today. Investors are more rigorous, more sceptical of growth stories, and more focused on unit economics. Here's what's changed and what your deck needs.",
    date: "2026-03-24",
    readTime: 9,
    body: `The funding environment has fundamentally shifted since the peak of 2021. Investors who once wrote term sheets after a single meeting now run three-month diligence processes before committing at seed. Your pitch deck is no longer a story document — it is an evidence document.

The most important change is unit economics scrutiny. In 2021, VCs would happily fund companies burning £500K/month on the promise of future efficiency. Today, any deck without CAC, LTV, payback period, and gross margin figures will be deprioritised. You don't need perfect numbers — you need to demonstrate you understand them and are actively managing them.

Market sizing has also changed. TAM slides built on top-down market research (e.g., "the global HR software market is $30B") are almost universally dismissed. What works is bottom-up sizing: number of addressable companies × your target ACV × realistic penetration rate. Investors want to see you understand the density of your market, not just its total volume.

The team slide is more important than ever, but for different reasons. In 2021, YC credentials and previous exits were sufficient. In 2026, investors want to see unfair advantages that are specific to this problem — domain expertise, proprietary relationships, or regulatory knowledge that competitors can't easily replicate.

Revenue evidence — even early — dramatically changes the conversation. A deck with £30K MRR and a clear trajectory will outperform a pre-revenue deck with a better product story in almost every case. If you have any revenue, make it prominent.

Finally, the ask slide needs more specificity than most founders provide. "Raising £1.5M" is not sufficient. "Raising £1.5M to fund 18 months of runway, hire three engineers, and reach £120K MRR before Series A" signals operational clarity that investors reward.`,
  },
  {
    slug: "programmatic-seo-saas-case-study",
    category: "Growth & SEO",
    title: "Programmatic SEO for SaaS: A Real Case Study",
    excerpt:
      "How one B2B HR SaaS platform grew organic traffic 3× in 90 days without a single piece of editorial content — and how you can replicate the architecture.",
    date: "2026-04-01",
    readTime: 10,
    body: `Programmatic SEO is one of the most underused growth levers in B2B SaaS. The concept is straightforward: instead of publishing one article at a time, you build a system that generates hundreds or thousands of optimised pages at scale using structured data. The results, when the architecture is right, are exceptional.

The case study we'll walk through involves a B2B HR SaaS platform that was spending £28K/month on Google Ads and had plateaued at 3,200 monthly organic sessions for 18 months. Their team had tried blog content, but the editorial cadence was too slow to generate meaningful SEO volume.

The first step was keyword universe mapping. We identified 4,800 high-intent keywords across three page types: comparison pages ("Workday vs [Client Product]"), integration pages ("[Client Product] + Salesforce integration"), and use-case pages ("HR software for construction companies"). Each cluster had different intent signals and required different page architecture.

The second step was building the data layer. Comparison pages required structured competitor data. Integration pages required feature documentation per integration. Use-case pages required industry-specific pain point mapping. We built a content schema that could feed all three page types from a single data model.

The third step was technical implementation. The dev team built Next.js dynamic routes that rendered each page type from the data layer. No editorial involvement was needed per page — only per template. The total build time was 10 weeks.

Results: organic sessions grew from 3,200 to 9,800 monthly in 90 days. Organic-sourced trials increased 140%. Paid spend was reduced by 30%. The key insight is that programmatic SEO is not a content strategy — it is an engineering strategy with content as the output.`,
  },
  {
    slug: "saas-seo-vs-paid-cac",
    category: "Growth & SEO",
    title: "SEO vs Paid CAC: Which Channel Actually Wins for SaaS?",
    excerpt:
      "Paid acquisition gives you speed. SEO gives you compounding returns. The right answer depends on your stage, your sales cycle, and your margin profile — and most founders choose wrong.",
    date: "2026-03-17",
    readTime: 7,
    body: `The paid vs organic debate in SaaS is usually framed as a cost discussion. Paid is expensive; SEO is free. This framing misses the more important variables: speed, scalability, and compounding.

Paid acquisition has three things SEO never will: immediate feedback, exact targeting, and controllable volume. If you are pre-PMF, paid search is how you validate whether anyone is searching for what you sell, and whether they convert when they find it. Running £2,000/month in Google Ads before you invest in content is risk management, not a growth strategy failure.

The CAC comparison becomes more nuanced over time. Paid CAC in B2B SaaS typically runs £80–£400 per trial, depending on ACV and keyword competition. SEO CAC — once the programme is mature — often approaches £10–30 per organic trial. But that comparison ignores the 12–24 month investment required to build an SEO programme that generates meaningful volume.

The compounding effect is where SEO wins decisively at scale. A page that ranks #2 for a high-intent keyword in month 12 continues to generate traffic in month 36 at close to zero marginal cost. Paid CAC does not compound — every month you stop spending, the traffic stops.

The practical framework: use paid acquisition from month zero to validate and generate initial revenue. Begin building SEO infrastructure at month six. By month 18, you should be generating enough organic volume to reduce paid dependency. By month 24–36, your best-performing companies are running 60–70% organic, 30–40% paid.

The mistake most SaaS companies make is treating these as an either/or choice. The answer is almost always both — sequenced correctly.`,
  },
  {
    slug: "what-vcs-look-for-2026",
    category: "Investor Intelligence",
    title: "What VCs Are Actually Looking For in 2026",
    excerpt:
      "The thesis shifts of the last 18 months have changed what investors prioritise at every stage. Growth-at-all-costs is dead. Here's what's replaced it — and how to position accordingly.",
    date: "2026-04-21",
    readTime: 8,
    body: `The venture capital landscape has compressed and recalibrated. After a period of extraordinary capital deployment from 2020 to 2022, followed by sharp correction, the industry is now operating under a different set of assumptions — and founders who are still pitching 2021-era stories are consistently being declined.

At pre-seed and seed, the shift is toward founder-market fit over market size. VCs who once prioritised large TAMs now explicitly ask: "Why you? Why now?" The answers they're looking for are domain expertise, proprietary distribution, or regulatory knowledge — not general business acumen applied to a large market.

At Series A, revenue quality has replaced revenue growth as the primary lens. A company growing 3× year-over-year with 85% gross margins and negative churn will attract more interest than one growing 5× with 60% gross margins and rising CAC. The NRR (Net Revenue Retention) metric has moved from a footnote to a headline figure.

The AI premium is real but narrowing. In 2023–2024, any company with "AI-native" in its deck attracted a valuation premium. In 2026, the premium has migrated to companies with demonstrable AI-driven efficiency metrics — not companies that use AI as a feature wrapper. Investors are asking: "What does AI enable you to do that would be impossible otherwise?"

The defensive moat question has also evolved. Network effects and switching costs remain the most valued moat types, but data moats have become the third category investors actively look for. If your product generates proprietary data that competitors cannot replicate, that is worth highlighting explicitly in your narrative.

Finally, team composition at A is more scrutinised than at seed. Investors now expect a founding team that includes at least one person with the specific operational experience to scale the business — not just to build the product.`,
  },
  {
    slug: "startup-valuation-benchmarks-2026",
    category: "Investor Intelligence",
    title: "Startup Valuation Benchmarks: What's Market in 2026",
    excerpt:
      "Revenue multiples have compressed significantly from 2021 peaks. Here's what you should expect at each stage — and how to frame your valuation conversation with investors.",
    date: "2026-03-10",
    readTime: 6,
    body: `Valuation benchmarks shift with market conditions, and the 2026 landscape is substantially different from what founders experienced two years ago. Understanding current benchmarks helps founders enter fundraising conversations with calibrated expectations rather than anchoring on outdated references.

At pre-seed, valuations are still primarily driven by team and idea quality rather than revenue. Typical pre-seed valuations in the UK market range from £1M–£4M post-money for rounds of £250K–£600K. US pre-seed typically runs 2–3× higher. The primary variables are founder pedigree, market conviction, and whether there is any early traction signal.

At seed, the revenue multiple framework begins to apply. UK seed-stage SaaS companies with £20K–£80K MRR are typically valued at 20–40× ARR — significantly compressed from the 60–80× multiples of 2021. US seed comps run 30–60× ARR. Companies with strong retention metrics (NRR >110%) command the top of the range.

At Series A, the multiple compression has been most pronounced. UK Series A SaaS at £100K–£300K MRR is typically valued at 8–15× ARR forward. Best-in-class companies — those with >120% NRR, low CAC payback (<12 months), and a clear path to 3× growth — can still achieve 15–20× forward ARR, but these are not median outcomes.

The most common valuation mistake founders make is anchoring on a comparable from 2021 or early 2022. The company that raised at 50× ARR two years ago is no longer a useful reference point. Equally, founders undervalue themselves by anchoring on the lowest recent comps — the market has a genuine range, and strong metrics justify premium positioning.

The framing that works: come to the valuation conversation with a bottoms-up justification (e.g., "at £X valuation and £Y raise, we'll have Z months of runway to reach W milestone, which puts us at Series A readiness"), not just a multiple-of-ARR figure. Investors respond better to milestone-linked valuation logic than to market multiple arguments alone.`,
  },
];
