
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-16 bg-slate-950 text-slate-300">
      <div className="container mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
        {/* Footer Main Content */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-2xl font-extrabold tracking-tight text-white"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-xl">
                📚
              </span>
              Book <span className="text-emerald-400">Vibe</span>
            </Link>

            <p className="max-w-xs text-sm leading-7 text-slate-400">
              Discover your next favorite book, explore new worlds,
              and make every reading moment meaningful with Book Vibe.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="text-xs font-medium text-slate-400">
                Your journey, one book at a time.
              </span>
            </div>
          </div>

          {/* Explore */}
          <nav aria-label="Explore">
            <h2 className="mb-5 text-sm font-bold uppercase tracking-widest text-white">
              Explore
            </h2>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-emerald-400"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/books"
                  className="transition-colors hover:text-emerald-400"
                >
                  All Books
                </Link>
              </li>
              <li>
                <Link
                  href="/listed-books"
                  className="transition-colors hover:text-emerald-400"
                >
                  Listed Books
                </Link>
              </li>
              <li>
                <Link
                  href="/pages-to-read"
                  className="transition-colors hover:text-emerald-400"
                >
                  Pages to Read
                </Link>
              </li>
            </ul>
          </nav>

          {/* Useful Links */}
          <nav aria-label="Useful links">
            <h2 className="mb-5 text-sm font-bold uppercase tracking-widest text-white">
              Useful Links
            </h2>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="transition-colors hover:text-emerald-400"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-emerald-400"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="transition-colors hover:text-emerald-400"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="transition-colors hover:text-emerald-400"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </nav>

          {/* Social Media */}
          <div>
            <h2 className="mb-5 text-sm font-bold uppercase tracking-widest text-white">
              Follow Us
            </h2>
            <p className="mb-5 max-w-xs text-sm leading-6 text-slate-400">
              Stay connected and discover more books, reading tips,
              and updates from our community.
            </p>

            <div className="flex items-center gap-3">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 transition-all hover:-translate-y-1 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.3-1.5 1.6-1.5h1.7V3.7c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2H7.3V13h2.8v8h3.4Z" />
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 transition-all hover:-translate-y-1 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-5-7.1L5.7 22H2.5l7.3-8.4L1.8 2h6.5l4.5 6.6L18.9 2Zm-1.1 18h1.7L7.3 3.9H5.5L17.8 20Z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 transition-all hover:-translate-y-1 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 transition-all hover:-translate-y-1 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-9 h-px bg-slate-800" />

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-slate-500 sm:text-sm">
            © {new Date().getFullYear()} Book Vibe. All rights reserved.
          </p>

          <p className="text-xs text-slate-500 sm:text-sm">
            Made By <span className="text-rose-500">NA ZM UL</span> for book lovers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;