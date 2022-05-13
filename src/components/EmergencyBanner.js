import * as React from 'react';
import { Button, Link, Typography, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import theme from './siteTheme';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
const useStyles = makeStyles((theme) => ({
  title: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
}));

export default function EmergencyBanner() {
  const classes = useStyles();
  return (
    <div>
      <Grid
        container
        xs={12}
        justifyContent='center'
        alignContent='center'
        backgroundColor={theme.palette.yellow.main}
        height='70px'
      >
        <InfoOutlinedIcon textAlign='center' />
        <Typography variant='h6' textAlign='left' className={classes.title}>
          Currently Monitoring Hurricane Elsa - View Important information about
          this storm
        </Typography>
      </Grid>
    </div>
  );
}
