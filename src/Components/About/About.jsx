import { Box, Container, Typography } from '@mui/material';
import React from 'react';
// Local files
import { AboutItems } from '../../Constants/AboutItems';
import { Images } from './About.styles';

const About = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        mt: { xs: '100px', sm: '100px', md: '140px', lg: '160px', xl: '160px' },
        gap: { xs: '36px', sm: '36px', md: '56px', lg: '56px', xl: '56px' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: {
            xs: '328px',
            sm: '510px',
            md: '510px',
            lg: '710px',
            xl: '710px',
          },
          color: 'text.white',
        }}
      >
        <Typography
          variant={'h1'}
          sx={{
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
          About Platform
        </Typography>
        <Typography
          variant="h3"
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
          Team8s provides a platform for practical programming experience
          through real-world activities.
        </Typography>
      </Box>
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
          gap: { sm: '48px', md: '48px', lg: '36px', xl: '36px' },
        }}
      >
        {AboutItems.map(({ id, img, title, text }) => {
          if (id % 2 !== 0) {
            return (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: {
                    xs: 'column',
                    sm: 'column',
                    md: 'column',
                    lg: 'row',
                    xl: 'row',
                  },
                  justifyContent: 'space-between',
                  alignItems: { sm: 'center', md: 'center' },
                  gap: { sm: '48px', md: '48px', lg: '130px', xl: '130px' },
                }}
              >
                <Images src={img} />
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    width: { lg: '470px', xl: '470px' },
                    gap: '16px',
                  }}
                >
                  <Typography color={'success.main'} fontSize={'24px'}>
                    {title}
                  </Typography>
                  <Typography color={'text.white'} fontSize={'20px'}>
                    {text}
                  </Typography>
                </Box>
              </Box>
            );
          } else {
            return (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: {
                    xs: 'column',
                    sm: 'column',
                    md: 'column',
                    lg: 'row-reverse',
                    xl: 'row-reverse',
                  },
                  justifyContent: { lg: 'left', xl: 'left' },
                  alignItems: { sm: 'center', md: 'center' },
                  gap: { sm: '24px', md: '24px', lg: '130px', xl: '130px' },
                }}
              >
                <Images src={img} />

                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    width: { sm: '100%', md: '100%', lg: '370px', xl: '370px' },
                    gap: '16px',
                  }}
                >
                  <Typography
                    sx={{
                      color: 'success.main',
                      fontSize: {
                        xs: '20px',
                        sm: '20px',
                        md: '20px',
                        lg: '20px',
                        xl: '24px',
                      },
                    }}
                  >
                    {title}
                  </Typography>
                  <Typography
                    sx={{
                      color: 'text.white',
                      fontSize: {
                        xs: '16px',
                        sm: '20px',
                        md: '20px',
                        lg: '20px',
                        xl: '20px',
                      },
                    }}
                  >
                    {text}
                  </Typography>
                </Box>
              </Box>
            );
          }
        })}
      </Box>
    </Container>
  );
};

export default About;
