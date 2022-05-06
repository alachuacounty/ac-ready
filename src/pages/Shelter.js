import { Typography } from '@mui/material';
import React from 'react';


import Appbar from '../components/Branding/Appbar';
import IncidentsLayout from '../components/Branding/Layouts/IncidentsLayout';
import ShelterMapandTable from '../components/Shelter/sheltermapandtable';

export default function Shelter() {
  return (
    <Appbar>
      <IncidentsLayout title='Find a Shelter'>
        <Typography>Shelter Content</Typography>
        <ShelterMapandTable />

      </IncidentsLayout>
    </Appbar>
  );
}
