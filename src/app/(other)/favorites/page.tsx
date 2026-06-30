import { cookies } from 'next/headers';
import { FAVORITES_STORAGE_KEY } from '@/constants';
import { getBooksByIds } from '@/api/getBooksByIds';
import { FavoritesPageComponent } from './_ui/FavoritesPageComponent';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Книги по графическому дизайну и типографике — избранное',
  robots: {
    index: false,
    follow: false,
  },
};

export default async function FavoritesPage() {
  const cookieStore = await cookies();
  const favorites = JSON.parse(cookieStore.get(FAVORITES_STORAGE_KEY)?.value ?? '[]');

  const serverBooks = favorites.length > 0
    ? await getBooksByIds(favorites)
    : [];

  return (
    <FavoritesPageComponent serverBooks={serverBooks} />
  );
}

