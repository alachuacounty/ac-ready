import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: 'auto',
    padding: '4% 0',

    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
      textAlign: 'center!important',
    },
  },
  acemSection: {
    [theme.breakpoints.down('md')]: {
      padding: '1% 0',
      justifyContent: 'center',
    },
  },
  readyGovSection: {
    [theme.breakpoints.down('md')]: {
      padding: '1% 0',
    },
  },
  middle: {
    maxWidth: '1180px!important',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center!important',
      textAlign: 'center!important',
    },
  },
  imgleft: {
    [theme.breakpoints.down('lg')]: {
      justifyContent: 'center!important',
    },
  },
  link: {
    color: '#12264c!important',
    textDecorationColor: '#12264c!important',
  },
  img: {
    maxWidth: '400px',
    width: '100%',
    [theme.breakpoints.down('lg')]: {
      justifyContent: 'center!important',
      display: 'flex',
    },
    text: {
      fontSize: '20px',
      [theme.breakpoints.down('lg')]: {
        justifyContent: 'center!important',
        textAlign: 'center',
      },
    },
  },
  /*STYLES FOR HR HERE*/
  hr: {
    margin: 0,
    height: '5px !important',
    padding: 0,
  },
  firsthr: {
    borderStyle: 'solid',
    borderColor: '#12264c !important',
    backgroundColor: '#12264c !important',
    border: 'solid 5px #12264c',
    borderWidth: 'thick',
    zIndex: 999,
    padding: 0,
  },
  secondhr: {
    borderStyle: 'solid',
    borderColor: '#1968b1',
    backgroundColor: '#1968b1 !important',
    border: 'solid 5px #1968b1',
    borderWidth: 'thick',
    zIndex: 999,
    padding: 0,
  },
  thirdhr: {
    borderStyle: 'solid',
    borderColor: '#4a97d3 !important',
    backgroundColor: '#4a97d3 !important',
    border: 'solid 5px#4a97d3',
    borderWidth: 'thick',
    zIndex: 999,
    padding: 0,
  },

  /*STYLES FOR HR HERE*/
}));

export default useStyles;
