import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import { Fragment } from 'react/jsx-runtime';
import { Else, If, Then } from 'react-if';
import { ParallaxBanner } from 'react-scroll-parallax';
import { StoriesAPIButton, useStoriesAPITheme } from 'react-stories-api';

import aboutTimeline from '../../../data/about-timeline.json';
import SectionHeaderTitle from '../../presentational/SectionHeaderTitle/SectionHeaderTitle';
import styles from './styles';

type AboutTimelineItem = {
  readonly content: string;
  readonly imageAlt: string;
  readonly imageObjectPosition: string;
  readonly imageSize: number;
  readonly imageSrc: string;
  readonly index: number;
  readonly title: string;
  readonly url: string;
};

const renderImageContainer = (item: AboutTimelineItem, aos: string, includeDelay: boolean) => (
  <Grid
    data-aos={aos}
    data-aos-delay={includeDelay ? '1500' : undefined}
    data-aos-duration="1000"
    maxHeight={item.index === 0 ? { xs: 300, md: 850 } : undefined}
    size={{ xs: 12, md: item.imageSize }}
    sx={styles.imageContainer(item.imageObjectPosition)}
  >
    <img
      alt={item.imageAlt}
      loading="lazy"
      src={item.imageSrc}
    />
  </Grid>
);

const renderContentContainer = (
  item: AboutTimelineItem,
  includeDelay: boolean,
  shownFirst: boolean,
) => (
  <Grid
    data-aos="fade-up"
    data-aos-delay={includeDelay ? '1000' : undefined}
    data-aos-duration="750"
    justifyContent={shownFirst ? 'flex-end' : 'flex-start'}
    size={{ xs: 12, md: 12 - item.imageSize }}
    sx={styles.contentContainer}
  >
    <Box
      sx={styles.content}
    >
      <Typography
        sx={styles.subtitle}
        variant="h3"
      >
        {item.title}
      </Typography>
      <Typography
        sx={styles.description}
        variant="body1"
      >
        {item.content}
      </Typography>
      <StoriesAPIButton
        button={item}
        data-aos="fade"
        data-aos-delay="500"
        data-aos-duration="1000"
        disableElevation
        variant="contained"
      />
    </Box>
  </Grid>
);

// TODO: move to utils
const isEven = (num: number) => num % 2 === 0;

export default function AboutSection() {
  const { isMobile } = useStoriesAPITheme();
  const showImageFirst = (index: number) => isMobile || isEven(index);
  const getImageAOS = (index: number) => {
    if (isMobile) return 'fade-up';
    return isEven(index) ? 'fade-right' : 'fade-left';
  };
  const delayAnimations = !isMobile;

  return (
    <Grid container>
      <Grid
        size={12}
        sx={styles.header}
      >
        <SectionHeaderTitle overline="From 300 BCE to Today">
          About the Project
        </SectionHeaderTitle>
      </Grid>
      <Grid
        size={12}
        sx={{
          boxShadow: 5,
          clipPath: 'inset(0px -10px -10px -10px)', /* Clip the top shadow */
        }}
      >
        <Grid container>
          {aboutTimeline.map((item, index) => (
            <Fragment
              key={item.storyId}
            >
              <If condition={showImageFirst(index)}>
                <Then>
                  {renderImageContainer(item, getImageAOS(index), delayAnimations)}
                  {renderContentContainer(item, delayAnimations, false)}
                </Then>
                <Else>
                  {renderContentContainer(item, delayAnimations, true)}
                  {renderImageContainer(item, getImageAOS(index), delayAnimations)}
                </Else>
              </If>
              <Grid container />
            </Fragment>
          ))}
        </Grid>
      </Grid>

      <Grid size={12} sx={{ boxShadow: 2 }}>
        <ParallaxBanner
          layers={[{
            image: 'https://media.artgallery.yale.edu/duraeuropos/data/dura/images/gallery-4/zoom/z-1-01.jpg',
            opacity: [0, 2],
            speed: -8,
          }]}
          style={{ height: 300 }}
        />
      </Grid>
    </Grid>
  );
}
