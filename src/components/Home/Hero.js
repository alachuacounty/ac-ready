import { Grid, Typography } from '@mui/material';

import useStyles from './HeroStyles';
import hero2 from '../../images/fam_grey_crop.png';

export default function Hero() {
  const classes = useStyles();

  return (
    <Grid
      item
      container
      sx={{
        flexFlow: { xs: 'column-reverse', md: 'row' },
      }}
    >
      <Grid
        item
        container
        alignContent='center'
        justifyContent='center'
        className={classes.contentwrapper}
        xs={12}
        lg={6}
      >
        <p>
          <Typography
            className={classes.heroContent}
            variant='h3'
            variantMapping='h3'
            textAlign='center'
            tabIndex='0'
          >
            WHEN DISASTER STRIKES
          </Typography>

          <Typography
            lg={4}
            className={(classes.content, classes.secondTagline)}
            variant='h3'
            textAlign='center'
            gutterBottom
            tabIndex='0'
          >
            STAY INFORMED
          </Typography>

          <Typography
            className={classes.content}
            textAlign='center'
            variant='h6'
            gutterBottom='false'
            paragraph='true'
            fontWeight='700'
            tabIndex='0'
          >
            Text "ALACHUA" to 888777
          </Typography>

          <Typography
            className={classes.content}
            textAlign='center'
            variant='h6'
            gutterBottom='false'
            paragraph='true'
            fontWeight='700'
            tabIndex='0'
          >
            to receive real-time County updates
          </Typography>

          <Typography
            className={classes.content}
            textAlign='center'
            variant='h6'
            gutterBottom='false'
            paragraph='true'
            fontWeight='700'
            tabIndex='0'
          >
            during a large-scale incident or emergency
          </Typography>
        </p>
      </Grid>

      <Grid
        item
        xs={12}
        md={12}
        lg={6}
        xl={6}
        sx={{ flexDirection: { xs: 'row', lg: 'left' } }}
      >
        <img
          tabIndex='0'
          className={classes.image}
          src={hero2}
          alt='Family together'
        />
      </Grid>
    </Grid>
  );
}
