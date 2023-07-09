import { BottomNavigation, BottomNavigationAction, Paper, Badge } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useRouter } from 'next/router';
import { Route } from '@/utils/constants';
import { useTotalFavorites } from '@/hooks';
import { useTotalCartItems } from '@/hooks/useTotalCartItems';

export const MobileFooter = () => {
  const router = useRouter();
  const totalCartItems = useTotalCartItems();
  const totalFavorites = useTotalFavorites();

  const handleNavChange = (_: React.SyntheticEvent, value: Route) => {
    let path = Route.Home;

    switch (value) {
      case Route.Home:
        path = Route.Home;
        break;

      case Route.Cart:
        path = Route.Cart;
        break;

      case Route.Favorites:
        path = Route.Favorites;
        break;
    }

    router.push(path);
  };

  return (
    <Paper elevation={3}>
      <BottomNavigation onChange={handleNavChange} value={router.route}>
        <BottomNavigationAction icon={<HomeIcon />} value={Route.Home} />

        <BottomNavigationAction
          icon={
            <Badge badgeContent={totalCartItems} color="error">
              <ShoppingCartIcon />
            </Badge>
          }
          value={Route.Cart}
        />

        <BottomNavigationAction
          icon={
            <Badge badgeContent={totalFavorites} color="error">
              <FavoriteIcon />
            </Badge>
          }
          value={Route.Favorites}
        />
      </BottomNavigation>
    </Paper>
  );
};
