import { Box } from '@mui/material';
import React from 'react';
import burger from '../../Assets/burger.png';
import logo from '../../Assets/logo.png';
import { BurgerMenuBtn, Logo } from './Header.styled';

const Header = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        m: '20px 16px 0 16px',
        height: '40px',
      }}
    >
      <Logo src={logo} />
      <BurgerMenuBtn src={burger} />
    </Box>
  );
};

export default Header;
