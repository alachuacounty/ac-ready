import React, { useContext, useEffect } from 'react';

import { titleContext } from '../contexts/TitleContext';
import Hero from '../components/Home/Hero';
import Notify from '../components/Home/Notify';
import Prepare from '../components/Home/Prepare';
import Sticker from '../components/Home/Sticker';

export default function Home() {
  const { updatePageTitle } = useContext(titleContext);

  useEffect(() => {
    updatePageTitle('Alachua County Ready | Home');
  }, []);

  return (
    <>
      <Hero />
      <Notify />
      <Prepare />
      <Sticker />
    </>
  );
}
