import Typography from '@material-ui/core/Typography';
import React from 'react';

import useStyles from './useStyles';

const Header = () => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <div className={classes.container}>
        <Typography
          className={classes.title}
          variant="h4"
        >
          Browse Collection
        </Typography>
      </div>
    </section>
  );
};

export default Header;
