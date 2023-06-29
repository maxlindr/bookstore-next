import { getBooks } from '@/api/getBooks';
import { AppBar } from '@/widgets/AppBar';
import { HomePage } from '@/widgets/HomePage';
import { PageLayout } from '@/widgets/PageLayout';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';

export default function Home({ books }: InferGetServerSidePropsType<typeof getServerSideProps>) {
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

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { data: bookMocks } = await getBooks();
  return { props: { books: bookMocks } };
};
