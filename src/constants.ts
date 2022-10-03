export const APP_BROWSE_URL = '/stories';
export const APP_HOME_URL = '/';
export const APP_NAME = 'Dura-Europos Archive Stories';
const BARD_URL = 'https://www.bard.edu/';
export const CLASSNAME_SEED = 'dura-europos-stories';
export const CLASSNAME_PRODUCTION_PREFIX = 'prod';
export enum Color {
  DarkGray = '#5d5d5d',
  Orange = '#c86919',
}
export const DEFAULT_PAGE_TITLE = APP_NAME;
const IDEA_ABOUT_URL = 'https://duraeuroposarchive.org/about';
export const IDEA_URL = 'https://duraeuroposarchive.org/';
export enum Images {
  bard = '/images/bard-logo.png',
  collectionHeader = '/images/dura-europos-banner.jpg',
  idea = '/images/idea-logo.png',
  neh = '/images/neh-logo.png',
  ss = '/images/science-stories-logo.png',
  yale = '/images/yale-logo.png',
}
export const MAP_URL = 'https://query.wikidata.org/embed.html#%23defaultView%3AMap%7B%20%22' +
  'layer%22%3A%20%22%3FsuperclassLabel%22%7D%0A%0A%20%20SELECT%20DISTINCT%20%3FDura_Europos' +
  '%20%3FDura_EuroposLabel%20%3Fplace%20%3FplaceLabel%20%3Fcoord%20%3Fclass%20%3FclassLabel' +
  '%20%3FsuperclassLabel%20WHERE%20%7B%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3Aser' +
  'viceParam%20wikibase%3Alanguage%20%22%5BAUTO_LANGUAGE%5D%2Cen%22.%20%7D%0A%20%20%3FDura' +
  '_Europos%20wdt%3AP189%20%3Fplace.%20%0A%20%20%3Fplace%20wdt%3AP361%20wd%3AQ464266.%0A%' +
  '20%20%20%20%3Fplace%20wdt%3AP625%20%3Fcoord.%0A%20%20%3FDura_Europos%20wdt%3AP31%20%3Fcl' +
  'ass.%0A%20%20%3Fclass%20wdt%3AP279%20%3Fsuperclass.%0A%7D';
const NEH_URL = 'https://www.neh.gov/';
export const STORIES_API_COLLECTION_ID = 40;
export const STORIES_API_ENDPOINT = 'https://stage.stories.k2.services';
export const STORIES_API_PUBLIC_KEY = 'VXXk65tD.XwGmUPbBwSUc0cUDAFYmpgXQjNZtvrk4';
export const STORIES_API_TIMELINE_SPARQL_QUERY_ID = 6;
export const SCIENCE_STORIES_URL = 'http://sciencestories.io';
export const YDEA_URL = 'https://ydea.yale.edu/';
export const FooterLinks = [
  { name: 'International (Digital) Dura-Europos Archive', logo: Images.idea, url: IDEA_URL },
  { name: 'Science Stories', logo: Images.ss, url: SCIENCE_STORIES_URL },
  { name: 'Bard College', logo: Images.bard, url: BARD_URL },
  { name: 'National Endowment for the Humanities', logo: Images.neh, url: NEH_URL },
  { name: 'Yale Digital Dura-Europos Archive', logo: Images.yale, url: YDEA_URL },
];
export const NavLinks = [
  { path: APP_HOME_URL, title: 'Home' },
  { path: APP_BROWSE_URL, title: 'Browse Stories' },
  { href: IDEA_ABOUT_URL, title: 'About' },
];
