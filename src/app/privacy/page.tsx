import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — Werrise Digital Ltd",
  description:
    "Privacy Policy for wealwaysrise.com: what personal data Werrise Digital Ltd collects, why, who receives it, how long we keep it and your UK GDPR rights.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated="25 October 2026"
      sections={[
        {
          heading: "1. Who We Are",
          paragraphs: [
            "The data controller is Werrise Digital Ltd, Company No. 16345678, registered at 85 Great Portland Street, London, W1W 7LT, United Kingdom.",
            "This policy applies to wealwaysrise.com and to the services you buy from us. You can contact us about your personal data at support@wealwaysrise.com.",
          ],
        },
        {
          heading: "2. Personal Data We Collect",
          paragraphs: ["Depending on how you use the Website, we collect:"],
          items: [
            "contact details: name, email address and phone number (if you provide it)",
            "order details: the service you bought, price paid, order reference and date",
            "billing details: billing address and company name or VAT number if you give them",
            "payment confirmation from Stripe (for example payment status and the last four digits and brand of your card). We never receive or store your full card number",
            "messages and files you send us when you enquire or when we deliver a service",
            "technical data such as IP address, browser type and pages requested, held in server logs",
          ],
        },
        {
          heading: "3. How and Why We Use Your Data",
          paragraphs: ["We use personal data only where we have a lawful basis under UK GDPR:"],
          items: [
            "to take payment, issue receipts and invoices, and deliver the service you bought (performance of our contract with you)",
            "to answer enquiries and provide support (contract, or our legitimate interest in running our business)",
            "to keep the Website secure, prevent fraud and fix errors (legitimate interests)",
            "to keep accounting, tax and legal records (legal obligation)",
            "to send you marketing emails only if you have asked for them (consent), which you can withdraw at any time",
          ],
          subsections: [
            {
              heading: "",
              paragraphs: [
                "We do not sell your personal data, and we do not make decisions about you using solely automated processing.",
              ],
            },
          ],
        },
        {
          heading: "4. Who We Share Data With",
          paragraphs: ["We share personal data only with organisations that help us run the business:"],
          items: [
            "Stripe Payments Europe Ltd and Stripe, Inc. (payment processing, fraud prevention, receipts and invoices). Stripe acts as an independent controller for the payment data it holds; see stripe.com/privacy",
            "hosting, email and infrastructure providers that run the Website and our mailboxes, such as Vercel",
            "professional advisers (accountants, lawyers) and authorities where the law requires it",
            "subcontractors or specialist advisors helping to deliver a service, under confidentiality terms",
          ],
        },
        {
          heading: "5. International Transfers",
          paragraphs: [
            "Some of these providers, including Stripe and Vercel, may process data outside the UK. Where they do, we rely on adequacy regulations or appropriate safeguards such as the UK International Data Transfer Addendum to the EU Standard Contractual Clauses.",
          ],
        },
        {
          heading: "6. How Long We Keep Data",
          paragraphs: [
            "Order, invoice and payment records are kept for 6 years to meet UK tax and company law requirements.",
            "Enquiries and support messages are kept for as long as needed to deal with them and for up to 2 years afterwards. Server logs are kept only for the short period our hosting provider retains them.",
            "When data is no longer needed we delete or anonymise it.",
          ],
        },
        {
          heading: "7. Cookies and Similar Technologies",
          paragraphs: [
            "We do not use advertising or analytics cookies. The Website stores a theme preference (light or dark) in your browser's local storage so it can remember your choice. It is strictly necessary for that feature and is not used to track you.",
            "Stripe may set its own cookies on its hosted payment page for security and fraud prevention. See Stripe's cookie policy for details.",
          ],
        },
        {
          heading: "8. Security",
          paragraphs: [
            "We use appropriate technical and organisational measures, including encrypted connections (HTTPS) and restricted access, to protect personal data. No online transmission is completely secure, so we cannot guarantee absolute security.",
          ],
        },
        {
          heading: "9. Your Rights",
          paragraphs: ["Under UK GDPR you have the right to:"],
          items: [
            "be informed about how we use your data and to access a copy of it",
            "have inaccurate data corrected",
            "ask us to delete your data, in certain cases",
            "restrict or object to our use of your data, in certain cases",
            "receive your data in a portable format, where it applies",
            "withdraw consent at any time where we rely on it",
          ],
          subsections: [
            {
              heading: "",
              paragraphs: [
                "To use these rights, email support@wealwaysrise.com. We will reply within one month and may need to confirm your identity first.",
                "If you are unhappy with how we handle your data, you can complain to the UK Information Commissioner's Office (ico.org.uk). We would appreciate the chance to put things right first.",
              ],
            },
          ],
        },
        {
          heading: "10. Children",
          paragraphs: [
            "Our services are for businesses and adults. We do not knowingly collect personal data from anyone under 18.",
          ],
        },
        {
          heading: "11. Changes to This Policy",
          paragraphs: [
            "We may update this policy from time to time. The date of the latest update is shown at the top of this page.",
          ],
        },
      ]}
    />
  );
}
