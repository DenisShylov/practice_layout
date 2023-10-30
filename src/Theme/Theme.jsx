import { createTheme } from '@mui/material';

export const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 430,
      tablet: 768,
      overTablet: 1024,
      desktop: 1280,
      overDesktop: 1920,
    },
  },
});
