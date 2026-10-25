import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Refund Policy — Werrise Digital Ltd",
  description:
    "Werrise Digital Ltd refund and cancellation policy for advisory services.",
};

export default function RefundPage() {
  return (
    <LegalLayout title="Refund Policy" lastUpdated="25 October 2026">
      <p>
        This Refund Policy applies to all purchases of advisory, consulting, and
        information services (&ldquo;Services&rdquo;) from{" "}
        <strong>Werrise Digital Ltd</strong>. Please read it carefully
        before completing a purchase.
      </p>

      <h2>1. Your 14-Day Right to Cancel (UK Consumers)</h2>
      <p>
        If you are a consumer (an individual buying for purposes outside your
        trade, business or profession), you have the right to cancel your order
        within <strong>14 days</strong> of purchase without giving a reason,
        under the Consumer Contracts (Information, Cancellation and Additional
        Charges) Regulations 2013. To cancel, email{" "}
        <a href="mailto:support@wealwaysrise.com">support@wealwaysrise.com</a>{" "}
        with your order reference.
      </p>
      <p>
        If you ask us to start the Service within the 14-day period, you agree
        to pay for the Service provided up to the point you cancel, in
        proportion to the full price, and we will refund the remainder. If the
        Service has been fully performed within the 14 days at your request and
        with your acknowledgement, the right to cancel is lost once it is
        complete. Business customers are not covered by this section.
      </p>

      <h2>2. General Principle</h2>
      <p>
        Because our Services involve the delivery of professional expertise,
        time, and proprietary intellectual work, all fees are generally
        non-refundable once work has commenced. We are committed to delivering
        high-quality outcomes, and we will work with you to resolve any
        concerns before a refund request becomes necessary.
      </p>

      <h2>3. Pre-Commencement Cancellation</h2>
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

      <h2>4. Post-Commencement Cancellation</h2>
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

      <h2>5. Retainers and Custom Engagements</h2>
      <p>
        For retainers or custom engagements agreed in writing, the notice
        period, billing and cancellation terms in your proposal or order
        confirmation apply. Unless it says otherwise, you may cancel by emailing{" "}
        <a href="mailto:support@wealwaysrise.com">support@wealwaysrise.com</a>,
        and cancellation takes effect at the end of the current billing period.
        We do not refund partial periods, except where required by applicable
        law.
      </p>

      <h2>6. Unsatisfactory Deliverables</h2>
      <p>
        We stand behind the quality of our work. If you believe a deliverable
        does not meet the agreed brief, please contact us within{" "}
        <strong>7 days of delivery</strong> and we will revise the work at no
        additional cost. If after revision the deliverable still fails to meet
        the agreed brief, we will discuss an appropriate remedy, which may
        include a partial or full refund at our discretion.
      </p>

      <h2>7. Non-Refundable Items</h2>
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

      <h2>8. How to Request a Refund</h2>
      <p>To request a refund:</p>
      <ul>
        <li>
          Email <a href="mailto:support@wealwaysrise.com">support@wealwaysrise.com</a>{" "}
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

      <h2>9. Chargebacks</h2>
      <p>
        We encourage you to contact us before initiating a chargeback with your
        bank. Most disputes can be resolved quickly and amicably. Initiating an
        unwarranted chargeback may result in suspension of your account.
      </p>

      <h2>10. Statutory Rights</h2>
      <p>
        This policy does not affect any statutory rights you may have under
        applicable law, including rights under the Consumer Rights Act 2015
        where applicable.
      </p>

      <h2>11. Contact</h2>
      <p>
        For refund enquiries, contact{" "}
        <a href="mailto:support@wealwaysrise.com">support@wealwaysrise.com</a> or
        visit our <a href="/support">Support page</a>.
      </p>
    </LegalLayout>
  );
}
