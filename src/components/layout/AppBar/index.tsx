import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import React, { ChangeEventHandler, useState } from 'react';
import {
  NavLink,
  RouteComponentProps,
  useHistory,
  withRouter,
} from 'react-router-dom';

import { APP_BROWSE_URL, NavLinks } from '../../../constants';
import { searchURL } from '../../../utils/url';
import useStyles from './useStyles';

const AppBar = ({ location }: RouteComponentProps) => {
  const classes = useStyles();
  const activeRoute = (path: string) => location.pathname === path;
  const [formAction, setFormAction] = useState('');
  const history = useHistory();
  const handleSearchInput: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const { value } = target;
    const newURL = searchURL(undefined, value);
    return setFormAction(newURL);
  };
  const handleSubmit = () => history.push(formAction);
  const linkClass = (path: string) => (
    activeRoute(path) ? `${classes.linkActive} ${classes.link}` : classes.link
  );
  return (
    <Grid
      alignItems="flex-end"
      className={classes.root}
      container
      justify="space-between"
    >
      <Grid item>
        <div className={classes.navLinks}>
          {NavLinks.map(({ href, path, title }) => (
            <Button
              className={linkClass(path || href || '')}
              color="primary"
              component={path ? NavLink : 'a'}
              href={href}
              key={title}
              target={href && '_blank'}
              to={path}
            >
              { title }
            </Button>
          ))}
        </div>
      </Grid>
      {activeRoute(APP_BROWSE_URL) ? undefined : (
        <Grid item>
          <div className={classes.search}>
            <form onSubmit={handleSubmit}>
              <div className={classes.searchIcon}>
                <SearchIcon color="primary" />
              </div>
              <InputBase
                classes={{
                  input: classes.inputInput,
                  root: classes.inputRoot,
                }}
                color="primary"
                inputProps={{ 'aria-label': 'search' }}
                onChange={handleSearchInput}
                placeholder="Search Collection…"
              />
            </form>
          </div>
        </Grid>
      )}
    </Grid>
  );
}

export default withRouter(AppBar);
