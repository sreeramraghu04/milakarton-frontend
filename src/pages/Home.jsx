import {
  ArrowRight,
  Headphones,
  Monitor,
  Printer,
  Sparkles,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import demoproducts from "../common/demoproducts";
import { site } from "../config/site.js";

const categories = [
  {
    name: "Audio",
    description: "Speakers, earbuds, and sound for everyday moments.",
    icon: Headphones,
  },
  {
    name: "Computing",
    description: "Screens, desk essentials, and performance machines.",
    icon: Monitor,
  },
  {
    name: "Printers",
    description: "Home, office, colour, and professional print tools.",
    icon: Printer,
  },
  {
    name: "Studio Equipment",
    description: "Lighting, cameras, and tools for creators.",
    icon: Sparkles,
  },
];

export default function Home() {
  const featured = demoproducts.slice(0, 3);

  return (
    <div className="bg-slate-50 text-slate-950">
      <Helmet>
        <title>
          {site.name} | {site.tagline}
        </title>
        <meta
          name="description"
          content="Mila-Karton is a minimalist electronics marketplace for useful technology, creative tools, and everyday upgrades."
        />
        <link rel="canonical" href={site.url} />
      </Helmet>

      <section className="relative overflow-hidden bg-[#071d42] px-4 py-20 text-white sm:px-6 md:py-28 lg:px-12">
        <div className="absolute -right-40 -top-44 h-136 w-136 rounded-full bg-blue-500/30 blur-3xl" />
        <div className="absolute -bottom-52 left-1/3 h-112 w-md rounded-full bg-sky-400/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_420px]">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">
              Minimalist Market Place
            </p>
            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
              Useful technology.
              <br />
              <span className="text-sky-300">Less noise.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              Explore a considered collection of electronics for listening,
              working, creating, printing, and moving.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-[#071d42] transition hover:bg-sky-100"
              >
                Explore the shop <ArrowRight size={18} />
              </Link>
              <Link
                to="/why-mila-karton"
                className="rounded-xl border border-white/25 px-5 py-3 font-semibold text-white transition hover:border-sky-300 hover:bg-white/10"
              >
                Why Mila-Karton
              </Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-100 rounded-3xl border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur">
            <img
              src="/images/electronics-placeholder.svg"
              alt="Mila-Karton electronics catalogue"
              className="rounded-3xl"
            />
            <div className="absolute -bottom-10 -left-15 rounded-2xl border border-white/20 bg-white px-5 py-4 text-[#071d42] shadow-xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                Start simply
              </p>
              <p className="mt-1 font-semibold">Find what fits.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Browse by need
              </p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight">
                A focused way to shop tech.
              </h2>
            </div>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-800"
            >
              View all products <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {categories.map(({ name, description, icon: Icon }) => (
              <Link
                to={`/shop?category=${encodeURIComponent(name)}`}
                key={name}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <Icon className="text-blue-600" size={28} />
                <h3 className="mt-7 text-xl font-semibold">{name}</h3>
                <p className="mt-3 leading-7 text-slate-600">{description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              A first look
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight">
              Featured from the launch catalogue.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featured.map((product) => (
              <Link
                to={`/product/${product.id}`}
                key={product.id}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">
                    {product.category}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold">{product.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {product.shortDescription}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-4xl bg-sky-50 p-8 md:flex-row md:items-center md:p-12">
          <div className="max-w-2xl">
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              <Zap size={16} /> Keep it simple
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Good products. Clear information. A smoother decision.
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Mila-Karton brings useful electronics together with a calm,
              straightforward shopping experience.
            </p>
          </div>
          <Link
            to="/shop"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#071d42] px-5 py-3 font-semibold text-white transition hover:bg-blue-600"
          >
            Shop the catalogue <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
