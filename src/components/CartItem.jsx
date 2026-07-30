import { Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext.jsx";
import { formatINR } from "../config/site.js";

export default function CartItem({ item }) {
  const { increaseQty, decreaseQty, removeFromCart } = useCart();

  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 text-slate-950 shadow-sm sm:flex-row sm:items-center sm:p-5">
      <img
        src={item.image}
        alt={item.name}
        loading="lazy"
        className="h-40 w-full rounded-xl object-cover sm:h-24 sm:w-24"
      />
      <div className="flex-1">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">{item.brand}</p>
        <h2 className="mt-1 text-lg font-semibold">{item.name}</h2>
        <p className="mb-3 text-slate-500">{formatINR(item.price)} each</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button type="button" onClick={() => decreaseQty(item.id)} className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 text-white transition hover:bg-blue-600" aria-label={`Decrease ${item.name} quantity`}>-</button>
            <span className="min-w-5 text-center font-semibold">{item.quantity}</span>
            <button type="button" onClick={() => increaseQty(item.id)} className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 text-white transition hover:bg-blue-600" aria-label={`Increase ${item.name} quantity`}>+</button>
          </div>
          <button type="button" onClick={() => removeFromCart(item.id)} className="p-1 text-red-500 transition hover:text-red-700" aria-label={`Remove ${item.name} from cart`}>
            <Trash2 size={20} />
          </button>
        </div>
      </div>
    </article>
  );
}
