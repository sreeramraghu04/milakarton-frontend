import LegalLayout, { LegalSection } from "../legals/LegalLayout";
import { site } from "../config/site.js";

export default function CustomerSupport() {
  return (
    <LegalLayout
      title="Customer Support"
      path="/customer-support"
      description="Mila-Karton customer support hours and contact information."
    >
      <p>
        Our support team is here to help with product questions, order updates,
        delivery issues, and return requests.
      </p>
      <LegalSection title="Support hours">
        <p>
          Monday to Saturday: 9:00 AM to 7:00 PM
          <br />
          Sunday and public holidays: Closed, with emergency email replies where
          possible.
        </p>
      </LegalSection>
      <LegalSection title="Contact us">
        <p>
          Email:{" "}
          <a
            className="font-semibold text-blue-600"
            href={`mailto:${site.email}`}
          >
            {site.email}
          </a>
          <br />
          Phone:{" "}
          <a
            className="font-semibold text-blue-600"
            href={`tel:${site.phoneHref}`}
          >
            {site.phoneDisplay}
          </a>
        </p>
      </LegalSection>
      <LegalSection title="How to get faster help">
        <p>
          Include your order ID, product name, registered contact details, and
          clear photos or video when reporting a damaged or incorrect item.
        </p>
      </LegalSection>
      <LegalSection title="Response times">
        <p>
          We aim to respond to general enquiries within 24 business hours. Order
          and delivery issues may require additional time while we coordinate
          with delivery or product partners.
        </p>
      </LegalSection>
      <LegalSection title="Respectful communication">
        <p>
          Customers and support staff are expected to communicate respectfully.
          Repeated abuse, threats, or fraudulent claims may result in support
          restrictions or further action.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
