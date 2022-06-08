import { AppBar, List, ListItem, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';

import useStyles from './IncidentNavigationStyles';
import SubMenu from './SubMenu';

/*const navItems = [
  { title: 'Hurricane Home', link: '/incidents/elsa' },
  {
    title: 'Prepare',
    link: '/prepare',
    submenu: [
      { title: 'Shelters', link: '/incidents/elsa/shelters' },
      { title: 'Sandbag Locations', link: '/incidents/elsa/sandbags' },
      { title: 'FAQs', link: '/incidents/elsa/faqs' },
    ],
  },
  {
    title: 'Updates',
    link: '/updates',
    submenu: [
      { title: 'Advisories', link: '/incidents/elsa/advisories' },
      { title: 'Road Closures', link: '/incidents/elsa/roadclosures' },
    ],
  },
  { title: 'Important Links', link: '/incidents/elsa/importantlinks' },
  { title: 'Emergency Orders', link: '/incidents/elsa/emergencyorders' },
];*/

export default function IncidentNavigation({ navItems }) {
  const classes = useStyles();

  return (
    <AppBar position='absolute' className={classes.appBar}>
      <Toolbar variant='dense'>
        <List className={classes.gridList}>
          {navItems.map((item, index) => {
            return item.submenu ? (
              <ListItem className={classes.navItem} key={`nav2-${index}`}>
                <SubMenu item={item}></SubMenu>
              </ListItem>
            ) : (
              <ListItem className={classes.navItem} key={`nav2-${index}`}>
                <Link to={item.link} color='inherit' title={item.title}>
                  {item.title}
                </Link>
              </ListItem>
            );
          })}
        </List>
      </Toolbar>
    </AppBar>
  );
}
