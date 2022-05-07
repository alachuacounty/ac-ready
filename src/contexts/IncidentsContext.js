import React, { createContext, useEffect, useState } from 'react';

export const incidentContext = createContext([]);

export default function IncidentsContext({ children }) {
  const [incidents, setIncidents] = useState([]);

  const updateIncidents = (incidentsArray) => {
    setIncidents(incidentsArray);
  };

  // Implement fetch incidents
  useEffect(() => {
    updateIncidents([
      {
        name: 'Hurricane Elsa',
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
    <incidentContext.Provider value={incidents}>
      {children}
    </incidentContext.Provider>
  );
}
