import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Contact — RiseTech Information Ltd",
  description:
    "Get in touch with RiseTech Information Ltd for advisory and consulting enquiries.",
};

export default function ContactPage() {
  return (
    <LegalLayout title="Contact Us" lastUpdated="8 April 2026">
      <p>
        Thank you for your interest in{" "}
        <strong>RiseTech Information Ltd</strong>. We welcome enquiries from
        founders, operators, and businesses seeking strategic advisory support.
      </p>

      <h2>General Enquiries</h2>
      <p>
        For advisory requests, service enquiries, and general questions:
      </p>
      <ul>
        <li>
          <strong>Email:</strong>{" "}
          <a href="mailto:advisory@risetech.info">advisory@risetech.info</a>
        </li>
      </ul>

      <h2>Billing &amp; Payments</h2>
      <p>
        For invoices, payment queries, subscription changes, and refund
        requests:
      </p>
      <ul>
        <li>
          <strong>Email:</strong>{" "}
          <a href="mailto:billing@risetech.info">billing@risetech.info</a>
        </li>
      </ul>
      <p>
        See also our <a href="/billing">Billing Policy</a> and{" "}
        <a href="/refund">Refund Policy</a>.
      </p>

      <h2>Privacy &amp; Data</h2>
      <p>
        For data subject access requests, erasure requests, or any other
        privacy-related enquiry:
      </p>
      <ul>
        <li>
          <strong>Email:</strong>{" "}
          <a href="mailto:privacy@risetech.info">privacy@risetech.info</a>
        </li>
      </ul>

      <h2>Legal</h2>
      <p>For legal notices and formal correspondence:</p>
      <ul>
        <li>
          <strong>Email:</strong>{" "}
          <a href="mailto:legal@risetech.info">legal@risetech.info</a>
        </li>
      </ul>

      <h2>Registered Office</h2>
      <p>
        <strong>RiseTech Information Ltd</strong>
        <br />
        128 City Road
        <br />
        London
        <br />
        EC1V 2NX
        <br />
        England, United Kingdom
      </p>
      <p>
        <strong>Company Registration No.:</strong> 15985140
        <br />
        <strong>Country of Incorporation:</strong> England and Wales
        <br />
        <strong>Email:</strong>{" "}
        <a href="mailto:advisory@risetech.info">advisory@risetech.info</a>
      </p>

      <h2>Response Times</h2>
      <p>
        We aim to respond to all enquiries within <strong>1 business day</strong>{" "}
        (Monday–Friday, 09:00–17:30 GMT). For urgent matters, please mark your
        email subject &ldquo;URGENT&rdquo;.
      </p>

      <hr />

      <h2>Request Advisory</h2>
      <p>
        Ready to work together? Email{" "}
        <a href="mailto:advisory@risetech.info">advisory@risetech.info</a> with
        a brief description of your business, the challenges you are facing, and
        the type of support you are looking for. We will respond within one
        business day to schedule an initial call.
      </p>
    </LegalLayout>
  );
}
