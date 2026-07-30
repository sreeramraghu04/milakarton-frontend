import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useCart } from "../context/CartContext.jsx";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Shop", path: "/shop" },
  { name: "Why Mila-Karton", path: "/why-mila-karton" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const menuRef = useRef(null);
  const [open, setOpen] = useState(false);
  const { cartItemCount } = useCart();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target))
        setOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const linkClass = ({ isActive }) =>
    `text-xs font-semibold uppercase tracking-[0.16em] transition ${isActive ? "text-blue-600" : "text-slate-600 hover:text-blue-600"}`;

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-100/80 bg-white/90 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 lg:px-12">
        <Link
          to="/"
          onClick={scrollToTop}
          className="flex items-center gap-2"
          aria-label="Mila-Karton home"
        >
          <img
            src="/logo/milakarton-mark.svg"
            alt=""
            className="h-12 w-12 mb-1"
          />
          <span className="hidden leading-none sm:block">
            <span className="block font-serif text-xl font-bold tracking-[0.08em] text-[#0b2349]">
              MILA-KARTON
            </span>
            <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.2em] text-blue-600">
              Minimalist Market Place
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex font-sans">
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={scrollToTop}
              className={linkClass}
            >
              {item.name}
            </NavLink>
          ))}
          <Link
            to="/cart"
            onClick={scrollToTop}
            className="relative rounded-full p-2 text-slate-900 transition hover:bg-blue-50 hover:text-blue-600"
            aria-label="Shopping cart"
          >
            <ShoppingBag size={22} />
            {cartItemCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-600 px-1 text-[10px] font-bold text-white">
                {cartItemCount}
              </span>
            )}
          </Link>
        </nav>

        <div className="flex items-center gap-3 md:hidden" ref={menuRef}>
          <Link
            to="/cart"
            onClick={scrollToTop}
            className="relative rounded-full p-2 text-slate-900"
            aria-label="Shopping cart"
          >
            <ShoppingBag size={22} />
            {cartItemCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-600 px-1 text-[10px] font-bold text-white">
                {cartItemCount}
              </span>
            )}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="rounded-full p-2 text-slate-900"
            aria-label="Toggle menu"
          >
            {open ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </div>

      <div
        ref={menuRef}
        className={`${open ? "flex" : "hidden"} flex-col gap-5 border-t border-slate-200 bg-white px-6 py-6 md:hidden`}
      >
        {navLinks.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={() => {
              setOpen(false);
              scrollToTop();
            }}
            className={linkClass}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </header>
  );
}
