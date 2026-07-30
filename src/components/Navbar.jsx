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
  const headerRef = useRef(null);
  const [open, setOpen] = useState(false);
  const { cartItemCount } = useCart();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const closeMenu = () => setOpen(false);

  const linkClass = ({ isActive }) =>
    `text-xs font-semibold uppercase tracking-[0.12em] transition sm:tracking-[0.16em] ${
      isActive ? "text-blue-600" : "text-slate-600 hover:text-blue-600"
    }`;

  return (
    <header
      ref={headerRef}
      className="fixed left-0 top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-xl"
    >
      <div className="mx-auto flex min-h-[68px] max-w-7xl items-center justify-between gap-2 px-3 py-2.5 sm:min-h-[76px] sm:px-6 sm:py-3 lg:px-12">
        <Link
          to="/"
          onClick={() => {
            closeMenu();
            scrollToTop();
          }}
          className="flex min-w-0 shrink items-center gap-2 sm:gap-3"
          aria-label="Mila-Karton home"
        >
          <img
            src="/logo/milakarton-mark.svg"
            alt="Mila-Karton logo"
            className="h-9 w-9 shrink-0 sm:h-11 sm:w-11"
            width="44"
            height="44"
            decoding="async"
          />
          <span className="flex min-w-0 flex-col leading-none">
            <span className="whitespace-nowrap font-serif text-[0.82rem] font-bold tracking-[0.07em] text-[#0b2349] min-[380px]:text-sm sm:text-xl sm:tracking-[0.08em]">
              MILA-KARTON
            </span>
            <span className="mt-1 hidden whitespace-nowrap text-[7px] font-bold uppercase tracking-[0.12em] text-blue-600 min-[380px]:block min-[380px]:text-[8px] sm:text-[9px] sm:tracking-[0.2em]">
              Minimalist Market Place
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-5 md:flex lg:gap-7"
          aria-label="Primary navigation"
        >
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => {
                closeMenu();
                scrollToTop();
              }}
              className={linkClass}
            >
              {item.name}
            </NavLink>
          ))}
          <Link
            to="/cart"
            onClick={() => {
              closeMenu();
              scrollToTop();
            }}
            className="relative rounded-full p-2 text-slate-900 transition hover:bg-blue-50 hover:text-blue-600"
            aria-label="Shopping cart"
          >
            <ShoppingBag size={22} strokeWidth={1.9} />
            {cartItemCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-600 px-1 text-[10px] font-bold text-white">
                {cartItemCount}
              </span>
            )}
          </Link>
        </nav>

        <div className="flex shrink-0 items-center gap-0.5 md:hidden">
          <Link
            to="/cart"
            onClick={() => {
              closeMenu();
              scrollToTop();
            }}
            className="relative rounded-full p-2 text-slate-900 transition hover:bg-blue-50 hover:text-blue-600"
            aria-label="Shopping cart"
          >
            <ShoppingBag size={21} strokeWidth={1.9} />
            {cartItemCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-600 px-1 text-[10px] font-bold text-white">
                {cartItemCount}
              </span>
            )}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="rounded-full p-2 text-slate-900 transition hover:bg-blue-50 hover:text-blue-600"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? (
              <X size={23} strokeWidth={2} />
            ) : (
              <Menu size={23} strokeWidth={2} />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`${
          open ? "flex" : "hidden"
        } absolute left-0 right-0 top-full flex-col gap-1 border-t border-slate-200 bg-white px-4 py-3 shadow-lg sm:px-6 md:hidden`}
      >
        {navLinks.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={() => {
              closeMenu();
              scrollToTop();
            }}
            className={({ isActive }) =>
              `${linkClass({ isActive })} rounded-xl px-3 py-3 hover:bg-blue-50`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </header>
  );
}
