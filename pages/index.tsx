import { HomePage } from '@/widgets/HomePage';
import { PageLayout } from '@/widgets/PageLayout';

export default function Home() {
  return (
    <PageLayout
      title="Книги по графическому дизайну и типографике"
      description="Каталог книг по графическому дизайну и типографике. Распродажа личной коллекции."
    >
      <HomePage />
    </PageLayout>
  );
}
