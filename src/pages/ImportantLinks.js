/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Link,
  Typography,
} from '@mui/material';
import axios from 'axios';

import IncidentLayout from '../components/Branding/IncidentLayout';
import { breadCrumbsContext } from '../contexts/BreadCrumbsContext';
import { titleContext } from '../contexts/TitleContext';
import { ExpandMore } from '@mui/icons-material';
import { incidentsContext } from '../contexts/IncidentsContext';

export default function ImportantLinksPage({ incidentIndex }) {
  const { pushBreadCrumbs } = useContext(breadCrumbsContext);
  const { updatePageTitle, updatePageHeading } = useContext(titleContext);
  const { incidents } = useContext(incidentsContext);
  const [importantLinks, setImportantLinks] = useState([]);

  const getImportantLinks = async () => {
    try {
      const result = await axios(
        `https://ads86.alachuacounty.us/incidents-api/importantlinks/active/${incidents[incidentIndex].incidentID}`
      );

      if (result.data && result.data[0].length) {
        const categorizedLinks = {};

        result.data[0].forEach((link) => {
          if (!categorizedLinks[link.Category])
            categorizedLinks[link.Category] = [link];
          else {
            const tempArrayforExistingLinks = categorizedLinks[link.Category];
            tempArrayforExistingLinks.push(link);
            categorizedLinks[link.Category] = tempArrayforExistingLinks;
          }
        });
        setImportantLinks(categorizedLinks);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getImportantLinks();
    pushBreadCrumbs({
      crumb: incidents[incidentIndex].name,
      link: `/incidents/${incidents[incidentIndex].urlName}/`,
    });
    updatePageTitle(`${incidents[incidentIndex].name} | Important Links`);
    updatePageHeading(incidents[incidentIndex].name);
  }, []);

  return (
    <IncidentLayout title='Important Links'>
      <Grid
        container
        spacing={3}
        sx={{ width: '100% !important' }}
        paddingBottom={6}
      >
        {Object.keys(importantLinks).map((category, index) => (
          <>
            <Grid item xs={12} key={index}>
              <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                {category}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              {importantLinks[category].map((link, ind) => (
                <Accordion key={ind}>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography sx={{ my: 2 }}>
                      <Link
                        href={link.LinkAddress}
                        target='_blank'
                        rel='noopener'
                        underline='none'
                      >
                        {link.LinkText}
                      </Link>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{link.Description}</Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Grid>
          </>
        ))}
      </Grid>
    </IncidentLayout>
  );
}
