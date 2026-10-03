
"use client";

import React, { useContext, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IBook } from "../types/book.data";
import { BooksContext } from "@/context/BookContext";
import { Bounce, toast } from "react-toastify";

type TabType = "read" | "wishlist";
type SortType = "pages" | "rating" | "year";

const ListedBooksPage = () => {
  const context = useContext(BooksContext);

  if (!context) {
    throw new Error("BooksContext is not available");
  }

  const { readBooks, wishlist, setReadBooks, setWishlist } = context;

  const [activeTab, setActiveTab] = useState<TabType>("read");
  const [sortBy, setSortBy] = useState<SortType>("rating");

  const sortedBooks = useMemo(() => {
    const books = activeTab === "read" ? [...readBooks] : [...wishlist];

    if (sortBy === "rating") {
      books.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "pages") {
      books.sort((a, b) => b.totalPages - a.totalPages);
    } else {
      books.sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
    }

    return books;
  }, [activeTab, readBooks, sortBy, wishlist]);

  const books: IBook[] = sortedBooks;

  const showSuccessToast = (message: string) => {
    toast.success(message, {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      transition: Bounce,
    });
  };

  const handleRemove = (bookId: number) => {
    if (activeTab === "read") {
      setReadBooks((prev: IBook[]) =>
        prev.filter((book) => book.bookId !== bookId)
      );
      showSuccessToast("Book removed from Read Books");
    } else {
      setWishlist((prev: IBook[]) =>
        prev.filter((book) => book.bookId !== bookId)
      );
      showSuccessToast("Book removed from Wishlist");
    }
  };

  return (
    <main className="min-h-screen bg-base-200/40">
      <div className="container mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        {/* Hero Header */}
        <header className="relative isolate overflow-hidden rounded-2xl bg-linear-to-br from-emerald-700 via-emerald-600 to-teal-500 px-5 py-10 text-center text-white shadow-lg sm:px-10 sm:py-14">
          <div className="pointer-events-none absolute -right-16 -top-24 -z-10 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-16 -z-10 h-64 w-64 rounded-full bg-teal-300/20 blur-2xl" />

          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide sm:text-sm">
            <span aria-hidden="true">✦</span>
            YOUR PERSONAL LIBRARY
          </span>

          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            My Listed Books
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-white/85 sm:text-base">
            Organize your reading journey. Keep track of the books
            you have read and the ones you want to explore next.
          </p>

          <div className="mx-auto mt-7 grid max-w-sm grid-cols-2 gap-3">
            <div className="rounded-xl border border-white/20 bg-white/10 px-3 py-3 backdrop-blur-sm">
              <p className="text-2xl font-bold sm:text-3xl">
                {readBooks.length}
              </p>
              <p className="mt-1 text-xs text-white/80 sm:text-sm">
                Read Books
              </p>
            </div>
            <div className="rounded-xl border border-white/20 bg-white/10 px-3 py-3 backdrop-blur-sm">
              <p className="text-2xl font-bold sm:text-3xl">
                {wishlist.length}
              </p>
              <p className="mt-1 text-xs text-white/80 sm:text-sm">
                Wishlist
              </p>
            </div>
          </div>
        </header>

        {/* Tabs and Sorting */}
        <section className="space-y-5">
          <div className="flex flex-col gap-4 rounded-2xl border border-base-300/70 bg-base-100 p-3 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-4">
            {/* Tabs */}
            <div
              role="tablist"
              aria-label="Book lists"
              className="grid grid-cols-2 gap-2 rounded-xl bg-base-200 p-1 sm:flex sm:w-auto"
            >
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "read"}
                onClick={() => setActiveTab("read")}
                className={`flex min-h-11 items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition sm:px-5 ${
                  activeTab === "read"
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "text-base-content/70 hover:bg-base-300"
                }`}
              >
                <span>Read Books</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-xs ${
                    activeTab === "read"
                      ? "bg-white/20 text-white"
                      : "bg-base-300 text-base-content"
                  }`}
                >
                  {readBooks.length}
                </span>
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "wishlist"}
                onClick={() => setActiveTab("wishlist")}
                className={`flex min-h-11 items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition sm:px-5 ${
                  activeTab === "wishlist"
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "text-base-content/70 hover:bg-base-300"
                }`}
              >
                <span>Wishlist</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-xs ${
                    activeTab === "wishlist"
                      ? "bg-white/20 text-white"
                      : "bg-base-300 text-base-content"
                  }`}
                >
                  {wishlist.length}
                </span>
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center justify-between gap-3 sm:justify-end">
              <label
                htmlFor="book-sort"
                className="shrink-0 text-sm font-medium text-base-content/70"
              >
                Sort by
              </label>
              <select
                id="book-sort"
                value={sortBy}
                onChange={(e) =>
                  setSortBy(e.target.value as SortType)
                }
                className="select select-bordered select-sm w-full max-w-48 rounded-lg bg-base-100 sm:w-48"
              >
                <option value="rating">Highest rating</option>
                <option value="pages">Number of pages</option>
                <option value="year">Latest publication</option>
              </select>
            </div>
          </div>

          {/* Section Heading */}
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600">
                YOUR COLLECTION
              </p>
              <h2 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
                {activeTab === "read" ? "Read Books" : "My Wishlist"}
              </h2>
              <p className="mt-1 text-sm text-base-content/60">
                {activeTab === "read"
                  ? "Books you've completed or marked as read."
                  : "Books saved for your next reading adventure."}
              </p>
            </div>

            <span className="rounded-full bg-base-300/70 px-3 py-1.5 text-xs font-medium text-base-content/70">
              {books.length} {books.length === 1 ? "book" : "books"}
            </span>
          </div>

          {/* Empty State */}
          {sortedBooks.length === 0 ? (
            <div className="flex min-h-72 flex-col items-center justify-center rounded-2xl border border-dashed border-base-300 bg-base-100 px-5 py-12 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-3xl">
                {activeTab === "read" ? "📖" : "💚"}
              </div>

              <h3 className="text-lg font-bold">
                {activeTab === "read"
                  ? "No read books yet"
                  : "Your wishlist is empty"}
              </h3>

              <p className="mt-2 max-w-sm text-sm leading-6 text-base-content/60">
                {activeTab === "read"
                  ? "Start building your reading history by exploring our book collection."
                  : "Discover interesting books and save your favorites here."}
              </p>

              <Link
                href="/books"
                className="btn btn-success mt-5 rounded-xl px-6 text-white"
              >
                Explore Books
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          ) : (
            /* Book Cards */
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {sortedBooks.map((book) => (
                <article
                  key={book.bookId}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-base-300/70 bg-base-100 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Book Image */}
                  <div className="relative flex h-56 items-center justify-center overflow-hidden bg-base-200 p-5 sm:h-60">
                    <Image
                      src={book.image}
                      alt={book.bookName}
                      width={180}
                      height={230}
                      className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                    />

                    <span className="absolute left-3 top-3 max-w-[70%] truncate rounded-full border border-base-300/50 bg-base-100/90 px-3 py-1 text-xs font-medium text-base-content shadow-sm backdrop-blur">
                      {book.category}
                    </span>

                    <span className="absolute right-3 top-3 rounded-full bg-base-100/90 px-2.5 py-1 text-xs font-semibold text-amber-600 shadow-sm backdrop-blur">
                      ★ {book.rating}
                    </span>
                  </div>

                  {/* Book Details */}
                  <div className="flex flex-1 flex-col p-4 sm:p-5">
                    <h3 className="line-clamp-2 min-h-12 text-base font-bold leading-6 transition-colors group-hover:text-emerald-600 sm:text-lg">
                      {book.bookName}
                    </h3>

                    <p className="mt-2 line-clamp-1 text-sm text-base-content/60">
                      By {book.author}
                    </p>

                    <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-base-content/60">
                      <span className="rounded-md bg-base-200 px-2.5 py-1.5">
                        {book.totalPages} pages
                      </span>
                      <span className="rounded-md bg-base-200 px-2.5 py-1.5">
                        {book.yearOfPublishing}
                      </span>
                    </div>

                    {/* Actions */}
                    <div className="mt-auto grid grid-cols-2 gap-2 pt-5">
                      <Link
                        href={`/books/${book.bookId}`}
                        className="btn btn-sm rounded-lg border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white"
                      >
                        Details
                      </Link>

                      <button
                        type="button"
                        onClick={() => handleRemove(book.bookId)}
                        className="btn btn-error btn-sm rounded-lg text-white"
                        aria-label={`Remove ${book.bookName} from ${
                          activeTab === "read" ? "Read Books" : "Wishlist"
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          className="h-4 w-4"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 6h18M8 6V4h8v2m3 0-1 14H6L5 6m4 4v6m6-6v6"
                          />
                        </svg>
                        Remove
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default ListedBooksPage;