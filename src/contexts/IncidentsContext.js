/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const incidentsContext = createContext([]);

export default function IncidentsContext({ children }) {
  const [incidents, setIncidents] = useState([]);

  const updateIncidents = (incidentsArray) => {
    setIncidents(incidentsArray);
  };

  const getAdvisoryData = async () => {
    try {
      const result = await axios.get(
        `https://ads86.alachuacounty.us/incidents-api/advisory/active`
      );
      return result.data[0];
    } catch (error) {
      console.log({ error });
    }
  };

  const initialLoad = async () => {
    const advisoryData = await getAdvisoryData();
    updateIncidents([
      {
        name: 'Hurricane Elsa',
        urlName: 'elsa',
        eventType: 'Hurricane',
        advisories: advisoryData,
        pages: [
          { id: 680683111, name: 'Frequently Asked Questions', position: 6 },
          { id: 599761016, name: 'Sandbags Locations', position: 2 },
          { id: 599761016, name: 'Shelter Locations', position: 1 },
          { id: 599761016, name: 'Important Links', position: 5 },
          { id: 599761016, name: 'Recent Advisories', position: 3 },
          { id: 599761016, name: 'Emergency Orders', position: 4 },
        ],
      },
    ]);
  };

  // Yet to Implement fetch incidents from monday board
  useEffect(() => {
    initialLoad();
  }, []);

  return (
    <incidentsContext.Provider value={incidents}>
      {children}
    </incidentsContext.Provider>
  );
}
