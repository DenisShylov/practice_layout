import { Box, styled } from '@mui/material';

export const FooterLogo = styled('img')({
  width: '142px',
  height: '38px',
});

export const RootBoxFooter = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: 0,
  height: '100px',
  [theme.breakpoints.up('xs')]: {
    padding: '0 16px 32px 16px',
    marginTop: '100px',
  },
  [theme.breakpoints.up('sm', 'md')]: {
    marginTop: '100px',
  },
  marginTop: '160px',
}));

export const ContentBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',

  justifyContent: 'space-between',
  [theme.breakpoints.up('xs')]: {
    flexDirection: 'column',
    gap: '16px',
  },
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    padding: '0 30px',
  },
  [theme.breakpoints.up('md')]: {
    padding: '0 24px',
  },
  [theme.breakpoints.up('lg', 'xl')]: {
    padding: '0 55px',
  },
  width: '100%',
}));
