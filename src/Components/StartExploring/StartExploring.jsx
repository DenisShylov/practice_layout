import React from 'react';
import { Box } from '@mui/material';
import {
  ButtonStartExploring,
  RootStartExploring,
} from './StartExploring.styles';
import BaseBoxTitle from '../BaseBoxTitle/BaseBoxTitle';

//Props for BaseBoxTitle
const title = ' So what are you waiting for?';
const description =
  'Sign up today and start exploring all that our platform has to offer!';

const StartExploring = () => {
  return (
    <RootStartExploring>
      <BaseBoxTitle title={title} description={description} />

      <Box sx={{ px: '24px', textAlign: 'center' }}>
        <ButtonStartExploring>Join Beta</ButtonStartExploring>
      </Box>
    </RootStartExploring>
  );
};

export default StartExploring;
