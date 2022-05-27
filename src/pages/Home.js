/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';

import { incidentsContext } from '../contexts/IncidentsContext';
import { titleContext } from '../contexts/TitleContext';
import Hero from '../components/Home/Hero';
import Notify from '../components/Home/Notify';
import Prepare from '../components/Home/Prepare';
import Sticker from '../components/Home/Sticker';
import Modal from '../components/Modal';

export default function Home() {
  const incidents = useContext(incidentsContext);
  const { updatePageTitle, updatePageHeading } = useContext(titleContext);
  const [currentIncidents, setCurrentIncidents] = useState([]);

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
    console.log('Home.js Console log');
    if (incidents.length > 0) {
      setCurrentIncidents(incidents);
      handleOpen();
    }
  }, [incidents]);

  return (
    <>
      <Hero />
      <Notify />
      <Prepare />
      <Sticker />
      <Modal
        handleClose={handleClose}
        open={open}
        incidents={currentIncidents}
      />
    </>
  );
}
