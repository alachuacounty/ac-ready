/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';

import { titleContext } from '../contexts/TitleContext';
import Hero from '../components/Home/Hero';
import Notify from '../components/Home/Notify';
import Prepare from '../components/Home/Prepare';
import Sticker from '../components/Home/Sticker';
import Modal from '../components/Modal';

export default function Home() {
  const { updatePageTitle, updatePageHeading } = useContext(titleContext);

  useEffect(() => {
    updatePageTitle('Alachua County Ready | Home');
    updatePageHeading('Home');
  }, []);

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    handleOpen();
  }, []);

  return (
    <>
      <Hero />
      <Notify />
      <Prepare />
      <Sticker />
      <Modal handleClose={handleClose} open={open} />
    </>
  );
}
