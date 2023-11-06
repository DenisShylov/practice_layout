import React from 'react';
// Local files
import { AboutItems } from '../../Constants/AboutItems';
import BaseBoxTitle from '../BaseBoxTitle/BaseBoxTitle';
import {
  AboutBoxItem,
  AboutBoxItemTitle,
  AboutTypographyDescription,
  AboutTypographyTitle,
  Images,
  WrappedAboutBox,
} from './About.styles';

//Props for BaseBoxTitle
const title = 'About Platform';
const description =
  'Team8s provides a platform for practical programming experience through real-world activities.';

const About = () => {
  return (
    <>
      <BaseBoxTitle title={title} description={description} />
      <WrappedAboutBox>
        {AboutItems.map(({ id, img, title, text }) => {
          if (id % 2 !== 0) {
            return (
              <AboutBoxItem key={id}>
                <Images src={img} alt={`${title}-image`} />
                <AboutBoxItemTitle>
                  <AboutTypographyTitle>{title}</AboutTypographyTitle>
                  <AboutTypographyDescription>
                    {text}
                  </AboutTypographyDescription>
                </AboutBoxItemTitle>
              </AboutBoxItem>
            );
          } else {
            return (
              <AboutBoxItem
                key={id}
                sx={{
                  flexDirection: {
                    lg: 'row-reverse',
                    xl: 'row-reverse',
                  },
                  justifyContent: { lg: 'left', xl: 'left' },
                }}
              >
                <Images src={img} alt={`${title}-image`} />

                <AboutBoxItemTitle
                  sx={{
                    width: { lg: '370px', xl: '370px' },
                  }}
                >
                  <AboutTypographyTitle>{title}</AboutTypographyTitle>
                  <AboutTypographyDescription>
                    {text}
                  </AboutTypographyDescription>
                </AboutBoxItemTitle>
              </AboutBoxItem>
            );
          }
        })}
      </WrappedAboutBox>
    </>
  );
};

export default About;
