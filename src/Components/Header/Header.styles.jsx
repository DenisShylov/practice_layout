import { Toolbar, Box, Typography, styled } from '@mui/material';

export const SmallLogo = styled('img')(() => ({
  width: '65px',
  height: '32px',
}));

export const BigLogo = styled('img')(() => ({
  height: '40px',
}));

export const Flag = styled('img')(() => ({
  marginLeft: '8px',
  width: '30px',
  height: '20px',
}));

export const Social = styled('img')(() => ({
  width: '32px',
  height: '32px',
}));

export const HeaderToolbar = styled(Toolbar)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    padding: '0 16px',
  },
  [theme.breakpoints.up('sm')]: {
    padding: '0 30px',
  },
  [theme.breakpoints.up('md')]: {
    padding: '0 24px',
  },
  [theme.breakpoints.up('lg', 'xl')]: {
    padding: '0 55px',
  },
}));

export const ToolbarTypography = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  [theme.breakpoints.up('xs', 'sm', 'md')]: {
    display: 'none',
  },
  [theme.breakpoints.up('lg', 'xl')]: {
    display: 'block',
  },
}));

export const LogoBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('xs', 'sm', 'md')]: {
    display: 'none',
  },
  [theme.breakpoints.up('lg', 'xl')]: {
    display: 'flex',
  },
  alignItems: 'center',
}));

export const WrappedNavBarBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('xs', 'sm', 'md')]: {
    display: 'none',
  },
  [theme.breakpoints.up('lg', 'xl')]: {
    display: 'flex',
  },
  gap: '32px',
}));

export const NavBarBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('xs', 'sm', 'md')]: {
    display: 'none',
  },
  [theme.breakpoints.up('lg', 'xl')]: {
    display: 'flex',
  },
  alignItems: 'center',
  height: '32px',
  gap: '24px',
}));

export const SmallLogoBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-beetwen',
  [theme.breakpoints.up('lg', 'xl')]: {
    display: 'none',
  },
  width: '100%',
}));
