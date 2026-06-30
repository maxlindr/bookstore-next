import {
  HydrationBoundary,
  dehydrate,
} from '@tanstack/react-query';
import { BooksPageComponent } from '@/app/_ui/BooksPageComponent';
import { getQueryClient } from '@/providers/getQueryClient';
import { searchBooksQueryOptions } from '@/queries';

export const revalidate = 60;

export const metadata = {
  title: 'Книги по графическому дизайну и типографике — купить',
  description: 'Книги по графическому дизайну и типографике',
};

export default async function Page() {
  const queryClient = getQueryClient();
  await queryClient.fetchQuery(searchBooksQueryOptions());
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <BooksPageComponent />
    </HydrationBoundary>
  );
}

