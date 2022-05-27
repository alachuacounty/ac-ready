import * as React from 'react';

import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { incidentsContext } from '../../contexts/IncidentsContext';

const useStyles = makeStyles((theme) => ({
  title: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
}));

export default function NHCMaps({ incidentIndex }) {
  const incidents = React.useContext(incidentsContext);
  const classes = useStyles();
  return (
    <div>
      <Grid container xs={12} spacing={3} justifyContent='center'>
        <Grid item xs={12} p={4}>
          <Typography variant='h5' textAlign='left' className={classes.title}>
            National Hurricane Center Maps
          </Typography>
        </Grid>
        <Grid container spacing={1} justifyContent='center'>
          <Grid
            item
            xs={12}
            sm={12}
            md={5}
            lg={5}
            display='flex'
            justifyContent='center'
          >
            <Card sx={{ maxWidth: 450, height: 'auto' }} elevation={5}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  height='auto'
                  width='100%'
                  image={incidents[incidentIndex].imageLink1}
                  alt='green iguana'
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h5'
                    textAlign='left'
                    component='div'
                  >
                    Hurricane Force Wind Speed Probabilities
                  </Typography>
                  <Typography
                    textAlign='left'
                    variant='body2'
                    color='text.secondary'
                  >
                    The probability of sustained surface wind speeds equal to or
                    exceeding 34kt (39 mph)
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size='small' color='primary'>
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={5}
            lg={5}
            display='flex'
            justifyContent='center'
          >
            <Card elevation={5} sx={{ maxWidth: 450, height: '100%' }}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  height='auto'
                  width='100%'
                  image={incidents[incidentIndex].imageLink2}
                  alt='green iguana'
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h5'
                    textAlign='left'
                    component='div'
                  >
                    Five-Day Storm Forecast Cone
                  </Typography>
                  <Typography
                    variant='body2'
                    textAlign='left'
                    color='text.secondary'
                  >
                    Approximate Representation of coastal areas under a
                    hurricane watch, tropical storm warning and tropical storm
                    watch.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size='small' color='primary'>
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
