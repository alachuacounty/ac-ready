import React from 'react';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  wrapper: {
    background: '#12264c',
    height: 'auto',
    color: 'white',
  },
});

export default function FooterGrid() {
  const classes = useStyles();
  return (
    <div>
      <Grid container xs={12} p={2} className={classes.wrapper}>
        <Grid item xs={0} sm={0} lg={4}></Grid>
        <Grid
          item
          display='flex'
          justifyContent='center'
          alignContent='center'
          textAlign='center'
          direction='column'
          xs={12}
          sm={12}
          lg={4}
        >
          <Grid item>
            <Typography fontSize='14px' variant='p'>
              &copy; Alachua County
            </Typography>
          </Grid>
          <Grid item>
            <Typography fontSize='14px' variant='p'>
              View Alachua County's Website Accessibility Policy and Procedures
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={0} sm={0} xs={4}></Grid>
      </Grid>
    </div>
  );
}
