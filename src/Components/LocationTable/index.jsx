import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import styles from '../StickerSection/sticker.module.css';
import stylesCustom from './table.module.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    ExpandMoreIcon: {
      styleOverrides: {
        root: {
          fontSize: '2.4rem',
          color: 'white',
        },
      },
    },
  },
  table: {
    color: 'white',
  },
});

export default function Table() {
  return (
    <div className={styles.tableContainer}>
      <Accordion className={styles.table} defaultExpanded='true'>
        <AccordionSummary
          className={styles.AccordionSummaryHeader}
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
          background='#1968b1'
        >
          <Typography>Micanopy</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ListItemText> - Micanopy Town Hall</ListItemText>
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.table} defaultExpanded='true'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className={styles.AccordionSummaryHeader}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography>Hawthorne</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ListItemText> - Hawthorne Town Hall</ListItemText>
            <ListItemText> - MMPS Walk-in Clinic</ListItemText>
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.table} defaultExpanded='true'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className={styles.AccordionSummaryHeader}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography>Gainesville</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ListItemText> - Alachua County Emergency Management</ListItemText>
            <ListItemText>- Alachua County Library Headquarters</ListItemText>
            <ListItemText> - Public & General</ListItemText>
            <ListItemText> - Satchel’s</ListItemText>
            <ListItemText> - SubLIME Tacos</ListItemText>
            <ListItemText> - Curia on the Drag</ListItemText>
            <ListItemText> - Satch Squared</ListItemText>
            <ListItemText> - Swamp Head</ListItemText>
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.table} defaultExpanded='true'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className={styles.AccordionSummaryHeader}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography>Archer</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ListItemText> - Archer City Hall</ListItemText>
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.table} defaultExpanded='true'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className={styles.AccordionSummaryHeader}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography>Waldo</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ListItemText>- Waldo City Hall</ListItemText>
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.table} defaultExpanded='true'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className={styles.AccordionSummaryHeader}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography>Newberry</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ListItemText> - Easton Newberry Archery Center</ListItemText>
            <ListItemText>- Newberry City Hall</ListItemText>
            <ListItemText>- Villaggio’s Pizzeria</ListItemText>
          </List>
        </AccordionDetails>
      </Accordion>

      <Accordion className={styles.table} defaultExpanded='true'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className={styles.AccordionSummaryHeader}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography>La Crosse</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ListItemText>- La Crosse Town Hall</ListItemText>
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.table} defaultExpanded='true'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color='white' />}
          className={styles.AccordionSummaryHeader}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography>Alachua</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ListItemText>- Alachua City Hall</ListItemText>
            <ListItemText>
              - Alachua County Library – Alachua Branch
            </ListItemText>
          </List>
        </AccordionDetails>
      </Accordion>

      <Accordion className={styles.table} defaultExpanded='true'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color='white' />}
          className={styles.AccordionSummaryHeader}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography>High Springs</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ListItemText>- High Springs City Hall</ListItemText>
            <ListItemText>- High Springs Brewing Company</ListItemText>
          </List>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
