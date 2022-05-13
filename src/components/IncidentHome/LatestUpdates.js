import { useState, useEffect } from 'react';
import { Grid, Typography } from '@mui/material';

import { makeStyles } from '@mui/styles';
import PressItem from '../PressReleases/PressItem';

const useStyles = makeStyles((theme) => ({
  title: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
}));

const mockpressdata = {
  day: 'Fri',
  date: 'Jul 21',
  year: '2022',
  time: '9:00 AM',
  title: 'Lastest Road Closures and Openings ',
  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  link: '/',
};

export default function LatestUpdates() {
  const classes = useStyles();

  const [isMobile, setMobile] = useState(window.innerWidth < 601);

  const updateMedia = () => {
    setMobile(window.innerWidth < 601);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });

  return (
    <Grid container xs={12} spacing={3} justifyContent='center'>
      <Grid item xs={12}>
        <Typography variant='h5' textAlign='left' className={classes.title}>
          Latest Updates
        </Typography>
      </Grid>

      <Grid container xs={12} spacing={4} p={4} justifyContent='center'>
        <Grid container xs={12} md={6} justifyContent='flex-end'>
          <PressItem data={mockpressdata} expanded={!isMobile} />
        </Grid>
        <Grid container xs={12} md={6} justifyContent='flex-end'>
          <PressItem data={mockpressdata} />
          <PressItem data={mockpressdata} />
          <PressItem data={mockpressdata} />
        </Grid>
      </Grid>
    </Grid>
  );
}
