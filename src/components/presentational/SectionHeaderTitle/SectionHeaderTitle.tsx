import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { When } from 'react-if';

interface SectionHeaderTitleProps extends React.PropsWithChildren {
  readonly overline?: string;
}

export default function SectionHeaderTitle({
  children,
  overline = undefined,
}: SectionHeaderTitleProps) {
  return (
    <Box
      className="section-header-title"
      data-aos="fade-right"
      data-aos-delay="500"
      data-aos-duration="600"
    >
      <When condition={!!overline}>
        <Typography
          color="secondary"
          variant="overline"
        >
          {overline}
        </Typography>
      </When>
      <Typography
        color="primary"
        variant="h2"
      >
        {children}
      </Typography>
    </Box>
  );
}
