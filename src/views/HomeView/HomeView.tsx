/* eslint-disable react/jsx-props-no-spreading */
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import { observer } from 'mobx-react-lite';
import { ParallaxBanner } from 'react-scroll-parallax';
import { useLocale } from 'react-stories-api';

import AboutSection from '../../components/containers/AboutSection/AboutSection';
import CollectionMap from '../../components/containers/CollectionMap/CollectionMap';
import CollectionSection from '../../components/containers/CollectionSection/CollectionSection';
import TimelineSection from '../../components/containers/TimelineSection/TimelineSection';
import AppLayout from '../../components/layout/AppLayout/AppLayout';
import { Images } from '../../constants';
import styles from './styles';

const baseFadeInProps = {
  'data-aos': 'fade-up',
  'data-aos-delay': '500',
  'data-aos-duration': '1000',
  'data-aos-once': 'true',
};

const HomeView = observer(() => {
  const { t } = useLocale();
  return (
    <AppLayout title="Archives">
      <Grid
        container
        sx={styles.root}
      >
        <Grid size={12}>
          <ParallaxBanner
            layers={[{
              image: Images.homeHeader,
              opacity: [1, 0, 'easeIn'],
              shouldAlwaysCompleteAnimation: true,
              scale: [1.3, 1, 'easeIn'],
              translateY: [0, 70, 'easeIn'],
              speed: -5,
            }]}
            style={{ height: 400, width: '100vw' }}
          />
        </Grid>
        <Grid
          {...baseFadeInProps}
          size={12}
          sx={styles.titleSection}
        >
          <img
            alt="Dura-Europos Archive Stories"
            className="logo"
            src="/images/idea-logo.png"
          />
          <Typography
            color="primary"
            variant="h1"
          >
            {t('app.title')}
          </Typography>
          <Typography
            color="textSecondary"
            variant="subtitle2"
          >
            {t('home.tagline')}
          </Typography>
        </Grid>

        <Grid
          {...baseFadeInProps}
          id="about"
          size={12}
        >
          <AboutSection />
        </Grid>
        <Grid
          {...baseFadeInProps}
          id="featured"
          size={12}
          sx={styles.mapSection}
        >
          <CollectionMap />
        </Grid>

        <Grid
          {...baseFadeInProps}
          id="timeline"
          size={12}
        >
          <TimelineSection />
        </Grid>

        <Grid
          {...baseFadeInProps}
          id="collection"
          size={12}
        >
          <CollectionSection />
        </Grid>
      </Grid>
    </AppLayout>
  );
});

export default HomeView;
