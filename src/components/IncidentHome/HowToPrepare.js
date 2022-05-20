import * as React from 'react';

import { Typography, Grid, List, ListItem } from '@mui/material';
import { makeStyles } from '@mui/styles';

import ACRButton from '../ACRButton';

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

export default function HowToPrepare() {
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
            <List listStyleType='circle'>
              <ListItem primary='circle '>Ashvini Patel</ListItem>
              <ListItem>Tyler Sullivan</ListItem>

              <ListItem>-Lindsay Hall</ListItem>

              <ListItem>-Nishant Maurya</ListItem>
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
              <Grid item sx={buttonStyles}>
                <ACRButton
                  link={'elsa/shelters'}
                  text='Find A Shelter'
                  size='jumbo'
                  invert={true}
                />
              </Grid>
              <Grid item sx={buttonStyles}>
                <ACRButton
                  link={'elsa/sandbags'}
                  text='Find sandbag locations'
                  size='jumbo'
                  invert={true}
                />
              </Grid>
              <Grid item sx={buttonStyles}>
                <ACRButton
                  link={'elsa/faqs'}
                  text='Frequently Asked Questions '
                  size='jumbo'
                  invert={true}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
