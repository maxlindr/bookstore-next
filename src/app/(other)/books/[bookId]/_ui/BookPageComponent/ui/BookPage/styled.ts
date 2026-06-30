import type {
  BoxProps,
  TypographyProps,
} from '@mui/material';
import {
  Box,
  Link,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export const Root = styled(Box)(({ theme }) => ({
  padding: '26px 24px 24px',

  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },

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
    gridRow: '1 / span 2',
  },
}));

export const ImageWrapper = styled(Box)({
  position: 'relative',
  height: '100%',
});

export const Price = styled(Typography)<TypographyProps>(({ theme }) => ({
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

export const Buttons = styled(Box)<BoxProps>({
  marginTop: '1.12rem',
});

export const ExternaLink = styled(Link)<BoxProps>({
  marginTop: '1.75rem',
  display: 'inline-block',
});

export const Block = styled(Box)({
  marginTop: '2.38rem',
  alignSelf: 'flex-end',
  gridColumn: 2,
  gridRow: 2,
});
