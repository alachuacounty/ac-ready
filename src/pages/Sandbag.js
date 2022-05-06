import { Typography } from '@mui/material';
import React from 'react';
import EnhancedTable from '../components/Sandbags/sandbag';
import Appbar from '../components/Branding/Appbar';
import IncidentsLayout from '../components/Branding/Layouts/IncidentsLayout';

export default function Shelter() {
  return (
    <Appbar>
      <IncidentsLayout title='Find a Shelter'>
        <EnhancedTable />
      </IncidentsLayout>
    </Appbar>
  );
}
