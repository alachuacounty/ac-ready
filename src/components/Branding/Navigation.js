import { Button, Grid, Link, Typography } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { incidentsContext } from '../../contexts/IncidentsContext';
import { titleContext } from '../../contexts/TitleContext';
import acrlogo from '../../images/ACR_logo.png';

const linkStyles = {
  color: '#12264c!important',
  textTransform: 'uppercase',
  textDecorationColor: '#12264c!important',
  fontSize: { xs: '1.3em', md: '1.5em' },
  fontWeight: 'bold',
};

export default function Navigation() {
  const incidents = useContext(incidentsContext);
  const { pageHeading } = useContext(titleContext);
  const location = useLocation();
  const navigate = useNavigate();

  const navigateToIncident = (incident) => {
    navigate(`incidents/${incident.urlName}`);
  };

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <Grid
      container
      sx={{
        justifyContent: { xs: 'center' },
        height: 'auto',
        boxShadow:
          '0 5px 5px rgba(18, 38, 76, 0.15), 0 5px 5px rgba(18, 38, 76, 0.15)',
      }}
    >
      <Grid item xs={0} lg={1}></Grid>
      <Grid
        item
        xs={12}
        lg={incidents.length === 0 ? 3 : 1}
        sx={{ textAlign: { xs: 'center', lg: 'start' }, p: 2 }}
      >
        <img
          width='100%'
          src={acrlogo}
          style={{ maxHeight: '100px', maxWidth: '100px' }}
          alt='Alachua County ready logo'
        />
      </Grid>
      {incidents.length === 0 && <Grid item xs={0} lg={2}></Grid>}
      <Grid
        item
        xs={12}
        lg={incidents.length === 0 ? 5 : 9}
        sx={{
          p: {
            xs: '3%',
            display: 'flex',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            direction: 'row',
          },
        }}
      >
        {location && location.pathname.includes('incident') ? (
          <Typography
            variant='h3'
            style={{ fontWeight: 'bold', textTransform: 'uppercase' }}
          >
            {pageHeading}
          </Typography>
        ) : (
          <>
            <Link href='#notified' underline='none' sx={linkStyles}>
              Get Notified
            </Link>
            <Link href='#prepared' underline='none' sx={linkStyles}>
              prepare
            </Link>
            <Link href='#sticker' underline='none' sx={linkStyles}>
              acr stickers
            </Link>

            {incidents.length === 0
              ? null
              : incidents.map((incident) => (
                  <Button
                    size='large'
                    variant='contained'
                    sx={{ borderRadius: 3, py: 1.5, fontWeight: 'bold' }}
                    onClick={() => {
                      navigateToIncident(incident);
                    }}
                  >
                    {incident.name}
                  </Button>
                ))}
          </>
        )}
      </Grid>
      <Grid item xs={0} lg={1}></Grid>
    </Grid>
  );
}
