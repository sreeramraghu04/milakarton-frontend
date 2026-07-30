import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import { formatINR } from "../config/site.js";
import { scrollToTop } from "../utils/scrollToTop";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <Link to={`/product/${product.id}`} onClick={scrollToTop} className="block overflow-hidden bg-slate-100">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </Link>

      <div className="flex flex-1 flex-col justify-between gap-4 p-5">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
            {product.category}
          </p>
          <Link to={`/product/${product.id}`} onClick={scrollToTop}>
            <h2 className="text-xl font-semibold tracking-tight text-slate-950 transition group-hover:text-blue-700">
              {product.name}
            </h2>
          </Link>
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">
            {product.shortDescription}
          </p>
        </div>

        <div>
          <div className="mb-4 flex flex-wrap items-baseline gap-2">
            <p className="text-xl font-bold text-slate-950">{formatINR(product.price)}</p>
            <p className="text-sm text-slate-400 line-through">{formatINR(product.originalPrice)}</p>
          </div>
          <button
            type="button"
            onClick={() => addToCart(product)}
            className="w-full rounded-xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
          >
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
}
