import * as React from 'react';
import { Button, Menu, MenuItem, Link } from '@mui/material';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  menuItem: {
    background: theme.palette.lightblue.light,
    border: '1px solid ' + theme.palette.grey.main,
    color: theme.palette.darkblue.light,
    fontWeight: 'bold',
  },
  menuButton: {
    color: theme.palette.white.main,
    textTransform: 'capitalize',
    fontWeight: 'bold',
    padding: '0',
  },
  menuLink: {
    width: '100%',
    fontSize: '14px',
  },
}));

export default function SubMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const submenu = props.item.submenu;
  const classes = useStyles();
  const [open, setOpen] = React.useState(Boolean(anchorEl));
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(!open);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  return (
    <div>
      <Button
        id={'menu-button-' + props.item.title}
        aria-controls={open ? 'sub-menu' + props.item.title : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className={classes.menuButton}
      >
        {props.item.title}
      </Button>
      <Menu
        id={'sub-menu' + props.item.title}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'menu-button-' + props.item.title,
          disablePadding: true,
          //sx: { paddingTop: '0px' },
        }}
      >
        {submenu.map((subitem, index) => (
          <MenuItem className={classes.menuItem}>
            <Link
              href={process.env.PUBLIC_URL + subitem.link}
              className={classes.menuLink}
              color='inherit'
              title={subitem.title}
            >
              {subitem.title}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
