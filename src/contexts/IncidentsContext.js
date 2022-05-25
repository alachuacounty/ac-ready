/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import moment from 'moment';
import React, { createContext, useEffect, useState, useLayoutEffect } from 'react';

export const incidentsContext = createContext([]);

export default function IncidentsContext({ children }) {
  const [incidents, setIncidents] = useState([]);

  const updateIncidents = (incidentsArray) => {
    setIncidents(incidentsArray);
  };

  const getAdvisoryData = async (incidentID, incidentURL) => {
    try {
      const result = await axios.get(
        `https://ads86.alachuacounty.us/incidents-api/advisory/active` + `/` + incidentID
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
          tempAdvisory.date = moment(advisory.AdvisoryDateTime).format('MMM D');
          tempAdvisory.year = moment(advisory.AdvisoryDateTime).format('YYYY');
          tempAdvisory.time = moment(advisory.AdvisoryDateTime).format(
            'H:mm A'
          );
          tempAdvisory.title = advisory.AdvisoryName;
          tempAdvisory.desc = advisory.Blurb;
          tempAdvisory.link = `/incidents/` + incidentURL + `/advisories/${advisory.MondayID}`;
          tempAdvisories.push(tempAdvisory);
        });
        return tempAdvisories;
      } else return [];
    } catch (error) {
      console.log({ error });
    }
  };


  const getIncidentPages = async (incidentID, incidentURL) => {

    try {
      const result = await axios.get(
        `https://ads86.alachuacounty.us/incidents-api/incidents/activepages/` + incidentID
      );
      if (result && result.data && result.data[0].length) {
        const IncidentPages = [];
        IncidentPages.push({ title: "Home", link: "/incidents/" + incidentURL });
        const prepareSubmenu = [];
        const updatesSubmenu = [];

        result.data[0].forEach((page) => {

          const incidentPage = {};
          incidentPage.boardID = page.BoardID;
          incidentPage.name = page.PageName;
          incidentPage.title = page.PageName;
          incidentPage.link = "/incidents/" + incidentURL + "/" + page.PageName;

          if (page.Category.toLowerCase() === "do not group") {
            IncidentPages.push(incidentPage);
          } else if (page.Category.toLowerCase() === "prepare") {
            prepareSubmenu.push(incidentPage);
          }
          else if (page.Category.toLowerCase() === "updates") {
            updatesSubmenu.push(incidentPage);
          }

        });

        if (prepareSubmenu.length !== 0) {
          IncidentPages.push({ title: "Prepare", submenu: prepareSubmenu });
        }
        if (updatesSubmenu.length !== 0) {
          IncidentPages.push({ title: "Updates", submenu: updatesSubmenu });
        }

        return IncidentPages;
      }
      else {
        return [];
      }
    } catch (error) {
      console.log({ error });
    }
  };


  const getActiveIncidents = async () => {
    try {
      const result = await axios.get(
        `https://ads86.alachuacounty.us/incidents-api/incidents/active`
      );
      if (result && result.data && result.data[0].length) {

        const activeIncidents = [];

        for (const incident of result.data[0]) {
          const incidentData = {};
          incidentData.incidentID = incident.MondayID;
          incidentData.name = incident.IncidentName;
          incidentData.urlName = incident.IncidentName.replace(" ", '').toLowerCase();
          incidentData.damageReportURL = incident.DamageReportURL;
          incidentData.imageLink1 = incident.Link1;
          incidentData.imageLink2 = incident.Link2;
          incidentData.pages = await getIncidentPages(incidentData.incidentID, incidentData.urlName);
          incidentData.advisories = await getAdvisoryData(incidentData.incidentID, incidentData.urlName);
          activeIncidents.push(incidentData);

        }
        return activeIncidents;
      } else {
        return [];
      }
    } catch (error) {
      console.log({ error });
    }
  }

  const initialLoad = async () => {

    const activeIncidents = await getActiveIncidents();
    //console.log(activeIncidents);

    updateIncidents(activeIncidents);
  };


  useLayoutEffect(() => {
    initialLoad();
  }, []);

  return (
    <incidentsContext.Provider value={incidents}>
      {children}
    </incidentsContext.Provider>
  );
}
