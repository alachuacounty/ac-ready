import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DenseTable from '../AmiChart';

import Parser from 'react-html-parser';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function FAQTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [faqList, setFAQList] = React.useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    fetch(
      'https://api.alachuacounty.us/hurricane-next-api/apidev/getFAQs'
    ).then((res) =>
      res
        .json()
        .then((data) => setFAQList(groupBy(data, 'FaqCategory')))
        .catch((err) => console.log(err))
    );
  }, []);

  function groupBy(arr, prop) {
    const map = new Map(Array.from(arr, (obj) => [obj[prop], []]));
    arr.forEach((obj) => map.get(obj[prop]).push(obj));
    return Array.from(map.values());
  }

  function FAQTabCategories() {
    const groupedItems = faqList.map((element, index) => (
      <Tab label={element[0].FaqCategory} {...a11yProps(index)} />
    ));

    return (
      <AppBar position='static'>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='Frequently Asked Question Categories'
        >
          {groupedItems}
        </Tabs>
      </AppBar>
    );
  }

  function FAQListItems() {
    const groupedItems = faqList.map((element, index) => (
      <TabPanel value={value} index={index}>
        <FAQItem items={element} group={index}></FAQItem>
      </TabPanel>
    ));
    return <div>{groupedItems}</div>;
  }

  function FAQItem(props) {
    const items = props.items;
    const group = props.group;

    const faqItems = items.map((item, index) => (
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={group + '-' + index + '-content'}
          id={group + '-panel' + index + 'a-header'}
        >
          <Typography className='question'>{item.FaqQuestion}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography paragraph={true}>{Parser(item.FaqAnswer)}</Typography>
        </AccordionDetails>
      </Accordion>
    ));

    return <div>{faqItems}</div>;
  }

  return (
    <div className={classes.root}>
      <FAQTabCategories></FAQTabCategories>
      <FAQListItems> </FAQListItems>
    </div>
  );
}

export default FAQTabs;
