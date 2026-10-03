"use client";

import { IBook } from "@/app/types/book.data";
import { BooksContext } from "@/context/BookContext";
import { useContext } from "react";
import { Bounce, toast } from "react-toastify";

const ReadBtn = ({ book }: { book: IBook }) => {
  const context = useContext(BooksContext);

  if (!context) {
    return null;
  }

  const { readBooks, setReadBooks } = context;

  const handleReadBook = () => {
    const alreadyAdded = readBooks.find((b: IBook) => b.bookId === book.bookId);

    if (!alreadyAdded) {
      setReadBooks([...readBooks, book]);
      toast.success(`${book.bookName} Added on Read Book`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else {
      toast.error(`${book.bookName} Already added on Read Book`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <div>
      <button className="btn btn-success" onClick={() => handleReadBook()}>
        Read Book
      </button>
    </div>
  );
};

export default ReadBtn;
