import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { StatusPage, type StatusPageProps } from 'react-stories-api';

import { RoutePaths } from '../../constants';
import styles from './ErrorFallback.styles';

function ErrorFallback({ message = 'Something went wrong' }: StatusPageProps) {
  return (
    <StatusPage
      isFullscreen
      message={message}
    >
      <Button
        component={Link}
        size="small"
        sx={styles.button}
        to={RoutePaths.Home}
        variant="contained"
      >
        Go Home
      </Button>
    </StatusPage>
  );
}

export default ErrorFallback;
