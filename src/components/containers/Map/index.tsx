import Grid from '@material-ui/core/Grid';
import React from 'react';

import { MAP_URL } from '../../../constants';
import useStyles from './useStyles';

const MapContainer = () => {
  const classes = useStyles();
  return (
    <Grid
      item
      xs={12}
    >
      <iframe
        className={classes.iframe}
        referrerPolicy="origin"
        sandbox="allow-scripts allow-same-origin allow-popups"
        src={MAP_URL}
        title="Query Map"
      />
    </Grid>
  );
};

export default MapContainer;
