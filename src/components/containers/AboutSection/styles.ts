const styles = {
  content: {
    maxWidth: 850,
  },
  contentContainer: {
    alignContent: 'center',
    alignItems: 'center',
    display: 'flex',
    p: { xs: 3, md: 10 },
  },
  description: {
    my: 3,
    whiteSpace: 'pre-wrap',
  },
  header: {
    m: 4,
    pt: 4,
  },
  imageContainer: (objectPosition: string) => ({

    img: {
      height: '100%',
      objectFit: 'cover',
      objectPosition,
      width: '100%',
    },
  }),
  quoteContainer: {
    alignContent: 'center',
    bgcolor: 'background.grey',
    px: 3,
    py: 4,
    textAlign: 'center',

    '& > h4': {
      m: 'auto',
      maxWidth: 800,
    },
  },
  subtitle: {
    color: 'primary.main',
    fontFamily: 'Yale',
    fontStyle: 'italic',
  },
};

export default styles;
