import { grey } from '@mui/material/colors';

import { Color } from '../constants';

const theme = {
  palette: {
    primary: {
      main: Color.Orange,
    },
    secondary: {
      main: Color.DarkGray,
    },
    text: {
      primary: grey[800],
      secondary: grey[600],
    },
  },
  typography: {
    finePrint: {
      color: grey[600],
      fontStyle: 'italic',
      fontSize: 10,
      fontWeight: 400,
    },
    h1: {
      fontFamily: 'Yale',
      fontSize: '3.4rem',
      fontWeight: 'bold',
    },
    h2: {
      fontFamily: 'Yale',
      fontSize: '2.8rem',
    },
    h3: {
      fontFamily: 'Yale',
      fontSize: '2rem',
      fontWeight: 'bold',
    },
    h4: {
      fontSize: '1.7rem',
    },
    overline: {
      fontFamily: 'Yale',
      lineHeight: 1,
    },
  },
};

export default theme;
