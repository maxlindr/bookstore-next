import type {
  IBookShort,
  IServerBookShort,
} from '@/types';
import { BooksList } from '@/widgets';
import styles from './FavoritesPageComponent.module.scss';

interface IProps {
  serverBooks: IServerBookShort[];
}

export const FavoritesPageComponent = ({ serverBooks }: IProps) => {
  const books: IBookShort[] = serverBooks.map((book) => ({
    ...book,
    favorite: true,
  }));

  return (
    <div className={styles.root}>
      <h1 className={styles.title}>
        Избранное
      </h1>

      <div className={styles.listWrapper}>
        <BooksList
          books={books}
          emptyMessage="Список пуст"
        />
      </div>
    </div>
  );
};
