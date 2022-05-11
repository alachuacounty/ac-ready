import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const useStyles = makeStyles((theme) => ({}));

export default function NHCMaps() {
  return (
    <div>
      <Grid container xs={12}>
        <Grid item textAlign='left' xs={12} p={4}>
          <Typography variant='h5' textAlign='left'>
            National Hurricane Center Maps
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Card sx={{ maxWidth: 350, height: '100%' }} elevation={5}>
            <CardActionArea>
              <CardMedia
                component='img'
                height='140'
                image='/static/images/cards/contemplative-reptile.jpg'
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
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Card sx={{ maxWidth: 350, height: '100%' }}>
            <CardActionArea>
              <CardMedia
                component='img'
                height='140'
                image='/static/images/cards/contemplative-reptile.jpg'
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
                  Approximate Representation of coastal areas under a hurricane
                  watch, tropical storm warning and tropical storm watch.
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
    </div>
  );
}
