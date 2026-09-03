import { AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function PaymentFailed() {
  return (
    <div className="flex min-h-[65vh] items-center justify-center bg-slate-50 px-6">
      <div className="w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
        <AlertCircle className="mx-auto text-red-500" size={58} />
        <h1 className="mt-5 text-4xl font-bold text-slate-950">
          Payment not completed
        </h1>
        <p className="mt-4 leading-7 text-slate-600">
          Your payment could not be completed. You can return to checkout and
          try again or contact Mila-Karton support.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/checkout"
            className="rounded-xl bg-[#071d42] px-5 py-3 font-semibold text-white transition hover:bg-blue-600"
          >
            Return to checkout
          </Link>
          <Link
            to="/contact"
            className="rounded-xl border border-slate-200 px-5 py-3 font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-600"
          >
            Contact support
          </Link>
        </div>
      </div>
    </div>
  );
}
