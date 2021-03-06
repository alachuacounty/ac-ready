import React, { useContext } from 'react';

import { Typography, Grid, List, ListItem } from '@mui/material';
import { makeStyles } from '@mui/styles';

import ACRButton from '../ACRButton';
import { incidentsContext } from '../../contexts/IncidentsContext';

const useStyles = makeStyles((theme) => ({
  title: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
}));

const buttonStyles = {
  width: { xs: '90%', sm: '80%', md: '60%', lg: '100%' },
  pl: { xs: '0!important', sm: 2 },
};

export default function HowToPrepare({ incidentIndex }) {
  const { incidents } = useContext(incidentsContext);
  const classes = useStyles();
  return (
    <div>
      <Grid container xs={12} spacing={3} justifyContent='center'>
        <Grid item xs={12} p={5}>
          <Typography variant='h5' className={classes.title} textAlign='left'>
            How to Prepare
          </Typography>
        </Grid>

        <Grid
          container
          xs={12}
          justifyContent='center'
          spacing={4}
          textAlign='center'
        >
          <Grid
            item
            xs={12}
            md={6}
            display='flex'
            flexDirection='column'
            alignItems='start'
            justifyContent='left'
          >
            <Typography fontWeight='bold'>
              Residents are encouraged to:
            </Typography>
            <List disablePadding={true} sx={{ listStyleType: 'disc' }} pl={1}>
              <ListItem sx={{ display: 'list-item' }}>
                Open AMAZING Alachua County ACR Web APP
              </ListItem>

              <ListItem sx={{ display: 'list-item' }}>
                Create a Hurricane Safety Plan
              </ListItem>

              <ListItem sx={{ display: 'list-item' }}>
                Plan an Evacuation Route
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                Stay Home and Don't Go Outside
              </ListItem>

              <ListItem sx={{ display: 'list-item' }}>
                Make sure to drink plenty of water
              </ListItem>
            </List>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            display='flex'
            justifyContent='center'
            sx={{ pl: { xs: '0!important', sm: 2 } }}
          >
            <Grid
              container
              xs={12}
              md={6}
              spacing={3}
              direction='column'
              justifyContent='center'
              alignItems='center'
            >
              {incidents[incidentIndex].showShelters &&
                incidents[incidentIndex].showShelters === 'Yes' && (
                  <Grid item sx={buttonStyles}>
                    <ACRButton
                      link={`/incidents/${incidents[incidentIndex].urlName}/shelters`}
                      text='Find A Shelter'
                      size='jumbo'
                      invert={true}
                    />
                  </Grid>
                )}
              {incidents[incidentIndex].showSandbags &&
                incidents[incidentIndex].showSandbags === 'Yes' && (
                  <Grid item sx={buttonStyles}>
                    <ACRButton
                      link={`/incidents/${incidents[incidentIndex].urlName}/sandbags`}
                      text='Find sandbag locations'
                      size='jumbo'
                      invert={true}
                    />
                  </Grid>
                )}
              {incidents[incidentIndex].showRoadClosures &&
                incidents[incidentIndex].showRoadClosures === 'Yes' && (
                  <Grid item sx={buttonStyles}>
                    <ACRButton
                      link={`/incidents/${incidents[incidentIndex].urlName}/faq`}
                      text='Frequently Asked Questions '
                      size='jumbo'
                      invert={true}
                    />
                  </Grid>
                )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
