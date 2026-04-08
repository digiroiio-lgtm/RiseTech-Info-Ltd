import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Refund Policy — RiseTech Information Ltd",
  description:
    "RiseTech Information Ltd refund and cancellation policy for advisory services.",
};

export default function RefundPage() {
  return (
    <LegalLayout title="Refund Policy" lastUpdated="8 April 2026">
      <p>
        This Refund Policy applies to all purchases of advisory, consulting, and
        information services (&ldquo;Services&rdquo;) from{" "}
        <strong>RiseTech Information Ltd</strong>. Please read it carefully
        before completing a purchase.
      </p>

      <h2>1. General Principle</h2>
      <p>
        Because our Services involve the delivery of professional expertise,
        time, and proprietary intellectual work, all fees are generally
        non-refundable once work has commenced. We are committed to delivering
        high-quality outcomes, and we will work with you to resolve any
        concerns before a refund request becomes necessary.
      </p>

      <h2>2. Pre-Commencement Cancellation</h2>
      <p>
        If you cancel an engagement <strong>before work has commenced</strong>{" "}
        (i.e., before the kick-off call or delivery of any materials):
      </p>
      <ul>
        <li>
          Cancellations made within <strong>48 hours of purchase</strong> are
          eligible for a full refund.
        </li>
        <li>
          Cancellations made after 48 hours but before commencement are eligible
          for a refund minus a 10% administrative fee.
        </li>
      </ul>

      <h2>3. Post-Commencement Cancellation</h2>
      <p>
        Once work has commenced, fees are generally non-refundable. However:
      </p>
      <ul>
        <li>
          If we are unable to deliver the agreed scope of Services through our
          own fault, you will receive a pro-rata refund for undelivered work.
        </li>
        <li>
          If you cancel mid-engagement, you will be invoiced only for the work
          completed to date, and any prepaid balance for undelivered work will
          be refunded.
        </li>
      </ul>

      <h2>4. Subscription Services</h2>
      <p>
        For monthly or annual subscription plans:
      </p>
      <ul>
        <li>
          You may cancel your subscription at any time via email to{" "}
          <a href="mailto:billing@risetech.info">billing@risetech.info</a>.
        </li>
        <li>
          Cancellation takes effect at the end of the current billing period.
          You will retain access to Services until that date.
        </li>
        <li>
          We do not provide refunds for partial subscription periods, except
          where required by applicable law.
        </li>
        <li>
          Annual subscriptions cancelled within 14 days of the annual renewal
          date are eligible for a refund of the renewal fee if no Services have
          been used in the new period.
        </li>
      </ul>

      <h2>5. Unsatisfactory Deliverables</h2>
      <p>
        We stand behind the quality of our work. If you believe a deliverable
        does not meet the agreed brief, please contact us within{" "}
        <strong>7 days of delivery</strong> and we will revise the work at no
        additional cost. If after revision the deliverable still fails to meet
        the agreed brief, we will discuss an appropriate remedy, which may
        include a partial or full refund at our discretion.
      </p>

      <h2>6. Non-Refundable Items</h2>
      <p>The following are not eligible for refund:</p>
      <ul>
        <li>
          Completed deliverables that meet the agreed scope and quality
          standards
        </li>
        <li>
          Third-party costs incurred on your behalf (research databases, filing
          fees, etc.)
        </li>
        <li>Rush or expedited delivery fees</li>
        <li>Services where delivery has been delayed due to your actions</li>
      </ul>

      <h2>7. How to Request a Refund</h2>
      <p>To request a refund:</p>
      <ul>
        <li>
          Email <a href="mailto:billing@risetech.info">billing@risetech.info</a>{" "}
          with the subject line &ldquo;Refund Request — [your order reference]&rdquo;
        </li>
        <li>Include your name, order reference, and reason for the request</li>
        <li>
          We will acknowledge your request within 2 business days and provide a
          decision within 5 business days
        </li>
        <li>
          Approved refunds are credited back to the original payment method
          within 5–10 business days depending on your card issuer
        </li>
      </ul>

      <h2>8. Chargebacks</h2>
      <p>
        We encourage you to contact us before initiating a chargeback with your
        bank. Most disputes can be resolved quickly and amicably. Initiating an
        unwarranted chargeback may result in suspension of your account.
      </p>

      <h2>9. Statutory Rights</h2>
      <p>
        This policy does not affect any statutory rights you may have under
        applicable law, including rights under the Consumer Rights Act 2015
        where applicable.
      </p>

      <h2>10. Contact</h2>
      <p>
        For refund enquiries, contact{" "}
        <a href="mailto:billing@risetech.info">billing@risetech.info</a> or
        visit our <a href="/support">Support page</a>.
      </p>
    </LegalLayout>
  );
}
