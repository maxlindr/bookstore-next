import { IBook } from '@/entities/IBook';
import { BooksList } from '../BooksList';
import styles from './HomePage.module.scss';

interface IProps {
  books: IBook[];
}

export const HomePage = ({ books }: IProps) => {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>
        Книги <br />
        по&nbsp;графическому дизайну <br />
        и&nbsp;типографике
      </h1>
      <p className={styles.subhead}>Распродажа личной коллекции</p>

      <div className={styles.listWrapper}>
        <BooksList books={books} />
      </div>
    </div>
  );
};
