import { AxiosError } from 'axios';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';

import { useTheme } from '@mui/material/styles';
import { PageLayout } from '@/widgets/PageLayout';
import { BookPageMobile } from '@/widgets/BookPageMobile';
import { BookPage } from '@/widgets/BookPage';
import { AppBar } from '@/widgets/AppBar';

import { useMediaQuery } from '@mui/material';
import { getBook } from '@/api/getBook';
import { useAppDispatch, useAppSelector } from '@/store';
import { selectFavorites, toggleFavorite } from '@/store/sharedSlice';
import { IBook } from '@/entities/IBook';

export default function Book({ book: serverBook }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
  const favorites = useAppSelector(selectFavorites);

  const book = {
    ...serverBook,
    favorite: favorites.includes(serverBook.id),
  };

  const dispatch = useAppDispatch();

  const handleFavoriteClick = () => {
    dispatch(toggleFavorite(book.id));
  };

  const Component = isDesktop ? BookPage : BookPageMobile;

  return (
    <PageLayout
      title={`Книга ${book.title}`}
      description={book.description}
      appBar={isDesktop ? <AppBar /> : undefined}
    >
      {<Component book={book} onFavoriteClick={handleFavoriteClick} />}
    </PageLayout>
  );
}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const bookId = Number(context.query.bookId);
  const { favorites: cookieFavorites } = context.req.cookies;
  const favorites = cookieFavorites ? JSON.parse(cookieFavorites) : [];

  try {
    const { data: book } = await getBook(bookId);

    const bookWithFavorite: IBook = {
      ...book,
      favorite: favorites.includes(book.id),
    };

    return { props: { book: bookWithFavorite } };
  } catch (error) {
    if ((error as AxiosError).response?.status === 404) {
      return {
        notFound: true,
      };
    }

    // eslint-disable-next-line no-console
    console.error(error);

    return {
      redirect: {
        destination: '/500',
        permanent: false,
      },
    };
  }
};
