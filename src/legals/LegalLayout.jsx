import { Helmet } from "react-helmet-async";
import { site } from "../config/site.js";

export default function LegalLayout({ title, description, path, children }) {
  return (
    <div className="min-h-screen bg-slate-50 px-4 pb-20 pt-16 text-slate-950 sm:px-6 lg:px-12">
      <Helmet><title>{title} | {site.name}</title><meta name="description" content={description} /><link rel="canonical" href={`${site.url}${path}`} /></Helmet>
      <article className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-10 lg:p-14">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">{site.name}</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">{title}</h1>
        <p className="mt-3 text-sm text-slate-500">Last updated: June 17, 2025</p>
        <div className="mt-10 space-y-8 leading-7 text-slate-600">{children}</div>
      </article>
    </div>
  );
}

export function LegalSection({ title, children }) {
  return <section><h2 className="mb-3 text-2xl font-semibold text-slate-950">{title}</h2><div>{children}</div></section>;
}
