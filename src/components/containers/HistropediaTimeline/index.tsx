import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { useEffect, useRef, useState } from 'react';
import { useStoriesAPI } from 'react-stories-api';

import { STORIES_SERVICES_TIMELINE_URL } from '../../../constants';

// Add global type for window.Histropedia
declare global {
  interface Window {
    Histropedia?: {
      Timeline: new (container: HTMLElement, options: object) => {
        load: (articles: object[]) => void;
      };
    };
  }
}

interface Props {
  readonly id?: string;
}

const getStoriesAPIQueryTimeline = async () => {
  const response = await fetch(STORIES_SERVICES_TIMELINE_URL);
  const data = await response.json();
  if (!response.ok) {
    throw { ...data, code: response.status };
  }
  return data;
};

function HistropediaTimeline({ id = 'histropediaTimeline' }: Props) {
  const { goToPath, api } = useStoriesAPI();
  const [loading, setLoading] = useState(true);
  const [initialized, setInitialized] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timelineInstance = null;
    let isMounted = true;
    const container = timelineRef.current;

    const initializeTimeline = async () => {
      if (!isMounted || initialized) return;

      setInitialized(true);

      try {
        const { articles, options } = await getStoriesAPIQueryTimeline();

        options.width = window.screen.width;
        options.onArticleClick = ({ id: storyId }: { id: string }) => {
          goToPath?.(`/stories/${storyId}`);
        };

        // Prevent multiple timelines
        if (container && container.childNodes.length === 0 && window.Histropedia) {
          timelineInstance = new window.Histropedia.Timeline(container, options);
          timelineInstance.load(articles);
        }

        if (isMounted) {
          setLoading(false);
        }
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error('Failed to load timeline:', err);
      }
    };

    initializeTimeline();

    return () => {
      isMounted = false;
      if (container) {
        container.innerHTML = '';
      }
    };
  }, [initialized, api, goToPath]);

  return (
    <Box sx={{ overflow: 'hidden', position: 'relative' }}>
      <div
        ref={timelineRef}
        id={id}
        style={{ position: 'relative', minHeight: '200px' }}
      >
        {loading ? <LinearProgress color="secondary" /> : null}
      </div>
    </Box>
  );
}

export default HistropediaTimeline;
