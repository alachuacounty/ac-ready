import * as React from "react";
import {
  Grid,
  Typography
}
  from "@mui/material";
import clsx from 'clsx';



import { makeStyles } from '@mui/styles';
import PressItem from "../PressReleases/PressItem";

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
  title: 'Lastest Road closures and Openings ',
  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  link: '/',
}


export default function LatestUpdates() {

  const classes = useStyles();
  return (

    <Grid container xs={12} spacing={3} justifyContent='center'>
      <Grid item xs={12} >
        <Typography variant='h5' textAlign='left' className={classes.title} p={4}>
          Latest Updates
        </Typography>
      </Grid>

      <Grid container xs={12} justifyContent='center'>
        <Grid container xs={12} sm={6} p={4} justifyContent='flex-end'>
          <PressItem data={mockpressdata} expanded={true} />
        </Grid>
        <Grid container xs={12} sm={6} p={4} justifyContent='left'>
          <PressItem data={mockpressdata} />
          <PressItem data={mockpressdata} />
          <PressItem data={mockpressdata} />
        </Grid>
      </Grid>
    </Grid>


  );
}
