import { useState } from 'react';
import Image from 'next/image';

import styles from './BookPageMobile.module.scss';

import { Button } from '@mui/material';
import { MobileIconButton } from './components/MobileIconButton';
import { MobileFavoriteButton } from './components/MobileFavoriteButton';
import { Backdrop } from '@/components/Backdrop';
import { BookDetails } from '@/widgets/BookDetails';

import { IBook } from '@/entities/IBook';
import { formatPrice } from '@/utils/formatPrice';

interface IProps {
  book: IBook;
  onFavoriteClick?: () => void;
}

export const BookPageMobile = ({ book, onFavoriteClick }: IProps) => {
  const { title, price, description, favorite, cover } = book;
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
      <h1 className={styles.title}>{book.title}</h1>

      <div className={styles.imageWrapper}>
        <Image src={cover} alt={title} fill className={styles.image} />
      </div>

      <div className={styles.actionButtons}>
        <MobileIconButton className={styles.actionButton} variant="details" onClick={handleDetailsClick} />
        <MobileIconButton className={styles.actionButton} variant="description" onClick={handleDescriptionClick} />
        <MobileFavoriteButton className={styles.actionButton} active={favorite} onClick={onFavoriteClick} />
      </div>

      <p className={styles.price}>{formatPrice(price)}</p>

      <Backdrop open={detailsVisible} onClick={() => setDetailsVisible(false)}>
        <BookDetails book={book} />
      </Backdrop>

      {description && (
        <Backdrop open={descriptionVisible} onClick={() => setDescriptionVisible(false)}>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </Backdrop>
      )}

      <Button>Добавить в корзину</Button>
    </div>
  );
};
