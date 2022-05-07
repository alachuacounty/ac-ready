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
  index,
  title = 'Title',
  content = ['Title'],
}) {
  const classes = useStyles();

  return (
    <Grid
      key={index}
      className={classes.smallPaddingOff}
      item
      xs={12}
      sm={6}
      md={6}
      lg={4}
    >
      <Card key={index}>
        <CardHeader className={classes.headerColor} title={title} />
        <CardContent>
          {content.length !== 0 &&
            content.map((text, count) => (
              <Typography key={count}>- {text}</Typography>
            ))}
        </CardContent>
      </Card>
    </Grid>
  );
}
