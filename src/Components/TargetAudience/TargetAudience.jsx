import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
//Local files
import { useTheme } from '@mui/material/styles';
import { TargetAudienceItems } from '../../Constants/TargetAudienceItems';
import BaseBoxTitle from '../BaseBoxTitle/BaseBoxTitle.jsx';
import {
  AccordionBox,
  AccordionTitle,
  PersonLogo,
  WrappedBox,
} from './TargetAudience.styles';

// Props for BaseBoxTitle
const title = 'Target Audience';
const description =
  'Our platform unites diverse tech professionals to collaborate on remarkable projects in a vibrant community.';

const TargetAudience = () => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState('panel1');

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <WrappedBox>
      <BaseBoxTitle title={title} description={description} />
      <AccordionBox>
        {TargetAudienceItems.map(({ id, alt, logo, title, text }) => {
          return (
            <Accordion
              key={id}
              expanded={expanded === `panel${id}`}
              onChange={handleChange(`panel${id}`)}
              sx={{
                bgcolor: 'inherit',
                color: 'text.grey.light',
                borderBottom: `1px solid ${theme.palette.text.grey.dark}`,
                py: 2,
              }}
            >
              <AccordionSummary
                sx={{
                  p: 0,
                  margin: 0,
                  display: 'flex',
                  alignItems: 'center',
                }}
                expandIcon={
                  expanded === `panel${id}` ? (
                    <RemoveIcon sx={{ color: 'text.white' }} />
                  ) : (
                    <AddIcon sx={{ color: 'text.white' }} />
                  )
                }
                aria-controls={`panel${id}a-content`}
                id={`panel${id}a-header`}
              >
                {<PersonLogo src={logo} alt={alt} />}
                <Box sx={{ ml: 1 }}>
                  <AccordionTitle>{title}</AccordionTitle>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 0 }}>
                <Typography sx={{ fontSize: '16px', fontWeight: 400 }}>
                  {text}
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </AccordionBox>
    </WrappedBox>
  );
};

export default TargetAudience;
