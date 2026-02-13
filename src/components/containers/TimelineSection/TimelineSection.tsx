import Grid from '@mui/material/Grid2';
import { useLocale } from 'react-stories-api';

import SectionHeaderTitle from '../../presentational/SectionHeaderTitle/SectionHeaderTitle';
import HistropediaTimeline from '../HistropediaTimeline';
import styles from './styles';

export default function TimelineSection() {
  const { t } = useLocale();
  return (
    <Grid
      container
      sx={styles.root}
    >
      <Grid
        size={12}
        sx={styles.header}
      >
        <SectionHeaderTitle overline={t('timeline.overline')}>
          {t('timeline.header')}
        </SectionHeaderTitle>
      </Grid>
      <Grid size={12}>
        <HistropediaTimeline />
      </Grid>
    </Grid>
  );
}
