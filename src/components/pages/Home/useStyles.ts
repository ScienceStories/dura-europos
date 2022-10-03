import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  logo: {
    maxHeight: 150,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  titleSection: {
    padding: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.h3.fontSize,
      padding: theme.spacing(2),
    },
  },
}));

export default useStyles;
