import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    background: theme.palette.darkblue.main,
    height: '1fr',
    color: 'white',
    [theme.breakpoints.down('md')]: {
      backgroundColor: 'white',
      boxShadow: '0 5px 5px rgb(18 38 76 / 15%), 0 5px 5px rgb(18 38 76 / 15%)',
      padding: '4% 2%',
    },
  },
  link: {
    color: 'white!important',
    [theme.breakpoints.down('md')]: {
      color: '#12264c!important',
    },
  },

  sectionpadding: {
    [theme.breakpoints.up('md')]: {
      padding: '2%',
    },
    [theme.breakpoints.up('md')]: {
      padding: '1%',
    },
  },
  grid: {
    display: 'grid',
  },
  content: {
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      color: '#12264c',
    },
  },

  button: {
    borderRight: '20px double #cfedfb!important',
    height: '66px',
    width: '150px',
    backgroundColor: '#4a97d3!important',
    fontSize: '24px!important',
  },
  button66: {
    backgroundColor: '#4a97d3!important',
    color: 'white!important',
    borderRadius: '4px',
    border: 0,
    boxShadow:
      'rgba(1,60,136,.5) 0 -1px 3px 0 inset,rgba(0,44,97,.1) 0 3px 6px 0',
    boxSizing: 'borderBox',
    fontWeight: '700',
    minHeight: '56px!important',
    minWidth: '160px!important',
    padding: '10px 20px',
    transition: 'all .2s cubic-bezier(.22, .61, .36, 1)',
    borderRight: '20px double #cfedfb!important',
    fontSize: '20px!important',
  },
  /*  button66 :hover  {
    transform: 'translateY(-2px)',
  }, */
}));

export default useStyles;
