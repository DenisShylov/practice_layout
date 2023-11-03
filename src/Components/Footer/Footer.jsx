import React from 'react';
import { Box, Typography } from '@mui/material';
import logo from '../../Assets/logo-desktop.webp';
import { FooterLogo } from './Footer.styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Social } from '../Header/Header.styles';
import anotherIcon from '../../Assets/frame-1.webp';
import gitHubIcon from '../../Assets/frame-171.webp';
import tikTokIcon from '../../Assets/frame-173.webp';
const Footer = () => {
  const theme = useTheme();
  const screenSizeCondition = useMediaQuery(theme.breakpoints.up('lg'));
  const isExtraSmallSize = useMediaQuery(theme.breakpoints.down('sm'))
    ? 'none'
    : 'flex';

  return (
    <Box
      sx={{
        display: 'flex',
        p: { xs: '0 16px 32px 16px', sm: 0, md: 0, lg: 0, xl: 0 },
        height: '100px',
        mt: { xs: '100px', sm: '100px', md: '100px', lg: '160px', xl: '160px' },
      }}
    >
      <Box
        sx={{
          display: { xs: 'flex' },
          flexDirection: {
            xs: 'column',
            sm: 'row',
            md: 'row',
            lg: 'row',
            xl: 'row',
          },
          alignItems: 'center',
          justifyContent: 'space-between',
          px: { sm: '30px', md: '24px', lg: '55px', xl: '55px' },
          gap: { xs: '16px' },
          width: '100%',
        }}
      >
        <FooterLogo src={logo} />
        <Typography
          sx={{ color: 'text.grey.normal', fontSize: '16px', fontWeight: 400 }}
        >
          {screenSizeCondition ? '© 2023' : 'Copyright© 2023 '}
        </Typography>
        <Box sx={{ display: isExtraSmallSize, gap: '16px' }}>
          <Social src={anotherIcon} alt="social-logo" />
          <Social src={tikTokIcon} alt="social-logo" />
          <Social src={gitHubIcon} alt="social-logo" />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
