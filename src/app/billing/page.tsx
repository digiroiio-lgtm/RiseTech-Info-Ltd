import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Billing Policy — Werrise Digital Ltd",
  description:
    "How Werrise Digital Ltd handles billing and payments.",
};

export default function BillingPage() {
  return (
    <LegalLayout title="Billing Policy" lastUpdated="25 October 2026">
      <p>
        This Billing Policy explains how <strong>Werrise Digital Ltd</strong>{" "}
        charges for its advisory and consulting Services. By purchasing our
        Services you agree to this policy.
      </p>

      <h2>1. Currency and Pricing</h2>
      <p>
        All prices are quoted in <strong>GBP (British Pounds Sterling)</strong>{" "}
        and include VAT where applicable. The price shown at checkout is the
        total you pay; no additional charges are added at payment.
      </p>

      <h2>2. Payment Methods</h2>
      <p>
        Payments are taken in full at checkout and processed securely by
        Stripe. Available payment methods (shown at checkout) typically
        include:
      </p>
      <ul>
        <li>Visa, Mastercard, and American Express credit/debit cards</li>
        <li>Apple Pay and Google Pay (where available on your device)</li>
      </ul>
      <p>
        All card transactions are encrypted and processed by Stripe. We do not
        store card numbers on our systems.
      </p>

      <h2>3. When You Are Charged</h2>
      <p>
        The full price of the Service is charged at the time of purchase. You
        will receive a receipt and invoice by email from Stripe. Work begins
        once payment is confirmed and we have contacted you, normally within{" "}
        <strong>1 business day</strong> (Monday&ndash;Friday, 09:00&ndash;17:30
        GMT).
      </p>

      <h2>4. Retainers and Custom Engagements</h2>
      <p>
        Ongoing retainers and custom engagements are not sold through online
        checkout. Their pricing, payment schedule and invoicing terms are
        agreed in writing before any payment is taken, and are set out in the
        proposal or order confirmation we send you.
      </p>

      <h2>5. Invoices</h2>
      <p>
        Invoices are issued by email. If you need specific invoice details
        (such as a company name or purchase order number), please contact{" "}
        <a href="mailto:support@wealwaysrise.com">support@wealwaysrise.com</a>{" "}
        before placing your order.
      </p>

      <h2>6. Failed Payments</h2>
      <p>
        If your payment fails (for example due to insufficient funds or a card
        decline), the order is not placed and you are not charged. You can try
        again with another payment method at checkout.
      </p>

      <h2>7. Taxes</h2>
      <p>
        Prices include VAT where applicable. International customers may be
        responsible for any local taxes, duties or import charges in their own
        country.
      </p>

      <h2>8. Cancellation and Refunds</h2>
      <p>
        Cancellations and refund requests are governed by our{" "}
        <a href="/refund">Refund Policy</a>.
      </p>

      <h2>9. Price Changes</h2>
      <p>
        We may update our prices from time to time. A price change does not
        affect an order you have already placed and paid for.
      </p>

      <h2>10. Disputes</h2>
      <p>
        If you believe a charge is incorrect, please contact{" "}
        <a href="mailto:support@wealwaysrise.com">support@wealwaysrise.com</a>{" "}
        within 30 days of the charge date. We will investigate and respond
        within 5 business days. We encourage you to contact us before raising a
        dispute with your bank.
      </p>

      <h2>11. Contact</h2>
      <p>
        For billing enquiries, contact{" "}
        <a href="mailto:support@wealwaysrise.com">support@wealwaysrise.com</a>{" "}
        or visit our <a href="/support">Support page</a>.
      </p>
    </LegalLayout>
  );
}
