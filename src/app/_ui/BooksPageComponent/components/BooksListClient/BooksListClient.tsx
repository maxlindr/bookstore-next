'use client';

import { observer } from 'mobx-react-lite';
import { useQuery } from '@tanstack/react-query';
import type { IBookShort } from '@/types';
import { searchBooksQueryOptions } from '@/queries';
import { useFavoritesStore } from '@/providers/FavoritesProvider';
import { useBookFilters } from '@/providers/BookFiltersProvider';
import { BooksList } from '@/widgets';

export const BooksListClient = observer(() => {
  const { favorites } = useFavoritesStore();
  const filters = useBookFilters();

  const {
    data: serverBooks = [],
    error,
  } = useQuery(searchBooksQueryOptions(filters.search));

  if (error) throw error;

  const books: IBookShort[] = serverBooks.map((book) => ({
    ...book,
    favorite: favorites.includes(book.id),
  }));

  return (
    <BooksList
      books={books}
      emptyMessage="Ничего не найдено по выбранным фильтрам"
    />
  );
});
