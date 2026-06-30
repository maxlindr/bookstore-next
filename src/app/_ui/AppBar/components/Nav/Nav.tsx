import { usePathname } from 'next/navigation';
import { observer } from 'mobx-react-lite';
import NextLink from 'next/link';
import clsx from 'clsx';
import {
  Badge,
  IconButton,
} from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Route } from '@/constants';
import { useFavoritesStore } from '@/providers/FavoritesProvider';
import styles from './Nav.module.scss';

interface Props {
  className?: string;
}

export const Nav = observer(({ className }: Props) => {
  const pathname = usePathname();
  const { favorites } = useFavoritesStore();
  const totalFavorites = favorites.length;

  return (
    <div className={clsx(styles.root, className)}>
      {pathname !== Route.Home && (
        <IconButton
          LinkComponent={NextLink}
          size="large"
          href={Route.Home}
          aria-label="Каталог"
        >
          <HomeOutlinedIcon />
        </IconButton>
      )}

      {pathname !== Route.Favorites && (
        <IconButton
          LinkComponent={NextLink}
          size="large"
          href={Route.Favorites}
          aria-label="Избранное"
        >
          <Badge
            badgeContent={totalFavorites}
            color="error"
          >
            <FavoriteBorderIcon />
          </Badge>
        </IconButton>
      )}
    </div>
  );
});
