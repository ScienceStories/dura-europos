import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';

import { FooterLinks, IDEA_URL, SCIENCE_STORIES_URL } from '../../../constants';
import useStyles from './useStyles';

const Footer = () => {
  const classes = useStyles();
  const copyDate = `© ${new Date().getFullYear()}`;
  return (
    <footer className={classes.root}>
      <Grid
        alignItems="center"
        className={classes.container}
        container
        justifyContent="center"
      >
        {FooterLinks.map(({ logo, name, url }) => (
          <Grid
            item
            key={`footer-${name}`}
            lg={4}
            md={6}
            sm={12}
          >
            <Button
              className={classes.button}
              href={url}
              target="_blank"
            >
              <img
                alt={name}
                className={classes.logo}
                src={logo}
              />
            </Button>
          </Grid>
        ))}
        <Grid
          className={classes.credit}
          item
          xs={10}
        >
          <Typography variant="caption">
            { copyDate }
            <Button
              className={classes.creditBtn}
              color="secondary"
              href={IDEA_URL}
              size="small"
              target="_blank"
              variant="text"
            >
              International (Digital) Dura-Europos Archive
            </Button>
            in collaboration with
            <Button
              className={classes.creditBtn}
              color="secondary"
              href={SCIENCE_STORIES_URL}
              size="small"
              target="_blank"
              variant="text"
            >
              The ScienceStories.io Team
            </Button>
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
