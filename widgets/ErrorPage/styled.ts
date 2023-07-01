import { Typography, styled } from '@mui/material';

export const ErrorHeader = styled(Typography)(({ theme }) => ({
  alignSelf: 'center',
  margin: 'auto 0',
  fontSize: '1.5rem',
  [theme.breakpoints.up('sm')]: {
    fontSize: '2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '3rem',
  },
}));
