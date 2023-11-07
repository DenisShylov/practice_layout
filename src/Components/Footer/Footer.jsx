import React from 'react';
import { Box, Typography } from '@mui/material';
import logo from '../../Assets/logo-desktop.webp';
import { ContentBox, FooterLogo, RootBoxFooter } from './Footer.styles';
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
    <RootBoxFooter>
      <ContentBox>
        <FooterLogo src={logo} loading="lazy" />
        <Typography
          sx={{ color: 'text.grey.normal', fontSize: '16px', fontWeight: 400 }}
        >
          {screenSizeCondition ? '© 2023' : 'Copyright© 2023 '}
        </Typography>
        <Box sx={{ display: isExtraSmallSize, gap: '16px' }}>
          <Social loading="lazy" src={anotherIcon} alt="social-logo" />
          <Social loading="lazy" src={tikTokIcon} alt="social-logo" />
          <Social loading="lazy" src={gitHubIcon} alt="social-logo" />
        </Box>
      </ContentBox>
    </RootBoxFooter>
  );
};

export default Footer;
