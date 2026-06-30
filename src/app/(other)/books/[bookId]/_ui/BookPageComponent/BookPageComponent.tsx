'use client';

import type { FC } from 'react';
import { observer } from 'mobx-react-lite';
import type {
  IBook,
  IServerBook,
} from '@/types';
import { useFavoritesStore } from '@/providers/FavoritesProvider';
import { setFavoriteCookie } from '@/utils/setFavoriteCookie';
import { BookPage } from './ui/BookPage';
import { BookPageMobile } from './ui/BookPage/ui/BookPageMobile';

interface BookPageComponentProps {
  book: IServerBook;
}

export const BookPageComponent: FC<BookPageComponentProps> = observer(({ book: serverBook }) => {
  const { favorites, toggleFavorite } = useFavoritesStore();

  const { id: bookId } = serverBook;

  const book: IBook = {
    ...serverBook,
    favorite: favorites.includes(bookId),
  };

  const handleFavoriteClick = () => {
    toggleFavorite(bookId);

    let newFavorites: string[];

    if (favorites.includes(bookId)) {
      newFavorites = favorites.filter((id) => id !== bookId);
    } else {
      newFavorites = [...favorites, bookId];
    }

    setFavoriteCookie(newFavorites);
  };

  return (
    <>
      <BookPageMobile
        book={book}
        onFavoriteClick={handleFavoriteClick}
      />

      <BookPage
        book={book}
        onFavoriteClick={handleFavoriteClick}
      />
    </>
  );
});
