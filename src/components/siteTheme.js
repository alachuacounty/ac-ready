import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    darkblue: {
      main: '#12264c',
      light: '#CFE3E3',
    },
    middleblue: {
      main: '#1968b2',
    },
    lightblue: {
      main: '#1976d2',
    },
    white: {
      main: '#FFFFFF!important',
    },
    grey: {
      main: '#707070',
    }
  },
  sectionpadding: {
    padding: '4% 0',
  },
  typography: {
    fontFamily: ['PT Sans'].join(','),
  },
  MuiTypography: {
    h4: {
      fontSize: '50px!important',
    },
  },
});


export default theme;
