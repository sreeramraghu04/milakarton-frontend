import { useParams } from "react-router-dom";
import demoproducts from "../common/demoproducts";
import { useCart } from "../context/CartContext.jsx";
import { Helmet } from "react-helmet-async";
import { formatINR, site } from "../config/site.js";

export default function SingleProduct() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = demoproducts.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 text-slate-950">
        Product not found
      </div>
    );
  }

  const discount =
    product.originalPrice > product.price
      ? Math.round(
          ((product.originalPrice - product.price) / product.originalPrice) *
            100,
        )
      : 0;

  return (
    <div className="min-h-screen bg-slate-50 px-4 pb-20 pt-28 text-slate-950 sm:px-6 lg:px-12">
      <Helmet>
        <title>
          {product.name} | {site.name}
        </title>
        <meta name="description" content={product.shortDescription} />
        <link rel="canonical" href={`${site.url}/product/${product.id}`} />
      </Helmet>

      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          {product.category}
        </p>
        <h1 className="mb-8 max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
          {product.name}
        </h1>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <img
              src={product.image}
              alt={product.name}
              className="h-full min-h-90 w-full object-cover"
            />
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <p className="mb-1 text-sm font-semibold text-slate-500">
              {product.brand}
            </p>
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="text-3xl font-bold">
                {formatINR(product.price)}
              </span>
              <span className="text-lg text-slate-400 line-through">
                {formatINR(product.originalPrice)}
              </span>
              {discount > 0 && (
                <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
                  {discount}% off
                </span>
              )}
            </div>

            <div className="mb-8 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
              <p>
                <span className="font-semibold text-slate-950">
                  Availability:
                </span>{" "}
                {product.availability}
              </p>
              <p>
                <span className="font-semibold text-slate-950">Warranty:</span>{" "}
                {product.warranty}
              </p>
              <p>
                <span className="font-semibold text-slate-950">Delivery:</span>{" "}
                {product.delivery}
              </p>
              <p>
                <span className="font-semibold text-slate-950">Returns:</span>{" "}
                3-day eligible return window
              </p>
            </div>

            <p className="mb-3 text-lg leading-8 text-slate-800">
              {product.shortDescription}
            </p>
            <p className="mb-8 leading-7 text-slate-600">
              {product.description}
            </p>

            <div className="mb-8 border-t border-slate-200 pt-6">
              <h2 className="mb-4 text-xl font-semibold">Specifications</h2>
              <dl className="grid gap-3 sm:grid-cols-2">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="rounded-xl bg-slate-50 p-3">
                    <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      {key.replace(/([A-Z])/g, " $1")}
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-slate-950">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <button
              type="button"
              onClick={() => addToCart(product)}
              className="w-full rounded-xl bg-slate-950 px-5 py-4 font-semibold text-white transition hover:bg-blue-600"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
