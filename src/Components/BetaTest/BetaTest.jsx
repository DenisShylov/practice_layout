import React from 'react';
import { BoxTitle } from '../About/About.styles';
import { Box, Typography } from '@mui/material';
import { StarsImg } from './BataTest.styles';
import starsLogo from '../../Assets/stars.png';
import { BetaTestItems } from '../../Constants/BetaTestItems';
const BetaTest = () => {
  return (
    <>
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
          }}
        >
          Beta Test Benefits
        </Typography>
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            fontSize: {
              xs: '16px',
              sm: '16px',
              md: '20px',
              lg: '20px',
              xl: '20px',
            },
            fontWeight: 400,
            mt: 2,
          }}
        >
          Join our beta test for exclusive benefits, enhancing your experience
          and contributing to our development.
        </Typography>
      </BoxTitle>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: {
            xs: '328px',
            sm: '708px',
            md: '776px',
            lg: '970px',
            xl: '970px',
          },

          gap: '24px',
        }}
      >
        {BetaTestItems.map(({ id, title, text }) => {
          return (
            <Box
              key={id}
              sx={{
                borderRadius: '10px',
                border: ' 2px solid #2F3239',
                display: 'flex',

                alignItems: {
                  xs: 'baseline',
                  sm: 'stretch',
                  md: 'stretch',
                  lg: 'stretch',
                  xl: 'stretch',
                },
                p: '32px',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: {
                    xs: 'column',
                    sm: 'row',
                    md: 'row',
                    lg: 'row',
                    xl: 'row',
                  },
                }}
              >
                <StarsImg
                  src={starsLogo}
                  sx={{ mb: { xs: '24px', sm: 0, md: 0, lg: 0, xl: 0 } }}
                />
                <Box
                  key={id}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: {
                      xs: '24px',
                      sm: '24px',
                      md: '24px',
                      lg: '16px',
                      xl: '16px',
                    },
                    ml: {
                      xs: 0,
                      sm: '24px',
                      md: '24px',
                      lg: '24px',
                      xl: '24px',
                    },
                  }}
                >
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: '24px',
                      fontWeight: 500,
                      color: 'success.main',
                    }}
                  >
                    {title}
                  </Typography>
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: '16px',
                      fontWeight: 400,
                      color: 'text.white',
                    }}
                  >
                    {text}
                  </Typography>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default BetaTest;
