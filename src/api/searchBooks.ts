import type { AxiosRequestConfig } from 'axios';
import type {
  IServerBookShort,
  IStrapiBookShort,
  IStrapiResponse,
} from '@/types';
import { strapiToServerShortBook } from '@/utils/converters';
import { axiosInstance } from './axios';

export const searchBooks = async (search?: string | null, config?: AxiosRequestConfig): Promise<IServerBookShort[]> => {
  const { data } = await axiosInstance.get<IStrapiResponse<IStrapiBookShort[]>>('/books/search?fields[0]=title&fields[1]=author&fields[2]=price&fields[3]=available&populate[cover][fields][0]=url', {
    params: {
      search,
    },
    signal: config?.signal,
  });
  return data.data.map(strapiToServerShortBook);
};
