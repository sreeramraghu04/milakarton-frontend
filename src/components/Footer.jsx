import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "../config/site.js";

const footerLinks = [
  ["Home", "/"],
  ["About", "/about"],
  ["Shop", "/shop"],
  ["Why Mila-Karton", "/why-mila-karton"],
  ["Contact", "/contact"],
];

const legalLinks = [
  ["Privacy Policy", "/privacy-policy"],
  ["Refund & Returns", "/refund-policy"],
  ["Terms & Conditions", "/terms-and-conditions"],
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-slate-200 bg-[#071d42] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr] lg:px-12">
        <div>
          <Link
            to="/"
            onClick={scrollToTop}
            className="inline-flex items-center gap-3"
          >
            <img
              src="/logo/milakarton-mark.svg"
              alt=""
              className="h-12 w-12 rounded-lg bg-white p-1"
            />
            <span>
              <span className="block font-serif text-2xl font-bold tracking-[0.08em]">
                MILA-KARTON
              </span>
              <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
                Minimalist Market Place
              </span>
            </span>
          </Link>
          <p className="mt-6 max-w-sm leading-7 text-slate-300">
            A considered electronics marketplace for useful technology, creative
            tools, and everyday upgrades.
          </p>
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-sky-300">
            GSTIN: {site.gstin}
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-sky-300">
            Explore
          </h2>
          <ul className="space-y-3 text-slate-300">
            {footerLinks.map(([label, path]) => (
              <li key={path}>
                <Link
                  to={path}
                  onClick={scrollToTop}
                  className="transition hover:text-white"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-sky-300">
            Information
          </h2>
          <ul className="space-y-3 text-slate-300">
            {legalLinks.map(([label, path]) => (
              <li key={path}>
                <Link
                  to={path}
                  onClick={scrollToTop}
                  className="transition hover:text-white"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/customer-support"
                onClick={scrollToTop}
                className="transition hover:text-white"
              >
                Customer support
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-sky-300">
            Contact
          </h2>
          <div className="space-y-4 text-sm leading-6 text-slate-300">
            <a
              href={`tel:${site.phoneHref}`}
              className="flex items-start gap-3 transition hover:text-white"
            >
              <Phone size={18} className="mt-1 shrink-0" />
              {site.phoneDisplay}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="flex items-start gap-3 break-all transition hover:text-white"
            >
              <Mail size={18} className="mt-1 shrink-0" />
              {site.email}
            </a>
            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-1 shrink-0" />
              <span>
                {site.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-5 text-center text-xs tracking-wide text-slate-400">
        © 2026 {site.legalName}. All rights reserved.
      </div>
    </footer>
  );
}
