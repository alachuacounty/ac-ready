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
      >
        <Grid item sx={{ display: 'flex', alignContent: 'center' }}>
          <InfoOutlinedIcon verticalAlign='middle' />
        </Grid>
        <Grid item alignSelf='center'>
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
