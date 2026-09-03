import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Mail, MapPin, Phone } from "lucide-react";
import toast from "react-hot-toast";
import { site } from "../config/site.js";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (event) =>
    setFormData((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));
  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(
      `Mila-Karton enquiry from ${formData.name}`,
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    toast.success("Opening your email app.");
  };

  return (
    <div className="min-h-screen bg-slate-50 px-4 pb-20 pt-28 text-slate-950 sm:px-6 lg:px-12">
      <Helmet>
        <title>
          Contact {site.name} | {site.tagline}
        </title>
        <meta
          name="description"
          content="Contact Mila-Karton LLP in Kochi for product questions and marketplace support."
        />
        <link rel="canonical" href={`${site.url}/contact`} />
      </Helmet>
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.85fr_1.15fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Contact Mila-Karton
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            Let’s make the next choice clearer.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            For product questions, order help, or general enquiries, reach the
            team directly.
          </p>
          <div className="mt-10 space-y-6">
            <a
              href={`mailto:${site.email}`}
              className="flex items-start gap-4 text-slate-700 transition hover:text-blue-600"
            >
              <Mail className="mt-1 text-blue-600" />
              <span>
                <span className="block font-semibold text-slate-950">
                  Email
                </span>
                {site.email}
              </span>
            </a>
            <a
              href={`tel:${site.phoneHref}`}
              className="flex items-start gap-4 text-slate-700 transition hover:text-blue-600"
            >
              <Phone className="mt-1 text-blue-600" />
              <span>
                <span className="block font-semibold text-slate-950">
                  Phone
                </span>
                {site.phoneDisplay}
                {site.phoneDisplay2 && (
                  <span className="block">{site.phoneDisplay2}</span>
                )}
              </span>
            </a>
            <div className="flex items-start gap-4 text-slate-700">
              <MapPin className="mt-1 text-blue-600" />
              <span>
                <span className="block font-semibold text-slate-950">
                  Address
                </span>
                {site.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm md:p-10"
        >
          <h2 className="text-2xl font-semibold">Send an enquiry</h2>
          <p className="mt-2 text-slate-600">
            Your email app will open with the message addressed to our team.
          </p>
          <div className="mt-8 space-y-5">
            <input
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full name"
              className="w-full rounded-xl border border-slate-200 px-4 py-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address"
              className="w-full rounded-xl border border-slate-200 px-4 py-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
            <textarea
              required
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="7"
              placeholder="How can we help?"
              className="w-full rounded-xl border border-slate-200 px-4 py-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
            <button
              type="submit"
              className="w-full rounded-xl bg-[#071d42] px-5 py-4 font-semibold text-white transition hover:bg-blue-600"
            >
              Open email
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
