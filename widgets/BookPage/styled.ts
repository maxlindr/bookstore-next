import { SxProps, Theme, styled } from '@mui/material/styles';
import { Box, BoxProps, Link, Typography, TypographyProps } from '@mui/material';

export const Root = styled(Box)(({ theme }) => ({
  padding: '26px 24px 24px',

  [theme.breakpoints.up('md')]: {
    padding: '26px 122px 122px',
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  marginBottom: '2.37rem',
  fontSize: '2.25rem',
  fontWeight: 700,

  [theme.breakpoints.up('md')]: {
    marginBottom: '2.7rem',
    fontSize: '3rem',
  },
}));

export const Main = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  columnGap: '24px',

  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: '60% 1fr',
    columnGap: '140px',
  },
}));

export const ImageContainer = styled(Box)(({ theme }) => ({
  padding: '24px',
  height: '100%',
  minHeight: '240px',
  backgroundColor: '#f7f7f7',

  [theme.breakpoints.up('lg')]: {
    padding: '48px',
    minHeight: '442px',
    gridRow: '1 / span 3',
  },
}));

export const ImageWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '100%',
}));

export const Price = styled(Typography)<TypographyProps>(({ theme }) => ({
  marginTop: '2.38rem',
  fontSize: '2.25rem',
  fontWeight: 700,

  [theme.breakpoints.up('lg')]: {
    fontSize: '3rem',
  },
}));

export const NotAvailable = styled(Price)(({ theme }) => ({
  fontSize: '1.5rem',

  [theme.breakpoints.up('lg')]: {
    fontSize: '2rem',
  },
}));

export const Buttons = styled(Box)<BoxProps>(({ theme }) => ({
  marginTop: '1.12rem',
}));

export const favoriteBtnSx: SxProps<Theme> = {
  ml: '16px',
};

export const ExternaLink = styled(Link)<BoxProps>(({ theme }) => ({
  alignSelf: 'flex-end',

  [theme.breakpoints.up('lg')]: {
    marginTop: '1.75rem',
    gridRow: 3,
    gridColumn: 2,
  },
}));

export const Description = styled(Box)(({ theme }) => ({
  marginTop: '2.7rem',

  ['h1']: {
    marginBottom: '0.75rem',
    fontSize: '1.25rem',

    ['&:not(:first-of-type)']: {
      marginTop: '0.75rem',
    },
  },

  ['p']: {
    marginTop: '0.75rem',
  },

  ['ul, li']: {
    marginTop: '0.25rem',
  },

  ['strong']: {
    fontWeight: 600,
  },

  [theme.breakpoints.up('lg')]: {
    marginTop: '3.8rem',
    maxWidth: '60%',
  },
}));

export const Block = styled(Box)(({ theme }) => ({
  alignSelf: 'flex-end',
  gridColumn: 2,
  gridRow: 2,
}));
