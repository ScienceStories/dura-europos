import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Animation } from 'react-stories-api';

import { RoutePaths } from '../../../constants';
import styles from './CollectionHeaderTitle.styles';

export default function CollectionHeaderTitle() {
  return (
    <Animation
      animation="fade"
      persist
      speed={700}
    >
      <Typography
        color="textPrimary"
        component={Link}
        sx={styles.root}
        to={RoutePaths.Collection}
        variant="overline"
      >
        From the IDEA Collection
      </Typography>
    </Animation>
  );
}
