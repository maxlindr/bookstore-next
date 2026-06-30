import { AppBar } from '@/app/_ui/AppBar';
import '@/styles/globals.css';

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AppBar search />

      <main className="main">
        {children}
      </main>
    </>
  );
}
