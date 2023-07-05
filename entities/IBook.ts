import { IServerBook } from './IServerBook';

export interface IBook extends IServerBook {
  favorite: boolean;
}
