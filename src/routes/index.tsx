import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CollectionPage from '../components/pages/Collection';
import HomePage from '../components/pages/Home';
import StoryPage from '../components/pages/Story';
import { APP_BROWSE_URL, APP_HOME_URL } from '../constants';
import { formatStoryURL } from '../utils/url';

const router = (
  <Switch>
    <Route
      component={StoryPage}
      path={formatStoryURL(':storyId')}
    />
    <Route
      component={CollectionPage}
      path={APP_BROWSE_URL}
    />
    <Route
      component={HomePage}
      path={APP_HOME_URL}
    />
  </Switch>
);

export default router;
