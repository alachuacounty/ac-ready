import { Menu } from '@material-ui/icons';
import {
  AppBar,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  Toolbar,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    zIndex: '1400',
    flexGrow: '0',
    flexShrink: '1',
    flexBasis: 'auto',
    textAlign: 'left',
    background: '#1968B1',
  },
  toolbar: theme.mixins.toolbar,
  drawer: {
    left: '56px !important',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  gridList: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  mobileList: {
    background: '#FFFFFF',
  },
  mobileItem: {
    color: theme.palette.primary.main,
  },
  menuButton: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const navItems = [
  { title: 'Hurricane Home', link: '/' },
  { title: 'Prepare', link: '/prepare', submenu: {} },
  { title: 'Updates', link: '/updates' },
  { title: 'Important Links', link: '/importantlinks' },
  { title: 'Emergency Orders', link: '/emergencyorders' },
];

export default function IncidentNavigation() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  return (
    <AppBar position='absolute' className={classes.appBar}>
      <Toolbar variant='dense'>
        <IconButton
          edge='start'
          className={classes.menuButton}
          color='inherit'
          aria-label='menu'
          onClick={handleDrawerToggle}
        >
          <Menu />
        </IconButton>
        <Drawer
          variant='temporary'
          anchor='left'
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
          className={classes.drawer}
        >
          <div className={classes.toolbar} />
          <List className={classes.mobileList}>
            {navItems.map((item, index) => (
              <ListItem className={classes.mobileItem} key={`nav1-${index}`}>
                <Link href={item.link} color='inherit' title={item.title}>
                  {item.title}
                </Link>
              </ListItem>
            ))}
          </List>
        </Drawer>

        <List className={classes.gridList}>
          {navItems.map((item, index) => (
            <ListItem className={classes.navItem} key={`nav2-${index}`}>
              <Link href={item.link} color='inherit' title={item.title}>
                {item.title}
              </Link>
            </ListItem>
          ))}
        </List>
      </Toolbar>
    </AppBar>
  );
}
