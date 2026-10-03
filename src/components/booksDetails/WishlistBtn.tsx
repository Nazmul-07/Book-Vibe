'use client';

import { IBook } from "@/app/types/book.data";
import { BooksContext } from "@/context/BookContext";
import { useContext } from "react";
import { Bounce, toast } from "react-toastify";

const WishlistBtn = ({ book }: { book: IBook }) => {
  const context = useContext(BooksContext);

  if (!context) {
    return null;
  }

  const { wishlist, setWishlist } = context;

  const handleWishBook = () => {
    const alreadyAdded = wishlist.find((b: IBook) => b.bookId === book.bookId);

    if (!alreadyAdded) {
      setWishlist([...wishlist, book]);
      toast.success(`${book.bookName} Added on Wishlist`, {
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
      toast.error(`${book.bookName} Already added on Wishlist`, {
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
      <button className="btn btn-outline btn-success" onClick={() => handleWishBook()}>
        Add to Wishlist
      </button>
    </div>
  );
};

export default WishlistBtn;