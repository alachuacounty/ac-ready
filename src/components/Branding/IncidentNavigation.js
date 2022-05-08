import { Grid, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { incidentsContext } from '../../contexts/IncidentsContext';

const navigationStyles = {
  fontWeight: 'bold',
  color: 'white',
  cursor: 'pointer',
};

export default function IncidentNavigation() {
  const incidents = useContext(incidentsContext);
  const navigate = useNavigate();

  const navigatePage = (page = '/') => {
    navigate(page);
  };

  return (
    <Grid
      container
      direction='row'
      justifyContent='space-evenly'
      alignItems='center'
      color='white'
      sx={{ backgroundColor: '#1976d2' }}
    >
      <Grid item sx={{ p: 1 }}>
        <Typography
          variant='body1'
          style={navigationStyles}
          onClick={() => {
            navigatePage();
          }}
        >
          Alachua County Ready
        </Typography>
      </Grid>
      {incidents &&
        incidents.length > 0 &&
        incidents.map((incident) => (
          <Grid item sx={{ p: 1 }}>
            <Typography
              variant='body1'
              style={navigationStyles}
              onClick={() => navigatePage(`incidents/${incident.urlName}`)}
            >
              {incident.name}
            </Typography>
          </Grid>
        ))}
    </Grid>
  );
}
