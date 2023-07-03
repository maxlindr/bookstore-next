import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { RootState } from '../store';
import { IBook } from '@/entities/IBook';

interface BooksState {
  books: IBook[];
  search: string;
}

const initialState: BooksState = {
  books: [],
  search: '',
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooks(state, action: PayloadAction<IBook[]>) {
      state.books = action.payload;
    },
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.books,
      };
    },
  },
});

export const { setBooks, setSearch } = booksSlice.actions;
export default booksSlice.reducer;
