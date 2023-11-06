import { Box, Typography, styled } from '@mui/material';

export const WrappedBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '36px',
  [theme.breakpoints.up('xs', 'sm', 'md')]: {
    marginTop: '100px',
  },
  [theme.breakpoints.up('lg', 'xl')]: {
    marginTop: '160px',
  },
}));

export const AccordionBox = styled(Box)(({ theme }) => ({
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
}));

export const PersonLogo = styled('img')(() => ({
  width: '36px',
  height: '36px',
}));

export const AccordionTitle = styled(Typography)(({ theme }) => ({
  marginLeft: '8px',
  height: '24px',
  fontSize: '20px',
  fontWeight: 500,
  color: theme.palette.text.white,
}));
