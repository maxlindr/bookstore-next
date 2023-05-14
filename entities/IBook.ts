interface ILanguage {
  id: number;
  code: string;
  name: string;
}

export interface IBook {
  id: number;
  title: string;
  author?: string;
  publisher?: string;
  year?: number;
  cover_type?: 'hardcover' | 'paperback';
  pages?: number;
  width?: number;
  height?: number;
  isbn?: string;
  price: number;
  available: true;
  description?: string;
  languages: ILanguage[];
  cover: string;
  favorite: boolean;
}
