import Grid from '@mui/material/Grid2';
import { observer } from 'mobx-react-lite';
import { StoriesAPICollection } from 'react-stories-api';

import { STORIES_SERVICES_COLLECTION_ID } from '../../../constants';
import styles from './styles';

const CollectionSection = observer(() => (
  <Grid
    container
    sx={styles.root}
  >
    <Grid size={12}>
      <StoriesAPICollection
        collectionId={STORIES_SERVICES_COLLECTION_ID}
        connectRouter
        layout="tool"
        showLocaleSelector
        showStoryId
      />
    </Grid>
  </Grid>
));

export default CollectionSection;
