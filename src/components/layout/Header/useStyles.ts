import { makeStyles } from '@material-ui/core/styles';

import { Images } from '../../../constants';


const useStyles = makeStyles((theme) => ({
  container: {
    alignItems: 'end',
    background: '#bd53196b',
    display: 'flex',
    justifyContent: 'space-between',
    textAlign: 'right',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
  },
  logo: {
    background: '#f3e8e2',
    padding: theme.spacing(2),
    maxHeight: 80,
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  root: {
    backgroundImage: `url(${Images.collectionHeader})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
  },
  title: {
    color: theme.palette.background.paper,
    textShadow: '1px 2px 6px black',
    padding: theme.spacing(5),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
      opacity: 0,
      paddingTop: theme.spacing(3),
    },
  },
}));

export default useStyles;
