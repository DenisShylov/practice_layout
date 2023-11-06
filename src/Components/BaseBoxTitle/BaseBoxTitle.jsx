import React from 'react';
import { BoxTitle } from '../../Shared/BoxTitle';
import { TypographyDescription, TypographyTitle } from './BaseBoxTitle.styles';

const BaseBoxTitle = ({ title, description }) => {
  return (
    <BoxTitle>
      <TypographyTitle variant="h1">{title}</TypographyTitle>
      <TypographyDescription variant="h2">{description}</TypographyDescription>
    </BoxTitle>
  );
};

export default BaseBoxTitle;
