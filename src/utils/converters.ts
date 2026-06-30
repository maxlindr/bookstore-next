import type {
  IServerBook,
  IServerBookShort,
  IStrapiBook,
  IStrapiBookShort,
} from '@/types';

export const strapiToServer = (raw: IStrapiBook): IServerBook => {
  const imageURL = raw.attributes.cover.data.attributes.url;

  const converted = {
    id: String(raw.id),
    title: raw.attributes.title,
    author: raw.attributes.author,
    publisher: raw.attributes.publisher,
    year: raw.attributes.year,
    cover_type: raw.attributes.cover_type,
    pages: raw.attributes.pages,
    width: raw.attributes.width ?? undefined,
    height: raw.attributes.height ?? undefined,
    isbn: raw.attributes.isbn,
    price: raw.attributes.price,
    available: raw.attributes.available,
    description: raw.attributes.description,
    seo_description: raw.attributes.seo_description,
    languages: raw.attributes.languages.data.map((it) => ({
      id: it.id,
      code: it.attributes.code,
      name: it.attributes.name,
    })),
    cover: imageURL.startsWith('http') ? imageURL : process.env.NEXT_PUBLIC_API_ORIGIN + imageURL,
    avito: raw.attributes.avito,
  };

  // eslint-disable-next-line eqeqeq
  if (converted.width == undefined) delete converted.width;
  // eslint-disable-next-line eqeqeq
  if (converted.height == undefined) delete converted.height;

  return converted;
};

export const strapiToServerShortBook = (raw: IStrapiBookShort): IServerBookShort => {
  const imageURL = raw.attributes.cover.data.attributes.url;

  const converted = {
    id: String(raw.id),
    title: raw.attributes.title,
    author: raw.attributes.author,
    price: raw.attributes.price,
    available: raw.attributes.available,
    cover: imageURL.startsWith('http') ? imageURL : process.env.NEXT_PUBLIC_API_ORIGIN + imageURL,
  };

  return converted;
};
