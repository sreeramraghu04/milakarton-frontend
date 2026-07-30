import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  CheckCircle2,
  PackageCheck,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { site } from "../config/site.js";

const reasons = [
  {
    icon: Sparkles,
    title: "Curated, not crowded",
    text: "A focused catalogue built around useful electronics instead of endless noise.",
  },
  {
    icon: CheckCircle2,
    title: "Clear product details",
    text: "Simple specifications, visible pricing, and practical information before you buy.",
  },
  {
    icon: PackageCheck,
    title: "Easy to explore",
    text: "From everyday audio to professional tools, find the right category quickly.",
  },
  {
    icon: ShieldCheck,
    title: "Support when needed",
    text: "Reach the Mila-Karton team at milakartonkochi@gmail.com for help.",
  },
];

export default function WhyMilaKarton() {
  return (
    <div className="min-h-screen bg-slate-50 px-4 pb-20 pt-28 text-slate-950 sm:px-6 lg:px-12">
      <Helmet>
        <title>Why Mila-Karton | {site.name}</title>
        <meta
          name="description"
          content="Discover the simple, focused Mila-Karton electronics marketplace."
        />
        <link rel="canonical" href={`${site.url}/why-mila-karton`} />
      </Helmet>
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            The Mila-Karton point of view
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Technology feels better when the choice is clear.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Mila-Karton is a minimalist marketplace for electronics that help
            people listen, work, create, print, and move with more confidence.
          </p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {reasons.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <Icon className="text-blue-600" size={28} />
              <h2 className="mt-6 text-xl font-semibold">{title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-col items-start justify-between gap-6 rounded-3xl bg-[#071d42] p-8 text-white md:flex-row md:items-center md:p-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
              Start simply
            </p>
            <h2 className="mt-3 text-3xl font-bold">
              Find your next useful upgrade.
            </h2>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-[#071d42] transition hover:bg-sky-100"
          >
            Explore the shop <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
