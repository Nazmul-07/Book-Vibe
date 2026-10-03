
import BookCard from "@/components/shared/BookCard";
import { IBook } from "../types/book.data";



const getBooks = async (): Promise<IBook[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);

  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }

  return res.json();
};

const Books = async () => {
  const books = await getBooks();

  return (
    <section className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      {/* Section Heading */}
      <div className="mb-10 text-center">
        <span className="mb-3 inline-block rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
          Explore Our Collection
        </span>
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Discover Your Next <span className="text-emerald-600">Favorite Book</span>
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
          Explore our handpicked collection of books and find your next
          great read.
        </p>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {books.map((book) => (
          <BookCard key={book.bookId} book={book}/>
        ))}
      </div>
    </section>
  );
};

export default Books;