import { Box, Button, styled } from '@mui/material';

export const RootStartExploring = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '36px',
  [theme.breakpoints.up('xs', 'sm', 'md')]: {
    marginTop: '100px',
  },
  [theme.breakpoints.up('lg', 'xl')]: {
    marginTop: '160px',
  },
}));

export const ButtonStartExploring = styled(Button)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 400,
  borderRadius: '10px',
  backgroundColor: theme.palette.text.green,
  color: theme.palette.text.white,
  width: '170px',
  height: '48px',
}));
