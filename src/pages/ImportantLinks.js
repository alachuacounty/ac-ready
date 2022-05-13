import React, { useContext, useEffect } from 'react';
import { Typography } from '@mui/material';

import IncidentLayout from '../components/Branding/IncidentLayout';
import ImportantLinksComponent from '../components/ImportantLinks/importantlinks';
import { breadCrumbsContext } from '../contexts/BreadCrumbsContext';

export default function ImportantLinksPage() {
  const { breadCrumbs, pushBreadCrumbs } = useContext(breadCrumbsContext);

  useEffect(() => {
    pushBreadCrumbs({ crumb: 'Important Links', link: '/importantlinks' });
  }, []);

  return (
    <IncidentLayout title='Find a Shelter'>
      <Typography>Shelter Content</Typography>
      <ImportantLinksComponent />
    </IncidentLayout>
  );
}
