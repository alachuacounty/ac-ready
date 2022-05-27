/* eslint-disable react-hooks/exhaustive-deps */
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AppBar,
  Box,
  Grid,
  Paper,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import parse from 'html-react-parser';

import IncidentLayout from '../components/Branding/IncidentLayout';
import { titleContext } from '../contexts/TitleContext';
import { incidentsContext } from '../contexts/IncidentsContext';
import { breadCrumbsContext } from '../contexts/BreadCrumbsContext';
import { ExpandMore } from '@mui/icons-material';

export default function Faq({ incidentIndex }) {
  const { updatePageTitle, updatePageHeading } = useContext(titleContext);
  const incidents = useContext(incidentsContext);
  const { pushBreadCrumbs } = useContext(breadCrumbsContext);
  const [tab, setTab] = useState(0);

  const [faqs, setFaqs] = useState([]);

  const handleTabChange = (event, newVal) => {
    setTab(newVal);
  };

  const getFaqs = async () => {
    try {
      const result = await axios(
        `https://ads86.alachuacounty.us/incidents-api/faq/active/${incidents[incidentIndex].incidentID}`
      );

      if (result.data && result.data[0].length) {
        const categorizedFaqs = {};

        result.data[0].forEach((faq) => {
          if (!categorizedFaqs[faq.GroupName])
            categorizedFaqs[faq.GroupName] = [faq];
          else {
            const tempArrayforExistingFaqs = categorizedFaqs[faq.GroupName];
            tempArrayforExistingFaqs.push(faq);
            categorizedFaqs[faq.GroupName] = tempArrayforExistingFaqs;
          }
        });
        setFaqs(categorizedFaqs);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFaqs();
    updatePageTitle(`${incidents[incidentIndex].name} | FAQs`);
    updatePageHeading(incidents[incidentIndex].name);
    pushBreadCrumbs({
      crumb: incidents[incidentIndex].name,
      link: `/incidents/${incidents[incidentIndex].urlName}/`,
    });
  }, []);

  return (
    <IncidentLayout title='Frequently Asked Questions'>
      <Paper elevation={4}>
        <Grid container>
          <Grid item xs={12}>
            <AppBar
              position='static'
              sx={{
                backgroundColor: (theme) => theme.palette.darkblue.lightest,
              }}
            >
              <Tabs value={tab} onChange={handleTabChange} textColor='white'>
                {Object.keys(faqs).map((category, index) => (
                  <Tab
                    sx={{ mr: 2, fontWeight: 'bold' }}
                    label={category}
                    id={index}
                    key={index}
                  />
                ))}
              </Tabs>
            </AppBar>
            {Object.keys(faqs).map((category, index) =>
              faqs[category].map((faq, ind) => (
                <TabPanel key={ind} value={tab} index={index}>
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                      <Typography
                        sx={{
                          my: 2,
                          fontWeight: 'bold',
                          color: (theme) => theme.palette.middleblue.main,
                        }}
                      >
                        {faq.FAQName}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>{parse(faq.UpdateBody)}</Typography>
                    </AccordionDetails>
                  </Accordion>
                </TabPanel>
              ))
            )}
          </Grid>
        </Grid>
      </Paper>
    </IncidentLayout>
  );
}

const TabPanel = ({ value, index, children, ...other }) => (
  <div role='tabpanel' hidden={value !== index} id={index} {...other}>
    {value === index && (
      <Box sx={{ p: 3 }}>
        <Typography>{children}</Typography>
      </Box>
    )}
  </div>
);
