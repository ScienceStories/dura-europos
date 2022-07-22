import axios from 'axios';

import {
  STORIES_API_ENDPOINT,
  STORIES_API_PUBLIC_KEY,
  STORIES_API_TIMELINE_SPARQL_QUERY_ID,
} from '../constants';

export const getStoriesAPIQueryTimeline = async (
  endpoint = STORIES_API_ENDPOINT,
  apiKey = STORIES_API_PUBLIC_KEY,
  id = STORIES_API_TIMELINE_SPARQL_QUERY_ID,
) => {
  const { data } = await axios.get(`${endpoint}/api/dura-europos/${id}/timeline?api-key=${apiKey}`);
  return data;
}

export default getStoriesAPIQueryTimeline;
