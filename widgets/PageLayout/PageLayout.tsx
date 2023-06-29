import { ReactNode, ReactElement } from 'react';
import Head from 'next/head';
import { Roboto } from 'next/font/google';
import cn from 'classnames';
import { useMediaQuery, useTheme } from '@mui/material';

import styles from './PageLayout.module.scss';
import { MobileFooter } from '@/widgets/MobileFooter';

const robotoFont = Roboto({
  subsets: ['cyrillic'],
  weight: ['300', '400', '500', '700'],
});

interface Props {
  title: string;
  description?: string;
  children: ReactNode | ReactNode[];
  appBar?: ReactElement;
}

export const PageLayout = ({ children, title, description, appBar }: Props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Head>
        <title>{title}</title>
        {description && <meta name="description" content={description} />}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {appBar}

      <main className={cn(robotoFont.className, styles.main)}>{children}</main>

      {isMobile && <MobileFooter />}
    </>
  );
};
