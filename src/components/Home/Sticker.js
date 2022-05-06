import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import background from '../../images/texture.jpg';
import image8 from '../../images/Image8.png';
import Card from '../Card';

const useStyles = makeStyles({
  wrapper: {
    height: 'auto',
    padding: '4% 0',
    backgroundImage: `url(${background})`,
  },
  content: {
    textAlign: 'center',
  },
});

export default function Sticker() {
  const classes = useStyles();

  return (
    <Grid id='sticker' container className={classes.wrapper}>
      <Grid item xs={0} lg={2}></Grid>
      <Grid item container justify='center' display='grid' lg={8}>
        <Grid justifySelf='center' item lg={12}>
          <Typography
            textAlign='center'
            p={4}
            className={classes.content}
            variant='h4'
            fontWeight='700!important'
          >
            GET YOUR ACR STICKER
          </Typography>
        </Grid>
        <Grid item justifySelf='center' lg={12}>
          <img src={image8} alt='' />
        </Grid>
        <Grid item justifySelf='center' p={2} lg={12}>
          <Typography
            textAlign='center'
            paragraph='true'
            className={classes.content}
            variant='h5'
          >
            You can pick up your own ACR bumper sticker for free from the
            following locations:
          </Typography>
        </Grid>
        <Grid container item width='100%' p={2} lg={12}>
          <Card />
        </Grid>
      </Grid>
      <Grid item xs={0} lg={2}></Grid>
    </Grid>
  );
}
