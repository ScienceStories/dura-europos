import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    color: theme.palette.secondary.main,
    fontSize: theme.typography.h5.fontSize,
    textTransform: 'initial',
  },
  root: {
    background: theme.palette.background.paper,
    boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%)',
    padding: theme.spacing(3),
    textAlign: 'left',
    zIndex: 1,
    [theme.breakpoints.up('md')]: {
      paddingBottom: theme.spacing(15),
      paddingLeft: theme.spacing(10),
      paddingRight: theme.spacing(10),
      paddingTop: theme.spacing(5),
    },
  },
}));

export default useStyles;
