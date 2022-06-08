import React, { useContext } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ACRButton from '../ACRButton';
import { incidentsContext } from '../../contexts/IncidentsContext';

export default function ReportDamage({ incidentIndex }) {
  const { incidents } = useContext(incidentsContext);

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
          <Typography variant='h4' pb={4}>
            See Damage? Report it!{' '}
          </Typography>
          <ACRButton
            text='Report Damage'
            link={incidents[incidentIndex].damageReportURL} //{`/incidents/${incidents[incidentIndex].urlName}/reportdamages`}
            size='jumbo'
          />
        </Grid>
      </Grid>
    </div>
  );
}
