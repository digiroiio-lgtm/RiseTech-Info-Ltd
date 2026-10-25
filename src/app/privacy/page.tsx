import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — Werrise Digital Ltd",
  description:
    "Privacy Policy for wealwaysrise.com — how Werrise Digital Ltd collects, uses, and protects your personal data.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated="25 October 2026"
      sections={[
        {
          heading: "Who We Are",
          paragraphs: [
            "The data controller is Werrise Digital Ltd (trading as RiseTech), Company No. 16345678, registered at 85 Great Portland Street, London, W1W 7LT, United Kingdom.",
            "You can contact us about your personal data at support@wealwaysrise.com.",
          ],
        },
        {
          heading: "1. Information We Collect",
          paragraphs: ["We may collect:"],
          items: [
            "name",
            "email address",
            "billing information",
            "phone number and billing address (if you provide them at checkout)",
            "payment data (processed by Stripe)",
            "messages you send us",
            "basic technical data such as IP address and browser type, held in server logs",
          ],
          subsections: [
            {
              heading: "",
              paragraphs: [
                "Payment information is not stored on our servers.",
                "Payments are securely processed by Stripe Payments Europe Ltd.",
              ],
            },
          ],
        },
        {
          heading: "2. How We Use Information",
          paragraphs: ["Your information may be used to:"],
          items: [
            "process payments and issue receipts and invoices (to perform our contract with you)",
            "deliver advisory services (to perform our contract with you)",
            "communicate with customers and provide support (contract and legitimate interests)",
            "keep the website secure and working (legitimate interests)",
            "meet tax, accounting and legal obligations (legal obligation)",
          ],
        },
        {
          heading: "3. Third-Party Services",
          paragraphs: ["We may use third-party tools including:"],
          items: [
            "Stripe (payments, fraud prevention and receipts)",
            "cloud hosting and email services",
          ],
          subsections: [
            {
              heading: "",
              paragraphs: [
                "These services process data only as needed to provide their service. Some of them, including Stripe, may process data outside the UK; where they do, transfers rely on appropriate safeguards such as the UK International Data Transfer Addendum or an adequacy decision.",
                "We do not sell your personal data.",
              ],
            },
          ],
        },
        {
          heading: "4. Data Security",
          paragraphs: [
            "We implement appropriate technical and organizational measures to protect personal data.",
            "However, no online transmission can be guaranteed to be completely secure.",
          ],
        },
        {
          heading: "5. Data Retention",
          paragraphs: [
            "Personal data is retained only as long as necessary to:",
          ],
          items: [
            "fulfill services",
            "comply with legal obligations",
            "maintain business records",
          ],
          subsections: [
            {
              heading: "",
              paragraphs: [
                "Invoices and payment records are kept for 6 years to meet UK tax and company law requirements. Other enquiry data is kept for as long as it is needed to respond to you.",
              ],
            },
          ],
        },
        {
          heading: "6. Your Rights",
          paragraphs: [
            "Under UK GDPR you have the right to:",
          ],
          items: [
            "access your personal data",
            "have inaccurate data corrected",
            "request deletion of your data",
            "object to or restrict how we use it",
            "data portability",
            "withdraw consent where we rely on it",
          ],
          subsections: [
            {
              heading: "",
              paragraphs: [
                "Requests can be sent to: support@wealwaysrise.com",
                "If you are unhappy with how we handle your data, you can complain to the UK Information Commissioner's Office (ico.org.uk).",
              ],
            },
          ],
        },
        {
          heading: "7. Cookies",
          paragraphs: [
            "We do not use advertising or analytics cookies. The website stores a theme preference (light or dark) in your browser's local storage, which is strictly necessary for the site to remember your choice and is not used to track you.",
            "Stripe may set its own cookies on its hosted payment page for security and fraud prevention. See Stripe's privacy policy for details.",
          ],
        },
      ]}
    />
  );
}
