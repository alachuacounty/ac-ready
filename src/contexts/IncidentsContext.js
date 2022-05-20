/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import moment from 'moment';
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
      if (result && result.data && result.data[0].length) {
        const tempAdvisories = [];
        result.data[0].forEach((advisory) => {
          const tempAdvisory = {};
          tempAdvisory.id = advisory.MondayID;
          tempAdvisory.updateContent = advisory.UpdateBody;
          tempAdvisory.publishDate = advisory.AdvisoryDateTime;
          tempAdvisory.updateDate = advisory.UpdateChangeDate;
          tempAdvisory.day = moment(advisory.AdvisoryDateTime).format('ddd');
          tempAdvisory.date = moment(advisory.AdvisoryDateTime).format(
            'MMM Do'
          );
          tempAdvisory.year = moment(advisory.AdvisoryDateTime).format('YYYY');
          tempAdvisory.time = moment(advisory.AdvisoryDateTime).format(
            'H:mm A'
          );
          tempAdvisory.title = advisory.AdvisoryName;
          tempAdvisory.desc = advisory.Blurb;
          tempAdvisory.link = `/incidents/elsa/advisories/${advisory.MondayID}`;
          tempAdvisories.push(tempAdvisory);
        });
        return tempAdvisories;
      } else return [];
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
