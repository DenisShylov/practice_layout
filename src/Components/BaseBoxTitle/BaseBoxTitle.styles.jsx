import { Box, Typography, styled } from '@mui/material';

export const BoxTitle = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.up('xs')]: {
    width: '328px',
  },
  [theme.breakpoints.up('sm', 'md')]: {
    width: '510px',
  },
  [theme.breakpoints.up('lg', 'xl')]: {
    width: '710px',
  },

  color: theme.palette.text.white,
}));

export const TypographyTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  textAlign: 'center',
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

export const TypographyDescriptionStartExploring = styled(Typography)(
  ({ theme }) => ({
    textAlign: 'center',
    fontSize: '16px',
    fontWeight: 400,
    marginTop: '16px',
  })
);
