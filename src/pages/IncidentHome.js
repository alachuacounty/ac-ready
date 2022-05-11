import React, { useContext, useEffect } from 'react';

import { titleContext } from '../contexts/TitleContext';
import { breadCrumbsContext } from '../contexts/BreadCrumbsContext';
import NHCMaps from '../components/IncidentHome/NHCMaps';

export default function IncidentHome() {
  const { pageTitle, updatePageTitle } = useContext(titleContext);
  const { breadCrumbs, pushBreadCrumbs } = useContext(breadCrumbsContext);

  useEffect(() => {
    updatePageTitle('Hurricane Elsa | Home');
  }, []);

  return (
    <>
      <div>
        {pageTitle}
        <NHCMaps />
      </div>
    </>
  );
}
