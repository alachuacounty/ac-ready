import { Typography } from '@mui/material';
import React from 'react';

import IncidentLayout from '../components/Branding/IncidentLayout';
import ShelterMapandTable from '../components/Shelter/sheltermapandtable';

export default function Shelter() {
  return (
    <IncidentLayout title='Find a Shelter'>
      <Typography>Shelter Content</Typography>
      {/* <ShelterMapandTable /> */}
    </IncidentLayout>
  );
}
