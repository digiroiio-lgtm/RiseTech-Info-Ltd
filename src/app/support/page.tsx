import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Support — RiseTech Information Ltd",
  description:
    "Get help with your RiseTech Information Ltd advisory services.",
};

export default function SupportPage() {
  return (
    <LegalLayout title="Support" lastUpdated="8 April 2026">
      <p>
        We are committed to providing responsive, high-quality support for all
        clients of <strong>RiseTech Information Ltd</strong>. This page explains
        how to get help and what to expect.
      </p>

      <h2>Contacting Support</h2>
      <p>
        The fastest way to reach our team is by email. We aim to respond to all
        enquiries within <strong>1 business day</strong> (Monday–Friday,
        09:00–17:30 GMT).
      </p>
      <ul>
        <li>
          <strong>General enquiries:</strong>{" "}
          <a href="mailto:advisory@risetech.info">advisory@risetech.info</a>
        </li>
        <li>
          <strong>Billing &amp; payments:</strong>{" "}
          <a href="mailto:billing@risetech.info">billing@risetech.info</a>
        </li>
        <li>
          <strong>Privacy &amp; data requests:</strong>{" "}
          <a href="mailto:privacy@risetech.info">privacy@risetech.info</a>
        </li>
        <li>
          <strong>Legal enquiries:</strong>{" "}
          <a href="mailto:legal@risetech.info">legal@risetech.info</a>
        </li>
      </ul>

      <h2>Billing &amp; Payment Issues</h2>
      <p>
        If you have a question about a charge, invoice, or your subscription,
        please email{" "}
        <a href="mailto:billing@risetech.info">billing@risetech.info</a> with
        your order reference. See also our{" "}
        <a href="/billing">Billing Policy</a> and{" "}
        <a href="/refund">Refund Policy</a>.
      </p>

      <h2>Deliverable Issues</h2>
      <p>
        If a report, analysis, or other deliverable does not meet the agreed
        brief, please email{" "}
        <a href="mailto:advisory@risetech.info">advisory@risetech.info</a>{" "}
        within 7 days of delivery. We will review your feedback and arrange a
        revision or discuss an appropriate remedy. See our{" "}
        <a href="/refund">Refund Policy</a> for full details.
      </p>

      <h2>Response Times</h2>
      <ul>
        <li>
          <strong>General support enquiries:</strong> within 1 business day
        </li>
        <li>
          <strong>Billing disputes:</strong> within 2 business days
        </li>
        <li>
          <strong>Deliverable revisions:</strong> within 3 business days
        </li>
        <li>
          <strong>Urgent matters:</strong> please mark your email subject
          &ldquo;URGENT&rdquo; and we will prioritise accordingly
        </li>
      </ul>

      <h2>Useful Links</h2>
      <ul>
        <li>
          <a href="/terms">Terms of Service</a>
        </li>
        <li>
          <a href="/privacy">Privacy Policy</a>
        </li>
        <li>
          <a href="/refund">Refund Policy</a>
        </li>
        <li>
          <a href="/billing">Billing Policy</a>
        </li>
        <li>
          <a href="/contact">Contact Us</a>
        </li>
      </ul>
    </LegalLayout>
  );
}
