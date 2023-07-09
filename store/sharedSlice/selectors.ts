import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { selectServerBooks } from '../booksSlice';
import { IBook } from '@/entities/IBook';

export const selectFavorites = (state: RootState) => state.shared.favorites;
export const selectCartIDs = (state: RootState) => state.shared.cart;

const nonNullable = <T>(value: T): value is NonNullable<T> => {
  return value !== null && value !== undefined;
};

export const selectCartItems = createSelector(selectServerBooks, selectCartIDs, (books, cartIDs) => {
  const booksMap = new Map<number, IBook>();

  books.forEach((book) => {
    booksMap.set(book.id, book);
  });

  return cartIDs
    .map((id) => {
      return booksMap.get(id);
    })
    .filter(nonNullable);
});
