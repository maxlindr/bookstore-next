'use client';

import { usePathname } from 'next/navigation';
import NextLink from 'next/link';
import { observer } from 'mobx-react-lite';
import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  Badge,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Route } from '@/constants';
import { useFavoritesStore } from '@/providers/FavoritesProvider';

export const MobileFooter = observer(() => {
  const pathname = usePathname();
  const { favorites } = useFavoritesStore();
  const totalFavorites = favorites.length;

  return (
    <Paper
      elevation={3}
      sx={{
        display: {
          xs: 'block',
          sm: 'none',
        },
      }}
    >
      <BottomNavigation value={pathname}>
        <BottomNavigationAction
          LinkComponent={NextLink}
          icon={<HomeIcon />}
          href={Route.Home}
          value={Route.Home}
        />

        <BottomNavigationAction
          LinkComponent={NextLink}
          icon={
            <Badge
              badgeContent={totalFavorites}
              color="error"
            >
              <FavoriteIcon />
            </Badge>
          }
          href={Route.Favorites}
          value={Route.Favorites}
        />
      </BottomNavigation>
    </Paper>
  );
});
