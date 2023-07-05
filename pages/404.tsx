import { PageLayout } from '@/widgets/PageLayout';
import { ErrorPage } from '@/widgets/ErrorPage';

export default function Page() {
  return (
    <PageLayout title="Страница не найдена">
      <ErrorPage message="Ой! Страница не найдена" />
    </PageLayout>
  );
}
