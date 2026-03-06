import type { Theme } from '@mui/material/styles';

const styles = {
  root: ({ palette }: Theme) => ({
    color: `${palette.text.primary} !important`,
    textDecoration: 'none !important',
  }),
};

export default styles;
