import { bookMocks } from '@/__mocks__/booksMocks';

export const getBooks = async () => {
  return { data: bookMocks };
};
