import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms and Conditions — Werrise Digital",
  description:
    "Terms and Conditions governing your use of wealwaysrise.com and services provided by WERRISE DIGITAL LTD",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms and Conditions"
      lastUpdated="25 October 2026"
      sections={[
        {
          heading: "1. Company Information",
          paragraphs: [
            "Legal Entity: WERRISE DIGITAL LTD",
            "Company Number: 16345678",
            "Registered Office: 85 Great Portland Street, London, W1W 7LT, United Kingdom",
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
            "Werrise Digital Ltd provides strategic advisory, consulting, and market intelligence services.",
            "Services may include but are not limited to:",
          ],
          items: [
            "executive advisory",
            "growth strategy consulting",
            "market intelligence",
            "startup advisory",
            "business strategy consultation",
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
          heading: "4. Delivery",
          paragraphs: [
            "Services are supplied by Werrise Digital Ltd. We may use qualified subcontractors or specialist advisors to help deliver a service, and we remain responsible to you for its delivery.",
            "Work begins once payment is confirmed and we have contacted you, normally within 1 business day (Monday to Friday, 09:00 to 17:30 GMT). Delivery typically takes 5 to 15 business days from your confirmation, depending on scope, and we confirm the timeline with you before work starts.",
            "Werrise Digital Ltd is not responsible for:",
          ],
          items: [
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
                "Prices include VAT where applicable. We may change prices at any time; a change does not affect an order you have already paid for.",
              ],
            },
          ],
        },
        {
          heading: "6. Retainers and Custom Engagements",
          paragraphs: [
            "Ongoing retainers and custom engagements are not sold through online checkout.",
            "Their price, payment schedule and cancellation terms are agreed in writing before any payment is taken and are set out in our proposal or order confirmation.",
          ],
        },
        {
          heading: "7. Refunds",
          paragraphs: [
            "Consumers have a 14-day right to cancel under UK law, and refunds are otherwise governed by our Refund Policy.",
            "Your statutory rights are not affected.",
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
                "remain the intellectual property of Werrise Digital Ltd unless explicitly stated otherwise.",
                "Content may not be copied, redistributed, or resold without written permission.",
              ],
            },
          ],
        },
        {
          heading: "9. Limitation of Liability",
          paragraphs: ["Werrise Digital Ltd shall not be liable for:"],
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
            "Werrise Digital Ltd does not provide:",
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
            "If a payment dispute or chargeback is initiated without contacting support first, Werrise Digital Ltd reserves the right to:",
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
