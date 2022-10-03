import Typography from '@material-ui/core/Typography';
import React from 'react';

import { APP_NAME, Images } from '../../../constants';
import useStyles from './useStyles';

interface Props {
  label: string;
}

const Header = ({ label }: Props) => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <div className={classes.container}>
        <img
          alt={APP_NAME}
          className={classes.logo}
          src={Images.idea}
        />
        <Typography
          className={classes.title}
          variant="h4"
        >
          { label }
        </Typography>
      </div>
    </section>
  );
};

export default Header;
