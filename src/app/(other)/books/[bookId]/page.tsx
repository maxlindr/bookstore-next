import { notFound } from 'next/navigation';
import { isAxiosError } from 'axios';
import type { IServerBook } from '@/types/IServerBook';
import {
  getBook,
  getBooks,
} from '@/api';
import { BookPageComponent } from '@/app/(other)/books/[bookId]/_ui/BookPageComponent';

export const revalidate = 60;

interface BookPageProps {
  params: Promise<{ bookId: string }>;
}

export async function generateStaticParams() {
  const books = await getBooks();
  return books.map((book) => ({ bookId: book.id }));
}

export async function generateMetadata({ params }: BookPageProps) {
  const { bookId } = await params;

  try {
    const book = await getBook(bookId);

    return {
      title: `Книга ${book.title}`,
      description: book.seo_description,
    };
  } catch {
    return {
      title: 'Книга не найдена',
    };
  }
}

export default async function BookPage({ params }: BookPageProps) {
  const { bookId } = await params;
  let serverBook: IServerBook;

  try {
    serverBook = await getBook(bookId);
  } catch (error) {
    if (isAxiosError(error) && error.response?.status === 404) {
      notFound();
    }

    throw error;
  }

  return <BookPageComponent book={serverBook} />;
}
