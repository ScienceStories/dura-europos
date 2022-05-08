import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import { APP_NAME } from '../../../constants';
import useStyles from './useStyles';

const AboutContainer = () => {
  const classes = useStyles();
  return (
    <Grid
      className={classes.root}
      container
      justify="center"
    >
      <Grid
        item
        xs={12}
      >
        <Typography
          className={classes.header}
          variant="overline"
        >
          About the Project
        </Typography>
        <Typography>
          The ancient site of Dura-Europos is situated on the western bank of the Euphrates river,
          not far from the village of Salihiyah in modern Syria. First called “Europos”, the
          Hellenistic Seleucid Empire founded the city around 300 BCE. Later, it was controlled
          successively by the Parthian Empire (2nd century BCE-later second century CE), and the
          Roman Empire (from the later second century CE), and known to inhabitants as “Dura”
          (the fortress) thanks to its role in frontier defense. The hyphenated name is a modern
          construct that reflects the city’s historical and cultural complexity.
          <br/><br/>
          In the 250s CE, the site was threatened by a series of Sasanian Persian campaigns.
          Attempting to shore-up the city’s defences in advance of attack, Roman soldiers
          garrisoned at Dura constructed a massive earthen embankment to reinforce the vulnerable
          western wall. In a move that would prove fateful for the site’s exceptional
          archaeological preservation, buildings in the vicinity of the west wall–including a
          Christian church, a Jewish synagogue, and various pagan temples that attest to the
          city’s ethinic and cultural diversity–were requisitioned and filled with earth and
          debris. What was at the time a highly destructive process, in fact created
          (together with the hot, dry climate) the conditions for the site’s extraordinary
          degree of preservation.
          <br/><br/>
          Thanks to these highly unique circumstances, large sections of rare mural painting,
          and hundreds of objects made from organic materials survive at Dura-Europos. For this
          reason, the site provides unparalleled glimpses into the multicultural, religiously
          diverse frontier life, and the running of a military garrison with coexisting soldiers
          and civilians.
          <br/><br/>
          We introduce { APP_NAME }, a multimedia application for viewing artifacts and
          places related to the Dura-Europos archaeological excavation. We describe the process
          of mapping data to the Wikidata data model, adding data to Wikidata, and then using the
          data to power an interactive application for viewing images of the artifacts in the
          context of their metadata. We contextualize this project as an example of using
          knowledge graphs in research projects in order to leverage technologies of the Semantic
          Web in such a way that data related to the project can be easily combined with other
          data on the web.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default AboutContainer;
