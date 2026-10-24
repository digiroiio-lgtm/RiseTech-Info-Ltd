import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — RiseTech Advisory",
  description:
    "Privacy Policy for wealwaysrise.com — how RiseTech Info Ltd collects, uses, and protects your personal data.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated="2026"
      sections={[
        {
          heading: "1. Information We Collect",
          paragraphs: ["We may collect:"],
          items: [
            "name",
            "email address",
            "billing information",
            "payment data (processed by Stripe)",
            "website usage data",
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
            "process payments",
            "deliver advisory services",
            "improve the website",
            "communicate with customers",
            "provide support",
          ],
        },
        {
          heading: "3. Third-Party Services",
          paragraphs: ["We may use third-party tools including:"],
          items: [
            "Stripe (payments)",
            "analytics tools",
            "cloud hosting services",
          ],
          subsections: [
            {
              heading: "",
              paragraphs: [
                "These services may process limited user data necessary for operation.",
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
        },
        {
          heading: "6. Your Rights",
          paragraphs: [
            "Depending on jurisdiction, users may have rights including:",
          ],
          items: [
            "access to personal data",
            "correction of data",
            "deletion requests",
            "withdrawal of consent",
          ],
          subsections: [
            {
              heading: "",
              paragraphs: [
                "Requests can be sent to: support@wealwaysrise.com",
              ],
            },
          ],
        },
        {
          heading: "7. Cookies",
          paragraphs: [
            "We may use cookies to improve user experience and website performance.",
            "Users may disable cookies through browser settings.",
          ],
        },
      ]}
    />
  );
}
