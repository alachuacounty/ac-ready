import * as React from 'react';
import { Button, Menu, MenuItem } from '@mui/material';

import { makeStyles } from '@mui/styles';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  menuItem: {
    background: theme.palette.lightblue.light,
    border: '1px solid #707070',
    color: theme.palette.darkblue.light + ' !important',
    fontWeight: 'bold',
  },
  menuLink: {
    width: '100%',
    //fontSize: '14px',
    color: theme.palette.darkblue.light + ' !important',
    '&:visited': {
      color: theme.palette.darkblue.light + ' !important',
    },
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
  const handleClose = (event) => {
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
        onMouseOver={handleClick}
        size='large'
        variant='contained'
        sx={{ borderRadius: 3, py: 1.5, fontWeight: 'bold' }}
      >
        {props.item.title} <ExpandMore sx={{ paddingLeft: '10px' }} />
      </Button>
      <Menu
        id={'sub-menu' + props.item.title}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'menu-button-' + props.item.title,
          disablePadding: true,
          onMouseLeave: handleClose,
          //sx: { paddingTop: '0px' },
        }}
      >
        {submenu.map((subitem, index) => (
          <MenuItem className={classes.menuItem}>
            <Link
              to={subitem.link}
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
