import * as React from 'react';

import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { incidentsContext } from '../../contexts/IncidentsContext';


const useStyles = makeStyles((theme) => ({
  title: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  buttonLink: {
    color: theme.palette.middleblue.main,
    '&:visited':
    {
      color: theme.palette.middleblue.main,
    }
  }
}));

export default function NHCMaps({ incidentIndex }) {
  const { incidents } = React.useContext(incidentsContext);
  const classes = useStyles();

  const mapCardData = [
    {
      title: 'Hurricane Force Wind Speed Probabilities',
      description: 'The probability of sustained surface wind speeds equal to or exceeding 34kt (39 mph)',
      learnMoreLink: 'https://www.nhc.noaa.gov/',
    },
    {
      title: 'Five-Day Storm Forecast Cone',
      description: 'Approximate Representation of coastal areas under a hurricane watch, tropical storm warning and tropical storm watch.',
      learnMoreLink: 'https://www.nhc.noaa.gov/gtwo.php?basin=atlc&fdays=5',
    }
  ];

  return (
    <div>
      <Grid container xs={12} spacing={3} justifyContent='center'>
        <Grid item xs={12} p={4}>
          <Typography variant='h5' textAlign='left' className={classes.title}>
            National Hurricane Center Maps
          </Typography>
        </Grid>

        <Grid container spacing={1} justifyContent='center'>
          {
            mapCardData.map((cardData, index) => {
              return (
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
                    <CardActionArea href={cardData.learnMoreLink} target="_blank">
                      <CardMedia
                        component='img'
                        height='auto'
                        width='100%'
                        image={index === 0 ? incidents[incidentIndex].imageLink1 : incidents[incidentIndex].imageLink2}
                        alt='green iguana'
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant='h5'
                          textAlign='left'
                          component='div'
                        >
                          {cardData.title}
                        </Typography>
                        <Typography
                          textAlign='left'
                          variant='body2'
                          color='text.secondary'
                        >
                          {cardData.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size='small' color='primary'>
                        <Link href={cardData.learnMoreLink} target="_blank" className={classes.buttonLink}>
                          Learn More
                        </Link>
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              )
            })
          }
        </Grid>
      </Grid>
    </div>
  );
}
