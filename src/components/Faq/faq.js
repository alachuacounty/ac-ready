import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';

import SimpleTabs from '../Tabs';

var classes = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  question: {
    fontWeight: 'bold!important',
  },
}));

function FAQPage() {
  return (
    <div className='container'>
      <Container maxWidth='lg'>
        <Typography variant='h2'>Frequently Asked Questions</Typography>
        <Grid container spacing={3}>
          <Grid item xl={12} md={12} sm={12} xs={12}>
            <SimpleTabs />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default FAQPage;
