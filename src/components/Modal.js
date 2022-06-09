import { Close as CloseIcon } from '@mui/icons-material';
import { Dialog, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import ACRButton from './ACRButton';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  link: {
    color: theme.palette.middleblue.main,
  },
}));

export default function Modal({ handleClose, open, incidents }) {
  const classes = useStyles();
  const addConjuction = (index) => {
    var conjuction =
      index === incidents.length - 2
        ? ' and '
        : index !== incidents.length - 1
          ? ' , '
          : ' ';
    return conjuction;
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <Grid
        container
        sx={{
          pt: 0,
          width: '100%',
          height: 500,
          border: '9px solid #EFD06A',
        }}
      >
        <Grid
          item
          xs={12}
          pr={4}
          pt={2}
          sx={{ display: 'flex', justifyContent: 'flex-end' }}
        >
          <CloseIcon
            cursor='pointer'
            sizeLarge
            sx={{ ':hover': { background: '#DBDBDB' } }}
            onClick={handleClose}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: 'flex',
            justifyContent: 'center',

            textAlign: 'center',

            textTransform: 'uppercase',
          }}
        >
          <Grid item mb={-3}>
            <Typography variant='h4' fontWeight='bold'>
              Emergency Incident
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ display: 'flex', alignContent: 'flex-start' }}>
          <Typography variant='h6' px={6} textAlign='center' fontWeight='bold'>
            Learn more about how{' '}
            {incidents.length > 0 &&
              incidents.map((incident, index) => (
                <>
                  <Link to={`/incidents/${incident.urlName}`} className={classes.link}>
                    {incident.name}
                  </Link>
                  {addConjuction(index)}
                </>
              ))}
            is Impacting Alachua County and how you can prepare.
          </Typography>
        </Grid>
        {incidents.length > 0 &&
          incidents.map((incident) => (
            <Grid item xs={12} px={{ xs: 1, sm: 10 }}>
              <ACRButton
                text={incident.name}
                size='jumbo'
                link={`/incidents/${incident.urlName}`}
              />
            </Grid>
          ))}
      </Grid>
    </Dialog>
  );
}
