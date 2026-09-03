import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { site } from "../config/site.js";

export default function PaymentSuccess() {
  return (
    <div className="flex min-h-[65vh] items-center justify-center bg-slate-50 px-6">
      <div className="w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
        <CheckCircle2 className="mx-auto text-emerald-500" size={58} />
        <h1 className="mt-5 text-4xl font-bold text-slate-950">
          Order received
        </h1>
        <p className="mt-4 leading-7 text-slate-600">
          Thank you for shopping with {site.name}. We’ll use your checkout
          details to share the next update.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/shop"
            className="rounded-xl bg-[#071d42] px-5 py-3 font-semibold text-white transition hover:bg-blue-600"
          >
            Continue shopping
          </Link>
          <Link
            to="/"
            className="rounded-xl border border-slate-200 px-5 py-3 font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-600"
          >
            Back home
          </Link>
        </div>
      </div>
    </div>
  );
}
