import { useAppSelector } from '@/store';
import { selectFavorites } from '@/store/sharedSlice';
import { useEffect, useState } from 'react';

export const useTotalFavorites = () => {
  const favorites = useAppSelector(selectFavorites);
  const [favoritesLength, setFavoritesLength] = useState<number | null>(null);

  useEffect(() => {
    setFavoritesLength(favorites.length);
  }, [favorites]);

  return favoritesLength;
};
