import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useCart } from "../context/CartContext.jsx";
import { scrollToTop } from "../utils/scrollToTop";
import { Helmet } from "react-helmet-async";
import { formatINR, site } from "../config/site.js";

export default function Cart() {
  const { cartItems, cartTotal, cartItemCount } = useCart();

  return (
    <div className="min-h-screen bg-slate-50 px-4 pb-20 pt-28 text-slate-950 sm:px-6 lg:px-12">
      <Helmet><title>Cart | {site.name}</title><meta name="description" content="Review your Mila-Karton shopping cart." /><link rel="canonical" href={`${site.url}/cart`} /></Helmet>
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Shopping bag</p>
        <h1 className="mb-10 text-4xl font-bold tracking-tight md:text-5xl">Ready when you are.</h1>

        {cartItems.length === 0 ? (
          <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm"><h2 className="text-2xl font-semibold">Your cart is empty</h2><p className="mx-auto mt-3 max-w-md text-slate-600">Browse the catalogue and save the technology that fits your day.</p><Link to="/shop" onClick={scrollToTop} className="mt-7 inline-flex rounded-xl bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-blue-600">Explore the shop</Link></div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
            <div className="space-y-4">{cartItems.map((item) => <CartItem key={item.id} item={item} />)}</div>
            <aside className="h-fit rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-28">
              <h2 className="text-2xl font-semibold">Order summary</h2>
              <div className="mt-6 flex justify-between text-slate-500"><span>Total items</span><span>{cartItemCount}</span></div>
              <div className="mt-4 flex justify-between border-t border-slate-200 pt-5 text-xl font-bold"><span>Total</span><span>{formatINR(cartTotal)}</span></div>
              <Link to="/checkout" onClick={scrollToTop} className="mt-7 block rounded-xl bg-slate-950 px-5 py-4 text-center font-semibold text-white transition hover:bg-blue-600">Continue to checkout</Link>
              <Link to="/shop" onClick={scrollToTop} className="mt-3 block text-center text-sm font-semibold text-blue-600 hover:text-blue-800">Continue shopping</Link>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
}
