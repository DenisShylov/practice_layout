import { Box, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import React, { useState } from 'react';

import { PersonLogo } from './TargetAudience.styles';
import { TargetAudienceItems } from '../../Constants/TargetAudienceItems';
import { BoxTitle } from '../About/About.styles';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const TargetAudience = () => {
  const [isExpanded, setIsExpanded] = useState({ open: false, id: '' });
  console.log(isExpanded);
  const handleTogglerAccordion = (e) => {
    console.log(e.target);
    setIsExpanded((prevState) => !prevState);
  };

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
          Target Audience
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
          Our platform unites diverse tech professionals to collaborate on
          remarkable projects in a vibrant community.
        </Typography>
      </BoxTitle>
      <Box
        sx={{
          width: {
            xs: '328px',
            sm: '708px',
            md: '776px',
            lg: '970px',
            xl: '970px',
          },
        }}
      >
        {TargetAudienceItems.map(({ id, logo, title, text }) => {
          return (
            <Accordion
              key={id}
              // expanded={isExpanded}
              // onChange={handleTogglerAccordion}
              sx={{
                bgcolor: 'inherit',
                color: 'text.grey.light',
                borderBottom: '1px solid ',
                borderColor: 'text.grey.dark',
                // height: '68px',
                py: 2,
              }}
            >
              <AccordionSummary
                sx={{ p: 0, margin: 0, display: 'flex', alignItems: 'center' }}
                onClick={(e) =>
                  setIsExpanded({
                    open: e.currentTarget.ariaExpanded,
                    id: e.currentTarget.id,
                  })
                }
                expandIcon={
                  isExpanded.open ? (
                    <AddIcon sx={{ color: 'text.white' }} />
                  ) : (
                    <RemoveIcon sx={{ color: 'text.white' }} />
                  )
                }
                aria-controls={`panel${id}a-content`}
                id={`panel${id}a-header`}
              >
                {<PersonLogo src={logo} sx={{}} />}
                <Box sx={{ ml: 1 }}>
                  <Typography
                    sx={{
                      ml: 1,
                      height: '24px',
                      fontSize: '20px',
                      fontWeight: 500,
                      color: 'text.white',
                    }}
                    color={'text.grey.light'}
                  >
                    {title}
                  </Typography>
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
      </Box>
    </>
  );
};

export default TargetAudience;
