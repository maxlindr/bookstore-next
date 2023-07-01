import { PageLayout } from '@/widgets/PageLayout';
import { ErrorPage } from '@/widgets/ErrorPage';

export default function Page() {
  return (
    <PageLayout title="Ошибка">
      <ErrorPage message="Ой! Что-то пошло не так" />
    </PageLayout>
  );
}
