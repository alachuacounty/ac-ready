import React, { useContext, useEffect } from 'react';

import { titleContext } from '../contexts/TitleContext';
import Appbar from '../components/Branding/Appbar';
import Navigation from '../components/Branding/Navigation';

export default function Home() {
  const { pageTitle, updatePageTitle } = useContext(titleContext);

  useEffect(() => {
    updatePageTitle('Home');
  }, []);

  return (
    <Appbar>
      <Navigation />
      <div>{pageTitle}</div>
    </Appbar>
  );
}
