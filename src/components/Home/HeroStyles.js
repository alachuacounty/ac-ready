import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  image: {
    width: '100%',
    height: '100%',
  },
  positioning: {
    justifyContent: 'center',
  },
  contentwrapper: {
    [theme.breakpoints.down('md')]: {
      background: theme.palette.darkblue.main,
      color: 'white',
      padding: '4% 1%',
    },
  },
  heroContent: {
    color: theme.palette.darkblue.main,
    display: 'block',
    fontWeight: '700!important',
    [theme.breakpoints.down('md')]: {
      color: 'white',
      fontSize: '2.3rem!important',
    },
    [theme.breakpoints.down('sm')]: {
      color: 'white',
      fontSize: '1.8rem!important',
    },
  },
  secondTagline: {
    color: theme.palette.middleblue.main,
    display: 'block',
    fontWeight: '700!important',
    borderBottom: '4px solid #1968b1',
    [theme.breakpoints.down('md')]: {
      color: 'white',
      background: '#12264c',
      fontSize: '2.3rem!important',
      marginBottom: '3%!important',
      borderBottom: 'none',
    },
    [theme.breakpoints.down('sm')]: {
      color: 'white',
      background: '#12264c',
      fontSize: '1.8rem!important',
    },
  },
  borderbottom: {
    borderBottom: '2 solid purple',
  },
}));

export default useStyles;
