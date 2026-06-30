'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Link } from '@mui/material';
import type { IBook } from '@/types/IBook';
import { formatPrice } from '@/utils/formatPrice';
import { SwipableDrawer } from '@/components/SwipableDrawer';
import {
  BookDescription,
  BookDetails,
} from '@/widgets';
import { TextResource } from '@/constants';
import { MobileIconButton } from './components/MobileIconButton';
import { MobileFavoriteButton } from './components/MobileFavoriteButton';
import styles from './BookPageMobile.module.scss';

interface IProps {
  book: IBook;
  onFavoriteClick?: () => void;
}

export const BookPageMobile = ({ book, onFavoriteClick }: IProps) => {
  const { title, price, description, favorite, cover, avito, available } = book;
  const [detailsVisible, setDetailsVisible] = useState(false);
  const [descriptionVisible, setDescriptionVisible] = useState(false);

  const handleDetailsClick = () => {
    setDetailsVisible(!detailsVisible);
  };

  const handleDescriptionClick = () => {
    setDescriptionVisible(!detailsVisible);
  };

  return (
    <div className={styles.root}>
      <h1 className={styles.title}>
        {book.title}
      </h1>

      <div className={styles.imageWrapper}>
        <Image
          src={cover}
          alt={title}
          fill
          priority
          className={styles.image}
          sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, (max-width: 1199px) 417px, 60vw"
        />
      </div>

      <div className={styles.actionButtons}>
        <MobileIconButton
          aria-label={TextResource.BookDetailsTitle}
          variant="details"
          onClick={handleDetailsClick}
        />

        <MobileIconButton
          aria-label={TextResource.BookDescriptionTitle}
          variant="description"
          onClick={handleDescriptionClick}
        />

        <MobileFavoriteButton
          aria-label={TextResource.AddToFavorites}
          active={favorite}
          onClick={onFavoriteClick}
        />
      </div>

      <p className={styles.price}>{formatPrice(price)}</p>

      {avito && available && (
        <Link
          href={avito}
          target="_blank"
          sx={{ alignSelf: 'center' }}
        >
          Купить книгу на Авито
        </Link>
      )}

      <SwipableDrawer
        open={detailsVisible}
        onClick={() => setDetailsVisible(false)}
      >
        <BookDetails book={book} />
      </SwipableDrawer>

      {description && (
        <>
          <h2 className="visually-hidden">О книге</h2>

          <SwipableDrawer
            open={descriptionVisible}
            onClick={() => setDescriptionVisible(false)}
          >
            <BookDescription html={description} />
          </SwipableDrawer>
        </>
      )}
    </div>
  );
};
