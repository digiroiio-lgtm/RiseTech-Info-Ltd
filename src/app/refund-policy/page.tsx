import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Refund Policy — RiseTech Advisory",
  description:
    "Refund Policy for services purchased through wealwaysrise.com.",
};

export default function RefundPolicyPage() {
  return (
    <LegalPage
      title="Refund Policy"
      lastUpdated="2026"
      sections={[
        {
          heading: "1. Advisory Services",
          paragraphs: [
            "Advisory and consulting services are non-refundable once the engagement has started.",
            "This includes:",
          ],
          items: [
            "advisory sessions",
            "consulting retainers",
            "strategy services",
          ],
        },
        {
          heading: "2. Subscription Services",
          paragraphs: [
            "Subscription payments are non-refundable for the current billing period.",
            "Cancellation prevents future billing, not past charges.",
          ],
        },
        {
          heading: "3. Exceptional Refunds",
          paragraphs: ["Refunds may be considered only if:"],
          items: [
            "a service was not delivered",
            "a technical error caused double billing",
          ],
          subsections: [
            {
              heading: "",
              paragraphs: [
                "Requests must be submitted within 7 days of the transaction.",
              ],
            },
          ],
        },
        {
          heading: "4. Chargeback Policy",
          paragraphs: [
            "Before initiating a chargeback with your bank, you must contact: support@wealwaysrise.com",
            "Unauthorized chargebacks may lead to service suspension.",
          ],
        },
      ]}
    />
  );
}
