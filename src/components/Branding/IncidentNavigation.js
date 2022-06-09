import { AppBar, List, ListItem, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';

import useStyles from './IncidentNavigationStyles';
import SubMenu from './SubMenu';

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
                <Link to={item.link} title={item.title} className={classes.navLink}>
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
