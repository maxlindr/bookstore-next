interface ILanguage {
  id: number;
  code: string;
  name: string;
}

export interface IServerBook {
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
  available: boolean;
  description?: string;
  languages: ILanguage[];
  cover: string;
  avito?: string;
}
