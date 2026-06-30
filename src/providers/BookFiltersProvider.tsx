'use client';

import {
  createContext,
  useContext,
  useState,
} from 'react';
import type { IBookFilters } from '@/types/IBookFilters';

export const INITIAL_BOOK_FILTERS: IBookFilters = {
  search: null,
};

const BookFiltersStateContext = createContext<IBookFilters | undefined>(undefined);

const BookFiltersActionsContext = createContext<
  React.Dispatch<React.SetStateAction<IBookFilters>> | undefined
>(undefined);

export function BookFiltersProvider({ children }: React.PropsWithChildren) {
  const [filters, setFilters] = useState<IBookFilters>(INITIAL_BOOK_FILTERS);

  return (
    <BookFiltersActionsContext.Provider value={setFilters}>
      <BookFiltersStateContext.Provider value={filters}>
        {children}
      </BookFiltersStateContext.Provider>
    </BookFiltersActionsContext.Provider>
  );
}

export function useBookFilters() {
  const filters = useContext(BookFiltersStateContext);

  if (filters === undefined) {
    throw new Error('useBookFilters must be used within BookFiltersProvider');
  }

  return filters;
}

export function useSetBookFilters() {
  const setFilters = useContext(BookFiltersActionsContext);

  if (setFilters === undefined) {
    throw new Error('useSetBookFilters must be used within BookFiltersProvider');
  }

  return setFilters;
}
