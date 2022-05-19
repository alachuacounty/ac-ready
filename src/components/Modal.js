import { Close as CloseIcon } from '@mui/icons-material';
import { Dialog, Grid, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ACRButton from './ACRButton';

export default function Modal({ handleClose, open }) {
  const navigate = useNavigate();
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
            Learn more about how Hurricane Elsa is Impacting Alachua County and
            how you can prepare.
          </Typography>
        </Grid>
        <Grid item xs={12} px={10}>
          <ACRButton
            text='Hurricane Elsa'
            size='jumbo'
            onClick={() => {
              handleClose();
              navigate('/incidents/elsa');
            }}
          />
        </Grid>
      </Grid>
    </Dialog>
  );
}
