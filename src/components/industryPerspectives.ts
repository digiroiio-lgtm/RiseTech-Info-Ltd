export type IndustryPerspective = {
  industry: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  /**
   * Proposed statement, pending the individual's written approval.
   * Set to true only once approval is confirmed; unapproved entries are never rendered.
   */
  approved: boolean;
};

export const industryPerspectives: IndustryPerspective[] = [
  {
    industry: "Lead Generation",
    name: "Barış Yasbala",
    role: "Owner",
    company: "Multiligo · Lead Generation Agency",
    quote:
      "In lead generation, speed and consistency make a real difference. AI-powered workflows help us organise incoming enquiries, automate routine customer communication and keep follow-ups moving. It means less time spent on repetitive tasks and more attention on building client relationships and growing campaigns.",
    approved: false,
  },
  {
    industry: "Architecture",
    name: "Yiğit Kadıoğlu",
    role: "Architect",
    company: "Kadarchitect",
    quote:
      "In architecture, every project begins with communication. From initial client enquiries to proposals and project updates, AI-assisted workflows help us organise leads, streamline follow-ups and manage daily operations more efficiently, while keeping the personal approach our clients expect.",
    approved: false,
  },
  {
    industry: "Advisory",
    name: "Deniz Erdoğan",
    role: "Founder & Advisor",
    company: "Advisera Global",
    quote:
      "Advisory work depends on staying informed and acting at the right time. Structured AI workflows can help manage email follow-ups, monitor industry news and identify emerging business opportunities. The real advantage is turning scattered information into clear priorities and actionable next steps.",
    approved: false,
  },
  {
    industry: "Hospitality",
    name: "Sinem Yumuk",
    role: "Brand Consultant",
    company: "HoReCa Sector",
    quote:
      "In hospitality, operational details can easily get lost between teams, locations and daily priorities. AI-supported monitoring and structured workflows can make it easier to spot issues, organise follow-ups and keep management informed. For restaurants, cafés and hotels, better visibility creates more time to focus on service quality and the guest experience.",
    approved: false,
  },
];
