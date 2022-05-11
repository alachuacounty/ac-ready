import React, { useContext, useEffect } from 'react';

import { titleContext } from '../contexts/TitleContext';
import { breadCrumbsContext } from '../contexts/BreadCrumbsContext';
import NHCMaps from '../components/IncidentHome/NHCMaps';
import PressItem from '../components/PressReleases/PressItem';
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
        <ReportDamage />
        <PressItem />
        <NHCMaps />
        <ACRButton text="Read More" link="/" inverted={false} />
      </div>
    </>
  );
}
