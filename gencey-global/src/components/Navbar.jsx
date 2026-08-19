import { useState } from "react";
import { Link } from "react-router-dom";

import {
  Menu,
  X,
} from "lucide-react";


const navLinks = [
  {
    to: "/",
    label: "Home",
  },
  {
    to: "/services",
    label: "Services",
  },
  {
    to: "/#solutions",
    label: "Solutions",
  },
  {
    to: "/#projects",
    label: "Our Work",
  },
  {
    to: "/#about",
    label: "About",
  },
  {
    to: "/contact",
    label: "Contact",
  },
];


const Navbar = () => {

  const [menuOpen, setMenuOpen] =
    useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <nav className="relative border-b border-black/10 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-2"
          >
            <div className="text-xl font-bold text-black sm:text-2xl">
              GENCEY
              <span className="text-[#FF914D]"> GLOBAL</span>
            </div>
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-black/65 transition-colors duration-300 hover:text-orange-500"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="rounded-full bg-orange-500 px-6 py-3 font-medium text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600"
            >
              Let's Talk
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-black transition-colors hover:bg-black hover:text-white lg:hidden"
          >
            {menuOpen ? (
              <X size={21} />
            ) : (
              <Menu size={21} />
            )}
          </button>
        </div>

        {menuOpen && (
          <div className="absolute left-4 right-4 top-[72px] rounded-[24px] border border-black/10 bg-white p-5 shadow-[0_20px_60px_rgba(0,0,0,0.14)] lg:hidden">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={closeMenu}
                  className="rounded-2xl px-4 py-3 font-semibold text-black/70 transition-colors hover:bg-[#FFF9F5] hover:text-orange-500"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                to="/contact"
                onClick={closeMenu}
                className="mt-3 rounded-full bg-orange-500 px-5 py-3 text-center font-bold text-white"
              >
                Start a Project
              </Link>

              <Link
                    to="/services"
                    className="
                      transition-colors
                      hover:text-[#FF914D]
                    "
                  >
                    Services
                  </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );

};


export default Navbar;
