import '@/styles/globals.css';
import '@/styles/css-variables.scss';
import type { AppProps } from 'next/app';
import { theme } from '@/styles/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
