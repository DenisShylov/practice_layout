import React from 'react';
import { BoxTitle } from '../About/About.styles';
import { Box, Typography, Button } from '@mui/material';
const StartExploring = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '36px',
        mt: { xs: '100px', sm: '100px', md: '100px', lg: '160px', xl: '160px' },
      }}
    >
      <BoxTitle>
        <Typography
          variant={'h1'}
          sx={{
            fontWeight: 600,
            fontSize: {
              xs: '32px',
              sm: '32px',
              md: '32px',
              lg: '38px',
              xl: '38px',
            },
            color: 'success.main',
            textAlign: 'center',
          }}
        >
          So what are you waiting for?
        </Typography>
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            fontSize: '16px',
            fontWeight: 400,
            mt: 2,
          }}
        >
          Sign up today and start exploring all that our platform has to offer!
        </Typography>
      </BoxTitle>
      <Box sx={{ px: '24px', textAlign: 'center' }}>
        <Button
          sx={{
            fontSize: '16px',
            fontWeight: 400,
            borderRadius: '10px',
            bgcolor: 'success.main',
            color: 'text.white',
            width: '170px',
            height: '48px',
          }}
        >
          Join Beta
        </Button>
      </Box>
    </Box>
  );
};

export default StartExploring;
