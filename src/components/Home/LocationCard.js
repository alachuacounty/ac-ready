import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

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

export default function LocationCard({
  key = 1,
  title = 'Title',
  content = ['Title'],
}) {
  const classes = useStyles();

  return (
    <Grid className={classes.smallPaddingOff} item xs={12} sm={6} md={6} lg={4}>
      <Card key={key}>
        <CardHeader className={classes.headerColor} title={title} />
        <CardContent>
          {content.length !== 0 &&
            content.map((text) => <Typography>- {text}</Typography>)}
        </CardContent>
      </Card>
    </Grid>
  );
}
