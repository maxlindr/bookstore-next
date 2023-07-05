import { AxiosResponse } from 'axios';
import { IBook } from '@/entities/IBook';
import { IStrapiBook } from '@/entities/IStrapiBook';
import { IServerBook } from '@/entities/IServerBook';
import { axiosInstance } from './axios';
import { strapiToServer } from './converters';
import { IStrapiResponse } from './IStrapiResponse';

export const getBook = async (id: IBook['id']): Promise<AxiosResponse<IServerBook>> => {
  const result = await axiosInstance.get<IStrapiResponse<IStrapiBook>>(`/books/${id}?populate=*`);

  return {
    ...result,
    data: strapiToServer(result.data.data),
  };
};
