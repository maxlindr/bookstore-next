'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import Cookies from 'js-cookie';
import { FavoritesStore } from '@/stores/favoritesStore';

const FavoritesContext = createContext<FavoritesStore | null>(null);

export function FavoritesProvider({ children }: React.PropsWithChildren) {
  const [store] = useState(() => new FavoritesStore());

  useEffect(() => {
    const raw = Cookies.get('favorites') ?? '[]';

    try {
      store.setFavorites(JSON.parse(raw));
    } catch {
      store.setFavorites([]);
    }
  }, [store]);

  return (
    <FavoritesContext value={store}>
      {children}
    </FavoritesContext>
  );
}

export function useFavoritesStore() {
  const store = useContext(FavoritesContext);
  if (!store) throw new Error('useFavoritesStore must be used within FavoritesProvider');
  return store;
}
