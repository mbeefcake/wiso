export type ServiceCategory = 'ontstoppen' | 'inspectie' | 'reparatie';

export interface ServiceImage {
  url: string;
  alt: string;
}

export interface WisoService {
  id: string;
  title: string;
  shortTitle: string;
  category: ServiceCategory;
  categoryLabel: string;
  badge?: string;
  summary: string;
  paragraphs: string[];
  bulletLeadIn?: string;
  bullets: string[];
  images: ServiceImage[];
  ctaLabel: string;
}

export interface QuickProblem {
  id: string;
  symptom: string;
  urgencyLabel: string;
  recommendedServiceId: string;
  recommendedTitle: string;
  actionSummary: string;
  specs: string;
}

export const COMPANY_INFO = {
  name: 'Wiso Allround ontstoppingsbedrijf',
  shortName: 'WISO',
  street: 'Markslagweg 1',
  postalCode: '7481 RE',
  city: 'Haaksbergen',
  phoneDisplay: '(053) 435 68 24',
  phoneRaw: '(053) 4356824',
  phoneHref: 'tel:+31534356824',
  email: 'robert@hubertmail.nl',
  introHeading: 'Allround ontstoppingsbedrijf Wiso',
  introText:
    'Al 25 jaar specialist in het reinigen, ontstoppen, inspecteren en repareren van rioleringen voor particulier en bedrijf.',
};

export const QUICK_PROBLEMS: QuickProblem[] = [
  {
    id: 'verstopping',
    symptom: 'WC, douche of keukenafvoer verstopt',
    urgencyLabel: 'Acute verstopping',
    recommendedServiceId: 'rioolreiniging',
    recommendedTitle: 'Rioolreiniging en -ontstopping',
    actionSummary:
      'Frezen tot ca. 50 m en hogedrukreiniging tot ca. 100 m voor leidingen van 32 tot 250 mm.',
    specs: '32–250 mm · Ter plaatse overleg',
  },
  {
    id: 'stank',
    symptom: 'Rioolstank of vieze lucht in huis',
    urgencyLabel: 'Snelle opsporing',
    recommendedServiceId: 'stankdetectie',
    recommendedTitle: 'Rioolstank-detectie (Rookproef)',
    actionSummary:
      'Met veilige rook onder lage overdruk maken wij scheuren en foute aansluitingen direct zichtbaar.',
    specs: 'Lage overdruk · Direct resultaat',
  },
  {
    id: 'ratten',
    symptom: 'Rattenoverlast via het riool',
    urgencyLabel: 'Definitieve wering',
    recommendedServiceId: 'rvs-keerklep',
    recommendedTitle: 'Roestvrijstalen keerklep (Ø 125 mm)',
    actionSummary:
      'Montage van een knaagbestendige RVS-keerklep in het ontstoppingsstuk van bestaande of nieuwe systemen.',
    specs: 'Ø 125 mm · Duurzaam RVS',
  },
  {
    id: 'defect',
    symptom: 'Verzakking, wortelingroei of oud gresriool',
    urgencyLabel: '5 jaar garantie',
    recommendedServiceId: 'rioolreparatie',
    recommendedTitle: 'Rioolreparatie en -aanleg',
    actionSummary:
      'Herstel of vervanging door modern PVC tot aan de gemeente-aansluiting met een vaste prijsafspraak vooraf.',
    specs: 'Vaste prijs · 5 jaar garantie',
  },
  {
    id: 'inspectie',
    symptom: 'Terugkerende verstopping of verbouwingsplan',
    urgencyLabel: 'Inzicht zonder graven',
    recommendedServiceId: 'camera-inspectie',
    recommendedTitle: 'Camera-inspectie & leidingdetectie',
    actionSummary:
      'Lokaliseer blokkades, leidingen en verborgen putten nauwkeurig zonder onnodig graaf- en breekwerk.',
    specs: 'Camera-onderzoek · Radiodetectie',
  },
  {
    id: 'kruipruimte',
    symptom: 'Vocht, lekkage of ongedierte in kruipruimte',
    urgencyLabel: 'Preventie & controle',
    recommendedServiceId: 'kruipruimte-inspectie',
    recommendedTitle: 'Kruipruimte-inspectie',
    actionSummary:
      'Controle op ongedierte en lekkages aan riolering, afvoer-, water- en eventuele C.V.-leidingen.',
    specs: 'Vochtpreventie · Hygiëne',
  },
  {
    id: 'dakgoot',
    symptom: 'Overlopende dakgoot of vochtige muren',
    urgencyLabel: 'Schadepreventie',
    recommendedServiceId: 'dakgootreiniging',
    recommendedTitle: 'Dak(goot)reiniging',
    actionSummary:
      'Verwijdert bladeren en vuil om doorslaande muren, schimmel en lekkende daken te voorkomen.',
    specs: 'Platte & schuine daken',
  },
  {
    id: 'vetput',
    symptom: 'Septic tank, vetput vol of onderhoudscontract',
    urgencyLabel: 'Particulier & zakelijk',
    recommendedServiceId: 'septic-vetput',
    recommendedTitle: 'Putonderhoud & preventief contract',
    actionSummary:
      'Milieuvriendelijk leegzuigen en afvoeren (op afroep of periodiek) of een onderhoudscontract op maat.',
    specs: 'Op afroep of contract',
  },
];

export const WISO_SERVICES: WisoService[] = [
  {
    id: 'rioolreiniging',
    title: 'Rioolreiniging en -ontstopping',
    shortTitle: 'Ontstopping & Reiniging',
    category: 'ontstoppen',
    categoryLabel: 'Ontstoppen & Reinigen',
    badge: '32–250 mm',
    summary:
      'Reinigen en ontstoppen van alle afvoeren en riolen van 32 mm tot ca. 250 mm doorsnede.',
    paragraphs: [
      'Onze kernactiviteit is het verhelpen van verstoppingen in elke situatie. Ter plaatse bepalen wij in overleg met u de juiste werkwijze met moderne apparatuur.',
    ],
    bullets: [
      'Frezen tot circa 50 meter lengte',
      'Reinigen met hoge druk tot circa 100 meter lengte',
      'Geschikt voor leidingen van 32 mm t/m ca. 250 mm doorsnede',
    ],
    images: [
      {
        url: 'https://www.wiso.nl/images/vetput-busjes.jpg',
        alt: 'Groene WISO servicewagens op locatie bij reiniging en ontstopping',
      },
      {
        url: 'https://www.wiso.nl/images/rioolontstop.jpg',
        alt: 'Reiniging van afvoerput en riolering',
      },
    ],
    ctaLabel: 'Dienst aanvragen',
  },
  {
    id: 'rioolreparatie',
    title: 'Rioolreparatie en -aanleg',
    shortTitle: 'Reparatie & Aanleg',
    category: 'reparatie',
    categoryLabel: 'Reparatie & Preventie',
    badge: '5 jaar garantie',
    summary:
      'Herstel of complete vervanging van riolering tot aan de gemeente-aansluiting of erfscheiding.',
    paragraphs: [
      'Wij verhelpen alle defecten aan riool en afvoer met kosteloos advies en een vaste prijsopgave vooraf, zonder bijkomende kosten achteraf. Op reparaties en nieuwe systemen geven wij 5 jaar garantie.',
    ],
    bulletLeadIn: 'Voordelen van vervangen naar modern PVC:',
    bullets: [
      'Geen lekkage bij aansluitingen (i.t.t. oude gresleidingen met wortelingroei en breuk)',
      'Altijd passende verbindingen voor elke situatie',
      'Eenvoudig te wijzigen bij aanbouw of verbouw',
    ],
    images: [
      {
        url: 'https://www.wiso.nl/images/rep-aanleg1.jpg',
        alt: 'Oude Gres leiding met wortel-ingroei en lekkagerisico',
      },
      {
        url: 'https://www.wiso.nl/images/rep-aanleg2.jpg',
        alt: 'Moderne PVC rioleringsbuis vakkundig aangelegd',
      },
    ],
    ctaLabel: 'Dienst aanvragen',
  },
  {
    id: 'stankdetectie',
    title: 'Rioolstank-detectie',
    shortTitle: 'Stankdetectie',
    category: 'inspectie',
    categoryLabel: 'Inspectie & Detectie',
    badge: 'Rookdetectie',
    summary:
      'Opsporen van rioollucht in huis met veilige rook onder lage overdruk.',
    paragraphs: [
      'Heeft u last van rioolstank in huis? Met een eenvoudige en efficiënte rookproef brengen wij de oorzaak snel in beeld zonder onnodig breekwerk.',
    ],
    bullets: [
      'Afvoersysteem wordt gevuld onder lage overdruk',
      'Lekkages, scheuren en open verbindingen direct zichtbaar',
      'Resultaat ter plaatse vastgesteld',
    ],
    images: [
      {
        url: 'https://www.wiso.nl/images/rookdetectie.jpg',
        alt: 'Uitvoering van rioolstank-detectie met rookgenerator',
      },
    ],
    ctaLabel: 'Dienst aanvragen',
  },
  {
    id: 'camera-inspectie',
    title: 'Riool camera-inspectie',
    shortTitle: 'Camera-inspectie',
    category: 'inspectie',
    categoryLabel: 'Inspectie & Detectie',
    badge: 'Zonder graafwerk',
    summary:
      'Lokaliseer wortelingroei, stenen of breuken in het riool nauwkeurig met een rioolcamera.',
    paragraphs: [
      'Met een rioolcamera brengen wij verstoppingen en leidingdefecten direct in beeld. Desgewenst ontvangt u de onderzoeksresultaten, waarmee u veel graaf- en breekwerk bespaart.',
    ],
    bullets: [
      'Haarscherpe inspectie van takken, stenen en breuken',
      'Exacte plaatsbepaling van het defect',
      'Opnamen beschikbaar in overleg',
    ],
    images: [
      {
        url: 'https://www.wiso.nl/images/takinriool.jpg',
        alt: 'Camera-opname van wortel- en takgroei in het riool',
      },
      {
        url: 'https://www.wiso.nl/images/steeninriool.jpg',
        alt: 'Camera-opname van een steen in de rioleringsbuis',
      },
    ],
    ctaLabel: 'Dienst aanvragen',
  },
  {
    id: 'onderhoud-contract',
    title: 'Onderhoud (contract)',
    shortTitle: 'Onderhoudscontract',
    category: 'reparatie',
    categoryLabel: 'Reparatie & Preventie',
    badge: 'Particulier & zakelijk',
    summary:
      'Voorkom verstoppingen en onverwachte kosten met periodieke controle en reiniging.',
    paragraphs: [
      'Op contractbasis controleren en reinigen wij uw afvoersystemen periodiek tegen een vaste, vooraf afgesproken prijs. Zo wordt de kans op verstopping tot een minimum beperkt.',
    ],
    bullets: [
      'Maatwerkpakketten voor bedrijven en particulieren',
      'Periodieke inspectie en preventieve reiniging',
      'Vaste prijsafspraak zonder verrassingen',
    ],
    images: [
      {
        url: 'https://www.wiso.nl/images/man.jpg',
        alt: 'WISO monteur tijdens preventief rioolonderhoud',
      },
    ],
    ctaLabel: 'Dienst aanvragen',
  },
  {
    id: 'septic-vetput',
    title: 'Septic tank en vetputonderhoud',
    shortTitle: 'Septic tank & Vetput',
    category: 'ontstoppen',
    categoryLabel: 'Ontstoppen & Reinigen',
    badge: 'Milieuvriendelijk',
    summary:
      'Leegzuigen en milieuvriendelijk afvoeren van septic tanks en vetputten.',
    paragraphs: [
      'Wij verzorgen het vakkundig legen en reinigen van septic tanks en vetputten, met milieuvriendelijke afvoer van slib en vetresten.',
    ],
    bullets: [
      'Op afroep of volgens vooraf gemaakte periodieke afspraken',
      'Geschikt voor horeca, bedrijven en het buitengebied',
      'Milieuvriendelijke verwerking van slib en vetresten',
    ],
    images: [
      {
        url: 'https://www.wiso.nl/images/vetput.jpg',
        alt: 'Leegzuigen en reinigen van een verzamelput / vetput',
      },
    ],
    ctaLabel: 'Dienst aanvragen',
  },
  {
    id: 'dakgootreiniging',
    title: 'Dak(goot)reiniging',
    shortTitle: 'Dak(goot)reiniging',
    category: 'ontstoppen',
    categoryLabel: 'Ontstoppen & Reinigen',
    badge: 'Schadepreventie',
    summary:
      'Tijdig verwijderen van bladeren en vuil voorkomt natte muren, schimmel en lekkages.',
    paragraphs: [
      'Waterschade aan woningen ontstaat vaak door bladeren en rommel op daken en in goten. Tijdig onderhoud voorkomt overlast en kostbare gevolgschade.',
    ],
    bulletLeadIn: 'Schades die wij voorkomen:',
    bullets: [
      'Natte en doorslaande muren (schimmel)',
      'Lekkage binnen het dakbeschot',
      'Doorlekkende platte en schuine daken',
    ],
    images: [
      {
        url: 'https://www.wiso.nl/images/dakgoot.jpg',
        alt: 'Dakgoot vol bladeren voor reiniging',
      },
      {
        url: 'https://www.wiso.nl/images/schimmelmuur.jpg',
        alt: 'Waterschade en schimmelvorming aan muur door verstopte dakgoot',
      },
    ],
    ctaLabel: 'Dienst aanvragen',
  },
  {
    id: 'kruipruimte-inspectie',
    title: 'Kruipruimte-inspectie',
    shortTitle: 'Kruipruimte-inspectie',
    category: 'inspectie',
    categoryLabel: 'Inspectie & Detectie',
    badge: 'Vocht & ongedierte',
    summary:
      'Controle op lekkages aan leidingen en de aanwezigheid van ongedierte.',
    paragraphs: [
      'Een grondige inspectie voorkomt vochtige kruipruimtes, vermindert stankoverlast en onnodig waterverlies en voorkomt gezondheidsrisico’s door ongedierte.',
    ],
    bullets: [
      'Ongedierte (ratten, muizen, muggen)',
      'Lekkage van riolering en afvoeren',
      'Lekkage van water- en eventuele C.V.-leidingen',
    ],
    images: [
      {
        url: 'https://www.wiso.nl/images/kruipruimte.jpg',
        alt: 'Inspectie van leidingen en bodem in de kruipruimte',
      },
    ],
    ctaLabel: 'Dienst aanvragen',
  },
  {
    id: 'leidingdetectie',
    title: 'Leidingdetectie',
    shortTitle: 'Leidingdetectie',
    category: 'inspectie',
    categoryLabel: 'Inspectie & Detectie',
    badge: 'Radiodetectie',
    summary:
      'Breng verborgen leidingen, verzamelputten en tanks vóór een verbouwing in kaart.',
    paragraphs: [
      'Met geavanceerde detectieapparatuur brengen wij uw rioolstelsel vóór een verbouwing of aanbouw nauwkeurig in kaart, zodat onnodig graaf- en breekwerk achterwege blijft.',
    ],
    bullets: [
      'Verborgen leidingtracé exact in beeld',
      'Opsporen van verzamel-, bezinkputten en septic tanks',
      'Voorkomt verrassingen bij graaf- of bouwwerkzaamheden',
    ],
    images: [
      {
        url: 'https://www.wiso.nl/images/radiodetectie.jpg',
        alt: 'Leidingdetectie met geavanceerde radiodetectie-apparatuur',
      },
    ],
    ctaLabel: 'Dienst aanvragen',
  },
];

export const GRES_VS_PVC = {
  gresTitle: 'Nadelen van een oude Gres leiding',
  gresImage: {
    url: 'https://www.wiso.nl/images/rep-aanleg1.jpg',
    alt: 'Oude Gres leiding met beschadigingen',
  },
  gresPoints: [
    'Bij aansluiting veelal wortel-ingroei',
    'Lekkage door breuk als gevolg van verzakking en slechte verbindingen',
  ],
  pvcTitle: 'Voordelen van een moderne PVC rioleringsbuis',
  pvcImage: {
    url: 'https://www.wiso.nl/images/rep-aanleg2.jpg',
    alt: 'Moderne PVC rioleringsbuis',
  },
  pvcPoints: [
    'Geen lekkage bij de aansluitingen',
    'Altijd passende aansluitingen voor elke situatie',
    'Eenvoudig te wijzigen bij aanbouw of verbouw',
  ],
};

export const RVS_KEERKLEP_PRODUCT = {
  id: 'rvs-keerklep',
  title: 'Roestvrijstalen keerklep',
  diameter: '125 mm',
  price: 'Op aanvraag',
  description:
    'Keerklep van duurzaam roestvrijstaal te monteren in ontstoppingsstuk diam. 125 mm ter voorkoming van ratten in de woning via het riool.',
  replacementCaption:
    'Vervangen van keerkleppen door een gemodificeerd type RVS uitvoering voor bestaande systemen.',
  gallery: [
    {
      url: 'https://www.wiso.nl/images/prod2.jpg',
      alt: 'Roestvrijstalen keerklep',
      caption: 'Duurzame RVS uitvoering (Ø 125 mm)',
    },
    {
      url: 'https://www.wiso.nl/images/product1.jpg',
      alt: 'Gemodificeerde RVS keerklep gemonteerd in ontstoppingsstuk',
      caption: 'Gemonteerd in bestaand ontstoppingsstuk',
    },
    {
      url: 'https://www.wiso.nl/images/keerklep-ratten.jpg',
      alt: 'Vernielde keerklep',
      caption: 'Kunststof keerklep vernield door ratten',
    },
  ],
};

export const PREVENTION_TIPS = {
  intro: '',
  image: {
    url: 'https://www.wiso.nl/images/steneninriool.jpg',
    alt: 'Stenen en puin in riolering aangetroffen tijdens inspectie',
  },
  tips: [
    {
      title: 'Keukenafvoer vetvrij houden',
      text: 'Spoel de keukenafvoer maandelijks door met heet water en keukensoda om vetafzetting in de leiding te voorkomen.',
    },
    {
      title: 'Let op met toiletblokjes',
      text: 'Verwijder het toiletblokje tijdens het schoonmaken van de closetpot zodat dit niet per ongeluk meespoelt.',
    },
    {
      title: 'Periodiek onderhoud plannen',
      text: 'Laat leidingen periodiek reinigen en controleren om onverwachte verstoppingen en overstromingen te voorkomen.',
    },
  ],
};

export const SERVICE_AREA_CITIES = [
  { name: 'Haaksbergen', region: 'Twente (Vestiging)', country: 'NL' },
  { name: 'Enschede', region: 'Twente (Centrum werkgebied)', country: 'NL' },
  { name: 'Hengelo', region: 'Twente', country: 'NL' },
  { name: 'Almelo', region: 'Twente', country: 'NL' },
  { name: 'Goor', region: 'Twente', country: 'NL' },
  { name: 'Nijverdal', region: 'Twente', country: 'NL' },
  { name: 'Wierden', region: 'Twente', country: 'NL' },
  { name: 'Vriezenveen', region: 'Twente', country: 'NL' },
  { name: 'Tubbergen', region: 'Twente', country: 'NL' },
  { name: 'Denekamp', region: 'Twente', country: 'NL' },
  { name: 'Losser', region: 'Twente', country: 'NL' },
  { name: 'Lochem', region: 'Achterhoek', country: 'NL' },
  { name: 'Neede', region: 'Achterhoek', country: 'NL' },
  { name: 'Borculo', region: 'Achterhoek', country: 'NL' },
  { name: 'Eibergen', region: 'Achterhoek', country: 'NL' },
  { name: 'Groenlo', region: 'Achterhoek', country: 'NL' },
  { name: 'Lichtenvoorde', region: 'Achterhoek', country: 'NL' },
  { name: 'Gronau', region: 'Duitse grensstreek', country: 'DE' },
  { name: 'Bad Bentheim', region: 'Duitse grensstreek', country: 'DE' },
  { name: 'Nordhorn', region: 'Duitse grensstreek', country: 'DE' },
  { name: 'Epe', region: 'Duitse grensstreek', country: 'DE' },
  { name: 'Heek', region: 'Duitse grensstreek', country: 'DE' },
  { name: 'Vreden', region: 'Duitse grensstreek', country: 'DE' },
];
