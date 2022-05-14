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

export default function ImportantLinksPage() {
  const { pushBreadCrumbs } = useContext(breadCrumbsContext);
  const { updatePageTitle, updatePageHeading } = useContext(titleContext);
  const [importantLinks, setImportantLinks] = useState([]);

  const getImportantLinks = async () => {
    try {
      const result = await axios(
        `https://api.alachuacounty.us/hurricane-next-api/apidev/getImportantLinks`
      );
      console.log(result.data);
      if (result.data && result.data.length) {
        const categorizedLinks = {};

        result.data.forEach((link) => {
          if (!categorizedLinks[link.LinkCategory])
            categorizedLinks[link.LinkCategory] = [link];
          else {
            const tempArrayforExistingLinks =
              categorizedLinks[link.LinkCategory];
            tempArrayforExistingLinks.push(link);
            categorizedLinks[link.LinkCategory] = tempArrayforExistingLinks;
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
    pushBreadCrumbs({ crumb: 'Important Links', link: '/importantlinks' });
    updatePageTitle('Elsa | Important Links');
    updatePageHeading('Hurricane Elsa');
  }, []);

  return (
    <IncidentLayout title='Important Links'>
      <Grid container spacing={3}>
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
                    <Typography>{link.LinkDescription}</Typography>
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
