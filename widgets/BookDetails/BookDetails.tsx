import { IBook } from '@/entities/IBook';
import styles from './BookDetails.module.scss';

interface IProps {
  book: IBook;
}

export const BookDetails = ({ book }: IProps) => {
  const { author, publisher, year, cover_type, pages, languages, width, height, isbn } = book;
  const dimensions = width && height ? `${width}×${height}` : ''; // todo: добавить units на бэкенде

  return (
    <dl>
      {author && (
        <div className={styles.record}>
          <dt>Автор:</dt>
          <dd>{author}</dd>
        </div>
      )}

      {publisher && (
        <div className={styles.record}>
          <dt>Издательство:</dt>
          <dd>{publisher}</dd>
        </div>
      )}

      {year && (
        <div className={styles.record}>
          <dt>Год издания:</dt>
          <dd>{year}</dd>
        </div>
      )}

      {cover_type && (
        <div className={styles.record}>
          <dt>Переплет:</dt>
          <dd>{cover_type === 'hardcover' ? 'твердый' : 'мягкий'}</dd>
        </div>
      )}

      {pages && (
        <div className={styles.record}>
          <dt>Страниц:</dt>
          <dd>{pages}</dd>
        </div>
      )}

      {dimensions && (
        <div className={styles.record}>
          <dt>Формат:</dt>
          <dd>{dimensions}</dd>
        </div>
      )}

      <div className={styles.record}>
        <dt>Язык:</dt>
        <dd>{languages.map((lang) => lang.name).join('/')}</dd>
      </div>

      {isbn && (
        <div className={styles.record}>
          <dt>ISBN:</dt>
          <dd>{isbn}</dd>
        </div>
      )}
    </dl>
  );
};
