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

  const getIncidentPages = async (incidentID, incidentURL) => {
    try {
      const result = await axios.get(
        `https://ads86.alachuacounty.us/incidents-api/incidents/activepages/` +
          incidentID
      );
      if (result && result.data && result.data[0].length) {
        const IncidentPages = [];
        IncidentPages.push({
          title: 'Home',
          link: '/incidents/' + incidentURL,
        });

        incidentsRoutes.push(
          {
            element: <IncidentHome />,
            path: `/incidents/${incidentURL}`,
          },
          {
            element: <Shelter />,
            path: `/incidents/${incidentURL}/shelters`,
          },
          {
            element: <SandbagPage />,
            path: `/incidents/${incidentURL}/sandbags`,
          },
          {
            element: <RoadClosures />,
            path: `/incidents/${incidentURL}/roadclosures`,
          },
          {
            element: <ReportDamage />,
            path: `/incidents/${incidentURL}/reportdamages`,
          },
          {
            element: <EmergencyOrder />,
            path: `/incidents/${incidentURL}/emergencyorders`,
          }
        );

        let standalonePages = null;
        const prepareSubmenu = [
          {
            boardID: 1,
            name: 'Find Shelters',
            title: 'Shelters',
            link: `/incidents/${incidentURL}/shelters`,
          },
          {
            boardID: 2,
            name: 'Sandbag Locations',
            title: 'Sandbags',
            link: `/incidents/${incidentURL}/sandbags`,
          },
        ];
        const updatesSubmenu = [
          {
            boardID: 2,
            name: 'Road Closures',
            title: 'Road Closures',
            link: `/incidents/${incidentURL}/roadclosures`,
          },
        ];

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
              element: <Advisories />,
              path: `/incidents/${incidentURL}/${page.PageName.replace(
                /\s/g,
                ''
              ).toLowerCase()}`,
            });
            incidentsRoutes.push({
              element: <Advisory />,
              path: `/incidents/${incidentURL}/${page.PageName.replace(
                /\s/g,
                ''
              ).toLowerCase()}/:UpdateID`,
            });
          }

          if (page.PageName === 'Important Links')
            incidentsRoutes.push({
              element: <ImportantLinksPage />,
              path: `/incidents/${incidentURL}/${page.PageName.replace(
                /\s/g,
                ''
              ).toLowerCase()}`,
            });

          if (page.PageName === 'FAQ')
            incidentsRoutes.push({
              element: <Faq />,
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
      } else {
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
          incidentData.urlName = incident.IncidentName.replace(
            /\s/g,
            ''
          ).toLowerCase();

          incidentData.damageReportURL = incident.DamageReportURL;
          incidentData.imageLink1 = incident.Link1;
          incidentData.imageLink2 = incident.Link2;
          incidentData.pages = await getIncidentPages(
            incidentData.incidentID,
            incidentData.urlName
          );
          incidentData.advisories = await getAdvisoryData(
            incidentData.incidentID,
            incidentData.urlName
          );
          incidentData.routes = incidentsRoutes;
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
