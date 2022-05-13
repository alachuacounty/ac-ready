import { AppBar, Link, List, ListItem, Toolbar } from '@mui/material';

import useStyles from './IncidentNavigationStyles';
import SubMenu from './SubMenu';
import DrawerNavigation from './DrawerNavigation';

const navItems = [
  { title: 'Hurricane Home', link: '/' },
  {
    title: 'Prepare',
    link: '/prepare',
    submenu: [
      { title: 'Shelters', link: '/incidents/elsa/shelters' },
      { title: 'Sandbag Locations', link: '/sandbags' },
      { title: 'FAQs', link: '/faqs' },
    ],
  },
  {
    title: 'Updates',
    link: '/updates',
    submenu: [
      { title: 'Advisories', link: '/advisories' },
      { title: 'Road Closures', link: '/roadclosures' },
    ],
  },
  { title: 'Important Links', link: '/incidents/elsa/importantlinks' },
  { title: 'Emergency Orders', link: '/incidents/elsa/emergencyorders' },
];

export default function IncidentNavigation() {
  const classes = useStyles();

  return (
    <AppBar position='absolute' className={classes.appBar}>
      <Toolbar variant='dense'>
        <DrawerNavigation navItems={navItems}></DrawerNavigation>

        <List className={classes.gridList}>
          {navItems.map((item, index) => {
            return item.submenu ? (
              <ListItem className={classes.navItem} key={`nav2-${index}`}>
                <SubMenu item={item}></SubMenu>
              </ListItem>
            ) : (
              <ListItem className={classes.navItem} key={`nav2-${index}`}>
                <Link href={item.link} color='inherit' title={item.title}>
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
