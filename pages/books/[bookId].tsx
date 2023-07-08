import { useEffect, useState } from 'react';
import { AxiosError } from 'axios';
import { GetStaticPaths, GetStaticPropsContext, InferGetServerSidePropsType } from 'next';
import { ParsedUrlQuery } from 'querystring';

import { useTheme } from '@mui/material/styles';
import { PageLayout } from '@/widgets/PageLayout';
import { BookPageMobile } from '@/widgets/BookPageMobile';
import { BookPage } from '@/widgets/BookPage';
import { AppBar } from '@/widgets/AppBar';

import { useMediaQuery } from '@mui/material';
import { getBook, getBooks } from '@/api';
import { useAppDispatch, useAppSelector } from '@/store';
import { selectFavorites, toggleFavorite } from '@/store/sharedSlice';
import { IBook } from '@/entities/IBook';

export default function Book({ book: serverBook }: InferGetServerSidePropsType<typeof getStaticProps>) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
  const favorites = useAppSelector(selectFavorites);
  const [book, setBook] = useState<IBook>(() => ({ ...serverBook, favorite: false }));

  useEffect(() => {
    setBook({
      ...serverBook,
      favorite: favorites.includes(serverBook.id),
    });
  }, [serverBook, favorites]);

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

interface Params extends ParsedUrlQuery {
  bookId: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const { data: books } = await getBooks();

  const paths = books.map((book) => ({
    params: { bookId: String(book.id) },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context: GetStaticPropsContext<Params>) => {
  const { params } = context;
  const bookId = Number(params?.bookId);

  try {
    const { data: book } = await getBook(bookId);

    return { props: { book }, revalidate: 600 };
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
