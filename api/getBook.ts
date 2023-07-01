import { AxiosResponse } from 'axios';
import { bookMocks } from '@/__mocks__/booksMocks';
import { IBook } from '@/entities/IBook';

type Resp = Omit<AxiosResponse<IBook>, 'headers' | 'config'>;

export const getBook = async (id: IBook['id']): Promise<Resp> => {
  const book = bookMocks.find((book) => book.id === id);

  if (!book) {
    throw {
      response: {
        status: 404,
      },
    };
  }

  const resp: Omit<AxiosResponse<IBook>, 'headers' | 'config'> = {
    data: book,
    status: 200,
    statusText: 'OK',
  };

  return resp;
};
