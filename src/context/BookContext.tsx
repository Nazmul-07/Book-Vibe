'use client';

import { IBook } from '@/app/types/book.data';
import React, { createContext, ReactNode, useState } from 'react';

export type BooksContextType = {
  readBooks: IBook[];
  wishlist: IBook[];
  setReadBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
  setWishlist: React.Dispatch<React.SetStateAction<IBook[]>>;
};

export const BooksContext = createContext<BooksContextType | undefined>(undefined);

const BooksProvider = ({ children }: { children: ReactNode }) => {
  const [readBooks, setReadBooks] = useState<IBook[]>([]);
  const [wishlist, setWishlist] = useState<IBook[]>([]);

  const sharedData: BooksContextType = {
    readBooks,
    setReadBooks,
    wishlist,
    setWishlist,
  };

  return <BooksContext.Provider value={sharedData}>{children}</BooksContext.Provider>;
};

export default BooksProvider;