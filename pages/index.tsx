import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { getBooks } from '@/api/getBooks';
import { reduxWrapper, useAppSelector } from '@/store';
import { selectBooks, setBooks } from '@/store/booksSlice';
import { setFavorites } from '@/store/sharedSlice';
import { IBook } from '@/entities/IBook';

import { AppBar } from '@/widgets/AppBar';
import { HomePage } from '@/widgets/HomePage';
import { PageLayout } from '@/widgets/PageLayout';

export default function Home(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const books = useAppSelector(selectBooks);

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

export const getServerSideProps = reduxWrapper.getServerSideProps(
  (store) => async (context: GetServerSidePropsContext) => {
    const { favorites: cookieFavorites } = context.req.cookies;
    const favorites = cookieFavorites ? JSON.parse(cookieFavorites) : [];

    const { data: books } = await getBooks();

    const booksWithFavorite: IBook[] = books.map((book) => ({
      ...book,
      favorite: favorites.includes(book.id),
    }));

    store.dispatch(setFavorites(favorites));
    store.dispatch(setBooks(booksWithFavorite));

    return { props: { books: booksWithFavorite } };
  }
);
