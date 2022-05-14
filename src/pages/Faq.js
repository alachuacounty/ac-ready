import { AppBar, Box, Grid, Paper, Tab, Tabs, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import IncidentLayout from '../components/Branding/IncidentLayout';
import { titleContext } from '../contexts/TitleContext';

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
              <Tabs
                key={0}
                value={tab}
                onChange={handleTabChange}
                textColor='white'
              >
                <Tab label='test1' id={0} />
                <Tab label='test2' id={1} />
              </Tabs>
            </AppBar>
            <TabPanel key={0} value={tab} index={0}>
              TEst1
            </TabPanel>
            <TabPanel key={1} value={tab} index={1}>
              TEst2
            </TabPanel>
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
