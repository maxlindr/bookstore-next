import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { booksSlice, setBooks } from './booksSlice';
import { sharedSlice } from './sharedSlice';
import { FAVORITES_COOKIE_NAME } from '@/utils/constants';

const listenerMiddleware = createListenerMiddleware();
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // год

listenerMiddleware.startListening({
  effect: async (_action, listenerApi) => {
    const state = listenerApi.getState() as RootState;

    if (typeof document !== 'undefined') {
      const favorites = state.shared.favorites;
      document.cookie = `${FAVORITES_COOKIE_NAME}=${JSON.stringify(favorites)};path=/;max-age=${COOKIE_MAX_AGE}`;
      const oldBooks = state.books.books;

      const newBooks = oldBooks.map((book) => ({
        ...book,
        favorite: favorites.includes(book.id),
      }));

      listenerApi.dispatch(setBooks(newBooks));
    }
  },
  predicate: (_action, currentState, previousState) => {
    return (currentState as RootState).shared.favorites !== (previousState as RootState).shared.favorites;
  },
});

const createStore = () => {
  const favorites = typeof window !== 'undefined' ? localStorage.getItem('favorites') : null;

  return configureStore({
    reducer: {
      [booksSlice.name]: booksSlice.reducer,
      [sharedSlice.name]: sharedSlice.reducer,
    },
    preloadedState: {
      shared: {
        favorites: favorites ? JSON.parse(favorites) : [],
      },
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(listenerMiddleware.middleware),
  });
};

export type AppStore = ReturnType<typeof createStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const reduxWrapper = createWrapper<AppStore>(createStore, {
  debug: false,
});

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
