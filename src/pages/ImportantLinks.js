import React, { useContext, useEffect } from 'react';
import { Typography } from '@mui/material';

import IncidentsLayout from '../components/Branding/IncidentsLayout';
import ImportantLinksComponent from '../components/ImportantLinks/importantlinks';
import { breadCrumbsContext } from '../contexts/BreadCrumbsContext';

export default function ImportantLinksPage() {

  const { breadCrumbs, pushBreadCrumbs } = useContext(breadCrumbsContext);

  useEffect(() => {

    pushBreadCrumbs({ crumb: 'Important Links', link: '/importantlinks' });
  }, []);

  return (
    <IncidentsLayout title='Find a Shelter'>
      <Typography>Shelter Content</Typography>
      <ImportantLinksComponent />
    </IncidentsLayout>
  );
}
