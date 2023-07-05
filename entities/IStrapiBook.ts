interface ILanguage {
  id: number;
  attributes: {
    code: string;
    name: string;
  };
}

interface IImage {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: null;
  width: number;
  height: number;
  size: number;
  url: string;
}

export interface IStrapiBook {
  id: number;
  attributes: {
    title: string;
    author?: string;
    publisher?: string;
    year?: number;
    cover_type?: 'hardcover' | 'paperback';
    pages?: number;
    width?: number | null;
    height?: number | null;
    isbn?: string;
    price: number;
    available: boolean;
    description?: string;
    languages: {
      data: ILanguage[];
    };
    cover: {
      data: {
        id: number;
        attributes: {
          name: string;
          alternativeText: string | null;
          caption: string | null;
          width: number;
          height: number;
          formats: {
            thumbnail: IImage;
            small: IImage;
            medium: IImage;
          };
          hash: string;
          ext: string;
          mime: string;
          size: number;
          url: string;
          previewUrl: null;
          provider: string;
          provider_metadata: null;
          createdAt: string;
          updatedAt: string;
        };
      };
    };
    avito?: string;
  };
}
