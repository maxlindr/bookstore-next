import { Theme, createTheme } from '@mui/material/styles';

const defaultTheme = createTheme({});

// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px

export const theme: Theme = {
  ...defaultTheme,
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          margin: 0,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          padding: '1rem',
          backgroundColor: 'white',
          boxShadow: 'none',
          flexDirection: 'row',
          alignItems: 'center',
          minHeight: 78,
          [defaultTheme.breakpoints.up('sm')]: {
            padding: '1.25rem',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          border: '1px solid black',
          color: 'black',
          padding: '8px 16px',
          '&:hover, &:focus': {
            color: 'white',
            background: 'black',
          },
          '&:disabled': {
            borderColor: 'var(--color-inactive-gray)',
          },
        },
      },
    },
  },
};
