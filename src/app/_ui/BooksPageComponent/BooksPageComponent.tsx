import { BooksListClient } from './components/BooksListClient';
import styles from './BooksPageComponent.module.scss';

export const BooksPageComponent = () => {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>
        Книги <br />
        по&nbsp;графическому дизайну <br />
        и&nbsp;типографике
      </h1>

      <p className={styles.subhead}>Распродажа личной коллекции</p>

      <div className={styles.listWrapper}>
        <BooksListClient />
      </div>
    </div>
  );
};
