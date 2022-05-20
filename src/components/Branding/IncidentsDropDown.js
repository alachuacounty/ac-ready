import * as React from 'react';
import { Button, Menu, MenuItem, Link } from '@mui/material';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  menuItem: {
    background: '#D0EDFC',
    border: '1px solid #707070',
    color: '#1B5B98',
    fontWeight: 'bold',
  },
  menuLink: {
    width: '100%',
    fontSize: '14px',
  },
}));

export default function IncidentDropDown(props) {
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
        size='large'
        variant='contained'
        sx={{ borderRadius: 3, py: 1.5, fontWeight: 'bold' }}
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
