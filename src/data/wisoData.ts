export type ServiceCategory = 'ontstoppen' | 'inspectie' | 'reparatie';

export interface ServiceImage {
  url: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
}

export interface TechnicalSpec {
  label: string;
  value: string;
}

export interface WisoService {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  category: ServiceCategory;
  categoryLabel: string;
  metaDescription: string;
  badge: string;
  summary: string;
  paragraphs: string[];
  bulletLeadIn?: string;
  bullets: string[];
  specs: TechnicalSpec[];
  images: ServiceImage[];
  ctaLabel: string;
}

export interface DiagnosticProblem {
  id: string;
  symptom: string;
  urgencyLabel: string;
  recommendedTitle: string;
  recommendedHref: string;
  serviceId: string;
  actionSummary: string;
  specs: string;
}

export const COMPANY_INFO = {
  name: 'Wiso Allround ontstoppingsbedrijf',
  shortName: 'WISO',
  street: 'Markslagweg 1',
  postalCode: '7481 RE',
  city: 'Haaksbergen',
  country: 'Nederland',
  phoneDisplay: '(053) 435 68 24',
  phoneRaw: '(053) 4356824',
  phoneHref: 'tel:+31534356824',
  email: 'robert@hubertmail.nl',
  introHeading: 'Welkom op de internetsite van Allround ontstoppingsbedrijf Wiso!',
  introText:
    'Allround ontstoppingsbedrijf Wiso is al 25 jaar actief op het gebied van riool-ontstoppingen en -reparaties. Onze goed opgeleide, vakbekwame medewerkers zijn uitgerust met hypermoderne, geavanceerde apparatuur en gereedschappen. Hierdoor kunnen wij uiterst concurrerend en efficiënt werken. Daar plukt u de vruchten van!',
};

export const DIAGNOSTIC_PROBLEMS: DiagnosticProblem[] = [
  {
    id: 'verstopping',
    symptom: 'WC, douche of keukenafvoer verstopt',
    urgencyLabel: 'Acute verstopping',
    recommendedTitle: 'Rioolreiniging en -ontstopping',
    recommendedHref: '/diensten/rioolreiniging-en-ontstopping',
    serviceId: 'rioolreiniging',
    actionSummary:
      'Onze servicewagens zijn standaard uitgerust met freesapparatuur (tot ca. 50 m) en hogedrukreiniging (tot ca. 100 m) voor leidingen van 32 mm t/m ca. 250 mm.',
    specs: 'Ø 32–250 mm · Ter plaatse overleg · Geen breekwerk',
  },
  {
    id: 'stank',
    symptom: 'Rioolstank of vieze lucht in huis',
    urgencyLabel: 'Lekkage-opsporing',
    recommendedTitle: 'Rioolstank-detectie (Rookproef)',
    recommendedHref: '/diensten/stankdetectie',
    serviceId: 'stankdetectie',
    actionSummary:
      'Wij vullen uw afvoersysteem onder lage overdruk met rook. Eventuele lekkages en open verbindingen worden direct zichtbaar.',
    specs: 'Eenvoudig & efficiënt · Direct resultaat zonder hakken',
  },
  {
    id: 'ratten',
    symptom: 'Rattenoverlast via het riool',
    urgencyLabel: 'Definitieve wering',
    recommendedTitle: 'Roestvrijstalen keerklep (Ø 125 mm)',
    recommendedHref: '/producten',
    serviceId: 'rvs-keerklep',
    actionSummary:
      'Kunststof keerkleppen worden door ratten stukgebeten. Wij leveren en monteren een duurzaam gemodificeerd RVS-exemplaar in uw ontstoppingsstuk.',
    specs: 'Duurzaam RVS · Ø 125 mm · Voor bestaande & nieuwe systemen',
  },
  {
    id: 'defect',
    symptom: 'Verzakking, wortelingroei of oud gresriool',
    urgencyLabel: '5 jaar garantie',
    recommendedTitle: 'Rioolreparatie en -aanleg',
    recommendedHref: '/diensten/rioolreparatie-en-aanleg',
    serviceId: 'rioolreparatie',
    actionSummary:
      'Vakkundige reparatie of complete vervanging door moderne PVC-rioleringsbuis tot aan de gemeente-aansluiting / erfscheiding.',
    specs: 'Vaste prijs vooraf · 5 jaar garantie · Vrijblijvend advies',
  },
  {
    id: 'inspectie',
    symptom: 'Terugkerende verstopping of verbouwingsplan',
    urgencyLabel: 'Inzicht zonder graven',
    recommendedTitle: 'Camera-inspectie & Leidingdetectie',
    recommendedHref: '/diensten/camera-inspectie',
    serviceId: 'camera-inspectie',
    actionSummary:
      'Met een rioolcamera en geavanceerde radiodetectie brengen wij defecten, leidingen, putten en septic tanks in kaart en voorkomen wij graaf- en breekwerk.',
    specs: 'Camera-inspectie · Putopsporing · Bespaart graafwerk',
  },
  {
    id: 'kruipruimte',
    symptom: 'Vocht, lekkage of ongedierte in kruipruimte',
    urgencyLabel: 'Preventie & controle',
    recommendedTitle: 'Kruipruimte-inspectie',
    recommendedHref: '/diensten/kruipruimte-inspectie',
    serviceId: 'kruipruimte-inspectie',
    actionSummary:
      'Controle op ongedierte (ratten, muizen, muggen), lekkage van riolering/afvoeren en lekkage van water- of C.V.-leidingen.',
    specs: 'Voorkomt waterverlies · Vermindert stank · Hygiënisch veilig',
  },
  {
    id: 'dakgoot',
    symptom: 'Overlopende dakgoot of vochtige muren',
    urgencyLabel: 'Schadepreventie',
    recommendedTitle: 'Dak(goot)reiniging',
    recommendedHref: '/diensten/dakgootreiniging',
    serviceId: 'dakgootreiniging',
    actionSummary:
      'Bladeren en vuil veroorzaken natte muren, schimmelvorming en doorlekkende (platte) daken. Tijdig reinigen bespaart kostbare gevolgschade.',
    specs: 'Voorkomt schimmel · Beschermt dakbeschot · Platte & schuine daken',
  },
  {
    id: 'vetput',
    symptom: 'Septic tank, vetput vol of onderhoudscontract',
    urgencyLabel: 'Particulier & Zakelijk',
    recommendedTitle: 'Septic tank, vetput & onderhoudscontract',
    recommendedHref: '/diensten/septic-tank-en-vetputonderhoud',
    serviceId: 'septic-vetput',
    actionSummary:
      'Milieuvriendelijk leegzuigen en afvoeren op afroep of afspraak, en preventieve onderhoudscontracten tegen een vaste, afgesproken prijs.',
    specs: 'Milieuvriendelijk · Op afroep of contract · Maatwerkpakket',
  },
];

export const WISO_SERVICES: WisoService[] = [
  {
    id: 'rioolreiniging',
    slug: 'rioolreiniging-en-ontstopping',
    number: '01',
    title: 'Rioolreiniging en -ontstopping',
    shortTitle: 'Ontstopping & Reiniging',
    category: 'ontstoppen',
    categoryLabel: 'Ontstoppen & Reinigen',
    metaDescription:
      'Rioolreiniging en -ontstopping van alle afvoeren en riolen (32 mm t/m 250 mm). Frezen tot 50 m en hogedruk tot 100 m in Twente en Achterhoek.',
    badge: 'Kernactiviteit · Ø 32–250 mm',
    summary:
      'Reinigen en ontstoppen van alle afvoeren en riolen vanaf 32 mm tot en met ca. 250 mm doorsnede.',
    paragraphs: [
      'Kernactiviteit van Allround ontstoppingsbedrijf Wiso is het reinigen en ontstoppen van alle afvoeren en riolen. Met onze geavanceerde moderne apparatuur en gereedschappen kunnen wij buizen reinigen en ontstoppen vanaf 32 mm tot en met ca. 250 mm doorsnede. De manier van reinigen of ontstoppen wordt ter plaatse in overleg met de klant bepaald; afhankelijk van de soort verstopping en de specifieke situatie.',
      'Om op alle mogelijke problemen voorbereid te zijn, herbergen onze servicewagens apparatuur voor werkzaamheden als:',
    ],
    bullets: [
      'Frezen tot een lengte van circa 50 meter afvoer / riolering',
      'Reinigen met hoge druk tot een lengte van ca 100 meter afvoer/riolering',
    ],
    specs: [
      { label: 'Buisdiameters', value: '32 mm t/m ca. 250 mm' },
      { label: 'Freesbereik', value: 'Circa 50 meter' },
      { label: 'Hogedrukbereik', value: 'Circa 100 meter' },
      { label: 'Werkwijze', value: 'Ter plaatse in overleg bepaald' },
    ],
    images: [
      {
        url: 'https://www.wiso.nl/images/vetput-busjes.jpg',
        alt: 'Groene WISO servicewagens op locatie met reinigingsapparatuur',
        caption: 'WISO servicewagens op locatie',
        width: 200,
        height: 150,
      },
      {
        url: 'https://www.wiso.nl/images/rioolontstop.jpg',
        alt: 'Reiniging van verzamelput en rioolafvoer',
        caption: 'Reiniging van afvoerput en leiding',
        width: 200,
        height: 150,
      },
    ],
    ctaLabel: 'Direct ontstopping aanvragen',
  },
  {
    id: 'rioolreparatie',
    slug: 'rioolreparatie-en-aanleg',
    number: '02',
    title: 'Rioolreparatie en -aanleg',
    shortTitle: 'Reparatie & Aanleg',
    category: 'reparatie',
    categoryLabel: 'Reparatie & Onderhoud',
    metaDescription:
      'Vakkundige rioolreparatie en complete rioolaanleg tot aan de gemeente-aansluiting. Vaste prijsafspraak vooraf en 5 jaar garantie.',
    badge: 'Vaste prijs · 5 jaar garantie',
    summary:
      'Alle defecten aan riool en afvoer vakkundig hersteld of vervangen tot aan de gemeente-aansluiting met 5 jaar garantie.',
    paragraphs: [
      'Allround ontstoppingsbedrijf Wiso kan alle voorkomende defecten aan riool en/of afvoer vakkundig repareren. Wij geven u vooraf vrijblijvend advies en een prijsopgave. Zo nodig kunnen wij voor u de complete riolering tot aan de gemeente-aansluiting / erfscheiding deskundig vervangen.',
      'Bij ons geen vervelende bijkomende kosten achteraf. Alle werkzaamheden worden uitgevoerd voor een vaste, van tevoren afgesproken prijs. Uiteraard zijn al onze adviezen en aanbiedingen geheel kosteloos en vrijblijvend. Op alle door ons uitgevoerde reparaties en nieuw aangelegde systemen geven wij 5 jaar garantie.',
    ],
    bulletLeadIn: 'Voordelen van een moderne PVC rioleringsbuis t.o.v. oude gresleidingen:',
    bullets: [
      'Geen lekkage bij de aansluitingen',
      'Altijd passende aansluitingen voor elke situatie',
      'Eenvoudig te wijzigen bij aanbouw of verbouw',
    ],
    specs: [
      { label: 'Prijsafspraak', value: 'Vast bedrag vooraf afgesproken' },
      { label: 'Advies & offerte', value: 'Geheel kosteloos en vrijblijvend' },
      { label: 'Garantie', value: '5 jaar op reparatie & aanleg' },
      { label: 'Bereik', value: 'Tot aan gemeente-aansluiting' },
    ],
    images: [
      {
        url: 'https://www.wiso.nl/images/rep-aanleg1.jpg',
        alt: 'Oude Gres leiding gevoelig voor breuk en wortelingroei',
        caption: 'Oude Gres leiding (kwetsbaar)',
        width: 200,
        height: 150,
      },
      {
        url: 'https://www.wiso.nl/images/rep-aanleg2.jpg',
        alt: 'Moderne PVC rioleringsbuis vakkundig aangelegd',
        caption: 'Moderne PVC rioleringsbuis',
        width: 200,
        height: 150,
      },
    ],
    ctaLabel: 'Vrijblijvende prijsopgave aanvragen',
  },
  {
    id: 'stankdetectie',
    slug: 'stankdetectie',
    number: '03',
    title: 'Rioolstank-detectie',
    shortTitle: 'Stankdetectie',
    category: 'inspectie',
    categoryLabel: 'Inspectie & Detectie',
    metaDescription:
      'Last van rioolstank in huis? Wiso voert rookdetectie onder lage overdruk uit om lekkages in het afvoersysteem direct zichtbaar te maken.',
    badge: 'Rookdetectie onder overdruk',
    summary:
      'Lekkages in uw afvoersysteem direct zichtbaar gemaakt door het systeem onder lage overdruk met rook te vullen.',
    paragraphs: [
      'Heeft u last van rioolstank in huis? Dan kunnen wij voor u een stankdetectie uitvoeren volgens een relatief eenvoudige en efficiënte methode. Wij vullen uw afvoersysteem onder lage overdruk met rook. Lekkages in het systeem worden dan meteen zichtbaar.',
    ],
    bullets: [
      'Relatief eenvoudige en efficiënte onderzoeksmethode',
      'Afvoersysteem wordt onder lage overdruk gevuld met rook',
      'Lekkages en open verbindingen worden direct zichtbaar',
    ],
    specs: [
      { label: 'Techniek', value: 'Rookvulling onder lage overdruk' },
      { label: 'Doel', value: 'Lekkages & stankbronnen lokaliseren' },
      { label: 'Voordeel', value: 'Gericht herstel zonder zoeken' },
    ],
    images: [
      {
        url: 'https://www.wiso.nl/images/rookdetectie.jpg',
        alt: 'Rookdetectie toont een verborgen scheur en lekkage in het afvoersysteem',
        caption: 'Zichtbare lekkage tijdens rookdetectie',
        width: 200,
        height: 150,
      },
    ],
    ctaLabel: 'Stankdetectie aanvragen',
  },
  {
    id: 'camera-inspectie',
    slug: 'camera-inspectie',
    number: '04',
    title: 'Riool camera-inspectie',
    shortTitle: 'Camera-inspectie',
    category: 'inspectie',
    categoryLabel: 'Inspectie & Detectie',
    metaDescription:
      'Riool camera-inspectie om problemen, wortels of stenen in uw afvoer te lokaliseren zonder onnodig graaf- en breekwerk.',
    badge: 'Bespaart graaf- & breekwerk',
    summary:
      'Lokaliseer wortels, stenen of breuken in uw afvoersysteem met een rioolcamera — zonder onnodig graaf- en breekwerk.',
    paragraphs: [
      'Met een rioolcamera kunnen wij problemen in uw afvoersysteem lokaliseren en in beeld brengen. Desgewenst krijgt u de onderzoeksresultaten op videoband (of in overleg op moderne drager). Deze methode bespaart u veel graaf- en breekwerk.',
    ],
    bullets: [
      'Problemen in het afvoersysteem exact lokaliseren en in beeld brengen',
      'Onderzoeksresultaten desgewenst vastgelegd en meegeleverd',
      'Bespaart veel onnodig graaf- en breekwerk',
    ],
    specs: [
      { label: 'Apparatuur', value: 'Professionele rioolcamera' },
      { label: 'Resultaat', value: 'Exacte locatie & visuele diagnose' },
      { label: 'Voordeel', value: 'Minimaal graaf- en breekwerk' },
    ],
    images: [
      {
        url: 'https://www.wiso.nl/images/takinriool.jpg',
        alt: 'Camera-opname van ingegroeide wortels en takken in het riool',
        caption: 'Wortel- en takgroei in het riool',
        width: 200,
        height: 150,
      },
      {
        url: 'https://www.wiso.nl/images/steeninriool.jpg',
        alt: 'Camera-opname van een steen die het riool blokkeert',
        caption: 'Blokkade (steen) in de leiding',
        width: 200,
        height: 150,
      },
    ],
    ctaLabel: 'Camera-inspectie inplannen',
  },
  {
    id: 'onderhoud-contract',
    slug: 'onderhoudscontract',
    number: '05',
    title: 'Onderhoud (contract)',
    shortTitle: 'Onderhoudscontract',
    category: 'reparatie',
    categoryLabel: 'Reparatie & Onderhoud',
    metaDescription:
      'Voorkom onverwachte verstoppingen met een preventief Wiso onderhoudscontract tegen een vaste, afgesproken prijs voor particulieren en bedrijven.',
    badge: 'Particulier & Zakelijk',
    summary:
      'Periodieke controle en preventieve reiniging op contractbasis tegen een vaste, afgesproken prijs.',
    paragraphs: [
      'Wilt u onaangename verrassingen en onverwachte kosten voorkomen? Laat ons dan uw afvoersystemen preventief onderhouden. Uiteraard op contractbasis tegen een vaste, afgesproken prijs. Wij komen dan periodiek uw afvoersystemen controleren en eventueel reinigen.',
      'De ervaring leert dat de kans op een verstopping op deze manier tot een minimum wordt teruggebracht.',
      'Zowel bedrijven als particulieren kunnen van deze service gebruikmaken. Voor beide typen opdrachtgevers hebben wij een pakket van mogelijkheden, afgestemd op ieders behoefte. Wij zijn graag bereid u over de diverse mogelijkheden te informeren.',
    ],
    bullets: [
      'Preventief onderhoud op contractbasis tegen een vaste, afgesproken prijs',
      'Periodieke controle en eventuele reiniging van afvoersystemen',
      'Maatwerkpakketten voor zowel bedrijven als particulieren',
    ],
    specs: [
      { label: 'Doelgroep', value: 'Bedrijven én particulieren' },
      { label: 'Prijsmodel', value: 'Vaste, afgesproken contractprijs' },
      { label: 'Frequentie', value: 'Periodiek op maat afgestemd' },
    ],
    images: [
      {
        url: 'https://www.wiso.nl/images/man.jpg',
        alt: 'Vakbekwame WISO monteur aan het werk bij periodiek onderhoud',
        caption: 'Periodieke inspectie & preventief onderhoud',
        width: 200,
        height: 150,
      },
    ],
    ctaLabel: 'Onderhoudspakket bespreken',
  },
  {
    id: 'septic-vetput',
    slug: 'septic-tank-en-vetputonderhoud',
    number: '06',
    title: 'Septic tank en vetputonderhoud',
    shortTitle: 'Septic tank & Vetput',
    category: 'ontstoppen',
    categoryLabel: 'Ontstoppen & Reinigen',
    metaDescription:
      'Leegzuigen en milieuvriendelijk afvoeren van septic tanks en vetputten, periodiek op afspraak of op afroep in Twente en Achterhoek.',
    badge: 'Milieuvriendelijk',
    summary:
      'Leegzuigen en milieuvriendelijk afvoeren van septic tanks en vetputten — periodiek of op afroep.',
    paragraphs: [
      'Ook het leegzuigen en afvoeren van septic tanks en vetputten behoort tot onze activiteiten. Wij kunnen dit periodiek voor u uitvoeren op basis van vooraf gemaakte afspraken, of op afroep. Het afvoeren gebeurt op een milieuvriendelijke methode.',
    ],
    bullets: [
      'Leegzuigen en afvoeren van zowel septic tanks als vetputten',
      'Periodiek op vaste afspraak óf op afroep beschikbaar',
      'Afvoer vindt plaats via een milieuvriendelijke methode',
    ],
    specs: [
      { label: 'Installaties', value: 'Septic tanks & vetputten' },
      { label: 'Planning', value: 'Periodiek of op afroep' },
      { label: 'Afvoer', value: 'Milieuvriendelijke verwerking' },
    ],
    images: [
      {
        url: 'https://www.wiso.nl/images/vetput.jpg',
        alt: 'Verzamelput / vetput gereed voor reiniging en lediging',
        caption: 'Reiniging van verzamelput en vetput',
        width: 200,
        height: 150,
      },
    ],
    ctaLabel: 'Putonderhoud aanvragen',
  },
  {
    id: 'dakgootreiniging',
    slug: 'dakgootreiniging',
    number: '07',
    title: 'Dak(goot)reiniging',
    shortTitle: 'Dak(goot)reiniging',
    category: 'ontstoppen',
    categoryLabel: 'Ontstoppen & Reinigen',
    metaDescription:
      'Voorkom natte muren, schimmel en lekkende daken door bladeren en vuil tijdig te laten verwijderen door Wiso.',
    badge: 'Voorkom waterschade',
    summary:
      'Bespaar uzelf overlast en waterschade aan muren, dakbeschot en platte daken door tijdig dak- en dakgootonderhoud.',
    paragraphs: [
      'Het onderhoud van uw dak en dakgoten kan u veel overlast en schade besparen. Want waterschade aan woningen ontstaat in veel gevallen door bladeren en andere rommel op daken en in dakgoten.',
    ],
    bulletLeadIn: 'Veel voorkomende schades zijn:',
    bullets: [
      'Natte en doorslaande muren (schimmel)',
      'Lekkage binnen het dakbeschot',
      'Doorlekkende (platte) daken',
    ],
    specs: [
      { label: 'Toepassing', value: 'Dakgoten & (platte) daken' },
      { label: 'Preventie', value: 'Voorkomt schimmel & lekkage' },
      { label: 'Geschikt voor', value: 'Woningen en bedrijfspanden' },
    ],
    images: [
      {
        url: 'https://www.wiso.nl/images/dakgoot.jpg',
        alt: 'Dakgoot vol bladeren voor reiniging',
        caption: 'Verstopte dakgoot vol bladeren',
        width: 200,
        height: 150,
      },
      {
        url: 'https://www.wiso.nl/images/schimmelmuur.jpg',
        alt: 'Natte en doorslaande muur met schimmelvorming door verstopte goot',
        caption: 'Gevolgschade: doorslaande muur',
        width: 200,
        height: 150,
      },
    ],
    ctaLabel: 'Dakgootreiniging aanvragen',
  },
  {
    id: 'kruipruimte-inspectie',
    slug: 'kruipruimte-inspectie',
    number: '08',
    title: 'Kruipruimte-inspectie',
    shortTitle: 'Kruipruimte-inspectie',
    category: 'inspectie',
    categoryLabel: 'Inspectie & Detectie',
    metaDescription:
      'Kruipruimte-inspectie op ongedierte (ratten, muizen, muggen), lekkage van riolering, afvoeren, water- en C.V.-leidingen.',
    badge: 'Vocht-, lek- & ongediertecheck',
    summary:
      'Controle op ongedierte en lekkages van riolering, afvoeren, water- en C.V.-leidingen om vocht, stank en ziektes te voorkomen.',
    paragraphs: [
      'Met een kruipruimte-inspectie controleren wij uw kruipruimte op de volgende items:',
      'Hierdoor kunnen vochtige c.q. natte kruipruimtes worden voorkomen. Dit vermindert de kans op stank en onnodig waterverlies. Bovendien kan ongedierte in uw kruipruimte een bron van ziektes vormen.',
    ],
    bullets: [
      'Ongedierte (ratten, muizen, muggen, enz.)',
      'Lekkage van de riolering en afvoeren',
      'Lekkage van waterleidingen en eventueel C.V. leidingen',
    ],
    specs: [
      { label: 'Controlepunt 1', value: 'Ongedierte (ratten, muizen, muggen)' },
      { label: 'Controlepunt 2', value: 'Lekkage riolering & afvoeren' },
      { label: 'Controlepunt 3', value: 'Waterleidingen & C.V.-leidingen' },
    ],
    images: [
      {
        url: 'https://www.wiso.nl/images/kruipruimte.jpg',
        alt: 'Inspectie van kruipruimte op vocht, lekkage en ongedierte',
        caption: 'Inspectie onder de woning',
        width: 200,
        height: 150,
      },
    ],
    ctaLabel: 'Kruipruimte-inspectie aanvragen',
  },
  {
    id: 'leidingdetectie',
    slug: 'leidingdetectie',
    number: '09',
    title: 'Leidingdetectie',
    shortTitle: 'Leidingdetectie',
    category: 'inspectie',
    categoryLabel: 'Inspectie & Detectie',
    metaDescription:
      'Rioolstelsel in kaart brengen met geavanceerde radiodetectie vóór een verbouwing en opsporen van verzamelputten, septic tanks en bezinkputten.',
    badge: 'Radiodetectie',
    summary:
      'Breng verborgen leidingen, verzamelputten, septic tanks en bezinkputten in kaart vóór een verbouwing en voorkom graafwerk.',
    paragraphs: [
      'Wij kunnen met geavanceerde apparatuur uw rioolstelsel opnieuw in kaart brengen. Bijvoorbeeld om voor een verbouwing aan te geven of er verborgen leidingen in de grond zitten. Dit kan u achteraf veel onnodig breekwerk besparen. Met dezelfde techniek kunnen wij eventuele verzamelputten, septic tanks en bezinkputten opsporen.',
      'Ook kunt u onnodig graafwerk voorkomen.',
    ],
    bullets: [
      'Complete rioolstelsel nauwkeurig in kaart brengen vóór verbouwing',
      'Opsporen van verzamelputten, septic tanks en bezinkputten',
      'Voorkomt onnodig graaf- en breekwerk',
    ],
    specs: [
      { label: 'Techniek', value: 'Geavanceerde leiding-/radiodetectie' },
      { label: 'Opsporing', value: 'Leidingen, septic tanks & putten' },
      { label: 'Ideaal voor', value: 'Verbouwing, aanbouw of tuinrenovatie' },
    ],
    images: [
      {
        url: 'https://www.wiso.nl/images/radiodetectie.jpg',
        alt: 'Uitvoering van leidingdetectie met geavanceerde detectie-apparatuur',
        caption: 'Radiodetectie van ondergrondse leidingen',
        width: 200,
        height: 150,
      },
    ],
    ctaLabel: 'Leidingdetectie aanvragen',
  },
];

export const GRES_VS_PVC = {
  gresTitle: 'Nadelen van een oude Gres leiding',
  gresImage: {
    url: 'https://www.wiso.nl/images/rep-aanleg1.jpg',
    alt: 'Oude Gres leiding',
    width: 200,
    height: 150,
  },
  gresPoints: [
    'Bij aansluiting veelal wortel-ingroei',
    'Lekkage door breuk als gevolg van verzakking en slechte verbindingen',
  ],
  pvcTitle: 'Voordelen van een moderne PVC rioleringbuis',
  pvcImage: {
    url: 'https://www.wiso.nl/images/rep-aanleg2.jpg',
    alt: 'Moderne PVC rioleringsbuis',
    width: 200,
    height: 150,
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
    'Vervangen van keerkleppen door een gemodificeerd type RVS uitvoering voor bestaande systemen',
  gallery: [
    {
      url: 'https://www.wiso.nl/images/prod2.jpg',
      alt: 'Roestvrijstalen keerklep',
      caption: 'Roestvrijstalen keerklep (duurzaam RVS)',
      width: 150,
      height: 166,
    },
    {
      url: 'https://www.wiso.nl/images/product1.jpg',
      alt: 'Vervangen van keerkleppen door een gemodificeerd type RVS uitvoering',
      caption:
        'Vervangen van keerkleppen door een gemodificeerd type RVS uitvoering voor bestaande systemen',
      width: 200,
      height: 181,
    },
    {
      url: 'https://www.wiso.nl/images/keerklep-ratten.jpg',
      alt: 'Vernielde keerklep',
      caption: 'Kunststof keerklep vernield door ratten',
      width: 136,
      height: 115,
    },
  ],
};

export const PREVENTION_TIPS = {
  intro:
    'Wij kunnen u van dienst zijn bij alle mogelijke problemen met uw afvoer of riolering. Maar in veel gevallen geldt dat preventieve maatregelen u kunnen behoeden voor onverwachte kosten. Enkele tips en adviezen voor uw afvoer en riolering:',
  image: {
    url: 'https://www.wiso.nl/images/steneninriool.jpg',
    alt: 'Stenen en puin aangetroffen in een rioolbuis',
    width: 200,
    height: 150,
  },
  tips: [
    {
      number: '01',
      title: 'Keukenafvoer maandelijks doorspoelen',
      text: 'Spoel maandelijks uw keukenafvoer door met heet water en keukensoda ter voorkoming van vetafzetting in de leiding.',
    },
    {
      number: '02',
      title: 'Toiletblokje verwijderen tijdens schoonmaak',
      text: 'Verwijder het toiletblokje tijdens het schoonmaken van de closetpot om te voorkomen dat dit per ongeluk meespoelt.',
    },
    {
      number: '03',
      title: 'Leidingen periodiek laten controleren',
      text: 'Laat uw leidingen periodiek reinigen en controleren ter voorkoming van onverwachte verstoppingen en overstromingen.',
    },
  ],
};

export const SERVICE_AREA_CITIES = [
  { name: 'Haaksbergen', region: 'Twente (Vestiging)', country: 'NL' },
  { name: 'Enschede', region: 'Twente (Centrum kaart)', country: 'NL' },
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
