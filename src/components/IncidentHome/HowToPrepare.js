import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@mui/material/Grid';

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
