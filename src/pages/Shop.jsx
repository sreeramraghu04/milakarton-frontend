import { useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import demoproducts from "../common/demoproducts";
import { Helmet } from "react-helmet-async";
import { site } from "../config/site.js";

export default function Shop() {
  const [sortOption, setSortOption] = useState("default");
  const [category, setCategory] = useState("All categories");

  const categories = [
    "All categories",
    ...new Set(demoproducts.map((product) => product.category)),
  ];

  const sortedProducts = useMemo(() => {
    const products = demoproducts.filter(
      (product) =>
        category === "All categories" || product.category === category,
    );

    return [...products].sort((a, b) => {
      if (sortOption === "low") return a.price - b.price;
      if (sortOption === "high") return b.price - a.price;
      if (sortOption === "recent")
        return new Date(b.createdAt) - new Date(a.createdAt);
      if (sortOption === "name") return a.name.localeCompare(b.name);
      return a.id - b.id;
    });
  }, [category, sortOption]);

  return (
    <div className="min-h-screen bg-slate-50 px-4 pb-20 pt-28 text-slate-950 sm:px-6 lg:px-12">
      <Helmet>
        <title>Shop Electronics | {site.name}</title>
        <meta
          name="description"
          content="Explore the Mila-Karton electronics catalogue, from everyday audio and office tech to professional studio equipment."
        />
        <link rel="canonical" href={`${site.url}/shop`} />
      </Helmet>

      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Mila-Karton catalogue
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Useful tech, chosen simply.
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            A launch collection of electronics for listening, working, creating,
            printing, and moving.
          </p>
        </div>

        <div className="mb-8 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            Showing {sortedProducts.length} products
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500"
            >
              {categories.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
            <select
              value={sortOption}
              onChange={(event) => setSortOption(event.target.value)}
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500"
            >
              <option value="default">Featured</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
              <option value="recent">Newest</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
