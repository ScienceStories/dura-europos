import type { LocalizationConfig } from 'react-stories-api/types';

const localizationConfig: LocalizationConfig = {
  defaultLocale: 'en',
  localeSettings: {},
  supportedLocales: ['en', 'ar', 'fr'],
  translations: {
    ar: {
      'app.title': 'قصص أرشيف دورا-أوروبوس',
      'story.collectionLink': 'استكشاف المزيد من القصص',
    },
    en: {
      'app.title': 'Dura-Europos Archive Stories',
      'story.collectionLink': 'Explore More Stories',
    },
    fr: {
      'app.title': "Histoires d'archives de Doura-Europos",
      'story.collectionLink': 'Explorer plus d\'histoires',
    },
  },

};

export default localizationConfig;
