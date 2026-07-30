import { Link } from "react-router-dom";

export default function NotFound() {
  return <div className="flex min-h-[65vh] items-center justify-center bg-slate-50 px-6 text-center text-slate-950"><div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Mila-Karton</p><h1 className="mt-3 text-7xl font-bold">404</h1><p className="mt-4 text-lg text-slate-600">This page could not be found.</p><Link to="/" className="mt-7 inline-flex rounded-xl bg-[#071d42] px-5 py-3 font-semibold text-white transition hover:bg-blue-600">Back home</Link></div></div>;
}
