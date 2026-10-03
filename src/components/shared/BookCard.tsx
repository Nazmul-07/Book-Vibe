import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { IBook } from '@/app/types/book.data';

interface bookProps {
    book: IBook;
}

const BookCard = ({book}: bookProps) => {
    return (
        <div
            key={book.bookId}
            className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Book Image */}
            <div className="relative flex h-64 items-center justify-center overflow-hidden bg-emerald-50 p-5 sm:h-72">
              {book.image ? (
                <Image
                  src={book.image}
                  alt={book.bookName}
                  width={300}
                  height={350}
                  className="h-full w-auto max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-emerald-700">
                  <span className="text-5xl">📚</span>
                </div>
              )}

              {book.category && (
                <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-emerald-700 shadow-sm">
                  {book.category}
                </span>
              )}
            </div>

            {/* Book Details */}
            <div className="flex flex-col p-5">
              <div className="mb-3 flex items-center justify-between gap-2">
                <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
                  Book #{book.bookId}
                </span>
                {book.rating !== undefined && (
                  <span className="flex items-center gap-1 text-sm font-semibold text-amber-500">
                    <span>★</span>
                    {book.rating}
                  </span>
                )}
              </div>

              <h3 className="line-clamp-2 min-h-14 text-lg font-bold leading-7 text-slate-800 transition-colors group-hover:text-emerald-700">
                {book.bookName}
              </h3>

              {book.author && (
                <p className="mt-2 text-sm text-slate-500">
                  By <span className="font-medium text-slate-700">{book.author}</span>
                </p>
              )}

              {book.review && (
                <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-500">
                  {book.review}
                </p>
              )}

              {/* Price and Button */}
              <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
                {book.totalPages !== undefined ? (
                  <p className="text-sm font-bold text-emerald-700">
                    Page-{book.totalPages}
                  </p>
                ) : (
                  <span className="text-sm font-medium text-slate-400">
                    Explore book
                  </span>
                )}

                <Link
                  href={`/books/${book.bookId}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                >
                  Details
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
    );
};

export default BookCard;