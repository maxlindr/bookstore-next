'use client';

import {
  useEffect,
  useMemo,
  useState,
} from 'react';
import { AppBar as MUIAppBar } from '@mui/material';
import debounce from 'lodash.debounce';
import type { IBookFilters } from '@/types';
import {
  INITIAL_BOOK_FILTERS,
  useSetBookFilters,
} from '@/providers/BookFiltersProvider';
import { Search } from '@/components/Search';
import { Nav } from './components/Nav';
import styles from './AppBar.module.scss';

const DEBOUNCE_DELAY = 400;

interface IProps {
  search?: boolean;
}

export const AppBar = ({ search = false }: IProps) => {
  const [uiFilters, setUiFilters] = useState<IBookFilters>(INITIAL_BOOK_FILTERS);
  const setBookStoreFilters = useSetBookFilters();

  const debouncedSetSearch = useMemo(
    () => debounce((value: IBookFilters) => setBookStoreFilters(value), DEBOUNCE_DELAY),
    [setBookStoreFilters]
  );

  useEffect(() => {
    return () => {
      debouncedSetSearch.cancel();
      setBookStoreFilters(INITIAL_BOOK_FILTERS);
    };
  }, [debouncedSetSearch, setBookStoreFilters]);

  const handleSearchChange = (value: string) => {
    const searchValue = value.trim().length ? value : null;

    const newFilters = {
      search: searchValue,
    };

    setUiFilters(newFilters);
    debouncedSetSearch(newFilters);
  };

  return (
    <MUIAppBar
      position="relative"
      // TODO: проверить актуальность
      // кастомизация через createTheme для AppBar в MUI v7 не работает, делаем ее здесь
      sx={(theme) => ({
        padding: '1rem',
        backgroundColor: 'white',
        boxShadow: 'none',
        flexDirection: 'row',
        alignItems: 'center',
        minHeight: 78,
        gap: '1rem',
        [theme.breakpoints.up('sm')]: {
          padding: '1.25rem',
        },
      })}
    >
      <Nav className={styles.nav} />

      {search && (
        <Search
          className={styles.search}
          value={uiFilters.search ?? ''}
          onChange={handleSearchChange}
        />
      )}
    </MUIAppBar>
  );
};
