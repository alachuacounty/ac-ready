/* eslint-disable react-hooks/exhaustive-deps */
import { Grid, Typography } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { incidentsContext } from '../contexts/IncidentsContext';
import { titleContext } from '../contexts/TitleContext';
import hurricaneImage from '../images/hurricane.svg';

const cardStyles = {
  background: (theme) => theme.palette.lightblue.light,
  mx: { xs: '2%', sm: '8% !important' },

  mb: '2% !important',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 180,
  backgroundImage: `url(${hurricaneImage}) !important`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right bottom',
  cursor: 'pointer',
};

const typographyStyles = {
  fontWeight: 'bold',
  color: '#1968b2',
};

export default function Incidents() {
  const { updatePageTitle, updatePageHeading } = useContext(titleContext);
  const { incidents } = useContext(incidentsContext);
  const navigate = useNavigate();

  useEffect(() => {
    updatePageTitle('Alachua County Ready | Incidents');
    updatePageHeading('Incidents');
  }, []);

  const navigateToPage = (path) => {
    navigate(path);
  };

  return (
    <Grid container direction='row' justifyContent='center' alignItems='center'>
      <Grid item xs={12} sx={{ textAlign: 'center', my: '3% !important' }}>
        <Typography variant='h4' sx={{ fontWeight: 'bold' }}>
          CURRENT INCIDENTS
        </Typography>
      </Grid>
      {incidents &&
        incidents.length > 0 &&
        incidents.map((incident, index) => (
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={3}
            sx={cardStyles}
            key={index}
            onClick={() => navigateToPage(incident.urlName)}
          >
            <Typography variant='h4' sx={typographyStyles}>
              {incident.name}
            </Typography>
          </Grid>
        ))}
    </Grid>
  );
}
