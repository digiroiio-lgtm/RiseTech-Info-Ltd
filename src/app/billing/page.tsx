import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Billing Policy — RiseTech Information Ltd",
  description:
    "How RiseTech Information Ltd handles billing, payments, and subscriptions.",
};

export default function BillingPage() {
  return (
    <LegalLayout title="Billing Policy" lastUpdated="8 April 2026">
      <p>
        This Billing Policy explains how <strong>RiseTech Information Ltd</strong>{" "}
        charges for its advisory and consulting Services. By purchasing our
        Services you agree to this policy.
      </p>

      <h2>1. Currency and Pricing</h2>
      <p>
        All prices are quoted in <strong>GBP (British Pounds Sterling)</strong>{" "}
        and are inclusive of any applicable taxes unless otherwise stated.
        Pricing is confirmed in writing before any payment is taken.
      </p>

      <h2>2. Payment Methods</h2>
      <p>
        We accept the following payment methods, processed securely via Stripe:
      </p>
      <ul>
        <li>Visa, Mastercard, and American Express credit/debit cards</li>
        <li>BACS bank transfer (for invoiced engagements)</li>
        <li>Apple Pay and Google Pay (where available)</li>
      </ul>
      <p>
        All card transactions are encrypted and processed by Stripe. We do not
        store card numbers on our systems.
      </p>

      <h2>3. One-Time Engagements</h2>
      <p>
        For project-based or one-time advisory engagements:
      </p>
      <ul>
        <li>
          A <strong>50% deposit</strong> is required at the time of booking to
          secure your engagement date.
        </li>
        <li>
          The remaining balance is due upon delivery of the final deliverable or
          as otherwise stated in the project proposal.
        </li>
        <li>
          For engagements under £500, full payment in advance may be required.
        </li>
      </ul>

      <h2>4. Subscription Plans</h2>
      <p>
        For monthly or annual advisory retainer plans:
      </p>
      <ul>
        <li>
          Billing is automatic and recurs on the same day of each month or year
          from the date of your first payment.
        </li>
        <li>
          You will receive an email receipt for each charge to the email address
          on your account.
        </li>
        <li>
          Annual plans are billed as a single payment for the full year and
          offer a discount versus monthly billing.
        </li>
        <li>
          Subscription prices are locked for the duration of a prepaid annual
          plan. Month-to-month prices may be updated with 30 days&rsquo; notice.
        </li>
      </ul>

      <h2>5. Invoicing</h2>
      <p>
        Invoices are issued by email in PDF format. For corporate clients
        requiring PO-based billing or specific invoice formats, please contact{" "}
        <a href="mailto:billing@risetech.info">billing@risetech.info</a> before
        placing your order. Payment terms on invoices are <strong>net 14 days</strong>{" "}
        unless otherwise agreed in writing.
      </p>

      <h2>6. Failed Payments</h2>
      <p>
        If a payment fails (e.g., due to insufficient funds or an expired
        card):
      </p>
      <ul>
        <li>
          Stripe will automatically retry the charge after 3, 5, and 7 days.
        </li>
        <li>
          We will notify you by email and ask you to update your payment details.
        </li>
        <li>
          If payment remains outstanding after 14 days, access to Services may
          be suspended until the balance is settled.
        </li>
        <li>
          Persistent non-payment may result in the engagement being terminated
          and the outstanding balance referred for collection.
        </li>
      </ul>

      <h2>7. Taxes</h2>
      <p>
        RiseTech Information Ltd is registered for VAT in the United Kingdom.
        UK customers will be charged VAT at the prevailing rate (currently 20%)
        where applicable. VAT invoices are available on request. International
        customers outside the UK may not be subject to UK VAT depending on their
        location and VAT registration status.
      </p>

      <h2>8. Cancellation and Refunds</h2>
      <p>
        Subscription cancellations and refund requests are governed by our{" "}
        <a href="/refund">Refund Policy</a>.
      </p>

      <h2>9. Price Changes</h2>
      <p>
        We reserve the right to update our pricing. For subscription customers,
        we will provide at least <strong>30 days&rsquo; written notice</strong>{" "}
        of any price increase before it takes effect on your next billing cycle.
        You may cancel your subscription before the price change takes effect if
        you do not wish to continue at the new price.
      </p>

      <h2>10. Disputes</h2>
      <p>
        If you believe a charge is incorrect, please contact{" "}
        <a href="mailto:billing@risetech.info">billing@risetech.info</a> within
        30 days of the charge date. We will investigate and respond within 5
        business days.
      </p>

      <h2>11. Contact</h2>
      <p>
        For billing enquiries, contact{" "}
        <a href="mailto:billing@risetech.info">billing@risetech.info</a> or
        visit our <a href="/support">Support page</a>.
      </p>
    </LegalLayout>
  );
}
