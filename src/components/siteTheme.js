import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    darkblue: {
      main: '#12274B',
      light: '#1B5B98',
      lightest: '#1968b1',
    },
    middleblue: {
      main: '#1968b2',
      light: '#4A97D2'
    },
    lightblue: {
      main: '#BFD8F2',
      light: '#D0EDFC',
    },
    white: {
      main: '#FFFFFF',
    },
    black: {
      main: '#000000',
    },
    grey: {
      main: '#707070',
      light: '#DBDBDB',
      lightest: '#E8E8E8',
      dark: '#222222',
    },
    yellow: {
      main: '#EFD06A',
      dark: '#D3933D',
    },
    red: {
      main: '#A80B0B',
    },
    green: {
      main: '#075F07',
    },
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
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      mobile: 450,
    },
  }
});


export default theme;
