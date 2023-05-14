import cn from 'classnames';
import { IBook } from '@/entities/IBook';
import { BookCard } from './BookCard';

import styles from './BooksList.module.scss';

interface Props {
  className?: string;
  books: IBook[];
}

export const BooksList = ({ className, books }: Props) => {
  return (
    <ul className={cn(className, styles.list)}>
      {books.map((book) => (
        <li key={book.id} className={styles.li}>
          <BookCard book={book} className={styles.card} />
        </li>
      ))}
    </ul>
  );
};
