import React, { useContext, useEffect } from 'react';

import { titleContext } from '../contexts/TitleContext';
import Appbar from '../components/Branding/Appbar';

export default function Home() {
  const { pageTitle, updatePageTitle } = useContext(titleContext);

  useEffect(() => {
    updatePageTitle('Home');
  }, []);

  return (
    <Appbar>
      <div>{pageTitle}</div>
    </Appbar>
  );
}
