import React, { useContext, useEffect } from 'react';

import { titleContext } from '../contexts/TitleContext';
import { breadCrumbsContext } from '../contexts/BreadCrumbsContext';
import NHCMaps from '../components/IncidentHome/NHCMaps';
import DateCircle from '../components/PressReleases/DateCircle';
import ACRButton from '../components/ACRButton';
import ReportDamage from '../components/IncidentHome/ReportDamage';

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
        <DateCircle />
        <ReportDamage />
        <DateCircle day='Fri' date='Jul 21' year='2022' />
        <NHCMaps />
        <ACRButton />
      </div>
    </>
  );
}
