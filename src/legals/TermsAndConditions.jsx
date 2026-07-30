import LegalLayout, { LegalSection } from "./LegalLayout";
import { site } from "../config/site.js";

export default function TermsAndConditions() {
  return <LegalLayout title="Terms & Conditions" path="/terms-and-conditions" description="Mila-Karton marketplace terms and conditions.">
    <p>Welcome to Mila-Karton. By accessing or using this website, you agree to these Terms & Conditions and any policy linked from this page.</p>
    <LegalSection title="Use of the platform"><p>Mila-Karton is an online marketplace for electronics and related products. You agree to use the website lawfully, provide accurate checkout information, and avoid conduct that could harm the platform, other customers, or our partners.</p></LegalSection>
    <LegalSection title="Products, pricing, and stock"><p>Product descriptions, specifications, availability, and prices are displayed for information and may be updated. Orders are accepted subject to stock availability, payment confirmation, delivery serviceability, and verification of material pricing or listing errors.</p></LegalSection>
    <LegalSection title="Orders and delivery"><p>Submitting an order creates a request to purchase. Mila-Karton may contact you to confirm order or delivery details. Delivery estimates can vary by product, location, logistics partner, weather, and other circumstances outside our reasonable control.</p></LegalSection>
    <LegalSection title="Returns, refunds, and cancellations"><p>Returns, refunds, and cancellations are governed by the current <a className="font-semibold text-blue-600" href="/refund-policy">Return & Refund Policy</a>. Please review it before placing an order.</p></LegalSection>
    <LegalSection title="Payment"><p>Prices are shown in Indian Rupees unless stated otherwise. Payments are processed through approved payment providers. An order may be cancelled or held where a payment is unsuccessful, reversed, suspicious, or inconsistent with the order.</p></LegalSection>
    <LegalSection title="Prohibited use"><p>Fraud, unauthorised access attempts, payment abuse, spam, harassment, misleading activity, and interference with website operation are prohibited. Mila-Karton may restrict access or take appropriate action where necessary.</p></LegalSection>
    <LegalSection title="Intellectual property"><p>The Mila-Karton name, logo, website design, text, graphics, and original materials belong to Mila-Karton LLP or its licensors and may not be copied or commercially reused without permission.</p></LegalSection>
    <LegalSection title="Disclaimer and liability"><p>Products may be supplied through manufacturers, sellers, and logistics partners. Mila-Karton will work to provide accurate information and support, but third-party service interruptions and manufacturer matters may affect availability, performance, or delivery.</p></LegalSection>
    <LegalSection title="Privacy"><p>Personal information is handled according to our <a className="font-semibold text-blue-600" href="/privacy-policy">Privacy Policy</a>.</p></LegalSection>
    <LegalSection title="Governing law"><p>These terms are intended to be governed by the laws of India, with Kerala courts having jurisdiction, subject to owner and legal review.</p></LegalSection>
    <LegalSection title="Contact"><p>Email: <a className="font-semibold text-blue-600" href={`mailto:${site.email}`}>{site.email}</a><br />Phone: {site.phoneDisplay}</p></LegalSection>
  </LegalLayout>;
}
