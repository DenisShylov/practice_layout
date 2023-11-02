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
    fontFamily: 'Rubik',
  },
  palette: {
    background: {
      default: '#1A1C22', //Black
    },
    primary: {
      main: '#1A1C22', //Black
    },
    success: {
      main: '#5BD424', //Green
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
