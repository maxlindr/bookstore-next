import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { visuallyHidden } from '@mui/utils';
import type { IBookShort } from '@/types';
import { formatPrice } from '@/utils/formatPrice';
import styles from './BookCard.module.scss';

interface Props {
  className?: string;
  book: IBookShort;
}

export const BookCard = ({ className, book }: Props) => {
  const { id, title, author, price, available, cover, favorite } = book;

  const formattedPrice = formatPrice(price);

  return (
    <article className={clsx(className, styles.root)}>
      <Link
        className={styles.link}
        href={`/books/${id}`}
        prefetch={false}
      >
        <div className={styles.thumbContainer}>
          <div className={styles.thumbWrapper}>
            <Image
              src={cover}
              alt={title}
              loading="lazy"
              sizes="(max-width: 600px) 138px, 192px"
              fill
              className={styles.thumbnail}
            />
          </div>
        </div>

        <div className={styles.main}>
          <header className={styles.header}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.author}>{author}</p>
          </header>

          <footer className={styles.footer}>
            <p>{available ? formattedPrice : 'Нет в наличии'}</p>

            {favorite && (
              <>
                <span style={visuallyHidden}>В избранном</span>
                <FavoriteIcon fontSize="small" color="error" />
              </>
            )}
          </footer>
        </div>
      </Link>
    </article>
  );
};
