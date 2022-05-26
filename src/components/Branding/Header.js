import { Button, Grid, Link, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { incidentsContext } from '../../contexts/IncidentsContext';
import { titleContext } from '../../contexts/TitleContext';
import IncidentDropDown from './IncidentsDropDown';
import acrlogo from '../../images/ACR_logo.png';

const linkStyles = {
  color: '#12264c!important',
  textTransform: 'uppercase',
  textDecorationColor: '#12264c!important',
  fontSize: { xs: '1.3em', md: '1.5em' },
  fontWeight: 'bold',
};

export default function Header() {
  const incidents = useContext(incidentsContext);
  const { pageHeading } = useContext(titleContext);
  const location = useLocation();
  const navigate = useNavigate();

  const navigateToIncident = (incident) => {
    navigate(`incidents/${incident.urlName}`);
  };

  /*

              SubMenu prop structure ::
                    
            {
              title: 'Incidents',
              link: '/incidents',
              submenu: [{ title: 'Hurricane Elsa', link: '/incidents/elsa' }],
            }
                    
           */

  const multipleIncidentsData = {
    title: 'Incidents',
    link: '/incidents',
    submenu: incidents.map((incident) => ({
      title: incident.name,
      link: '/incidents/' + incident.urlName,
    })),
  };

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
        sx={{
          textAlign: { xs: 'center', lg: 'start' },
          p: 2,
          display: 'flex',
          justifyContent: { xs: 'center', lg: 'flex-start' },
          alignItems: 'center',
          pl: 0,
        }}
      >
        <img
          width='100%'
          src={acrlogo}
          style={{ maxHeight: '75px', maxWidth: '75px' }}
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
          display: { xs: 'none', md: 'flex' },
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
            <Link href='#notified' sx={linkStyles}>
              Get Notified
            </Link>
            <Link href='#prepared' sx={linkStyles}>
              prepare
            </Link>
            <Link href='#sticker' sx={linkStyles}>
              acr stickers
            </Link>

            {incidents.length === 1 && (
              <Button
                size='large'
                variant='contained'
                sx={{ borderRadius: 3, py: 1.5, fontWeight: 'bold' }}
                onClick={() => {
                  navigateToIncident(incidents[0]);
                }}
              >
                {incidents[0].name}
              </Button>
            )}

            {incidents.length > 1 && (
              <IncidentDropDown item={multipleIncidentsData} />
            )}
          </>
        )}
      </Grid>
      <Grid item xs={0} lg={1}></Grid>
    </Grid>
  );
}
