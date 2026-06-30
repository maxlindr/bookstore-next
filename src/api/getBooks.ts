import type {
  IServerBook,
  IStrapiBook,
  IStrapiResponse,
} from '@/types';
import { axiosInstance } from './axios';
import { strapiToServer } from '../utils/converters';

export const getBooks = async (): Promise<IServerBook[]> => {
  const { data } = await axiosInstance.get<IStrapiResponse<IStrapiBook[]>>('/books?populate=*');
  return data.data.map(strapiToServer);
};
