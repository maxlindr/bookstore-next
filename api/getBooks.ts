import { IStrapiBook } from '@/entities/IStrapiBook';
import { axiosInstance } from './axios';
import { strapiToServer } from './converters';
import { AxiosResponse } from 'axios';
import { IServerBook } from '@/entities/IServerBook';
import { IStrapiResponse } from './IStrapiResponse';

export const getBooks = async (): Promise<AxiosResponse<IServerBook[]>> => {
  const result = await axiosInstance.get<IStrapiResponse<IStrapiBook[]>>('/books?populate=*');
  const data = result.data.data;
  const convertedData = data.map(strapiToServer);

  return {
    ...result,
    data: convertedData,
  };
};
