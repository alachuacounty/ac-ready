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
import LatestUpdates from '../pages/LatestUpdates';
import Update from '../pages/Update';
import Faq from '../pages/Faq';
import ImportantLinksPage from '../pages/ImportantLinks';

export const incidentsContext = createContext([]);

export default function IncidentsContext({ children }) {
  const [incidents, setIncidents] = useState([]);
  const [loading, setLoading] = useState(true);

  let incidentsRoutes = [];

  const updateIncidents = (incidentsArray) => {
    setIncidents(incidentsArray);
    setLoading(false);
    console.log(incidentsArray);
  };

  const getUpdateData = async (incidentID, incidentURL) => {
    try {
      const result = await axios.get(`https://api.alachuacounty.us/incidents-api/latestupdates/active` + `/` + incidentID);
      if (result && result.data && result.data[0].length) {
        const tempUpdates = [];
        result.data[0].forEach((update) => {
          const tempUpdate = {};
          tempUpdate.id = update.MondayID;
          tempUpdate.updateContent = update.UpdateBody;
          tempUpdate.publishDate = update.UpdateDateTime;
          tempUpdate.updateDate = update.UpdateChangeDate;
          tempUpdate.day = moment(update.UpdateDateTime).format('ddd');
          tempUpdate.date = moment(update.UpdateDateTime).format('MMM D');
          tempUpdate.year = moment(update.UpdateDateTime).format('YYYY');
          tempUpdate.time = moment(update.UpdateDateTime).format('H:mm A');
          tempUpdate.title = update.UpdateName;
          tempUpdate.desc = update.Blurb;
          tempUpdate.link = `/incidents/` + incidentURL + `/latestupdates/${update.MondayID}`;
          tempUpdates.push(tempUpdate);
        });
        return tempUpdates;
      } else return [];
    } catch (error) {
      console.log({ error });
      setLoading(false);
      return [];
    }
  };

  const getIncidentPages = async (incidentID, incidentURL, index, showShelters, showSandbags, showRoadClosures) => {
    try {
      const result = await axios.get(`https://api.alachuacounty.us/incidents-api/incidents/activepages/` + incidentID);

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
          incidentPage.link = '/incidents/' + incidentURL + '/' + page.PageName.replace(/\s/g, '').toLowerCase();

          if (page.PageName === 'Latest Updates') {
            incidentsRoutes.push({
              element: <LatestUpdates incidentIndex={index} />,
              path: `/incidents/${incidentURL}/${page.PageName.replace(/\s/g, '').toLowerCase()}`,
            });
            incidentsRoutes.push({
              element: <Update incidentIndex={index} />,
              path: `/incidents/${incidentURL}/${page.PageName.replace(/\s/g, '').toLowerCase()}/:UpdateID`,
            });
          }

          if (page.PageName === 'Important Links')
            incidentsRoutes.push({
              element: <ImportantLinksPage incidentIndex={index} />,
              path: `/incidents/${incidentURL}/${page.PageName.replace(/\s/g, '').toLowerCase()}`,
            });

          if (page.PageName === 'FAQ')
            incidentsRoutes.push({
              element: <Faq incidentIndex={index} />,
              path: `/incidents/${incidentURL}/${page.PageName.replace(/\s/g, '').toLowerCase()}`,
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

      if (prepareSubmenu.length !== 0) IncidentPages.push({ title: 'Prepare', submenu: prepareSubmenu });

      if (updatesSubmenu.length !== 0) IncidentPages.push({ title: 'Updates', submenu: updatesSubmenu });

      IncidentPages.push({
        boardID: 100,
        name: 'Emergency Orders',
        title: 'Emergency Orders',
        link: `/incidents/${incidentURL}/emergencyorders`,
      });

      if (standalonePages) IncidentPages.push(standalonePages);

      return IncidentPages;
    } catch (error) {
      setLoading(false);
      console.log({ error });
      return [];
    }
  };

  const getActiveIncidents = async () => {
    try {
      const result = await axios.get(`https://api.alachuacounty.us/incidents-api/incidents/active`);
      if (result && result.data && result.data[0].length) {
        const activeIncidents = [];

        for (const [index, incident] of result.data[0].entries()) {
          const incidentData = {};
          incidentData.incidentID = incident.MondayID;
          incidentData.name = incident.IncidentName;
          incidentData.urlName = incident.IncidentName.replace(/\s/g, '').toLowerCase();

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
          incidentData.updates = await getUpdateData(incidentData.incidentID, incidentData.urlName);
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
      setLoading(false);
      return [];
    }
  };

  const initialLoad = async () => {
    const activeIncidents = await getActiveIncidents();

    updateIncidents(activeIncidents);
  };

  useEffect(() => {
    initialLoad();
  }, []);

  return <incidentsContext.Provider value={{ incidents, loading }}>{children}</incidentsContext.Provider>;
}
