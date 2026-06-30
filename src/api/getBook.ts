import type {
  IServerBook,
  IStrapiBook,
  IStrapiResponse,
} from '@/types';
import { axiosInstance } from './axios';
import { strapiToServer } from '../utils/converters';

export const getBook = async (id: string | number): Promise<IServerBook> => {
  const { data } = await axiosInstance.get<IStrapiResponse<IStrapiBook>>(`/books/${id}?populate=*`);

  return strapiToServer(data.data);
};
