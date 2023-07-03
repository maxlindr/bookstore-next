import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { IBook } from '@/entities/IBook';

interface BooksState {
  favorites: IBook['id'][];
}

const initialState: BooksState = {
  favorites: [],
};

export const sharedSlice = createSlice({
  name: 'shared',
  initialState,
  reducers: {
    setFavorites(state, action: PayloadAction<IBook['id'][]>) {
      state.favorites = action.payload;
    },
    toggleFavorite(state, action: PayloadAction<IBook['id']>) {
      const favoriteId = action.payload;
      const favoriteIndex = state.favorites.findIndex((bookId) => bookId === favoriteId);

      if (favoriteIndex === -1) {
        state.favorites = [...state.favorites, favoriteId];
      } else {
        const newFavorites = state.favorites.slice();
        newFavorites.splice(favoriteIndex, 1);
        state.favorites = newFavorites;
      }
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.shared,
      };
    },
  },
});

export const { setFavorites, toggleFavorite } = sharedSlice.actions;
export default sharedSlice.reducer;
