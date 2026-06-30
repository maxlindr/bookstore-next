import Image from 'next/image';
import {
  IconButton,
  Stack,
} from '@mui/material';
import { Favorite as FavoriteIcon } from '@mui/icons-material';
import type { IBook } from '@/types/IBook';
import { formatPrice } from '@/utils/formatPrice';
import {
  BookDescription,
  BookDetails,
} from '@/widgets';
import { TextResource } from '@/constants';
import {
  Block,
  ExternaLink,
  ImageContainer,
  ImageWrapper,
  Main,
  NotAvailable,
  Price,
  Root,
  Title,
} from './styled';
import styles from './BookPage.module.scss';

interface IProps {
  book: IBook;
  onFavoriteClick?: () => void;
}

export const BookPage = ({ book, onFavoriteClick }: IProps) => {
  const { title, price, cover, description, available, favorite, avito } = book;

  return (
    <Root>
      <Title variant="h1">{title}</Title>

      <Main>
        <ImageContainer>
          <ImageWrapper>
            <Image
              src={cover}
              alt={title}
              priority
              fill
              sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, (max-width: 1199px) 417px, 60vw"
              style={{ objectFit: 'contain' }}
            />
          </ImageWrapper>
        </ImageContainer>

        <BookDetails book={book} />

        <Block>
          <Stack
            direction="row"
            sx={{
              gap: '16px',
              alignItems: 'center',
            }}
          >
            {available
              ? (
                <Price>{formatPrice(price)}</Price>
              )
              : (
                <NotAvailable>Нет в наличии</NotAvailable>
              )}

            <IconButton
              onClick={onFavoriteClick}
              aria-label={TextResource.AddToFavorites}
            >
              <FavoriteIcon
                fontSize="medium"
                color={favorite ? 'error' : 'disabled'}
              />
            </IconButton>
          </Stack>

          {avito && available && (
            <ExternaLink
              href={avito}
              target="_blank"
            >
              Купить книгу на Авито
            </ExternaLink>
          )}
        </Block>
      </Main>

      {description && (
        <BookDescription
          className={styles.description}
          html={description}
        />
      )}
    </Root>
  );
};
