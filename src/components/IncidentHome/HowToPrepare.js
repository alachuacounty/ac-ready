import * as React from 'react';

import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
}));

export default function HowToPrepare() {
  const classes = useStyles();
  return (
    <div>
      <Grid
        container
        xs={12}
        height={200}
        justifyContent='center'
        alignContent='center'
        fontSize='38px'
      >
        Stay Tuned: Coming Soon
      </Grid>
    </div>
  );
}
