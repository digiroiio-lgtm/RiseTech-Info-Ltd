"use client";

import { useState } from "react";
import styles from "./DigitalProductsSection.module.css";
import IndustryPerspectives from "./IndustryPerspectives";

const productName = "AI Daily Assistant & Operations Masterclass";

const audiences = [
  {
    role: "Agency Owners",
    title: "The AI Daily Assistant for Agency Owners",
    description:
      "Bring structure to client replies, campaign reviews and reporting across your agency.",
    workflows: [
      "Prepare a reply for Client B",
      "Review Agency A’s campaign summary",
      "Draft the weekly client report",
    ],
  },
  {
    role: "Consultants",
    title: "The AI Daily Assistant for Consultants",
    description:
      "Turn research, proposals and client follow-ups into a repeatable consulting routine.",
    workflows: [
      "Research Client B’s market",
      "Outline a consulting proposal",
      "Prepare a client follow-up",
    ],
  },
  {
    role: "Virtual Assistants",
    title: "The AI Operations Toolkit for Virtual Assistants",
    description:
      "Organise inbox management, task coordination and reporting around a clear daily routine.",
    workflows: [
      "Triage Client B’s inbox",
      "Coordinate the team’s task list",
      "Prepare a daily status report",
    ],
  },
  {
    role: "Small Business Owners",
    title: "The AI Daily Assistant for Small Business Owners",
    description:
      "Give customer enquiries, quotations and daily priorities a more organised place in your day.",
    workflows: [
      "Draft a customer enquiry reply",
      "Prepare a quotation for Client B",
      "Prioritise today’s outstanding tasks",
    ],
  },
  {
    role: "Sales Professionals",
    title: "The AI Sales & Follow-Up Assistant",
    description:
      "Connect prospect research, reply preparation and lead follow-up in one practical routine.",
    workflows: [
      "Research a prospect at Agency A",
      "Prepare a reply to a sales enquiry",
      "Draft a lead follow-up sequence",
    ],
  },
  {
    role: "Travel & Event Professionals",
    title: "The AI Daily Assistant for Travel & Event Professionals",
    description:
      "Structure supplier comparisons, multilingual communication and event coordination.",
    workflows: [
      "Compare Supplier C’s event proposal",
      "Translate an accommodation enquiry",
      "Prepare a guest coordination checklist",
    ],
  },
  {
    role: "Clinic Coordinators",
    title: "The AI Daily Assistant for Clinic Coordinators",
    description:
      "Support administrative enquiries, appointment coordination and routine follow-ups.",
    workflows: [
      "Draft an administrative enquiry reply",
      "Prepare an appointment reminder",
      "Organise outstanding booking follow-ups",
    ],
  },
];

const curriculum = [
  [
    "Build Your Daily AI Assistant",
    "Set up a guided assistant in your own compatible AI tools with clear instructions and boundaries.",
  ],
  [
    "Plan Your Day",
    "Turn priorities, messages and outstanding tasks into a practical daily plan.",
  ],
  [
    "Manage Your Inbox",
    "Group incoming messages, identify priorities and prepare responses for review.",
  ],
  [
    "Reply to Customer Messages",
    "Draft clear, context-aware replies using anonymized demonstration enquiries.",
  ],
  [
    "Follow Up with Leads",
    "Organise next steps and prepare timely follow-up messages for your approval.",
  ],
  [
    "Create Quotes & Proposals",
    "Structure a quote or proposal from a brief and check the details before sharing.",
  ],
  [
    "Research Prospects & Competitors",
    "Build a source-based research brief and distinguish evidence from assumptions.",
  ],
  [
    "Compare Suppliers & Offers",
    "Compare scope, pricing and terms in a consistent decision-ready format.",
  ],
  [
    "Review Campaigns & Websites",
    "Review supplied campaign data and website content to identify potential improvements.",
  ],
  [
    "Create & Translate Content",
    "Prepare and adapt content across languages while checking tone and accuracy.",
  ],
  [
    "Turn Dashboards into Reports",
    "Summarise supplied dashboard data into a clear report with next steps.",
  ],
  [
    "Review, Approve & Execute",
    "Use a final review checklist and approval boundaries before taking action.",
  ],
];

const inclusions = [
  [
    "01",
    "12 practical workflows",
    "Repeatable processes for everyday operations.",
  ],
  [
    "02",
    "Complete video training",
    "Guided walkthroughs from setup to review.",
  ],
  ["03", "Editable templates", "Adaptable starting points for your own work."],
  [
    "04",
    "Anonymized case studies",
    "Context and lessons with identifying details removed.",
  ],
  [
    "05",
    "Daily AI assistant setup kit",
    "A guided setup in your own compatible tools.",
  ],
  [
    "06",
    "Ready-to-use task instructions",
    "Clear briefs, context and review checkpoints.",
  ],
  [
    "07",
    "Daily & weekly operating routines",
    "A structure for planning, follow-ups and reporting.",
  ],
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path
        d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h16m-6-6 6 6-6 6"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WindowBar({ label }: { label: string }) {
  return (
    <div className={styles.windowBar}>
      <span className={styles.windowDots} aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span>{label}</span>
      <span aria-hidden="true">↗</span>
    </div>
  );
}

function WorkspacePreview() {
  return (
    <figure className={styles.preview} aria-labelledby="workspace-caption">
      <div className={styles.workspaceComposition}>
        <div className={`${styles.window} ${styles.briefWindow}`}>
          <WindowBar label="Daily brief" />
          <div className={styles.sideContent}>
            <p className={styles.microLabel}>START WITH CLARITY</p>
            <h3>Your Daily Brief</h3>
            <p className={styles.windowSubtext}>
              A little structure for a busy day.
            </p>
            <ul className={styles.briefList}>
              <li>
                <span aria-hidden="true">01</span>Review incoming enquiries
              </li>
              <li>
                <span aria-hidden="true">02</span>Prepare a client reply
              </li>
              <li>
                <span aria-hidden="true">03</span>Draft the weekly report
              </li>
            </ul>
            <div className={styles.smallTag}>Plan → Prepare → Review</div>
          </div>
        </div>
        <div className={`${styles.window} ${styles.workflowWindow}`}>
          <WindowBar label="Workflow library" />
          <div className={styles.sideContent}>
            <p className={styles.microLabel}>FROM BRIEF TO NEXT STEP</p>
            <h3>Workflow Preview</h3>
            <div className={styles.workflowTile}>
              <span>08 / SUPPLIERS</span>
              <strong>Compare supplier proposals</strong>
              <p>Supplier C · Fictional scenario</p>
            </div>
            <div className={styles.workflowSteps}>
              <span>Define the brief</span>
              <span>Compare the details</span>
              <span>Review your next step</span>
            </div>
          </div>
        </div>
        <div className={`${styles.window} ${styles.mainWindow}`}>
          <WindowBar label="Your workspace" />
          <div className={styles.mainContent}>
            <div className={styles.workspaceHeading}>
              <span className={styles.assistantIcon} aria-hidden="true">
                ✳
              </span>
              <span className={styles.microLabel}>
                YOUR DAY, WITH DIRECTION
              </span>
            </div>
            <h3>Your AI Workspace</h3>
            <p className={styles.windowSubtext}>
              Good work starts with a clear brief.
            </p>
            <div className={styles.promptCard}>
              <span className={styles.microLabel}>EXAMPLE TASK</span>
              <p>Prepare a client reply</p>
              <span>Client B · Agency A</span>
            </div>
            <div className={styles.responseCard}>
              <span className={styles.responseLabel}>
                <span aria-hidden="true">✳</span> Draft approach
              </span>
              <p>
                Summarise the enquiry. Confirm the scope. Outline the next
                steps.
              </p>
              <div className={styles.reviewPill}>
                <span aria-hidden="true">✓</span> Review before sending
              </div>
            </div>
            <div className={styles.workspaceFooter}>
              <span>Context → Draft → Your approval</span>
              <Arrow />
            </div>
          </div>
        </div>
      </div>
      <figcaption id="workspace-caption">
        <span className={styles.captionDot} aria-hidden="true" />
        Illustrative workflow preview
        <span>Fictional demonstration data, not a verified case study.</span>
      </figcaption>
    </figure>
  );
}

export default function DigitalProductsSection() {
  const [selected, setSelected] = useState(0);
  const audience = audiences[selected];
  // The existing site uses email enquiries; this opens a draft, never a registration.
  const enquiryHref = `mailto:support@wealwaysrise.com?subject=${encodeURIComponent(`Launch enquiry: ${productName}`)}&body=${encodeURIComponent(`Hello Werrise Digital,\n\nI would like to enquire about the launch of ${productName}.\n\nMy audience: ${audience.role}\n\nPlease share more information when available.\n\nName:\nCompany (optional):\n`)}`;

  return (
    <section
      id="digital-products"
      aria-labelledby="digital-products-heading"
      className={styles.section}
    >
      <div className={styles.container}>
        <div className={styles.sectionTop}>
          <p className={styles.eyebrow}>DIGITAL PRODUCTS / COMING SOON</p>
          <span className={styles.status}>
            <span aria-hidden="true" />
            In development
          </span>
        </div>
        <div className={styles.hero}>
          <div className={styles.heroCopy}>
            <h2 id="digital-products-heading">
              Make AI part of your working day<span>.</span>
            </h2>
            <p className={styles.description}>
              A practical masterclass and daily assistant setup kit for managing
              messages, research, follow-ups and reporting with AI.
            </p>
            <p className={styles.productName}>{productName}</p>
            <p className={styles.supporting}>
              12 practical workflows. Video training. Editable templates.
              Anonymized case studies.
            </p>
            <div className={styles.actions}>
              <a href={enquiryHref} className={styles.primary}>
                Enquire About Launch
                <Arrow diagonal />
              </a>
              <a href="#planned-curriculum" className={styles.secondary}>
                Explore the Curriculum
                <Arrow />
              </a>
            </div>
            <p className={styles.note}>
              Training and setup resources. Third-party AI tools and
              subscriptions are separate.
            </p>
          </div>
          <WorkspacePreview />
        </div>
        <div className={styles.package}>
          <div className={styles.subsectionIntro}>
            <p className={styles.eyebrow}>THE PLANNED PACKAGE</p>
            <h3>
              One toolkit.
              <br />A more considered routine.
            </h3>
            <p>
              All inclusions are in development. No course materials are
              available yet.
            </p>
          </div>
          <ul className={styles.inclusionList}>
            {inclusions.map(([number, title, description]) => (
              <li key={number}>
                <span className={styles.itemNumber}>{number}</span>
                <div>
                  <h4>{title}</h4>
                  <p>{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.audiences}>
          <div className={styles.audienceIntro}>
            <div>
              <p className={styles.eyebrow}>BUILT AROUND YOUR WORK</p>
              <h3>Find your everyday advantage.</h3>
            </div>
            <p>One complete toolkit, with examples relevant to your role.</p>
          </div>
          <div
            className={styles.chips}
            role="group"
            aria-label="Choose your audience"
          >
            {audiences.map((item, index) => (
              <button
                key={item.role}
                type="button"
                aria-pressed={selected === index}
                aria-controls="audience-preview"
                onClick={() => setSelected(index)}
              >
                {item.role}
              </button>
            ))}
          </div>
          <div
            id="audience-preview"
            className={styles.audiencePreview}
            aria-live="polite"
            aria-atomic="true"
          >
            <div>
              <p className={styles.microLabel}>
                YOUR ROLE. THE SAME COMPLETE TOOLKIT.
              </p>
              <h4>{audience.title}</h4>
              <p>{audience.description}</p>
              <span className={styles.samePackage}>
                Same complete package for every role
              </span>
            </div>
            <div className={styles.examples}>
              <p className={styles.microLabel}>ILLUSTRATIVE WORKFLOWS</p>
              <ul>
                {audience.workflows.map((workflow) => (
                  <li key={workflow}>
                    <Arrow />
                    {workflow}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <IndustryPerspectives />
        <div id="planned-curriculum" className={styles.curriculum}>
          <div className={styles.curriculumIntro}>
            <div>
              <p className={styles.eyebrow}>A PRACTICAL PATH</p>
              <h3>Planned Curriculum</h3>
            </div>
            <p>
              12 workflows, from your first setup to your final review. The
              curriculum is being developed and may be refined.
            </p>
          </div>
          <div className={styles.curriculumGrid}>
            {curriculum.map(([title, description], index) => (
              <details key={title}>
                <summary>
                  <span className={styles.itemNumber}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h4>{title}</h4>
                  <span className={styles.plus} aria-hidden="true" />
                </summary>
                <p>{description}</p>
              </details>
            ))}
          </div>
        </div>
        <div className={styles.launch}>
          <div>
            <p className={styles.eyebrow}>YOUR NEXT WORKING DAY, REIMAGINED</p>
            <h3>Better routines start here.</h3>
            <p>Enquire about the launch for {audience.role.toLowerCase()}.</p>
          </div>
          <div className={styles.launchAction}>
            <a href={enquiryHref} className={styles.primary}>
              Enquire About Launch
              <Arrow diagonal />
            </a>
            <p>
              Opens an email draft. Send it to make your enquiry.
              <br />
              No payment or registration is taken here.
            </p>
            <a href="/contact" className={styles.contactLink}>
              Other ways to contact us
            </a>
          </div>
        </div>
        <p className={styles.setupNote}>
          The daily assistant is a guided setup within your own compatible AI
          tools, not a separate hosted software subscription. Third-party tools
          and subscriptions are purchased separately.
        </p>
      </div>
    </section>
  );
}
