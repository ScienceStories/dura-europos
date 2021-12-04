import { makeStyles } from '@material-ui/core/styles';

import { Images } from '../../../constants';


const useStyles = makeStyles((theme) => ({
  container: {
    background: '#bd53196b',
    textAlign: 'right',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
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
