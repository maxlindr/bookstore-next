import Head from 'next/head'
import { Roboto } from 'next/font/google'
import { HomePage } from '@/widgets/HomePage';

const robotoFont = Roboto({ subsets: ['cyrillic'], weight: ['400', '500'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Книги по графическому дизайну и типографике</title>
        <meta name="description" content="Каталог книг по графическому дизайну и типографике. Распродажа личной коллекции." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={robotoFont.className}>
        <HomePage />
      </main>
    </>
  )
}
