import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';

import { FooterLinks, IDEA_URL, SCIENCE_STORIES_URL } from '../../../constants';
import styles from './styles';

const copyDate = `© ${new Date().getFullYear()}`;

function Footer() {
  return (
    <Box
      component="footer"
      sx={styles.root}
    >
      <Grid
        container
        sx={styles.container}
      >
        {FooterLinks.map(({ logo, name, url }) => (
          <Grid
            key={`footer-${name}`}
            size={{
              lg: 4,
              md: 6,
              sm: 12,
            }}
          >
            <Button
              href={url}
              sx={styles.button}
              target="_blank"
            >
              <img
                alt={name}
                src={logo}
              />
            </Button>
          </Grid>
        ))}
      </Grid>
      <Grid>
        <Grid
          size={10}
          sx={styles.credit}
        >
          <Typography
            color="textSecondary"
            variant="caption"
          >
            {copyDate}
            , collaborative project by the
            {' '}
            <a
              href={IDEA_URL}
              rel="noreferrer"
              target="_blank"
            >
              International (Digital) Dura-Europos Archive
            </a>
            {' '}
            in collaboration with
            {' '}
            <a
              href={SCIENCE_STORIES_URL}
              rel="noreferrer"
              target="_blank"
            >
              Science Stories
            </a>
            , powered by
            {' '}
            <a
              href="https://stories.k2.services"
              rel="noreferrer"
              target="_blank"
            >
              Stories Services
            </a>
          </Typography>
        </Grid>
      </Grid>
    </Box>

  );
}

export default Footer;
