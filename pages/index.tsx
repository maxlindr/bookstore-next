import { useState, useEffect } from 'react';
import { GetStaticPropsContext, InferGetServerSidePropsType } from 'next';
import { getBooks } from '@/api/getBooks';
import { reduxWrapper, useAppSelector } from '@/store';
import { selectBooks, setBooks } from '@/store/booksSlice';
import { selectFavorites } from '@/store/sharedSlice';
import { IBook } from '@/entities/IBook';

import { AppBar } from '@/widgets/AppBar';
import { HomePage } from '@/widgets/HomePage';
import { PageLayout } from '@/widgets/PageLayout';

export default function Home(props: InferGetServerSidePropsType<typeof getStaticProps>) {
  const storeBooks = useAppSelector(selectBooks);
  const favorites = useAppSelector(selectFavorites);
  const [books, setBooks] = useState<IBook[]>(storeBooks);

  useEffect(() => {
    setBooks(
      storeBooks.map((book) => ({
        ...book,
        favorite: favorites.includes(book.id),
      }))
    );
  }, [storeBooks, favorites]);

  return (
    <PageLayout
      title="Книги по графическому дизайну и типографике"
      description="Каталог книг по графическому дизайну и типографике. Распродажа личной коллекции."
      appBar={<AppBar />}
    >
      <HomePage books={books} />
    </PageLayout>
  );
}

export const getStaticProps = reduxWrapper.getServerSideProps((store) => async (context: GetStaticPropsContext) => {
  const { data: books } = await getBooks();

  const booksWithFavorite: IBook[] = books.map((book) => ({
    ...book,
    favorite: false,
  }));

  store.dispatch(setBooks(booksWithFavorite));

  return { props: { books: booksWithFavorite }, revalidate: 600 };
});
