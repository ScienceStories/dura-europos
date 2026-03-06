/* eslint-disable react/iframe-missing-sandbox */
import Box from '@mui/material/Box';

import { MAP_URL } from '../../../constants';
import styles from './styles';

function CollectionMap() {
  return (
    <Box sx={styles.root}>
      <iframe
        referrerPolicy="origin"
        sandbox="allow-scripts allow-same-origin allow-popups"
        src={MAP_URL}
        title="Query Map"
      />
    </Box>
  );
}

export default CollectionMap;
