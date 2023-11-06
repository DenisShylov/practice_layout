import { Typography, styled } from '@mui/material';

export const TypographyTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  [theme.breakpoints.up('xs', 'sm', 'md')]: {
    fontSize: '32px',
  },
  [theme.breakpoints.up('lg', 'xl')]: {
    fontSize: '38px',
  },

  color: theme.palette.text.green,
}));

export const TypographyDescription = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  [theme.breakpoints.up('xs', 'sm')]: {
    fontSize: '16px',
  },
  [theme.breakpoints.up('md', 'lg', 'xl')]: {
    fontSize: '20px',
  },
  fontWeight: 400,
  marginTop: '16px',
}));
