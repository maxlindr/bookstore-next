import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { booksSlice } from './booksSlice';
import { sharedSlice } from './sharedSlice';

const FAVORITES_KEY_NAME = 'favorites';

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  effect: async (_action, listenerApi) => {
    const state = listenerApi.getState() as RootState;

    if (typeof document !== 'undefined') {
      const favorites = state.shared.favorites;
      localStorage.setItem(FAVORITES_KEY_NAME, JSON.stringify(favorites));
    }
  },
  predicate: (_action, currentState, previousState) => {
    return (currentState as RootState).shared.favorites !== (previousState as RootState).shared.favorites;
  },
});

const createStore = () => {
  const favorites = typeof window !== 'undefined' ? localStorage.getItem(FAVORITES_KEY_NAME) : null;

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
