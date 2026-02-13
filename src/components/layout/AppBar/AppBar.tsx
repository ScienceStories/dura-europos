import MuiAppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import { NavLink, useLocation } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import { LocaleActionButton, useLocale } from 'react-stories-api';

import { NavLinks } from '../../../constants';
import HideOnScroll from '../../transitions/HideOnScroll/HideOnScroll';
import styles from './styles';

const toComponent = (path: string) => {
  if (path.startsWith('http')) {
    return 'a';
  }
  if (path.includes('#')) {
    return NavHashLink;
  }
  return NavLink;
};

function AppBar() {
  const location = useLocation();
  const { t } = useLocale();
  const activeRoute = (path: string) => location.pathname === path;
  const linkClass = (path: string) => (activeRoute(path) ? '--active' : '');
  return (
    <HideOnScroll>
      <MuiAppBar
        color="inherit"
        elevation={0}
        sx={styles.root}
      >
        <Grid
          container
          sx={styles.content}
        >
          <Grid sx={styles.navLinks}>
            <div>
              <NavHashLink
                smooth
                to="/#"
              >
                <img
                  alt="Dura-Europos Archives"
                  className="logo"
                  src="/images/idea-logo.png"
                />
              </NavHashLink>
              {NavLinks.map(({ href, path, title }) => (
                <Button
                  key={title}
                  className={linkClass(path || href || '')}
                  color="primary"
                  // @ts-expect-error: building a dynamic button
                  component={toComponent(path || href || '')}
                  href={href}
                  smooth="true"
                  sx={styles.button}
                  target={href ? '_blank' : null}
                  to={path}
                >
                  {t(title)}
                </Button>
              ))}
            </div>
          </Grid>
          <LocaleActionButton id="AppBarLocaleButton" sx={styles.localeButton} />
        </Grid>
      </MuiAppBar>
    </HideOnScroll>
  );
}

export default AppBar;
