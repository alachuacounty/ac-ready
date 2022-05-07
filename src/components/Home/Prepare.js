import { Grid, Link, Typography } from '@mui/material';

import useStyles from './PrepareStyles';
import imageleftblack from '../../images/imageleftblack.jpg';
import imageright from '../../images/imageright.jpg';

export default function Prepare() {
  const classes = useStyles();

  return (
    <>
      <Grid id='prepared' container className={classes.wrapper}>
        <Grid item container p={2} justifyContent='center'>
          <Typography fontWeight='700!important' variant='h4'>
            PREPARE
          </Typography>
        </Grid>
        <Grid item xs={0} lg={2} className={classes.left}></Grid>

        <Grid
          item
          container
          lg={8}
          margin='auto!important'
          className={classes.middle}
        >
          <Grid item lg={12} className={classes.acemSection} container>
            <Grid
              item
              xs={12}
              lg={5}
              display='flex'
              className={classes.imgleft}
            >
              <Link href='https://alachuacounty.us/Depts/EM/Pages/EM.aspx'>
                <img
                  className={classes.img}
                  src={imageleftblack}
                  alt='Alachua County Emergency Management'
                />
              </Link>
            </Grid>
            <Grid
              item
              className={classes.text}
              lineHeight='2.3rem!important'
              p={2}
              xs={12}
              lg={7}
              sx={{
                textAlign: {
                  xs: 'center',
                  md: 'center',
                  lg: 'left',
                },
              }}
            >
              <Typography variant='h4' gutterBottom>
                <Link
                  className={classes.link}
                  href='https://alachuacounty.us/Depts/EM/Pages/EM.aspx'
                >
                  Alachua County Emergency Management
                </Link>
              </Typography>
              <Typography variant='p' paragraph='true' gutterBottom>
                Visit the Emergency Management Website for more preparedness
                information and other resources
              </Typography>
              <Link
                className={classes.link}
                href='https://alachuacounty.us/Depts/EM/Pages/EM.aspx'
              >
                VISIT ALACHUA COUNTY EMERGENCY MANAGEMENT WEBSITE
              </Link>
            </Grid>
          </Grid>
          <Grid
            item
            lg={12}
            className={classes.readyGovSection}
            justifyContent='right'
            display='flex'
            container
            sx={{
              flexFlow: {
                xs: 'column-reverse',
                md: 'column-reverse',
                lg: 'row',
              },
              textAlign: {
                xs: 'center',
                md: 'center',
                lg: 'left',
              },
            }}
          >
            <Grid
              item
              className={classes.text}
              lineHeight='2.5rem!important'
              p={2}
              xs={12}
              lg={7}
            >
              <Typography variant='h4' paragraph>
                <Link
                  className={classes.link}
                  href='https://www.fema.gov/press-release/20210318/how-build-kit-emergencies'
                >
                  Disaster Supply Kit
                </Link>
              </Typography>
              <Typography variant='p' paragraph='true'>
                Visit Ready.gov to get information on building your disaster
                supply kit before an emergency happens.
              </Typography>

              <Link className={classes.link} href='https://www.ready.gov/kit'>
                VISIT READY.GOV WEBSITE
              </Link>
            </Grid>
            <Grid
              item
              justifyContent='right'
              display='flex'
              className={classes.imgleft}
              xs={12}
              lg={5}
            >
              <Link href='https://www.ready.gov/kit'>
                <img
                  className={classes.img}
                  src={imageright}
                  alt='Hurricane emergency supplies on a table'
                />
              </Link>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={0} lg={2} className={classes.right}></Grid>
      </Grid>
      <hr className={classes.firsthr} />
      <hr className={classes.secondhr} />
      <hr className={classes.thirdhr} />
    </>
  );
}
