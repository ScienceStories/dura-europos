import type { Theme } from '@mui/material/styles';

const styles = {
  button: ({ breakpoints, palette }: Theme) => ({
    borderRadius: 0,
    borderBottom: '2px solid transparent',
    fontSize: 10,
    fontWeight: 'bold',
    mr: 2,
    py: 0,
    textTransform: 'initial',

    '&:hover': {
      borderColor: palette.primary.main,
    },
    [breakpoints.up('sm')]: {
      fontSize: 12,
      fontWeight: 'inherit',
    },
    '&.--active': {
      borderColor: palette.primary.main,
    },
  }),
  content: ({ breakpoints }: Theme) => ({
    alignItems: 'flex-end',
    flexGrow: 1,
    justifyContent: 'space-between',
    p: 1,

    [breakpoints.down('sm')]: {
      justifyContent: 'center',
      p: 1,
    },
  }),
  navLinks: ({ breakpoints }: Theme) => ({
    '.logo': {
      mx: 2,
      width: 30,
    },

    '> div': {
      display: 'none',
      [breakpoints.up('xs')]: {
        display: 'flex',
      },
    },
  }),
  root: {
    backdropFilter: 'saturate(180%) blur(20px)',
    background: 'rgba(255, 255, 255, .7)',
  },
};

export default styles;
