import { makeAutoObservable } from 'mobx';

export class FavoritesStore {
  private _favorites: string[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  get favorites(): string[] {
    return this._favorites;
  }

  setFavorites = (data: string[]) => {
    this._favorites = data;
  };

  toggleFavorite = (id: string) => {
    const exists = this._favorites.includes(id);

    this._favorites = exists
      ? this._favorites.filter((favId) => favId !== id)
      : [...this._favorites, id];
  };
}
