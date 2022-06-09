import {
  Drawer,
  IconButton,
  List,
  ListItem,
  Divider,
  Grid,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import clsx from 'clsx';
import { Menu, ChevronLeft } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  drawer: {
    //left: '56px !important',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  drawerPaper: {
    position: 'fixed',
    [theme.breakpoints.down('mobile')]: {
      background: theme.palette.middleblue.main,
      position: 'relative',
    },
  },
  drawerPaperTop: {
    position: 'fixed',
    [theme.breakpoints.down('mobile')]: {
      background: theme.palette.middleblue.main,
      position: 'relative',
      //top: '64px',
      transform: 'translateY(64px) !important',
      //transition: 'none !important',
    },
  },
  divider: {
    margin: '0 16px !important',
    borderWidth: '1px',
    borderColor: '#A9A9A9',
    [theme.breakpoints.down('mobile')]: {
      borderColor: theme.palette.lightblue.main,
    },
  },
  drawerItem: {
    color: theme.palette.darkblue.main,
    textTransform: 'Uppercase',
    fontWeight: 'bold',
    [theme.breakpoints.down('mobile')]: {
      color: theme.palette.white.main,
    },
  },
  drawerSubItem: {
    color: theme.palette.middleblue.main,
    textTransform: 'Capitalize',
    fontWeight: 'normal',
    [theme.breakpoints.down('mobile')]: {
      color: theme.palette.white.main,
    },
  },
  subList: {
    marginLeft: '30px !important',
  },
  menuButton: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  chevronButton: {
    display: 'none',
    color: theme.palette.white.main,
    [theme.breakpoints.down('mobile')]: {
      display: 'block',
    },
  },
}));

export default function LeftDrawer({ navItems }) {
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
        anchor='left'
        classes={{
          paper: clsx(classes.drawerPaper),
        }}
        open={open}
        onClose={handleDrawerToggle}
        className={classes.drawer}
      >
        <Grid container justifyContent='flex-end'>
          <Grid item>
            <IconButton
              edge='start'
              className={classes.chevronButton}
              color='inherit'
              aria-label='collapse-menu'
              onClick={handleDrawerToggle}
            >
              <ChevronLeft fontSize='large' />
            </IconButton>
          </Grid>
        </Grid>

        <List className={classes.mobileList}>
          {navItems.map((item, index) => {
            return item.submenu ? (
              <>
                <ListItem className={classes.drawerItem} key={`nav1-${index}`} >
                  {item.title}
                </ListItem>
                <List className={classes.subList}>
                  {item.submenu.map((subitem, index) => (
                    <ListItem
                      className={classes.drawerSubItem}
                      key={`nav1-${index}`}
                    >
                      <Link
                        to={subitem.link}
                        color='inherit'
                        title={subitem.title}
                        className={classes.drawerSubItem}
                        onClick={handleDrawerToggle}
                      >
                        {subitem.title}
                      </Link>
                    </ListItem>
                  ))}
                </List>

                <Divider variant='middle' className={classes.divider} />
              </>
            ) : (
              <>
                <ListItem className={classes.drawerItem} key={`nav1-${index}`}>
                  <Link to={item.link} color='inherit' title={item.title} className={classes.drawerItem} onClick={handleDrawerToggle}>
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
