import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  timelineHeader: {
    background: theme.palette.primary.main,
    padding: theme.spacing(5),
  },
  timelineHeaderText: {
    color: theme.palette.background.paper,
  },
  timelineWrapper: {
    paddingBottom: theme.spacing(6),
    paddingTop: theme.spacing(6),
  }
}));

export default useStyles;
