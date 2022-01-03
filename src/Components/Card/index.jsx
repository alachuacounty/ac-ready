import React from 'react';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  headerColor: {
    background: '#12264c',
    color: 'white',
  },
});

export default function LocationCard() {
  const classes = useStyles();
  return (
    <div>
      <Grid item justify='center' width='100%' lg={4}>
        <Card>
          <CardHeader className={classes.headerColor} title='Micanopy' />
          <CardContent>
            <Typography>- Micanopy Town Hall</Typography>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className={classes.headerColor} title='Micanopy' />
          <CardContent>
            <Typography>- Micanopy Town Hall</Typography>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className={classes.headerColor} title='Micanopy' />
          <CardContent>
            <Typography>- Micanopy Town Hall</Typography>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className={classes.headerColor} title='Micanopy' />
          <CardContent>
            <Typography>- Micanopy Town Hall</Typography>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}
