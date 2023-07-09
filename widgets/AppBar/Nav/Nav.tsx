import { useRouter } from 'next/router';
import { Route } from '@/utils/constants';
import { useTotalFavorites } from '@/hooks';
import { useTotalCartItems } from '@/hooks/useTotalCartItems';

import { Badge, IconButton } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

interface Props {
  className?: string;
}

const btnSX = { padding: 0, marginLeft: '1rem' };

export const Nav = ({ className }: Props) => {
  const router = useRouter();
  const totalCartItems = useTotalCartItems();
  const totalFavorites = useTotalFavorites();

  return (
    <div className={className}>
      {router.pathname !== Route.Home && (
        <IconButton size="large" href={Route.Home} aria-label="Каталог" sx={btnSX}>
          <HomeOutlinedIcon />
        </IconButton>
      )}

      {router.pathname !== Route.Cart && (
        <IconButton size="large" href={Route.Cart} aria-label="Корзина" sx={btnSX}>
          <Badge badgeContent={totalCartItems} color="error">
            <ShoppingCartOutlinedIcon />
          </Badge>
        </IconButton>
      )}

      {router.pathname !== Route.Favorites && (
        <IconButton size="large" href={Route.Favorites} aria-label="Избранное" sx={btnSX}>
          <Badge badgeContent={totalFavorites} color="error">
            <FavoriteBorderIcon />
          </Badge>
        </IconButton>
      )}
    </div>
  );
};
