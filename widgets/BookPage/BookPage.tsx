import Image from 'next/image';
import { IBook } from '@/entities/IBook';
import {
  Block,
  Buttons,
  Description,
  ExternaLink,
  ImageContainer,
  ImageWrapper,
  Main,
  NotAvailable,
  Price,
  Root,
  Title,
  favoriteBtnSx,
} from './styled';
import { BookDetails } from '../BookDetails';
import { Button, IconButton } from '@mui/material';
import { Favorite as FavoriteIcon } from '@mui/icons-material';
import { formatPrice } from '@/utils/formatPrice';

interface IProps {
  book: IBook;
  inCart: boolean;
  onFavoriteClick?: () => void;
  onAddToCardClick?: () => void;
  onRemoveFromCartClick?: () => void;
}

export const BookPage = ({ book, inCart, onFavoriteClick, onAddToCardClick, onRemoveFromCartClick }: IProps) => {
  const { title, price, cover, description, available, favorite, avito } = book;

  return (
    <Root>
      <Title variant="h1">{title}</Title>

      <Main>
        <ImageContainer>
          <ImageWrapper>
            <Image src={cover} alt={title} fill style={{ objectFit: 'contain' }} />
          </ImageWrapper>
        </ImageContainer>

        <BookDetails book={book} />

        <Block>
          {available ? <Price paragraph>{formatPrice(price)}</Price> : <NotAvailable>Нет в наличии</NotAvailable>}

          <Buttons>
            {inCart ? (
              <Button onClick={onRemoveFromCartClick}>Удалить из корзины</Button>
            ) : (
              <Button onClick={onAddToCardClick}>Добавить в корзину</Button>
            )}

            <IconButton sx={favoriteBtnSx} onClick={onFavoriteClick}>
              <FavoriteIcon fontSize="medium" color={favorite ? 'error' : 'disabled'} />
            </IconButton>
          </Buttons>

          {avito && (
            <ExternaLink href={avito} target="_blank">
              Эта книга на Авито
            </ExternaLink>
          )}
        </Block>
      </Main>

      {description && <Description dangerouslySetInnerHTML={{ __html: description }} />}
    </Root>
  );
};
