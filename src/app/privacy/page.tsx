import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — RiseTech Information Ltd",
  description:
    "How RiseTech Information Ltd collects, uses, and protects your personal data.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="8 April 2026">
      <p>
        This Privacy Policy explains how <strong>RiseTech Information Ltd</strong>{" "}
        (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) collects, uses,
        and protects personal data when you use our website or purchase our
        Services. We are committed to compliance with the UK GDPR and the Data
        Protection Act 2018.
      </p>

      <h2>1. Data Controller</h2>
      <p>
        RiseTech Information Ltd is the data controller for personal data
        collected through this website. Contact us at{" "}
        <a href="mailto:privacy@risetech.info">privacy@risetech.info</a> for any
        data protection enquiries.
      </p>

      <h2>2. Data We Collect</h2>
      <p>We may collect the following categories of personal data:</p>
      <ul>
        <li>
          <strong>Identity data:</strong> name, job title, company name
        </li>
        <li>
          <strong>Contact data:</strong> email address, phone number, postal
          address
        </li>
        <li>
          <strong>Financial data:</strong> billing address and payment card
          details (processed by Stripe — we do not store card numbers)
        </li>
        <li>
          <strong>Transaction data:</strong> details of services purchased and
          payment history
        </li>
        <li>
          <strong>Usage data:</strong> information about how you use our website
          (IP address, browser type, pages visited)
        </li>
        <li>
          <strong>Communication data:</strong> emails and messages you send us
        </li>
      </ul>

      <h2>3. How We Use Your Data</h2>
      <p>We use your personal data to:</p>
      <ul>
        <li>Provide and deliver the Services you have purchased</li>
        <li>Process payments and manage your account</li>
        <li>Send service-related communications and invoices</li>
        <li>Respond to enquiries and support requests</li>
        <li>Comply with legal and regulatory obligations</li>
        <li>
          Send marketing communications where you have given consent (you may
          opt out at any time)
        </li>
        <li>Improve our website and services</li>
      </ul>

      <h2>4. Legal Basis for Processing</h2>
      <ul>
        <li>
          <strong>Contract performance:</strong> processing necessary to deliver
          the Services
        </li>
        <li>
          <strong>Legitimate interests:</strong> fraud prevention, security,
          improving our services
        </li>
        <li>
          <strong>Legal obligation:</strong> tax records, anti-money laundering
        </li>
        <li>
          <strong>Consent:</strong> marketing emails
        </li>
      </ul>

      <h2>5. Payment Processing</h2>
      <p>
        Payments are processed by <strong>Stripe, Inc.</strong> Stripe acts as
        a data processor on our behalf and as an independent data controller for
        fraud prevention purposes. Card data is transmitted directly to Stripe
        and never stored on our servers. Stripe&rsquo;s privacy policy is
        available at{" "}
        <a
          href="https://stripe.com/gb/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          stripe.com/gb/privacy
        </a>
        .
      </p>

      <h2>6. Data Sharing</h2>
      <p>
        We do not sell your personal data. We may share it with:
      </p>
      <ul>
        <li>Stripe (payment processing)</li>
        <li>
          Professional advisors (lawyers, accountants) under confidentiality
          obligations
        </li>
        <li>Regulatory authorities where required by law</li>
        <li>
          Service providers who process data on our behalf under data processing
          agreements
        </li>
      </ul>

      <h2>7. Data Retention</h2>
      <p>
        We retain personal data only as long as necessary for the purposes
        described above, or as required by law. Financial records are retained
        for 7 years in accordance with UK tax law. We will delete or anonymise
        your data upon request where no legal obligation requires retention.
      </p>

      <h2>8. Your Rights</h2>
      <p>Under UK GDPR you have the right to:</p>
      <ul>
        <li>Access the personal data we hold about you</li>
        <li>Rectify inaccurate data</li>
        <li>Erasure (&ldquo;right to be forgotten&rdquo;) in certain circumstances</li>
        <li>Restrict processing in certain circumstances</li>
        <li>Data portability</li>
        <li>Object to processing based on legitimate interests</li>
        <li>Withdraw consent for marketing at any time</li>
      </ul>
      <p>
        To exercise any right, contact{" "}
        <a href="mailto:privacy@risetech.info">privacy@risetech.info</a>. You
        also have the right to lodge a complaint with the Information
        Commissioner&rsquo;s Office (ICO) at{" "}
        <a
          href="https://ico.org.uk"
          target="_blank"
          rel="noopener noreferrer"
        >
          ico.org.uk
        </a>
        .
      </p>

      <h2>9. Cookies</h2>
      <p>
        Our website uses essential cookies required for site functionality. We
        do not use third-party tracking or advertising cookies. You can manage
        cookie preferences through your browser settings.
      </p>

      <h2>10. Security</h2>
      <p>
        We implement appropriate technical and organisational measures to
        protect your personal data against unauthorised access, loss, or
        disclosure. All data is transmitted over encrypted HTTPS connections.
      </p>

      <h2>11. International Transfers</h2>
      <p>
        Stripe may process payment data outside the UK/EEA. Such transfers are
        subject to appropriate safeguards including Standard Contractual Clauses.
      </p>

      <h2>12. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy periodically. We will notify you of
        significant changes by email or by posting a notice on our website.
      </p>

      <h2>13. Contact</h2>
      <p>
        For privacy enquiries, contact us at{" "}
        <a href="mailto:privacy@risetech.info">privacy@risetech.info</a> or via
        our <a href="/contact">Contact page</a>.
      </p>
    </LegalLayout>
  );
}
