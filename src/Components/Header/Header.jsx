import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// Local files
import flag from '../../Assets/flag.png';
import anotherIcon from '../../Assets/frame-1.png';
import gitHubIcon from '../../Assets/frame-171.png';
import tikTokIcon from '../../Assets/frame-173.png';
import logoDesktop from '../../Assets/logo-desktop.png';
import logo from '../../Assets/logo.png';
import { NavBarItems } from '../../Constants/NavBarItem';
import { BigLogo, Flag, SmallLogo, Social } from './Header.styles';

const Header = () => {
  return (
    <Box sx={{ display: 'flex', bgcolor: 'background.default' }}>
      <AppBar component="nav" sx={{ boxShadow: 'none' }}>
        <Toolbar
          sx={{
            px: { xs: '16px', sm: '30px', md: '24px', lg: '55px', xl: '55px' },
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: {
                xs: 'none',
                sm: 'none',
                md: 'none',
                lg: 'block',
                xl: 'block',
              },
            }}
          >
            <Box
              sx={{
                display: {
                  xs: 'none',
                  sm: 'none',
                  md: 'none',
                  lg: 'flex',
                  xl: 'flex',
                },
                alignItems: 'center',
              }}
            >
              <BigLogo src={logoDesktop} />
              <Flag src={flag} />
            </Box>
          </Typography>
          <Box
            sx={{
              display: {
                xs: 'none',
                sm: 'none',
                md: 'none',
                lg: 'flex',
                xl: 'flex',
              },
              gap: '32px',
            }}
          >
            <Box
              sx={{
                display: {
                  xs: 'none',
                  sm: 'none',
                  md: 'none',
                  lg: 'flex',
                  xl: 'flex',
                },
                alignItems: 'center',
                height: '32px',
                gap: '24px',
              }}
            >
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
            </Box>
            <Box sx={{ display: 'flex', gap: '16px' }}>
              <Social src={anotherIcon} />
              <Social src={tikTokIcon} />
              <Social src={gitHubIcon} />
            </Box>
          </Box>
          <Typography
            component={'div'}
            sx={{
              display: {
                xl: 'none',
                lg: 'none',
                xs: 'flex',
                sm: 'flex',
                md: 'flex',
              },
              justifyContent: 'space-beetwen',
              width: '100%',
            }}
          >
            <SmallLogo src={logo} />
            <IconButton
              edge="start"
              sx={{ ml: 'auto', mr: 1, display: { lg: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
