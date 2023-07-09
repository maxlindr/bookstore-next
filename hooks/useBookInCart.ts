import { useEffect, useState } from 'react';
import { IBook } from '@/entities/IBook';
import { IServerBook } from '@/entities/IServerBook';
import { useAppSelector } from '@/store';
import { selectCartIDs } from '@/store/sharedSlice';

export const useBookInCart = (book: IServerBook | IBook | number) => {
  const [inCart, setInCart] = useState(false);
  const cartIds = useAppSelector(selectCartIDs);
  const bookId = typeof book === 'number' ? book : book.id;

  useEffect(() => {
    setInCart(cartIds.includes(bookId));
  }, [bookId, cartIds]);

  return inCart;
};
