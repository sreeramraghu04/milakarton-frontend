import LegalLayout, { LegalSection } from "./LegalLayout";
import { site } from "../config/site.js";

export default function RefundPolicy() {
  return <LegalLayout title="Return & Refund Policy" path="/refund-policy" description="Mila-Karton return, cancellation, and refund policy.">
    <p>Customer satisfaction matters to {site.name}. Please review this policy before placing an order.</p>
    <LegalSection title="Return eligibility"><p>A return may be requested when a product is damaged, defective, or different from the product ordered. The product must be unused, in its original condition and packaging, and the request must be raised within 3 days of delivery.</p><p className="mt-3">Products may not be eligible when they are used, washed, worn, missing original packaging or accessories, or have tampered warranty labels. Category-specific exclusions should be confirmed by Mila-Karton before publication.</p></LegalSection>
    <LegalSection title="How to request a return"><p>Email <a className="font-semibold text-blue-600" href={`mailto:${site.email}`}>{site.email}</a> with your order ID, product details, reason, and clear photos or video if the item is damaged or incorrect. Our team will review the claim and provide next steps.</p></LegalSection>
    <LegalSection title="Inspection and pickup"><p>Eligible claims may require verification and inspection. If a pickup is approved, the delivery partner will arrange collection according to the serviceable location and operating schedule.</p></LegalSection>
    <LegalSection title="Refunds"><p>Refunds are initiated after the returned product is received and inspected. Approved refunds are processed to the original payment method within 5–7 business days, subject to the payment provider or bank. For Cash on Delivery orders, Mila-Karton will coordinate a UPI or bank-transfer refund. Shipping charges are non-refundable unless the product was faulty or incorrectly delivered.</p></LegalSection>
    <LegalSection title="Exchanges"><p>Direct exchanges are not currently offered. Customers may return an eligible product and place a new order.</p></LegalSection>
    <LegalSection title="Cancellations"><p>Orders may be cancelled before shipment. Once an order has shipped, cancellation is not available; an eligible return may be requested after delivery.</p></LegalSection>
    <LegalSection title="Need help"><p>Email: <a className="font-semibold text-blue-600" href={`mailto:${site.email}`}>{site.email}</a><br />Phone: {site.phoneDisplay}</p></LegalSection>
  </LegalLayout>;
}
