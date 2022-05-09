import React, { useContext, useEffect } from 'react';
import { titleContext } from '../contexts/TitleContext';

export default function Incident({ name = 'Incident Name', pages }) {
  const { updatePageTitle, updatePageHeading } = useContext(titleContext);

  useEffect(() => {
    updatePageTitle(`Alachua County Ready | ${name}`);
    updatePageHeading(name);
  }, []);

  return <div>{name}</div>;
}
