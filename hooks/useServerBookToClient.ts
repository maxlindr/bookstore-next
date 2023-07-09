import { useEffect, useState } from 'react';
import { IServerBook } from '@/entities/IServerBook';
import { useAppSelector } from '@/store';
import { selectFavorites } from '@/store/sharedSlice';
import { IBook } from '@/entities/IBook';

export const useServerBookToClient = (serverBook: IServerBook) => {
  const favorites = useAppSelector(selectFavorites);
  const [book, setBook] = useState<IBook>(() => ({ ...serverBook, favorite: false }));

  useEffect(() => {
    setBook({
      ...serverBook,
      favorite: favorites.includes(serverBook.id),
    });
  }, [serverBook, favorites]);

  return book;
};
