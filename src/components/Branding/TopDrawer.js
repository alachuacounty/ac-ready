import { Drawer, IconButton, List, ListItem, Divider, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import { Menu } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  drawerPaper: {
    // position: 'fixed',
    //  [theme.breakpoints.down('mobile')]: {
    background: theme.palette.middleblue.main,
    position: 'relative',
    transform: 'translateY(78px) !important',
    //  },
  },
  divider: {
    margin: '0 16px !important',
    borderWidth: '1px',
    //borderColor: '#A9A9A9',
    //[theme.breakpoints.down('mobile')]: {
    borderColor: theme.palette.lightblue.main,
    //},
  },
  drawerItem: {
    //color: theme.palette.darkblue.main,
    textTransform: 'Uppercase',
    fontWeight: 'bold',
    // [theme.breakpoints.down('mobile')]: {
    color: theme.palette.white.main + ' !important',
    //},
    '&:visited': {
      color: theme.palette.white.main + ' !important',
    },
  },
  drawerSubItem: {
    textTransform: 'Capitalize',
    fontWeight: 'normal',
    // [theme.breakpoints.down('mobile')]: {
    color: theme.palette.white.main + ' !important',
    '&:visited': {
      color: theme.palette.white.main + ' !important',
    },
    // },
  },
  subList: {
    marginLeft: '30px !important',
  },
  menuButton: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function TopDrawer({ navItems }) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  return (
    <>
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
        anchor='top'
        classes={{
          paper: classes.drawerPaper,
        }}
        open={open}
        onClose={handleDrawerToggle}
        className={classes.drawer}
      >
        <List className={classes.mobileList}>
          {navItems.map((item, index) => {
            return item.submenu && item.submenu.length > 0 ? (
              <>
                <ListItem className={classes.drawerItem} key={`nav1-${index}`}>
                  {item.title}
                </ListItem>
                <List className={classes.subList}>
                  {item.submenu.map((subitem, index) => (
                    <ListItem
                      className={classes.drawerSubItem}
                      key={`nav1-${index}`}
                    >
                      <RouterLink
                        to={subitem.link}
                        color='inherit'
                        title={subitem.title}
                        className={classes.drawerSubItem}
                      >
                        {subitem.title}
                      </RouterLink>
                    </ListItem>
                  ))}
                </List>

                <Divider variant='middle' className={classes.divider} />
              </>
            ) : (
              <>
                <ListItem className={classes.drawerItem} key={`nav1-${index}`}>
                  <Link href={item.link} color='inherit' title={item.title} className={classes.drawerItem} onClick={handleDrawerToggle} >
                    {item.title}
                  </Link>
                </ListItem>
                <Divider variant='middle' className={classes.divider} />
              </>
            );
          })}
        </List>
      </Drawer>
    </>
  );
}
