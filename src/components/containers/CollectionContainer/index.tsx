import React from 'react';
import { StoriesAPICollection, StoriesAPICollectionProps } from 'react-stories-api';

import {
  STORIES_API_COLLECTION_ID,
  STORIES_API_ENDPOINT,
  STORIES_API_PUBLIC_KEY,
} from '../../../constants';
import { formatStoryURL } from '../../../utils/url';

const urlFormatter = formatStoryURL('$id');

interface Props extends Omit<StoriesAPICollectionProps, 'urlFormatter'> {
  name?: string;
}

const CollectionContainer = ({
  name,
  onChange,
  page,
  q,
}: Props) => (
  <StoriesAPICollection
    apiKey={STORIES_API_PUBLIC_KEY}
    endpoint={STORIES_API_ENDPOINT}
    id={STORIES_API_COLLECTION_ID}
    onChange={onChange}
    options={name ? { name } : undefined}
    page={page}
    q={q}
    urlFormatter={urlFormatter}
  />
);

export default CollectionContainer;
