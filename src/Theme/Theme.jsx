import { createTheme } from '@mui/material';

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: ['Rubik', 'Roboto', 'sans-serif'].join(','),
  },
  palette: {
    background: {
      default: '#1A1C22', //Black
    },
    success: { main: '#5BD424' },
    text: {
      white: '#FFF',
      green: '#5BD424',
      grey: {
        light: '#C1C1C4',
        normal: '#8F9094',
        dark: '#2F3239',
      },
    },
  },
  components: {
    MuiIconButton: {
      defaultProps: {
        color: 'success',
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          padding: 0,
        },
      },
    },
  },
});
