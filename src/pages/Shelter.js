import { Typography } from '@mui/material';
import React from 'react';

import IncidentsLayout from '../components/Branding/Layouts/IncidentsLayout';
import ShelterMapandTable from '../components/Shelter/sheltermapandtable';

export default function Shelter() {
  return (
    <IncidentsLayout title='Find a Shelter'>
      <Typography>Shelter Content</Typography>
      <ShelterMapandTable />
    </IncidentsLayout>
  );
}
