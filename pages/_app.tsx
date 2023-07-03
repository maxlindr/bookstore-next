import { Provider } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import '@/styles/globals.css';
import '@/styles/css-variables.scss';
import type { AppProps } from 'next/app';
import { theme } from '@/styles/theme';
import { reduxWrapper } from '@/store/store';

export default function App({ Component, pageProps }: AppProps) {
  const { store, props } = reduxWrapper.useWrappedStore(pageProps);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <Component {...props} />
      </Provider>
    </ThemeProvider>
  );
}
