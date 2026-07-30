import LegalLayout, { LegalSection } from "./LegalLayout";
import { site } from "../config/site.js";

export default function PrivacyPolicy() {
  return <LegalLayout title="Privacy Policy" path="/privacy-policy" description="Mila-Karton privacy policy and personal information practices.">
    <p>At {site.legalName}, we value your trust and are committed to handling personal information responsibly when you use the Mila-Karton website.</p>
    <LegalSection title="Information we collect"><p>When you browse, contact us, or place an order, we may collect your name, email address, phone number, delivery address, country, state, order details, and information you provide in support requests. We may also receive device, browser, IP address, cookie, and usage information needed to operate and improve the website.</p></LegalSection>
    <LegalSection title="How we use information"><p>We use information to process and deliver orders, provide support, communicate order updates, prevent fraud, maintain website security, improve the marketplace, and send promotional communications only where permitted and with appropriate consent.</p></LegalSection>
    <LegalSection title="Payments"><p>Payments are handled through third-party payment providers. Mila-Karton does not store complete card, banking, or UPI credentials on its own servers. Payment providers process information under their own policies.</p></LegalSection>
    <LegalSection title="Cookies and analytics"><p>Cookies and similar technologies may be used for essential functionality, performance measurement, and analytics. You can manage cookies through your browser settings, although some website features may not work as intended.</p></LegalSection>
    <LegalSection title="Sharing information"><p>We do not sell or rent personal information. We may share relevant information with payment processors, delivery partners, technology providers, internal support staff, or legal authorities when required to fulfil an order, operate the website, or comply with law.</p></LegalSection>
    <LegalSection title="Data security and retention"><p>We use reasonable administrative and technical safeguards. Information is retained only as long as reasonably necessary for orders, support, legal, accounting, security, and operational purposes.</p></LegalSection>
    <LegalSection title="Your choices"><p>You may contact us to request access to, correction of, or deletion of personal information, subject to legal and operational requirements. You may also withdraw consent for optional marketing communications.</p></LegalSection>
    <LegalSection title="Third-party links"><p>Our website may link to external payment, delivery, or other services. Mila-Karton is not responsible for the privacy practices of third-party websites.</p></LegalSection>
    <LegalSection title="Policy updates"><p>We may update this policy from time to time. The latest version will be posted on this page with its updated date.</p></LegalSection>
    <LegalSection title="Contact"><p>Email: <a className="font-semibold text-blue-600" href={`mailto:${site.email}`}>{site.email}</a><br />Phone: {site.phoneDisplay}</p></LegalSection>
  </LegalLayout>;
}
