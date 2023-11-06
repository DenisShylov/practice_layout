import { styled, Container } from '@mui/material';

export const Root = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.up('xs', 'sm')]: {
    marginTop: '100px',
  },
  [theme.breakpoints.up('md')]: {
    marginTop: '140px',
  },
  [theme.breakpoints.up('lg', 'xl')]: {
    marginTop: '160px',
  },
}));
