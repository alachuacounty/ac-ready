import React, { useContext, useEffect } from 'react';

import { titleContext } from '../contexts/TitleContext';

export default function Incidents() {
  const { updatePageTitle, updatePageHeading } = useContext(titleContext);

  useEffect(() => {
    updatePageTitle('Alachua County Ready | Incidents');
    updatePageHeading('Incidents');
  }, []);

  return <div>Incidents</div>;
}
