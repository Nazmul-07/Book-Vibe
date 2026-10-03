
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/assets/book.ico";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Listed Books", href: "/listed-books" },
    { name: "Pages to Read", href: "/pages-to-read" },
    { name: "Read Books", href: "/read-books" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50 border-b border-emerald-100/70 bg-white/90 shadow-sm backdrop-blur-xl">
      <div className="navbar container mx-auto min-h-16 px-4 sm:px-6 lg:px-8">
        
        {/* Logo & Mobile Menu */}
        <div className="navbar-start gap-2">
          <div className="dropdown">
            <button
              tabIndex={0}
              type="button"
              aria-label="Open navigation menu"
              className="btn btn-ghost btn-circle lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-slate-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Mobile Dropdown */}
            <ul
              tabIndex={0}
              className="menu dropdown-content z-50 mt-4 w-56 rounded-2xl border border-emerald-100 bg-white p-3 shadow-xl"
            >
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={`rounded-xl py-3 font-medium transition-colors ${
                      isActive(link.href)
                        ? "bg-emerald-50 text-emerald-700"
                        : "text-slate-600 hover:bg-emerald-50 hover:text-emerald-700"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

              <li className="mt-2 border-t border-slate-100 pt-2">
                <Link
                  href="/sign-in"
                  className="rounded-xl font-medium text-slate-700"
                >
                  Sign In
                </Link>
              </li>
              <li>
                <Link
                  href="/sign-up"
                  className="rounded-xl font-medium text-emerald-700"
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>

          {/* Brand */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3"
            aria-label="Book Vibe home"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 p-1.5">
              <Image
                src={logo}
                alt="Book Vibe logo"
                width={36}
                height={36}
                className="h-full w-full object-contain"
                priority
              />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
              Book<span className="text-emerald-600">Vibe</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="navbar-center hidden lg:flex"
        >
          <ul className="menu menu-horizontal items-center gap-1 px-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
                    isActive(link.href)
                      ? "bg-emerald-50 text-emerald-700"
                      : "text-slate-600 hover:bg-emerald-50 hover:text-emerald-700"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Buttons */}
        <div className="navbar-end gap-2 sm:gap-3">
          <Link
            href="/sign-in"
            className="btn btn-ghost btn-sm rounded-xl px-3 font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 sm:btn-md sm:px-5"
          >
            Sign In
          </Link>

          <Link
            href="/sign-up"
            className="btn btn-sm rounded-xl border-0 bg-emerald-600 px-3 font-semibold text-white shadow-md shadow-emerald-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-lg sm:btn-md sm:px-5"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;