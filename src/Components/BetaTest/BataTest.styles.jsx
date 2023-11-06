import { Box, Typography, styled } from '@mui/material';

export const StarsImg = styled('img')(({ theme }) => ({
  width: '36px',
  height: '36px',
  marginBottom: '24px',
  [theme.breakpoints.up('sm', 'md', 'lg', 'xl')]: {
    marginBottom: 0,
  },
}));

export const RootBoxBetaTest = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  [theme.breakpoints.up('xs', 'sm')]: {
    marginTop: '88px',
  },
  [theme.breakpoints.up('md')]: {
    marginTop: '60px',
  },
  [theme.breakpoints.up('lg')]: {
    marginTop: '230px',
  },
  [theme.breakpoints.up('xl')]: {
    marginTop: '160px',
  },
  gap: '36px',
}));

export const WrappedBoxBetaTest = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.up('xs')]: {
    width: '328px',
  },
  [theme.breakpoints.up('sm')]: {
    width: '708px',
  },
  [theme.breakpoints.up('md')]: {
    width: '776px',
  },
  [theme.breakpoints.up('lg', 'xl')]: {
    width: '970px',
  },
  gap: '24px',
}));

export const BoxItem = styled(Box)(({ theme }) => ({
  borderRadius: '10px',
  border: ' 2px solid #2F3239',
  display: 'flex',
  alignItems: 'baseline',

  padding: '32px',
  [theme.breakpoints.up('sm', 'md', 'lg', 'xl')]: {
    alignItems: 'stretch',
  },
}));

export const BoxItemImg = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.up('sm', 'md', 'lg', 'xl')]: {
    flexDirection: 'row',
  },
}));

export const BoxItemText = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginLeft: 0,
  [theme.breakpoints.up('xs', 'sm', 'md')]: {
    gap: '24px',
  },
  [theme.breakpoints.up('lg', 'xl')]: {
    gap: '16px',
  },
  [theme.breakpoints.up('sm', 'md', 'lg', 'xl')]: {
    marginLeft: '24px',
  },
}));

export const TypographyTitle = styled(Typography)(({ theme }) => ({
  fontSize: '24px',
  fontWeight: 500,
  color: theme.palette.text.green,
}));

export const TypographyText = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 400,
  color: theme.palette.text.white,
}));
