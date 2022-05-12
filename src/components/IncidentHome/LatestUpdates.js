import * as React from "react";
import {
  Grid,
  Typography
}
  from "@mui/material";
import clsx from 'clsx';



import { makeStyles } from '@mui/styles';
import PressItem from "../PressReleases/PressItem";

const useStyles = makeStyles((theme) => ({}));

const mockpressdata = {
  day: 'Fri',
  date: 'Jul 21',
  year: '2022',
  time: '9:00 AM',
  title: 'Title',
  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  link: '/',
}


export default function LatestUpdates() {
  return (
    <div>
      <Grid container xs={12}></Grid>
      <PressItem data={mockpressdata} />
    </div>
  );
}
