import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { Images } from './About.styles';
import { AboutItems } from '../../Constants/AboutItems';
const About = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        mt: '160px',
        gap: '56px',
        width: '970px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '710px',
          color: '#FFF',
        }}
      >
        <Typography variant={'h1'} sx={{ fontSize: '38px', color: 'green' }}>
          About Platform
        </Typography>
        <Typography
          variant="h3"
          align="center"
          fontSize={'20px'}
          fontWeight={400}
          mt={2}
        >
          Team8s provides a platform for practical programming experience
          through real-world activities.
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '970px',
          gap: '36px',
          // mt: '56px',
        }}
      >
        {AboutItems.map(({ id, img, title, text }) => {
          if (id % 2 !== 0) {
            return (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '130px',
                }}
              >
                <Images src={img} />
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    width: '470px',
                    gap: '16px',
                  }}
                >
                  <Typography color={'green'} fontSize={'24px'}>
                    {title}
                  </Typography>
                  <Typography color={'#fff'} fontSize={'20px'}>
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
                  flexDirection: 'row-reverse',
                  justifyContent: 'left',
                  gap: '130px',
                }}
              >
                <Images src={img} />

                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    width: '370px',
                    gap: '16px',
                  }}
                >
                  <Typography color={'green'} fontSize={'24px'}>
                    {title}
                  </Typography>
                  <Typography color={'#fff'} fontSize={'20px'}>
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
