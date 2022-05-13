import { Typography } from '@mui/material';
import React from 'react';

import IncidentLayout from '../components/Branding/IncidentLayout';
import AdvisoryTable from '../components/EmergencyOrder/emergency';
export default function EmergencyOrderPage() {
  return (
    <IncidentLayout title='Find a Shelter'>
      <Typography>Shelter Content</Typography>
      <AdvisoryTable />
    </IncidentLayout>
  );
}
