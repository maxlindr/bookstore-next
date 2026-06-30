import type { IServerBookShort } from './IServerBookShort';

export interface IBookShort extends IServerBookShort {
  favorite: boolean;
}
