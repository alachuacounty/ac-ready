/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import moment from 'moment';
import React, { createContext, useEffect, useState } from 'react';

import IncidentHome from '../pages/IncidentHome';
import ReportDamage from '../pages/ReportDamage';
import RoadClosures from '../pages/RoadClosures';
import Shelter from '../pages/Shelter';
import SandbagPage from '../pages/Sandbag';
import EmergencyOrder from '../pages/EmergencyOrder';
import Advisories from '../pages/Advisories';
import Advisory from '../pages/Advisory';
import Faq from '../pages/Faq';
import ImportantLinksPage from '../pages/ImportantLinks';

export const incidentsContext = createContext([]);

export default function IncidentsContext({ children }) {
  const [incidents, setIncidents] = useState([]);

  let incidentsRoutes = [];

  const updateIncidents = (incidentsArray) => {
    setIncidents(incidentsArray);
    console.log(incidentsArray);
  };

  const getAdvisoryData = async (incidentID, incidentURL) => {
    try {
      const result = await axios.get(
        `https://ads86.alachuacounty.us/incidents-api/advisory/active` +
          `/` +
          incidentID
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
          tempAdvisory.link =
            `/incidents/` + incidentURL + `/advisories/${advisory.MondayID}`;
          tempAdvisories.push(tempAdvisory);
        });
        return tempAdvisories;
      } else return [];
    } catch (error) {
      console.log({ error });
    }
  };

  const getIncidentPages = async (
    incidentID,
    incidentURL,
    index,
    showShelters,
    showSandbags,
    showRoadClosures
  ) => {
    try {
      const result = await axios.get(
        `https://ads86.alachuacounty.us/incidents-api/incidents/activepages/` +
          incidentID
      );

      const IncidentPages = [];

      const prepareSubmenu = [];
      const updatesSubmenu = [];

      IncidentPages.push({
        title: 'Home',
        link: '/incidents/' + incidentURL,
      });

      incidentsRoutes.push(
        {
          element: <IncidentHome incidentIndex={index} />,
          path: `/incidents/${incidentURL}`,
        },
        {
          element: <ReportDamage incidentIndex={index} />,
          path: `/incidents/${incidentURL}/reportdamages`,
        },
        {
          element: <EmergencyOrder incidentIndex={index} />,
          path: `/incidents/${incidentURL}/emergencyorders`,
        }
      );

      if (showShelters && showShelters === 'Yes') {
        incidentsRoutes.push({
          element: <Shelter incidentIndex={index} />,
          path: `/incidents/${incidentURL}/shelters`,
        });
        prepareSubmenu.push({
          name: 'Find Shelters',
          title: 'Shelters',
          link: `/incidents/${incidentURL}/shelters`,
        });
      }

      if (showSandbags && showSandbags === 'Yes') {
        incidentsRoutes.push({
          element: <SandbagPage incidentIndex={index} />,
          path: `/incidents/${incidentURL}/sandbags`,
        });
        prepareSubmenu.push({
          name: 'Sandbag Locations',
          title: 'Sandbags',
          link: `/incidents/${incidentURL}/sandbags`,
        });
      }

      if (showRoadClosures && showRoadClosures === 'Yes') {
        incidentsRoutes.push({
          element: <RoadClosures incidentIndex={index} />,
          path: `/incidents/${incidentURL}/roadclosures`,
        });
        updatesSubmenu.push({
          name: 'Road Closures',
          title: 'Road Closures',
          link: `/incidents/${incidentURL}/roadclosures`,
        });
      }

      let standalonePages = null;

      if (result && result.data && result.data[0].length) {
        result.data[0].forEach((page) => {
          const incidentPage = {};
          incidentPage.boardID = page.BoardID;
          incidentPage.name = page.PageName;
          incidentPage.title = page.PageName;
          incidentPage.link =
            '/incidents/' +
            incidentURL +
            '/' +
            page.PageName.replace(/\s/g, '').toLowerCase();

          if (page.PageName === 'Advisories') {
            incidentsRoutes.push({
              element: <Advisories incidentIndex={index} />,
              path: `/incidents/${incidentURL}/${page.PageName.replace(
                /\s/g,
                ''
              ).toLowerCase()}`,
            });
            incidentsRoutes.push({
              element: <Advisory incidentIndex={index} />,
              path: `/incidents/${incidentURL}/${page.PageName.replace(
                /\s/g,
                ''
              ).toLowerCase()}/:UpdateID`,
            });
          }

          if (page.PageName === 'Important Links')
            incidentsRoutes.push({
              element: <ImportantLinksPage incidentIndex={index} />,
              path: `/incidents/${incidentURL}/${page.PageName.replace(
                /\s/g,
                ''
              ).toLowerCase()}`,
            });

          if (page.PageName === 'FAQ')
            incidentsRoutes.push({
              element: <Faq incidentIndex={index} />,
              path: `/incidents/${incidentURL}/${page.PageName.replace(
                /\s/g,
                ''
              ).toLowerCase()}`,
            });

          if (page.Category.toLowerCase() === 'do not group') {
            standalonePages = incidentPage;
          } else if (page.Category.toLowerCase() === 'prepare') {
            prepareSubmenu.push(incidentPage);
          } else if (page.Category.toLowerCase() === 'updates') {
            updatesSubmenu.push(incidentPage);
          }
        });
      }

      if (prepareSubmenu.length !== 0)
        IncidentPages.push({ title: 'Prepare', submenu: prepareSubmenu });

      if (updatesSubmenu.length !== 0)
        IncidentPages.push({ title: 'Updates', submenu: updatesSubmenu });

      IncidentPages.push({
        boardID: 100,
        name: 'Emergency Orders',
        title: 'Emergency Orders',
        link: `/incidents/${incidentURL}/emergencyorders`,
      });

      if (standalonePages) IncidentPages.push(standalonePages);

      return IncidentPages;
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

        for (const [index, incident] of result.data[0].entries()) {
          const incidentData = {};
          incidentData.incidentID = incident.MondayID;
          incidentData.name = incident.IncidentName;
          incidentData.urlName = incident.IncidentName.replace(
            /\s/g,
            ''
          ).toLowerCase();

          incidentData.damageReportURL = incident.DamageReportURL;
          incidentData.imageLink1 = incident.Link1;
          incidentData.imageLink2 = incident.Link2;
          incidentData.pages = await getIncidentPages(
            incidentData.incidentID,
            incidentData.urlName,
            index,
            incident.ShowSheltersPage,
            incident.ShowSandbagsPage,
            incident.ShowRoadClosuresPage
          );
          incidentData.advisories = await getAdvisoryData(
            incidentData.incidentID,
            incidentData.urlName
          );
          incidentData.routes = incidentsRoutes;
          incidentData.showShelters = incident.ShowSheltersPage;
          incidentData.showSandbags = incident.ShowSandbagsPage;
          incidentData.showRoadClosures = incident.ShowRoadClosuresPage;
          activeIncidents.push(incidentData);
        }
        return activeIncidents;
      } else {
        return [];
      }
    } catch (error) {
      console.log({ error });
    }
  };

  const initialLoad = async () => {
    const activeIncidents = await getActiveIncidents();

    updateIncidents(activeIncidents);
  };

  useEffect(() => {
    initialLoad();
  }, []);

  return (
    <incidentsContext.Provider value={incidents}>
      {children}
    </incidentsContext.Provider>
  );
}
