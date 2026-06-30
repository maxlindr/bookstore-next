export interface IStrapiBookShort {
  id: number;
  attributes: {
    title: string;
    author?: string;
    price: number;
    available: boolean;
    cover: {
      data: {
        id: number;
        attributes: {
          url: string;
        };
      };
    };
  };
}
