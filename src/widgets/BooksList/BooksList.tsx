import clsx from 'clsx';
import Image from 'next/image';
import type { IBookShort } from '@/types';
import { BookCard } from './BookCard';
import styles from './BooksList.module.scss';

interface Props {
  className?: string;
  books: IBookShort[];
  emptyMessage?: string;
}

export const BooksList = ({
  className,
  books,
  emptyMessage = 'Ничего не найдено',
}: Props) => {
  if (!books.length) {
    return (
      <>
        <Image
          className={styles.notFoundImage}
          src="/not-found.svg"
          alt=""
          width={800}
          height={800}
          priority
          fetchPriority="high"
        />

        <p className={styles.notFound}>
          {emptyMessage}
        </p>
      </>
    );
  }

  return (
    <ul className={clsx(className, styles.list)}>
      {books.map((book) => (
        <li
          key={book.id}
          className={styles.item}
        >
          <BookCard
            book={book}
            className={styles.card}
          />
        </li>
      ))}
    </ul>
  );
};
