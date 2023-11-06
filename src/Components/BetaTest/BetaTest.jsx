import React from 'react';
//Local files
import starsLogo from '../../Assets/stars.webp';
import { BetaTestItems } from '../../Constants/BetaTestItems';
import BaseBoxTitle from '../BaseBoxTitle/BaseBoxTitle';
import {
  BoxItem,
  BoxItemImg,
  BoxItemText,
  RootBoxBetaTest,
  StarsImg,
  TypographyText,
  TypographyTitle,
  WrappedBoxBetaTest,
} from './BataTest.styles';
//Props for BaseBoxTitle
const title = 'Beta Test Benefits';
const description =
  'Join our beta test for exclusive benefits, enhancing your experience and contributing to our development.';

const BetaTest = () => {
  return (
    <RootBoxBetaTest>
      <BaseBoxTitle title={title} description={description} />
      <WrappedBoxBetaTest>
        {BetaTestItems.map(({ id, title, text }) => {
          return (
            <BoxItem key={id}>
              <BoxItemImg>
                <StarsImg src={starsLogo} alt="Stars-logo" />
                <BoxItemText key={id}>
                  <TypographyTitle variant="h1">{title}</TypographyTitle>
                  <TypographyText variant="h2">{text}</TypographyText>
                </BoxItemText>
              </BoxItemImg>
            </BoxItem>
          );
        })}
      </WrappedBoxBetaTest>
    </RootBoxBetaTest>
  );
};

export default BetaTest;
