import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { getStoriesAPIQueryTimeline } from '../../../utils/api';
import { formatStoryURL } from '../../../utils/url';
import useStyles from './useStyles';

interface Props {
  id?: string;
}

// TODO: Make total counter dynamic?
const TimelineContainer = ({ id = 'timeline' }: Props) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  useEffect(() => {
    getStoriesAPIQueryTimeline().then(({ articles, options }) => {
      options.width = window.screen.width;
      options.onArticleClick = ({ id }: { id: string }) => history.push(formatStoryURL(id));
      const container = document.getElementById(id);
      // @ts-ignore
      const timeline = new window.Histropedia.Timeline(container, options);
      timeline.load(articles);
      setLoading(false);
    });
  }, [id, history]);
  return (
    <Grid
      item
      xs={12}
    >
      <div className={classes.timelineHeader}>
        <Typography
          className={classes.timelineHeaderText}
          variant="h4"
        >
          Over 14 Thousand Photographed Artifacts and Counting
        </Typography>
      </div>
      <div
        className={classes.timelineWrapper}
        id={id}
      >
        {loading && (
          <LinearProgress color="secondary" />
        )}
      </div>
    </Grid>
  );
};

export default TimelineContainer;
