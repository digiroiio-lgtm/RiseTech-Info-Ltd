import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { INFORMATION_DISCLAIMER } from "@/lib/services";

export const metadata: Metadata = {
  title: "Terms and Conditions — Werrise Digital Ltd",
  description:
    "Terms and Conditions for purchasing services from Werrise Digital Ltd through wealwaysrise.com: orders, payment, delivery, cancellation, liability and governing law.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms and Conditions"
      lastUpdated="25 October 2026"
      sections={[
        {
          heading: "1. Who We Are",
          paragraphs: [
            "These Terms apply to all purchases made on wealwaysrise.com (the \"Website\") from Werrise Digital Ltd (\"we\", \"us\", \"our\").",
            "Legal entity: Werrise Digital Ltd, a company registered in England and Wales.",
            "Company number: 16345678",
            "Registered office: 85 Great Portland Street, London, W1W 7LT, United Kingdom",
            "Website: wealwaysrise.com",
            "Customer support: support@wealwaysrise.com",
          ],
          subsections: [
            {
              heading: "Proposed UK SIC Classifications",
              paragraphs: [
                "The business activities Werrise Digital Ltd intends to carry on are described using the following UK Standard Industrial Classification (SIC 2007) codes. They are proposed classifications and have not yet been confirmed against the Companies House register.",
              ],
              items: [
                "70229: Management consultancy activities other than financial management",
                "62020: Information technology consultancy activities",
                "62012: Business and domestic software development",
                "73110: Advertising agencies",
              ],
            },
          ],
        },
        {
          heading: "2. Acceptance of These Terms",
          paragraphs: [
            "By placing an order or using the Website you agree to these Terms, our Privacy Policy, our Refund Policy and our Billing Policy.",
            "You must be at least 18 years old and able to enter into a binding contract. If you buy on behalf of a business, you confirm you are authorised to do so.",
            "If you do not agree with these Terms, please do not use the Website or place an order.",
          ],
        },
        {
          heading: "3. Our Services",
          paragraphs: [
            "We provide AI-powered business solutions, digital transformation support, growth strategy, advisory and market intelligence services, including written reports and consulting deliverables.",
            "Our services fall into four areas: business and management consultancy; AI and technology consultancy; software and digital product development; and digital marketing and growth. Fixed-price consulting packages and reports are sold at checkout. Software development and marketing work are quoted per project and agreed in writing.",
            "Each service is described on the Services page and at checkout, including its price. Services are professional consulting services and specific results are not guaranteed.",
          ],
        },
        {
          heading: "4. Orders and Contract",
          paragraphs: [
            "To order, select a service at checkout, accept these Terms and pay through Stripe. Your order is an offer to buy the service.",
            "A contract is formed between you and Werrise Digital Ltd when your payment is confirmed and you receive a payment receipt from Stripe or a confirmation from us.",
            "We may decline or cancel an order, for example if a service is unavailable, a price was shown in error, or we suspect fraud. If we do, we will refund any amount you have paid.",
          ],
        },
        {
          heading: "5. Prices and Payment",
          paragraphs: [
            "Prices are shown in GBP and include VAT where applicable. The price shown at checkout is the total you pay.",
            "Payment is taken in full when you place the order. Payments are processed securely by Stripe Payments Europe Ltd, and we do not see or store your full card details.",
            "By paying you confirm that you are authorised to use the payment method and that the billing information you provide is accurate.",
            "We may change our prices at any time. A change does not affect an order you have already paid for.",
          ],
        },
        {
          heading: "6. Delivery",
          paragraphs: [
            "Services are supplied by Werrise Digital Ltd. We may use qualified subcontractors or specialist advisors to help deliver a service, and we remain responsible to you for its delivery.",
            "Work begins once payment is confirmed and we have contacted you, normally within 1 business day (Monday to Friday, 09:00 to 17:30 GMT). Delivery typically takes 5 to 15 business days from your confirmation, depending on scope, and we confirm the timeline with you before work starts.",
            "Written reports and other deliverables are delivered digitally, normally by email. If we need information from you to complete a service, the delivery time may be extended until you provide it.",
          ],
        },
        {
          heading: "7. Your Right to Cancel and Refunds",
          paragraphs: [
            "If you are a consumer, you have a 14-day right to cancel under UK law. If you ask us to start the service within that period, you agree to pay for the service provided up to the point you cancel, and if the service is fully performed within the period you lose the right to cancel.",
            "Cancellation and refund terms are set out in full in our Refund Policy. Your statutory rights are not affected by these Terms.",
          ],
        },
        {
          heading: "8. Retainers and Custom Engagements",
          paragraphs: [
            "Ongoing retainers and custom engagements are not sold through online checkout.",
            "Their price, payment schedule, scope and cancellation terms are agreed in writing before any payment is taken and are set out in our proposal or order confirmation.",
          ],
        },
        {
          heading: "9. Your Responsibilities",
          paragraphs: [
            "You agree to provide accurate information, to cooperate with reasonable requests, and to use the Website and our deliverables lawfully.",
            "You are responsible for your own business decisions and for deciding how to use our deliverables.",
          ],
        },
        {
          heading: "10. Intellectual Property",
          paragraphs: [
            "The Website and all its content, brand assets, frameworks, reports and advisory materials are owned by Werrise Digital Ltd or its licensors.",
            "When you pay for a report or deliverable, we grant you a non-exclusive, non-transferable licence to use it for your own internal business purposes. You may not copy, redistribute, publish or resell it without our written permission.",
          ],
        },
        {
          heading: "11. Information Only, Not Regulated Advice",
          paragraphs: [
            INFORMATION_DISCLAIMER,
            "We are not authorised by the Financial Conduct Authority and do not carry on regulated activities. Nothing on the Website or in our deliverables is an offer, invitation or recommendation to buy, sell or hold any investment, or legal, tax or accounting advice.",
          ],
        },
        {
          heading: "12. Limitation of Liability",
          paragraphs: [
            "Nothing in these Terms limits or excludes our liability for death or personal injury caused by our negligence, for fraud or fraudulent misrepresentation, or for anything else that cannot be limited by law, and your statutory consumer rights are unaffected.",
            "Subject to that, we are not liable for loss of profit, revenue, business or goodwill, or for indirect or consequential loss, and we are not liable for losses caused by decisions you make based on our services.",
            "Subject to the first paragraph, our total liability to you for any claim relating to a service is limited to the amount you paid for that service.",
          ],
        },
        {
          heading: "13. Payment Disputes and Chargebacks",
          paragraphs: [
            "If you have a problem with a charge, please contact support@wealwaysrise.com first. We will investigate and respond within 5 business days.",
            "If a payment dispute is opened without contacting us, we may provide Stripe and your bank with records of the order and delivery, and we may pause further work on that order until the dispute is resolved.",
          ],
        },
        {
          heading: "14. Events Outside Our Control",
          paragraphs: [
            "We are not liable for delay or failure caused by events outside our reasonable control. If such an event continues for a long period, you may cancel the affected order and receive a refund for any part of the service we have not delivered.",
          ],
        },
        {
          heading: "15. Complaints",
          paragraphs: [
            "If you are not satisfied, please email support@wealwaysrise.com with your order details. We aim to acknowledge complaints within 2 business days and to reply in full within 14 days.",
          ],
        },
        {
          heading: "16. Privacy",
          paragraphs: [
            "How we use your personal data is explained in our Privacy Policy at wealwaysrise.com/privacy.",
          ],
        },
        {
          heading: "17. Changes to These Terms",
          paragraphs: [
            "We may update these Terms from time to time. The version in force when you place an order applies to that order. The date of the latest update is shown at the top of this page.",
          ],
        },
        {
          heading: "18. General and Governing Law",
          paragraphs: [
            "These Terms, together with the Privacy, Refund and Billing Policies, are the entire agreement between you and us about your order.",
            "If any part of these Terms is found to be unenforceable, the rest remains in force.",
            "These Terms are governed by the laws of England and Wales, and the courts of England and Wales have jurisdiction, except that if you are a consumer living elsewhere in the UK you may also bring proceedings in your local courts.",
          ],
        },
      ]}
    />
  );
}
