import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { StoriesAPIStory, useLocale } from 'react-stories-api';

import AppLayout from '../../components/layout/AppLayout/AppLayout';
import { RoutePaths, STORIES_SERVICES_COLLECTION_ID } from '../../constants';
import styles from './styles';

const StoryView = observer(() => {
  const { t } = useLocale();
  return (
    <AppLayout
      animationDelay="100"
      hasFooter={false}
      hasScrollRestored
      isFullscreen
      title="Story"
    >
      <Box sx={styles.root}>
        <StoriesAPIStory
          branding={(
            <Box
              sx={styles.branding}
            >
              <Link to={RoutePaths.Collection}>
                <Typography
                  color="textSecondary"
                  sx={styles.backButton}
                  variant="caption"
                >
                  {t('story.collectionLink')}
                </Typography>
              </Link>
              <div style={{ display: 'flex', padding: '24px 24px 0px 24px' }}>
                <Link
                  style={{ margin: 'auto' }}
                  to={RoutePaths.Home}
                >
                  <img
                    alt="Dura-Europos Archive Stories"
                    src="/images/idea-logo.png"
                    style={{ maxWidth: '100%', width: 90 }}
                  />
                </Link>
              </div>
            </Box>
          )}
          collectionId={STORIES_SERVICES_COLLECTION_ID}
          connectRouter
          fullscreen
          showLocaleSelector
        />
      </Box>
    </AppLayout>
  );
});

export default StoryView;
