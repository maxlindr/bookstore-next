import { useRouter } from 'next/router';
import { Route } from '@/utils/constants';

import styles from './AppBar.module.scss';
import { AppBar as MUIAppBar } from '@mui/material';

import { Search } from '@/components/Search';
import { Nav } from './Nav';
import { useAppDispatch } from '@/store';
import { setSearch } from '@/store/booksSlice';

export const AppBar = () => {
  const router = useRouter();
  const isHomePage = router.pathname === Route.Home;
  const dispatch = useAppDispatch();

  const handleSearchSubmit = (value: string) => {
    dispatch(setSearch(value));
  };

  return (
    <MUIAppBar position="relative">
      {isHomePage && <Search className={styles.search} onSubmit={handleSearchSubmit} />}
      <Nav className={styles.nav} />
    </MUIAppBar>
  );
};
