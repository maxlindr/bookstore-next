import { PageLayout } from '@/widgets/PageLayout';
import { AppBar } from '@/widgets/AppBar';

export default function Page() {
  return (
    <PageLayout
      title="Книги по графическому дизайну и типографике — Избранное"
      description="Каталог книг по графическому дизайну и типографике. Избранное."
      appBar={<AppBar />}
    >
      Избранное
    </PageLayout>
  );
}
