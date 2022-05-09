import React, { createContext, useEffect, useState } from 'react';

export const incidentsContext = createContext([]);

export default function IncidentsContext({ children }) {
  const [incidents, setIncidents] = useState([]);

  const updateIncidents = (incidentsArray) => {
    setIncidents(incidentsArray);
  };

  // Yet to Implement fetch incidents from monday board
  useEffect(() => {
    updateIncidents([
      {
        name: 'Hurricane Elsa',
        urlName: 'hurricaneElsa',
        eventType: 'Hurricane',
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
  }, []);

  return (
    <incidentsContext.Provider value={incidents}>
      {children}
    </incidentsContext.Provider>
  );
}
