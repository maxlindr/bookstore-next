import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const selectServerBooks = (state: RootState) => state.books.books;
export const selectSearch = (state: RootState) => state.books.search;

export const selectBooks = createSelector(selectServerBooks, selectSearch, (books, search) => {
  return search ? books.filter((book) => book.title.toLowerCase().includes(search.toLowerCase())) : books;
});
