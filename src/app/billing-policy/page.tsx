import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Billing & Subscription Policy — RiseTech Advisory",
  description:
    "Billing and Subscription Policy governing recurring payments for services purchased through RiseTech.",
};

export default function BillingPolicyPage() {
  return (
    <LegalPage
      title="Billing & Subscription Policy"
      lastUpdated="2026"
      sections={[
        {
          heading: "1. Billing Cycle",
          paragraphs: [
            "Subscriptions are billed on a monthly or agreed billing cycle.",
          ],
          subsections: [
            {
              heading: "Example",
              paragraphs: ["Executive Strategic Advisory — £10,000 per month"],
            },
          ],
        },
        {
          heading: "2. Automatic Renewal",
          paragraphs: [
            "Subscriptions renew automatically unless cancelled before the next billing date.",
          ],
        },
        {
          heading: "3. Payment Processing",
          paragraphs: [
            "Payments are securely processed via Stripe Checkout.",
            "Accepted methods may include:",
          ],
          items: [
            "credit cards",
            "debit cards",
            "supported digital payment methods",
          ],
        },
        {
          heading: "4. Failed Payments",
          paragraphs: ["If a payment fails:"],
          items: [
            "the system may retry the charge",
            "services may be temporarily suspended",
          ],
        },
        {
          heading: "5. Cancellation",
          paragraphs: [
            "To cancel a subscription contact: support@wealwaysrise.com",
            "Cancellation must occur before the next billing cycle.",
          ],
        },
        {
          heading: "6. Price Changes",
          paragraphs: [
            "RiseTech reserves the right to modify subscription pricing.",
            "Customers will be notified prior to pricing changes affecting active subscriptions.",
          ],
        },
      ]}
    />
  );
}
