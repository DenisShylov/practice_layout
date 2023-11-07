import React from 'react';
import {
  BoxTitle,
  TypographyDescription,
  TypographyDescriptionStartExploring,
  TypographyTitle,
} from './BaseBoxTitle.styles';

const BaseBoxTitle = ({ id, title, description }) => {
  return (
    <BoxTitle>
      <TypographyTitle variant="h1">{title}</TypographyTitle>
      {id === 'Start Exploring' ? (
        <TypographyDescriptionStartExploring>
          {description}
        </TypographyDescriptionStartExploring>
      ) : (
        <TypographyDescription variant="h2">
          {description}
        </TypographyDescription>
      )}
    </BoxTitle>
  );
};

export default BaseBoxTitle;
