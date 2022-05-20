import * as React from 'react';
import { Typography, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import theme from './siteTheme';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
const useStyles = makeStyles((theme) => ({
  title: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
}));

/* const bannerBoxShadow = {
  boxShadow: '0 -5px 5px rgb(18 38 76 / 15%);
}; */

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
        height='100%'
        p={2}
        boxShadow='0 -5px 5px rgb(18 38 76 / 15%)'
      >
        <Grid item alignSelf='center' display='flex' alignContent='center'>
          <InfoOutlinedIcon verticalAlign='middle' />
          <Typography
            variant={{ xs: 'h5', sm: 'h4' }}
            textAlign='left'
            className={classes.title}
          >
            Currently Monitoring Hurricane Elsa - View Important information
            about this storm
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
