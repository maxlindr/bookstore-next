import { useEffect, useState } from 'react';
import { AxiosError } from 'axios';
import { GetStaticPaths, GetStaticPropsContext, InferGetServerSidePropsType } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { IBook } from '@/entities/IBook';

import { useTheme } from '@mui/material/styles';
import { PageLayout } from '@/widgets/PageLayout';
import { BookPageMobile } from '@/widgets/BookPageMobile';
import { BookPage } from '@/widgets/BookPage';
import { AppBar } from '@/widgets/AppBar';

import { useMediaQuery } from '@mui/material';
import { getBook, getBooks } from '@/api';
import { useAppDispatch, useAppSelector } from '@/store';
import { addToCart, removeFromCart, selectCartIDs, selectFavorites, toggleFavorite } from '@/store/sharedSlice';

export default function Book({ book: serverBook }: InferGetServerSidePropsType<typeof getStaticProps>) {
  const { id: bookId } = serverBook;
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
  const favorites = useAppSelector(selectFavorites);
  const [book, setBook] = useState<IBook>(() => ({ ...serverBook, favorite: false }));
  const [inCart, setInCart] = useState(false);
  const cartIds = useAppSelector(selectCartIDs);

  useEffect(() => {
    setBook({
      ...serverBook,
      favorite: favorites.includes(serverBook.id),
    });
  }, [serverBook, favorites]);

  useEffect(() => {
    setInCart(cartIds.includes(bookId));
  }, [bookId, cartIds]);

  const handleFavoriteClick = () => {
    dispatch(toggleFavorite(bookId));
  };

  const handleAddToCart = () => {
    dispatch(addToCart(bookId));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(bookId));
  };

  const Component = isDesktop ? BookPage : BookPageMobile;

  return (
    <PageLayout
      title={`Книга ${book.title}`}
      description={book.description}
      appBar={isDesktop ? <AppBar /> : undefined}
    >
      <Component
        book={book}
        inCart={inCart}
        onFavoriteClick={handleFavoriteClick}
        onAddToCardClick={handleAddToCart}
        onRemoveFromCartClick={handleRemoveFromCart}
      />
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
