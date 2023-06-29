import { useRouter } from 'next/router';
import { Route } from '@/utils/constants';

import styles from './AppBar.module.scss';
import { AppBar as MUIAppBar } from '@mui/material';

import { Search } from '@/components/Search';
import { Nav } from './Nav';

export const AppBar = () => {
  const router = useRouter();
  const isHomePage = router.pathname === Route.Home;

  return (
    <MUIAppBar position="relative" className={styles.root}>
      {isHomePage && <Search className={styles.search} />}
      <Nav className={styles.nav} />
    </MUIAppBar>
  );
};
