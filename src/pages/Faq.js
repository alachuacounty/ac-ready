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
import { ExpandMore } from '@mui/icons-material';

export default function Faq() {
  const { updatePageTitle, updatePageHeading } = useContext(titleContext);
  const [tab, setTab] = useState(0);

  const [faqs, setFaqs] = useState([]);

  const handleTabChange = (event, newVal) => {
    setTab(newVal);
  };

  const getFaqs = async () => {
    try {
      const result = await axios(
        `https://api.alachuacounty.us/hurricane-next-api/apidev/getFAQs`
      );

      if (result.data && result.data.length) {
        const categorizedFaqs = {};

        result.data.forEach((faq) => {
          if (!categorizedFaqs[faq.FaqCategory])
            categorizedFaqs[faq.FaqCategory] = [faq];
          else {
            const tempArrayforExistingFaqs = categorizedFaqs[faq.FaqCategory];
            tempArrayforExistingFaqs.push(faq);
            categorizedFaqs[faq.FaqCategory] = tempArrayforExistingFaqs;
          }
        });
        console.log(categorizedFaqs);
        setFaqs(categorizedFaqs);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFaqs();
    updatePageTitle('Elsa | FAQs');
    updatePageHeading('Hurricane Elsa');
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
                  <Tab sx={{ mr: 2 }} label={category} id={index} key={index} />
                ))}
              </Tabs>
            </AppBar>
            {Object.keys(faqs).map((category, index) =>
              faqs[category].map((faq, ind) => (
                <TabPanel key={ind} value={tab} index={index}>
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                      <Typography sx={{ my: 2, fontWeight: 'bold' }}>
                        {faq.FaqQuestion}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>{parse(faq.FaqAnswer)}</Typography>
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
