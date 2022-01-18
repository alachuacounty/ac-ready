import React from 'react';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  headerColor: {
    background: '#12264c',
    color: 'white',
  },
  smallPaddingOff: {
    [theme.breakpoints.down('lg')]: {
      paddingRight: '32px',
    },
  },
}));

export default function LocationCard() {
  const classes = useStyles();
  return (
    <Grid container item justify='center' width='100%' spacing={4} lg={12}>
      <Grid
        className={classes.smallPaddingOff}
        item
        xs={12}
        sm={6}
        md={6}
        lg={4}
      >
        <Card>
          <CardHeader className={classes.headerColor} title='Micanopy' />
          <CardContent>
            <Typography>- Micanopy Town Hall</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid
        className={classes.smallPaddingOff}
        item
        xs={12}
        sm={6}
        md={6}
        lg={4}
      >
        <Card>
          <CardHeader className={classes.headerColor} title='Hawthorne' />
          <CardContent>
            <Typography>- Hawthorne City Hall</Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid
        className={classes.smallPaddingOff}
        item
        xs={12}
        sm={6}
        md={6}
        lg={4}
      >
        <Card>
          <CardHeader className={classes.headerColor} title='Archer' />
          <CardContent>
            <Typography>- Archer City Hall</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid
        className={classes.smallPaddingOff}
        item
        xs={12}
        sm={6}
        md={6}
        lg={4}
      >
        <Card>
          <CardHeader className={classes.headerColor} title='Waldo' />
          <CardContent>
            <Typography>- Waldo City Hall</Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid
        className={classes.smallPaddingOff}
        item
        xs={12}
        sm={6}
        md={6}
        lg={4}
      >
        <Card>
          <CardHeader className={classes.headerColor} title='La Crosse' />
          <CardContent>
            <Typography>- La Crosse Town Hall</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid
        className={classes.smallPaddingOff}
        item
        xs={12}
        sm={6}
        md={6}
        lg={4}
      >
        <Card>
          <CardHeader className={classes.headerColor} title='Alachua' />
          <CardContent>
            <Typography>- Alachua City Hall</Typography>
            <Typography>- Alachua County Library – Alachua Branch</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid
        className={classes.smallPaddingOff}
        item
        xs={12}
        sm={6}
        md={6}
        lg={4}
      >
        <Card>
          <CardHeader className={classes.headerColor} title='High Springs' />
          <CardContent>
            <Typography>- High Springs City Hall</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid
        className={classes.smallPaddingOff}
        item
        xs={12}
        sm={6}
        md={6}
        lg={4}
      >
        <Card>
          <CardHeader className={classes.headerColor} title='Newberry' />
          <CardContent>
            <Typography>- Easton Newberry Archery Center</Typography>
            <Typography>- Newberry City Hall</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid
        className={classes.smallPaddingOff}
        item
        xs={12}
        sm={6}
        md={6}
        lg={4}
      >
        <Card>
          <CardHeader className={classes.headerColor} title='Gainesville' />
          <CardContent>
            <Typography>- Alachua County Emergency Management</Typography>
            <Typography>- Alachua County Library Headquarters</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
