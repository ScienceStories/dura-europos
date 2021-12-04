import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import StoriesAPIStory from 'react-stories-api';

import {
  APP_BROWSE_URL,
  STORIES_API_COLLECTION_ID,
  STORIES_API_ENDPOINT,
  STORIES_API_PUBLIC_KEY,
} from '../../../constants';
import { Story } from '../../../types';
import PageTitle from '../../layout/PageTitle';

interface Props extends RouteComponentProps {
}

interface MatchParams {
  storyId: number;
}

const StoryPage = ({ match }: Props) => {
  const { storyId } = match.params as MatchParams;
  const [story, setStory] = useState({} as Story);
  const { label } = story;
  return (
    <>
      <PageTitle title={`${label || storyId}`} />
      <StoriesAPIStory
        apiKey={STORIES_API_PUBLIC_KEY}
        collection={STORIES_API_COLLECTION_ID}
        endpoint={STORIES_API_ENDPOINT}
        id={storyId}
        onLoad={setStory}
        options={{
          logo: (
            <Button
              color="secondary"
              href={APP_BROWSE_URL}
              size="small"
              variant="outlined"
            >
              <Typography variant="caption">
                Browse Collection
              </Typography>
            </Button>
          ),
        }}
      />
    </>
  );
};

export default StoryPage;
