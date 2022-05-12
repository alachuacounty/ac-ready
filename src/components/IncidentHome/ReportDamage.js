import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ACRButton from '../ACRButton';
export default function ReportDamage() {
  return (
    <div>
      <Grid
        container
        xs={12}
        alignSelf=''
        justifyContent='center'
        sx={{
          height: 200,
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          bgcolor: '#D0EDFC!important',
        }}
      >
        <Grid item justifySelf='center'>
          <Typography variant='h4'>See Damage? Report it! </Typography>
          <ACRButton text='Report' link='/' size="large" inverted={false} />
        </Grid>
      </Grid>
    </div>
  );
}
