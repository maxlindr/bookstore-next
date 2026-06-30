import {
  QueryClient,
  defaultShouldDehydrateQuery,
  environmentManager,
} from '@tanstack/react-query';

const makeQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
        // todo:
        // fixme:
        staleTime: 60000,
      },
      dehydrate: {
        shouldDehydrateQuery: defaultShouldDehydrateQuery,
      },
    },
  });
};

let browserQueryClient: QueryClient | undefined;

export const getQueryClient = () => {
  if (environmentManager.isServer()) {
    return makeQueryClient();
  }

  if (!browserQueryClient) browserQueryClient = makeQueryClient();

  return browserQueryClient;
};
