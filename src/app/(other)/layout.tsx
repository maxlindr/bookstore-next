import { Box } from '@mui/material';
import { AppBar } from '@/app/_ui/AppBar';

export default function BookLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Box
        sx={{
          display: {
            xs: 'none',
            sm: 'unset',
          },
        }}
      >
        <AppBar />
      </Box>

      <main className="main">
        {children}
      </main>
    </>
  );
}
