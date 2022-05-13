import { Typography } from '@mui/material';
import React from 'react';

import IncidentLayout from '../components/Branding/IncidentLayout';
import AdvisoriesList from '../components/Advisories/AdvisoriesList';

export default function Advisories() {
  return (
    <IncidentLayout title='Latest Updates'>
      <AdvisoriesList />
    </IncidentLayout>
  );
}
