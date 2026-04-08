import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms and Conditions — RiseTech Advisory",
  description:
    "Terms and Conditions governing your use of wealwaysrise.com and services provided by RISETECH INFO LTD.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms and Conditions"
      lastUpdated="2026"
      sections={[
        {
          heading: "1. Company Information",
          paragraphs: [
            "Legal Entity: RISETECH INFO LTD.",
            "Company Number: 14876900",
            "Registered Office: 71-75 Shelton Street, Covent Garden, London, United Kingdom, WC2H 9JQ",
            "Website: wealwaysrise.com",
            "Support: support@wealwaysrise.com",
          ],
        },
        {
          heading: "2. Acceptance of Terms",
          paragraphs: [
            "By accessing or purchasing services from wealwaysrise.com, you agree to these Terms and Conditions.",
            "If you do not agree with these terms, you must not use this website or purchase services.",
          ],
        },
        {
          heading: "3. Services",
          paragraphs: [
            "RiseTech provides strategic advisory, consulting, and market intelligence services.",
            "Services may include but are not limited to:",
          ],
          items: [
            "executive advisory",
            "growth strategy consulting",
            "market intelligence",
            "startup advisory",
            "business strategy consultation",
            "advisory marketplace access",
          ],
          subsections: [
            {
              heading: "",
              paragraphs: [
                "Services are provided as professional consulting services and results are not guaranteed.",
              ],
            },
          ],
        },
        {
          heading: "4. Marketplace Advisory Services",
          paragraphs: [
            "Some services listed on the website may be provided by independent advisors or consultants.",
            "RiseTech acts as a platform and facilitator for advisory services.",
            "RiseTech is not responsible for:",
          ],
          items: [
            "actions of independent advisors",
            "business decisions made based on advice",
            "financial or operational outcomes",
          ],
        },
        {
          heading: "5. Payments",
          paragraphs: [
            "All payments are processed securely via Stripe.",
            "By purchasing a service you agree that:",
          ],
          items: [
            "payment is authorized",
            "you are the legal cardholder",
            "billing information is accurate",
          ],
          subsections: [
            {
              heading: "",
              paragraphs: [
                "Prices are displayed in GBP unless stated otherwise.",
                "RiseTech reserves the right to modify pricing at any time.",
              ],
            },
          ],
        },
        {
          heading: "6. Subscription Services",
          paragraphs: [
            "Certain services may be billed as recurring subscriptions.",
            "By purchasing a subscription you agree that:",
          ],
          items: [
            "the subscription renews automatically",
            "payment will be charged periodically",
            "cancellation must occur before the next billing cycle",
          ],
          subsections: [
            {
              heading: "",
              paragraphs: [
                "Subscription billing terms are detailed in the Billing Policy.",
              ],
            },
          ],
        },
        {
          heading: "7. Refunds",
          paragraphs: [
            "Advisory services are generally non-refundable once the engagement has started.",
            "Refund eligibility is governed by the Refund Policy.",
          ],
        },
        {
          heading: "8. Intellectual Property",
          paragraphs: [
            "All content on the website including:",
          ],
          items: [
            "brand assets",
            "content",
            "frameworks",
            "advisory materials",
          ],
          subsections: [
            {
              heading: "",
              paragraphs: [
                "remain the intellectual property of RiseTech Info Ltd unless explicitly stated otherwise.",
                "Content may not be copied, redistributed, or resold without written permission.",
              ],
            },
          ],
        },
        {
          heading: "9. Limitation of Liability",
          paragraphs: ["RiseTech shall not be liable for:"],
          items: [
            "business losses",
            "investment losses",
            "indirect damages",
            "decisions made based on advisory services",
          ],
          subsections: [
            {
              heading: "",
              paragraphs: [
                "Total liability is limited to the amount paid for the service.",
              ],
            },
          ],
        },
        {
          heading: "10. Disclaimer",
          paragraphs: [
            "Advisory services are provided for informational and strategic purposes only.",
            "RiseTech does not provide:",
          ],
          items: [
            "legal advice",
            "financial investment advice",
            "regulated financial services",
          ],
          subsections: [
            {
              heading: "",
              paragraphs: [
                "Clients are responsible for their own business decisions.",
              ],
            },
          ],
        },
        {
          heading: "11. Chargebacks",
          paragraphs: [
            "If a payment dispute or chargeback is initiated without contacting support first, RiseTech reserves the right to:",
          ],
          items: [
            "suspend services",
            "terminate accounts",
            "dispute the chargeback",
          ],
          subsections: [
            {
              heading: "",
              paragraphs: ["Support contact: support@wealwaysrise.com"],
            },
          ],
        },
        {
          heading: "12. Governing Law",
          paragraphs: [
            "These Terms shall be governed by the laws of England and Wales.",
          ],
        },
      ]}
    />
  );
}
