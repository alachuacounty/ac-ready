import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    //zIndex: '1400',
    flexGrow: '0',
    flexShrink: '1',
    flexBasis: 'auto',
    textAlign: 'left',
    background: theme.palette.middleblue.main,
    [theme.breakpoints.down('sm')]: {
      height: '6px',
    },
  },
  toolbar: theme.mixins.toolbar,
  gridList: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: '0px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  mobileList: {
    background: theme.palette.white.main,
  },
  mobileItem: {
    color: theme.palette.primary.main,
  },
  navItem: {
    fontWeight: 'bold',
    padding: '0 16px',
    width: 'auto',
    fontSize: '14px',
  },
  navLink: {
    color: theme.palette.white.main + ' !important',
    '&:visited': {
      color: theme.palette.white.main + ' !important',
    },
  }
}));

export default useStyles;
