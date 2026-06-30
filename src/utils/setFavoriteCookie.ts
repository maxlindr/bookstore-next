import Cookies from 'js-cookie';
import { FAVORITES_STORAGE_KEY } from '@/constants';

export const setFavoriteCookie = (value: string[]) => {
  Cookies.set(FAVORITES_STORAGE_KEY, JSON.stringify(value), { expires: 400, path: '/' });
};
