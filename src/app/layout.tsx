import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { CssBaseline } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { QueryProvider } from '@/providers/QueryProvider';
import { FavoritesProvider } from '@/providers/FavoritesProvider';
import { BookFiltersProvider } from '@/providers/BookFiltersProvider';
import { theme } from '@/styles/theme';
import { MobileFooter } from '@/app/_ui/MobileFooter';
import '../styles/globals.css';

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin', 'cyrillic'],
});

export const metadata: Metadata = {
  title: 'Книги по графическому дизайну и типографике',
  description: 'Каталог книг по графическому дизайну и типографике. Распродажа личной коллекции.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${roboto.className}`}>
        <FavoritesProvider>
          <BookFiltersProvider>
            <QueryProvider>
              <AppRouterCacheProvider>
                <ThemeProvider theme={theme}>
                  <CssBaseline />
                  {children}
                </ThemeProvider>
              </AppRouterCacheProvider>
            </QueryProvider>
          </BookFiltersProvider>

          <MobileFooter />
        </FavoritesProvider>
      </body>
    </html>
  );
}
