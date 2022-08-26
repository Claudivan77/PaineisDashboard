import { createTheme } from '@mui/material';

export const Theme = createTheme({
  typography: {
    button: {
      textTransform: 'none',
    },
  },
  palette: {
    primary: {
      main: '#363636',
      dark: '#0d0d0d',
      light: '#1a1a1a',
      contrastText: '#fff',
    },
    secondary: {
      main: '#FF0000',
      dark: '#cb0000',
      light: '#FF0000',
      contrastText: '#fff',
    },
    background: {
      paper: '#fff',
      default: '#f7f6f3',
    },
  },
});
