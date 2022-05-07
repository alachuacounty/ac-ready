import React, { useContext, useEffect } from 'react';

import { titleContext } from '../contexts/TitleContext';

export default function Prepare() {
  const { pageTitle, updatePageTitle } = useContext(titleContext);

  useEffect(() => {
    updatePageTitle('Prepare');
  }, []);

  return <div>{pageTitle}</div>;
}
