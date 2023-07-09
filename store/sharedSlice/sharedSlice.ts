import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBook } from '@/entities/IBook';

interface BooksState {
  favorites: IBook['id'][];
  cart: IBook['id'][];
}

const initialState: BooksState = {
  favorites: [],
  cart: [],
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
    setCart(state, action: PayloadAction<IBook['id'][]>) {
      state.cart = action.payload;
    },
    addToCart(state, { payload: id }: PayloadAction<IBook['id']>) {
      if (!state.cart.includes(id)) {
        state.cart = [...state.cart, id];
      }
    },
    removeFromCart(state, { payload: id }: PayloadAction<IBook['id']>) {
      if (state.cart.includes(id)) {
        const index = state.cart.findIndex((itemid) => itemid === id);
        const newCart = state.cart.slice();
        newCart.splice(index, 1);
        state.cart = newCart;
      }
    },
  },
});

export const { setFavorites, toggleFavorite, setCart, addToCart, removeFromCart } = sharedSlice.actions;
export default sharedSlice.reducer;
