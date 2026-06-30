import type {
  IServerBookShort,
  IStrapiBookShort,
  IStrapiResponse,
} from '@/types';
import { strapiToServerShortBook } from '@/utils/converters';
import { axiosInstance } from './axios';

export const getBooksByIds = async (ids: string[]): Promise<IServerBookShort[]> => {
  const { data } = await axiosInstance.get<IStrapiResponse<IStrapiBookShort[]>>('/books/by-ids?fields[0]=title&fields[1]=author&fields[2]=price&fields[3]=available&populate[cover][fields][0]=url', {
    params: {
      ids: ids.join(','),
    },
  });

  return data.data.map(strapiToServerShortBook);
};
