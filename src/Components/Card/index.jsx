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
      <Grid item justify='center' width='100%' lg={12}>
        <Grid item lg={4} flexWrap='wrap'>
          <Card>
            <CardHeader className={classes.headerColor} title='Micanopy' />
            <CardContent>
              <Typography>- Micanopy Town Hall</Typography>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className={classes.headerColor} title='Hawthorne' />
            <CardContent>
              <Typography>- Hawthorne Town Hall</Typography>
              <Typography>- MMPS Walk-in Clinic</Typography>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className={classes.headerColor} title='Gainesville' />
            <CardContent>
              <Typography>- Alachua County Emergency Management</Typography>
              <Typography>- Alachua County Library Headquarters</Typography>
              <Typography>- Public & General</Typography>
              <Typography>- Satchel’s</Typography>
              <Typography>- SubLIME Tacos</Typography>
              <Typography>- Curia on the Drag</Typography>
              <Typography>- Satch Squared</Typography>
              <Typography>- Swamp Head</Typography>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className={classes.headerColor} title='Archer' />
            <CardContent>
              <Typography>- Archer City Hall</Typography>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className={classes.headerColor} title='Waldo' />
            <CardContent>
              <Typography>- Waldo City Hall</Typography>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className={classes.headerColor} title='Newberry' />
            <CardContent>
              <Typography>- Easton Newberry Archery Center</Typography>
              <Typography>- Newberry City Hall</Typography>
              <Typography>- Villaggio’s Pizzeria</Typography>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className={classes.headerColor} title='La Crosse' />
            <CardContent>
              <Typography>- La Crosse Town Hall</Typography>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className={classes.headerColor} title='Alachua' />
            <CardContent>
              <Typography>- Alachua City Hall</Typography>
              <Typography>- Alachua County Library – Alachua Branch</Typography>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className={classes.headerColor} title='High Springs' />
            <CardContent>
              <Typography>- High Springs City Hall</Typography>
              <Typography>- High Springs Brewing Company</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
