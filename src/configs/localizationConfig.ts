import type { LocalizationConfig } from 'react-stories-api/types';

const localizationConfig: LocalizationConfig = {
  defaultLocale: 'en',
  localeSettings: {},
  supportedLocales: ['en', 'ar', 'fr'],
  translations: {
    ar: {
      'about.timeline.0.content': '\tيقع موقع دورا-أوروبوس الأثري القديم على الضفة الغربية لنهر الفرات، بالقرب من قرية الصالحية في سوريا المعاصرة. وقد أسست هذه المدينة القديمة، التي عُرفت في بداياتها باسم "أوروبوس"، على يد الإمبراطورية السلوقية الهلنستية حوالي العام 300 قبل الميلاد. وفي فترة لاحقة، خضعت المدينة بالتتابع لسيطرة الإمبراطورية الفرثية (من القرن الثاني قبل الميلاد حتى أواخر القرن الثاني الميلادي) ثم الإمبراطورية الرومانية (ابتداءً من أواخر القرن الثاني الميلادي). أمّا بين سكانها فكانت تُعرف باسم "دورا" (أي الحصن)، نظرًا لدورها الدفاعي على الحدود. وأما الاسم المركّب "دورا-أوروبوس" فهو تسمية حديثة تعكس التعقيد التاريخي والثقافي الذي ميّز المدينة عبر العصور.',
      'about.timeline.0.title': 'حِصنٌ من حُصون التّاريخ',
      'about.timeline.1.content': '\tوفي خمسينيات القرن الثالث الميلادي، تعرّض الموقع لسلسلة من الحملات الفارسية الساسانية. واتخذت الحامية الرومانية في دورا، في إطار سعيها للتصدي لهذه الهجمات، خطوة كان لها في النهاية دورٌ هام في محافظة الموقع على آثاره بصورة فريدة، حيث بنى الجنود الرومان سدًا ترابيًا ضخمًا لتحصين الجدار الغربي للمدينة. فقاموا عمدًا بإخلاء السكان من المباني الموجودة في هذا الجانب من المدينة وملئها بالتراب والردم لتعزيز التحصينات، وكان من هذه الأبنية كنيسة مسيحية وكنيس يهودي ومعبد ميثراسي، والعديد من المعابد الوثنية الأخرى.  وهكذا تضافرت عملية الردم هذه، التي كانت تعتبر وقتها عملية تخريبية تمامًا، مع المناخ الجاف في المنطقة ليوفرا معًا الظروف الملائمة للحفاظ على آثار الموقع بهذه الجودة الفريدة. وبفضل هذه الظروف غير العادية، نجت في موقع دورا-أوروبوس أجزاء كبيرة من اللوحات الجدارية النادرة، والنقوش، ومئات القطع المصنوعة من مواد عضوية. وبذلك وفّر لنا الموقع نافذة لا مثيل لها للاطلاع على واقع الحياة في المدن التي كانت على الحدود بين ثقافات وأديان متنوعة، والكيفية التي كانت تنظّم بها الحامية العسكرية الرومانية التي عاش فيها الجنود والمدنيون جنبًا إلى جنب.',
      'about.timeline.1.title': 'إرثٌ غنيّ مُرصّع بثقافات متعددة',
      'about.timeline.2.content': '\tنقدّم لكم تطبيق "قصص أرشيف دورا-أوروبوس، الذي يوظّف تقنيات الويب الدلالي لتوفير بوابة متعددة اللغات لسبر أغوار التاريخ المعقّد للموقع. ويعتمد تطبيق القصص على عمليات الإثراء التشاركي في منصتي ويكي بيانات وويكيميديا كومنز، متجاوزًا نهج جمع البيانات الساكنة للوصول إلى تنسيق تشاركي مرن لرسم بياني معرفي يدعم التصفح والتعاون بعدة لغات في آن واحد.  تُقدّم آلية العمل هذه نموذج لكيفية الاستفادة من الأساليب الرقمية الناشئة لتذليل عقبات الوصول، وتوسيع شبكات التعاون المهنية على مستوى العالم، وتحسين سُبُل الوصول إلى المعلومات الموثقة بما يخدم الصالح العام (العالمي).',
      'about.title': 'نبذة عن المشروع',
      'app.title': 'قصص أرشيف دورا-أوروبوس',
      'error.fallbackButton': 'الصفحة الرئيسية',
      'home.tagline': 'تسخير قوة "البيانات المفتوحة المترابطة" لإعادة تجميع المعلومات الأثرية المتعلقة بموقع التراث الثقافي الهام دورا أوروبوس، ووضع هذه المعلومات في سياقها الصحيح.',
      'nav.about': 'عن المشروع',
      'nav.explore': 'استكشف',
      'nav.home': 'الصفحة الرئيسية',
      'story.collectionLink': 'استكشاف المزيد من القصص',
      'timeline.header': 'أكثر من 14 ألف قطعة أثرية موثقة بالصور، والمزيد قيد التوثيق',
    },
    en: {
      'about.timeline.0.content': '\tThe ancient site of Dura-Europos is situated on the western bank of the Euphrates River, not far from the village of Salihiyah in modern Syria. First called “Europos,” the city was founded by the Hellenistic Seleucid Empire around 300 BCE. Later, it was controlled successively by the Parthian Empire (2nd century BCE–late 2nd century CE) and the Roman Empire (from the late 2nd century CE), and known to its inhabitants as “Dura” (“the fortress”) thanks to its role in frontier defense. The hyphenated name is a modern construct that reflects the city’s historical and cultural complexity.',
      'about.timeline.0.title': 'A Fortress of History',
      'about.timeline.1.content': '\tIn the 250s CE, the site was threatened by a series of Sasanian Persian campaigns. Attempting to shore up the city’s defenses in advance of attack, Roman soldiers garrisoned at Dura constructed a massive earthen embankment to reinforce the vulnerable western wall. In a move that would prove fateful for the site’s exceptional archaeological preservation, buildings in the vicinity of the west wall—including a Christian church, a Jewish synagogue, and various pagan temples, as well as parts of the city’s enclosing structures—were depopulated and filled with earth and debris.\n\n\tWhat was at the time a highly destructive process, in fact, created—together with the region’s hot, dry climate—the conditions for the site’s extraordinary degree of preservation. Thanks to these highly unusual circumstances, large sections of rare mural paintings, inscriptions, and hundreds of objects made from organic materials have survived at Dura-Europos. For this reason, the site provides unparalleled glimpses into multicultural, religiously diverse frontier life, as well as the organization of a Roman military garrison where soldiers and civilians coexisted.',
      'about.timeline.1.title': 'A Legacy of Multicultural Tapestry',
      'about.timeline.2.content': '\tWe introduce Dura-Europos Archive Stories, a multimedia application for viewing artifacts and places related to the Dura-Europos archaeological excavation. We describe the process of mapping data to the Wikidata data model, adding data to Wikidata, and then using that data to power an interactive application for viewing images of the artifacts in the context of their metadata. We contextualize this project as an example of using knowledge graphs in research projects to leverage the technologies of the Semantic Web, enabling project-related data to be easily combined with other data available online.',
      'about.timeline.2.title': 'Dura-Europos Archive Stories: Bridging Past and Present',
      'about.title': 'About the Project',
      'app.title': 'Dura-Europos Archive Stories',
      'error.fallbackButton': 'Go Home',
      'home.tagline': 'Harnessing the power of Linked Open Data to reassemble and re-contextualize archaeological information related to the important cultural heritage site of Dura-Europos',
      'nav.about': 'About',
      'nav.explore': 'Explore',
      'nav.home': 'Home',
      'story.collectionLink': 'Explore More Stories',
      'timeline.header': 'Over 14 Thousand Photographed Artifacts and Counting',
      'timeline.overline': 'Artifacts over time',
    },
    fr: {
      'app.title': "Histoires d'archives de Doura-Europos",
      'error.fallbackButton': 'Accueil',
      'nav.home': 'Accueil',
      'story.collectionLink': 'Explorer plus d\'histoires',
      'home.tagline': 'Exploiter la puissance des données liées ouvertes pour réassembler et recontextualiser les informations archéologiques liées au site du patrimoine culturel important de Doura-Europos',
    },
  },

};

export default localizationConfig;
