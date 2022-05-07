import { Grid, Link } from '@mui/material';
import React, { useContext } from 'react';

import { incidentsContext } from '../../contexts/IncidentsContext';
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
        lg={3}
        sx={{ textAlign: { xs: 'center', lg: 'start' }, p: 2 }}
      >
        <img
          width='100%'
          src={acrlogo}
          style={{ maxHeight: '100px', maxWidth: '100px' }}
          alt='Alachua County ready logo'
        />
      </Grid>
      <Grid item xs={0} lg={2}></Grid>
      <Grid
        item
        xs={12}
        lg={5}
        sx={{
          p: {
            xs: '3%',
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'space-evenly',
            direction: 'row',
          },
        }}
      >
        <Link href='#notified' underline='none' sx={linkStyles}>
          Get Notified
        </Link>
        <Link href='#prepared' underline='none' sx={linkStyles}>
          prepare
        </Link>
        <Link href='#sticker' underline='none' sx={linkStyles}>
          acr stickers
        </Link>
      </Grid>
      <Grid item xs={0} lg={1}></Grid>
    </Grid>
  );
}
