import { useLocation } from 'react-router-dom';

import { APP_BROWSE_URL } from '../constants';

export const formatStoryURL = (id: string) => `${APP_BROWSE_URL}/${id}`;

export const searchURL = (
  window: Window | undefined,
  query?: string | undefined,
  page?: number | string | undefined,
) => {
  const path = `${APP_BROWSE_URL}?page=${page || 1}&q=${query || ''}`;
  if (window) {
    const { host, protocol } = window.location;
    return `${protocol}//${host}${path}`
  }
  return path;
};

export const useQuery = () => new URLSearchParams(useLocation().search);
