import Grid from '@mui/material/Grid2';

import SectionHeaderTitle from '../../presentational/SectionHeaderTitle/SectionHeaderTitle';
import HistropediaTimeline from '../HistropediaTimeline';
import styles from './styles';

export default function TimelineSection() {
  return (
    <Grid
      container
      sx={styles.root}
    >
      <Grid
        size={12}
        sx={styles.header}
      >
        <SectionHeaderTitle overline="Artifacts over time">
          Over 14 Thousand Photographed Artifacts and Counting
        </SectionHeaderTitle>
      </Grid>
      <Grid size={12}>
        <HistropediaTimeline />
      </Grid>
    </Grid>
  );
}
