import React, { useContext, useEffect } from 'react';

import { titleContext } from '../contexts/TitleContext';
import { breadCrumbsContext } from '../contexts/BreadCrumbsContext';

export default function Prepare() {
  const { pageTitle, updatePageTitle } = useContext(titleContext);
  const { breadCrumbs, pushBreadCrumbs } = useContext(breadCrumbsContext);

  useEffect(() => {
    updatePageTitle('Prepare');
    console.log('crumbs' + breadCrumbs);
    pushBreadCrumbs({ crumb: 'Prepare', link: '/prepare' });
  }, []);

  return (
    <>
      <div>{pageTitle}</div>
    </>
  );
}
