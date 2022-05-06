import { Typography } from '@mui/material';
import React from 'react';

import Appbar from '../components/Branding/Appbar';
import IncidentsLayout from '../components/Branding/Layouts/IncidentsLayout';
import ImportantLinksComponent from '../components/ImportantLinks/importantlinks';
export default function ImportantLinksPage() {
  return (
    <Appbar>
      <IncidentsLayout title='Find a Shelter'>
        <Typography>Shelter Content</Typography>
        <ImportantLinksComponent />
      </IncidentsLayout>
    </Appbar>
  );
}
