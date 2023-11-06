import { Box, styled } from '@mui/material';

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
