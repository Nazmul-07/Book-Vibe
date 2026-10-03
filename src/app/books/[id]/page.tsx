import { notFound } from "next/navigation";
import Image from "next/image";
import { IBook } from "@/app/types/book.data";
import ReadBtn from "@/components/booksDetails/ReadBtn";
import WishlistBtn from "@/components/booksDetails/WishlistBtn";

interface BooksDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getBooks = async (): Promise<IBook[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);

  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }

  return res.json();
};

const BooksDetailsPage = async ({
  params,
}: BooksDetailsPageProps) => {
  const { id } = await params;
  const books = await getBooks();

  const book = books.find((item) => item.bookId === Number(id));

  if (!book) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-10">
      <div className="card lg:card-side overflow-hidden bg-base-100 shadow-xl">
        {/* Book Image */}
        <figure className="bg-base-200 p-6 lg:w-1/3">
          <Image
            src={book.image}
            alt={book.bookName}
            width={300}
            height={400}
            priority
            className="h-72 w-full max-w-60 rounded-lg object-contain sm:h-80"
          />
        </figure>

        {/* Book Information */}
        <div className="card-body gap-4 lg:w-2/3">
          <div className="space-y-2">
            <span className="badge badge-success badge-outline">
              {book.category}
            </span>

            <h1 className="card-title text-2xl font-bold sm:text-3xl">
              {book.bookName}
            </h1>

            <p className="text-base-content/70">
              By <span className="font-semibold">{book.author}</span>
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <span className="badge badge-outline">
              ⭐ {book.rating} / 5
            </span>
            <span className="badge badge-outline">
              {book.totalPages} pages
            </span>
            <span className="badge badge-outline">
              Published: {book.yearOfPublishing}
            </span>
          </div>

          <div className="divider my-1" />

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">Book Review</h2>
            <p className="text-sm leading-7 text-base-content/80">
              {book.review}
            </p>
          </section>

          <div className="space-y-2">
            <h2 className="font-semibold">Tags</h2>
            <div className="flex flex-wrap gap-2">
              {book.tags.map((tag) => (
                <span key={tag} className="badge badge-success badge-soft">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-2 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
            <p>
              <span className="font-semibold">Publisher:</span>{" "}
              {book.publisher}
            </p>
            <p>
              <span className="font-semibold">Book ID:</span> {book.bookId}
            </p>
          </div>

          <div className="card-actions mt-4 flex-wrap">
            <ReadBtn book={book}></ReadBtn>
            <WishlistBtn book={book}></WishlistBtn>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BooksDetailsPage;