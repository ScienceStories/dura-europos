import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import { APP_NAME, Images } from '../../../constants';
import AboutContainer from '../../containers/About';
import CollectionContainer from '../../containers/CollectionContainer';
import MapContainer from '../../containers/Map';
import TimelineContainer from '../../containers/Timeline';
import AppLayout from '../../layout/AppLayout';
import useStyles from './useStyles';

const HomePage = () => {
  const classes = useStyles();
  return (
    <AppLayout>
      <Grid container>
        <Grid
          item
          xs={12}
        >
          <img
            alt={APP_NAME}
            className={classes.logo}
            src={Images.idea}
          />
          <Typography
            className={classes.titleSection}
            color="primary"
            variant="h2"
          >
            { APP_NAME }
          </Typography>
        </Grid>
        <AboutContainer />
        <MapContainer />
        <TimelineContainer />
        <CollectionContainer name="Browse Stories" />
      </Grid>
    </AppLayout>
  );
};

export default HomePage;
