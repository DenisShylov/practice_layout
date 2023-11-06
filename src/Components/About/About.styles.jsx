import { Box, Typography, styled } from '@mui/material';

export const Images = styled('img')(() => ({
  width: 'auto',
  height: 'auto',
}));

export const WrappedAboutBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.up('xs')]: {
    width: '328px',
    gap: '48px',
  },
  [theme.breakpoints.up('sm')]: {
    width: '708px',
    gap: '48px',
  },
  [theme.breakpoints.up('md')]: { width: '776px', gap: '48px' },
  [theme.breakpoints.up('lg', 'xl')]: { width: '970px', gap: '36px' },

  marginTop: '56px',
}));

export const AboutBoxItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  [theme.breakpoints.up('sm', 'md')]: {
    alignItems: 'center',
  },
  [theme.breakpoints.up('xs', 'sm', 'md')]: {
    flexDirection: 'column',
    gap: '24px',
  },
  [theme.breakpoints.up('lg', 'xl')]: {
    flexDirection: 'row',
    gap: '130px',
  },
}));

export const AboutBoxItemTitle = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  [theme.breakpoints.up('sm', 'md')]: {
    width: '100%',
  },
  [theme.breakpoints.up('lg', 'xl')]: {
    width: '470px',
  },
  gap: '16px',
}));

export const AboutTypographyTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.green,
  fontWeight: 500,
  [theme.breakpoints.up('xs')]: {
    fontSize: '20px',
  },
  [theme.breakpoints.up('sm', 'md', 'lg', 'xl')]: {
    fontSize: '24px',
  },
}));
export const AboutTypographyDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.white,
  [theme.breakpoints.up('xs')]: {
    fontSize: '16px',
  },
  [theme.breakpoints.up('sm', 'md', 'lg', 'xl')]: {
    fontSize: '20px',
  },
}));
