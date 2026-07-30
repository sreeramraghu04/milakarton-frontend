import { Helmet } from "react-helmet-async";
import { site } from "../config/site.js";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50 px-4 pb-20 pt-20 text-slate-950 sm:px-6 lg:px-12">
      <Helmet>
        <title>
          About {site.name} | {site.tagline}
        </title>
        <meta
          name="description"
          content="Learn about Mila-Karton LLP and its minimalist electronics marketplace."
        />
        <link rel="canonical" href={`${site.url}/about`} />
      </Helmet>
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              About Mila-Karton
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              A calmer way to discover useful electronics.
            </h1>
            <p className="mt-7 text-lg leading-8 text-slate-600">
              Mila-Karton LLP is a Kochi-based marketplace built around a simple
              idea: technology shopping should feel considered, clear, and easy
              to navigate.
            </p>
            <p className="mt-5 leading-8 text-slate-600">
              Our launch collection brings together everyday audio, computing
              essentials, printers, studio tools, power solutions, and electric
              mobility in one focused place.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-4xl bg-[#071d42] p-5 shadow-xl">
            <img
              src="/images/electronics-placeholder.svg"
              alt="Mila-Karton electronics marketplace"
              className="rounded-[1.4rem] opacity-95"
            />
            <div className="absolute bottom-10 left-10 rounded-2xl bg-white px-5 py-4 shadow-xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                Built in Kochi
              </p>
              <p className="mt-1 font-semibold text-[#071d42]">
                MILA KARTON LLP
              </p>
            </div>
          </div>
        </div>
        <div className="mt-16 grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-600">
              01
            </p>
            <h2 className="mt-5 text-xl font-semibold">Minimal selection</h2>
            <p className="mt-3 leading-7 text-slate-600">
              We keep the catalogue intentional so product details are easier to
              compare.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-600">
              02
            </p>
            <h2 className="mt-5 text-xl font-semibold">Useful categories</h2>
            <p className="mt-3 leading-7 text-slate-600">
              From speakers to studio equipment, browse around the way you
              actually use technology.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-600">
              03
            </p>
            <h2 className="mt-5 text-xl font-semibold">Human support</h2>
            <p className="mt-3 leading-7 text-slate-600">
              Questions are welcome at{" "}
              <a
                className="font-semibold text-blue-600"
                href={`mailto:${site.email}`}
              >
                {site.email}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
