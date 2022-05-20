import React, { useContext, useEffect } from 'react';

import IncidentLayout from '../components/Branding/IncidentLayout';
import AdvisoriesList from '../components/Advisories/AdvisoriesList';
import { breadCrumbsContext } from '../contexts/BreadCrumbsContext';
import { titleContext } from '../contexts/TitleContext';

export default function Advisories() {

  const { pushBreadCrumbs } = useContext(breadCrumbsContext);
  const { updatePageTitle, updatePageHeading } = useContext(titleContext);

  useEffect(() => {
    updatePageTitle('Hurricane Elsa | Latest Updates');
    updatePageHeading('Hurricane Elsa');
    pushBreadCrumbs({ crumb: 'Hurricane Elsa', link: '/incidents/elsa/' });
  }, []);

  return (
    <IncidentLayout title='Latest Updates'>
      <AdvisoriesList />
    </IncidentLayout>
  );
}
