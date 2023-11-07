import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import React from 'react';
// Local files
import flag from '../../Assets/flag.webp';
import anotherIcon from '../../Assets/frame-1.webp';
import gitHubIcon from '../../Assets/frame-171.webp';
import tikTokIcon from '../../Assets/frame-173.webp';
import logoDesktop from '../../Assets/logo-desktop.webp';
import logo from '../../Assets/logo.webp';
import { NavBarItems } from '../../Constants/NavBarItem';
import {
  BigLogo,
  Flag,
  HeaderToolbar,
  LogoBox,
  NavBarBox,
  SmallLogo,
  SmallLogoBox,
  Social,
  ToolbarTypography,
  WrappedNavBarBox,
} from './Header.styles';

const Header = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        component="nav"
        sx={{ bgcolor: 'background.default', boxShadow: 'none' }}
      >
        <HeaderToolbar>
          <ToolbarTypography component="div">
            <LogoBox>
              <BigLogo src={logoDesktop} alt="team8s-logo" />
              <Flag src={flag} alt="flag-logo" />
            </LogoBox>
          </ToolbarTypography>
          <WrappedNavBarBox>
            <NavBarBox>
              {NavBarItems.map((item) => (
                <Typography
                  component={'span'}
                  key={item}
                  sx={{
                    color: 'text.grey.normal',
                    fontWeight: 400,
                  }}
                >
                  {item}
                </Typography>
              ))}
            </NavBarBox>
            <Box sx={{ display: 'flex', gap: '16px' }}>
              <Social src={anotherIcon} alt="social-logo" />
              <Social src={tikTokIcon} alt="social-logo" />
              <Social src={gitHubIcon} alt="social-logo" />
            </Box>
          </WrappedNavBarBox>
          <SmallLogoBox>
            <SmallLogo loading="lazy" src={logo} alt="small-logo" />
            <IconButton
              edge="start"
              sx={{ ml: 'auto', mr: 1, display: { lg: 'none' } }}
              name="menuIcon"
            >
              <MenuIcon />
            </IconButton>
          </SmallLogoBox>
        </HeaderToolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
