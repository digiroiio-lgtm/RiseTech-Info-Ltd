import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service — RiseTech Information Ltd",
  description:
    "Terms and conditions governing the use of RiseTech Information Ltd services.",
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="8 April 2026">
      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and
        use of the advisory, consulting, and information services
        (&ldquo;Services&rdquo;) provided by <strong>RiseTech Information Ltd</strong>,
        a company registered in England and Wales. By purchasing or accessing
        our Services you agree to be bound by these Terms.
      </p>

      <h2>1. Services</h2>
      <p>
        RiseTech Information Ltd provides strategic advisory, market
        intelligence, growth strategy, and founder consulting services to
        businesses and individuals. The scope of each engagement is defined in
        the applicable order form, proposal, or statement of work agreed between
        the parties.
      </p>

      <h2>2. Eligibility</h2>
      <p>
        You must be at least 18 years of age and have the legal authority to
        enter into contracts in your jurisdiction to purchase our Services. By
        placing an order you represent that these conditions are met.
      </p>

      <h2>3. Payment</h2>
      <p>
        All fees are quoted in GBP (British Pounds) unless otherwise specified.
        Payments are processed securely through Stripe. By providing your
        payment information, you authorise us to charge the applicable fees.
        Full payment terms, including subscription billing cycles where
        applicable, are set out in our{" "}
        <a href="/billing">Billing Policy</a>.
      </p>

      <h2>4. Intellectual Property</h2>
      <p>
        All reports, analyses, frameworks, and materials delivered to you
        (&ldquo;Deliverables&rdquo;) are licensed to you for your internal
        business use only. You may not resell, redistribute, or sublicense
        Deliverables without our prior written consent. RiseTech Information Ltd
        retains all underlying intellectual property rights.
      </p>

      <h2>5. Confidentiality</h2>
      <p>
        Each party agrees to keep confidential any non-public information
        disclosed by the other party in connection with the Services and to use
        such information only for the purpose of receiving or providing the
        Services.
      </p>

      <h2>6. Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the Services for any unlawful or fraudulent purpose</li>
        <li>
          Attempt to reverse-engineer, copy, or reproduce proprietary
          methodologies
        </li>
        <li>
          Share access credentials or Deliverables with unauthorised third
          parties
        </li>
        <li>
          Use the Services in any way that could damage our reputation or
          business
        </li>
      </ul>

      <h2>7. Limitation of Liability</h2>
      <p>
        Our Services provide strategic information and advisory opinions.
        They do not constitute legal, financial, or investment advice. We are
        not liable for any business decisions made in reliance on our
        Deliverables. To the maximum extent permitted by law, our total
        liability to you shall not exceed the fees paid in the three months
        preceding the claim.
      </p>

      <h2>8. Disclaimers</h2>
      <p>
        The Services are provided &ldquo;as is&rdquo;. We make no warranties,
        express or implied, regarding accuracy, completeness, or fitness for a
        particular purpose. Market conditions change; forward-looking analysis
        is inherently uncertain.
      </p>

      <h2>9. Termination</h2>
      <p>
        Either party may terminate an engagement with written notice as set out
        in the applicable order form. Termination does not relieve you of any
        outstanding payment obligations. Our refund policy is set out at{" "}
        <a href="/refund">Refund Policy</a>.
      </p>

      <h2>10. Governing Law</h2>
      <p>
        These Terms are governed by the laws of England and Wales. Any disputes
        shall be subject to the exclusive jurisdiction of the courts of England
        and Wales.
      </p>

      <h2>11. Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. We will notify you of
        material changes by email or by posting the updated Terms on this page
        with a revised &ldquo;Last updated&rdquo; date. Continued use of the
        Services after changes constitutes acceptance.
      </p>

      <h2>12. Contact</h2>
      <p>
        Questions about these Terms should be directed to{" "}
        <a href="mailto:legal@risetech.info">legal@risetech.info</a> or via our{" "}
        <a href="/contact">Contact page</a>.
      </p>
    </LegalLayout>
  );
}
