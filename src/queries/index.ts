import {
  keepPreviousData,
  queryOptions,
} from '@tanstack/react-query';
import {
  getBooks,
  searchBooks,
} from '@/api';

export const booksQueryOptions = queryOptions({
  queryKey: ['books'],
  queryFn: getBooks,
});

export const searchBooksQueryOptions = (search?: string | null) => queryOptions({
  queryKey: ['search-books', search],
  queryFn: ({ signal }) => {
    return searchBooks(search, { signal });
  },
  placeholderData: keepPreviousData,
});
