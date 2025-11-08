import Box from '@mui/material/Box';
import { observer } from 'mobx-react-lite';
import { StoriesAPICollection, useLocale } from 'react-stories-api';

import AppLayout from '../../components/layout/AppLayout/AppLayout';
import CollectionHeaderTitle from '../../components/presentational/CollectionHeaderTitle/CollectionHeaderTitle';
import { STORIES_SERVICES_COLLECTION_ID } from '../../constants';
import styles from './CollectionView.styles';

const CollectionView = observer(() => {
  const { locale } = useLocale();
  return (
    <AppLayout
      animation="fade-right"
      hasScrollRestored
      title="Explore the Archives"
    >
      <Box sx={styles.root}>
        <StoriesAPICollection
          key={locale.currentLocale}
          cacheKey="collection-view-{collectionId}"
          collectionId={STORIES_SERVICES_COLLECTION_ID}
          // connectRouter
          layout="tool"
          showLocaleSelector
          slots={{
            CollectionHeaderTitle,
          }}
        />
      </Box>
    </AppLayout>
  );
});

export default CollectionView;
