import { AxiosError } from 'axios';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';

import { useMediaQuery } from '@mui/material';
import { PageLayout } from '@/widgets/PageLayout';
import { BookPageMobile } from '@/widgets/BookPageMobile';
import { BookPage } from '@/widgets/BookPage';
import { AppBar } from '@/widgets/AppBar';

import { useTheme } from '@mui/material/styles';
import { getBook } from '@/api/getBook';

export default function Page({ book }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <PageLayout
      title={`Книга ${book.title}`}
      description={book.description}
      appBar={isDesktop ? <AppBar /> : undefined}
    >
      {isDesktop ? <BookPage book={book} /> : <BookPageMobile book={book} />}
    </PageLayout>
  );
}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const bookId = Number(context.query.bookId);

  try {
    const { data: book } = await getBook(bookId);
    return { props: { book } };
  } catch (error) {
    if ((error as AxiosError).response?.status === 404) {
      return {
        notFound: true,
      };
    }

    return {
      redirect: {
        destination: '/500',
        permanent: false,
      },
    };
  }
};
