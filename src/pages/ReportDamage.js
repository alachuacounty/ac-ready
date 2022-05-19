/* eslint-disable react-hooks/exhaustive-deps */
import { Grid } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import IncidentLayout from '../components/Branding/IncidentLayout';
import { titleContext } from '../contexts/TitleContext';

export default function ReportDamage() {
  const { updatePageTitle, updatePageHeading } = useContext(titleContext);

  useEffect(() => {
    updatePageTitle('Elsa | Report Damage');
    updatePageHeading('Hurricane Elsa');
  }, []);

  return (
    <IncidentLayout title='Report Damage'>
      <Grid container>
        <Grid item xs={12}>
          <iframe
            title='reportDamageForm'
            src='https://forms.monday.com/forms/embed/a1e0d86458aaef03fe1b6fb970e30d41?r=use1'
            width='100%'
            height='900'
            style={{
              border: 0,
              boxShadow: '5px 5px 56px 0px rgba(0,0,0,0.25)',
            }}
          ></iframe>
        </Grid>
      </Grid>
    </IncidentLayout>
  );
}
