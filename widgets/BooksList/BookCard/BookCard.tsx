import cn from 'classnames';
import { IBook } from '@/entities/IBook';
import Image from 'next/image';

import styles from './BookCard.module.scss';
import Link from 'next/link';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { visuallyHidden } from '@mui/utils';
import { formatPrice } from '@/utils/formatPrice';

interface Props {
  className?: string;
  book: IBook;
}

export const BookCard = ({ className, book }: Props) => {
  const { id, title, author, price, available, cover, favorite } = book;

  const formattedPrice = formatPrice(price);

  return (
    <article className={cn(className, styles.root)}>
      <Link href={`/books/${id}`} className={styles.link}>
        <div className={styles.thumbContainer}>
          <div className={styles.thumbWrapper}>
            <Image src={cover} alt={title} loading="lazy" fill className={styles.thumbnail} />
          </div>
        </div>

        <div className={styles.main}>
          <header className={styles.header}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.author}>{author}</p>
          </header>

          <footer className={styles.footer}>
            {available ? <p>{formattedPrice}</p> : <p>Нет в наличии</p>}

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
