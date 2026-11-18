# Website-inventarisatie: https://www.wiso.nl/

> **Inventarisatiedatum:** 18 november 2026  
> **Bron:** Live crawl via browser van `https://www.wiso.nl/` (alle frames, menu's, subpagina's, stylesheet en media)

---

## 1. Bedrijfsprofiel, Doelgroep & Waardepropositie

### Bedrijfsoverzicht
- **Bedrijfsnaam:** Wiso Allround ontstoppingsbedrijf / Allround ontstoppingsbedrijf Wiso
- **Vestigingsplaats:** Markslagweg 1, 7481 RE Haaksbergen
- **Werkgebied (volgens `kaartje.jpg`):** Regio Twente, Oost-Gelderland / Achterhoek en aangrenzende Duitse grensstreek (groene cirkel gecentreerd rondom Enschede, met o.a. Haaksbergen, Hengelo, Almelo, Goor, Nijverdal, Wierden, Vriezenveen, Tubbergen, Denekamp, Losser, Lochem, Neede, Borculo, Eibergen, Groenlo, Lichtenvoorde, en in Duitsland Nordhorn, Bad Bentheim, Gronau, Epe, Heek en Vreden).
- **Specialisatie:** Allround rioolservice voor zowel **particulieren als bedrijven** — van ontstopping en hogedrukreiniging (32 mm t/m ca. 250 mm) tot aanleg/reparatie, rook-/stankdetectie, camera-inspectie, leidingdetectie, kruipruimte-inspectie, dak(goot)reiniging, septic tank-/vetputonderhoud en preventieve onderhoudscontracten, aangevuld met verkoop/montage van een RVS rattenkeerklep.

### Doelgroep
1. **Particulieren (woningbezitters / VvE's):** Acute rioolverstoppingen, rioollucht in huis, vochtige/ongediertegevoelige kruipruimtes, verstopte dakgoten en rattenwering via het riool.
2. **Zakelijke klanten (horeca, industrie, kantoren, agrarische sector, vastgoedbeheerders):** Periodiek vetput- en septic tankonderhoud (op contract of op afroep) en preventieve onderhoudscontracten.

### Waardepropositie & USP's (zoals op de huidige site vermeld)
- **Ervaring:** *"Al 25 jaar actief op het gebied van riool-ontstoppingen en -reparaties"* *(let op: dit getal is waarschijnlijk verouderd en dient bij de opdrachtgever gecheckt te worden)*.
- **Moderne & goed uitgeruste servicewagens:** Apparatuur aan boord voor frezen (tot ca. 50 m) en hogedrukreiniging (tot ca. 100 m), camera-inspectie, rookdetectie en radiodetectie.
- **Transparante prijsafspraken:** Kosteloos en vrijblijvend advies/prijsopgave vooraf, vaste prijsafspraak zonder bijkomende kosten achteraf (vermeld bij Rioolreparatie en -aanleg en Onderhoudscontract).
- **Garantie:** **5 jaar garantie** op alle uitgevoerde reparaties en nieuw aangelegde systemen.
- **Milieuvriendelijk:** Milieuvriendelijke afvoer bij het leegzuigen van septic tanks en vetputten.

---

## 2. Technische Architectuur & Sitemap (Huidige Site)

### Huidige techniek
De huidige website is een klassieke statische HTML4-website (gebouwd in het Macromedia Dreamweaver-tijdperk met `<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">`) op basis van **geneste `<frameset>` / `<frame>`-indelingen** en **HTML-tabel-layouts** met `spacer.gif` (`1x1`).
- **Root frameset (`rows="90, *"`):**
  1. Bovenframe (`name="hoofdnav"`): `/content/top.html` (90px hoog, tabel `740px` breed)
  2. Onderframe (`name="sub_cont"`): laadt één van de 5 submenu-framesets (`cols="160, *"`):
     - Linker subnavigatieframe (`name="subnav"`, `160px` breed): `/content/leeg.html` (leeg wit vlak) óf `/submenu/dienst.html` (alleen bij *Diensten*)
     - Rechter contentframe (`name="content"`): `/content/*.html` (tabel `500px` breed met `50px` linker- en `30px` bovenspacer)
- **CSS / JS:** Eén externe stylesheet (`/stylesheet/style_master.css`) zonder CSS-frameworks of webfonts; Dreamweaver rollover-scripts (`MM_preloadImages`, `MM_nbGroup`) voor de grafische `.gif`-menuknoppen.
- **Ontbrekende systeem-/SEO-bestanden (allemaal HTTP 404):**
  - `/robots.txt` → 404
  - `/sitemap.xml` → 404
  - `/wp-sitemap.xml` → 404
  - `/favicon.ico` → 404
  - `/privacy.html`, `/voorwaarden.html`, `/disclaimer.html` → 404

### Volledige URL-lijst & Paginastructuur

#### A. Frame- & Systeembestanden (technische bouwstenen)
| Onderdeel | URL | Rol |
| :--- | :--- | :--- |
| Root frameset | `https://www.wiso.nl/` | Hoofdframeset (`top.html` + `sub_intr.html`) |
| Bovenmenu frame | `https://www.wiso.nl/content/top.html` | Logo + 5 grafische hoofdmenuknoppen |
| Leeg zijframe | `https://www.wiso.nl/content/leeg.html` | Lege linkerzijbalk (160px) voor niet-dienstenpagina's |
| Submenu-frameset Introductie | `https://www.wiso.nl/submenu/sub_intr.html` | Laadt `leeg.html` + `content/intr.html` |
| Submenu-frameset Diensten | `https://www.wiso.nl/submenu/sub_dienst.html` | Laadt `submenu/dienst.html` + `content/dienst.html` |
| Submenu-frameset Producten | `https://www.wiso.nl/submenu/sub_prod.html` | Laadt `leeg.html` + `content/prod.html` |
| Submenu-frameset Tips / Advies | `https://www.wiso.nl/submenu/sub_tip.html` | Laadt `leeg.html` + `content/tip.html` |
| Submenu-frameset Contact | `https://www.wiso.nl/submenu/sub_cont.html` | Laadt `leeg.html` + `content/cont.html` |
| Subnavigatie Diensten | `https://www.wiso.nl/submenu/dienst.html` | Linkerzijbalk met 9 grafische dienstenknoppen |
| Stylesheet | `https://www.wiso.nl/stylesheet/style_master.css` | Enige CSS-bestand van de site |

#### B. Contentpagina's (14 inhoudelijke pagina's)
| # | Pagina | Content-URL | Parent Menu | Voorgestelde moderne URL |
| :- | :--- | :--- | :--- | :--- |
| 1 | Introductie (Homepage) | `https://www.wiso.nl/content/intr.html` | Introductie | `/` |
| 2 | Diensten (Overzicht) | `https://www.wiso.nl/content/dienst.html` | Diensten | `/diensten` |
| 3 | Rioolreiniging en -ontstopping | `https://www.wiso.nl/content/diensten/cont_rein.html` | Diensten | `/diensten/rioolreiniging-en-ontstopping` |
| 4 | Rioolreparatie en -aanleg | `https://www.wiso.nl/content/diensten/cont_rep.html` | Diensten | `/diensten/rioolreparatie-en-aanleg` |
| 5 | Rioolstank-detectie | `https://www.wiso.nl/content/diensten/cont_stank.html` | Diensten | `/diensten/stankdetectie` |
| 6 | Riool camera-inspectie | `https://www.wiso.nl/content/diensten/cont_inspec.html` | Diensten | `/diensten/camera-inspectie` |
| 7 | Onderhoud (contract) | `https://www.wiso.nl/content/diensten/cont_onderhoud.html` | Diensten | `/diensten/onderhoudscontract` |
| 8 | Septic tank en vetputonderhoud | `https://www.wiso.nl/content/diensten/cont_vetput.html` | Diensten | `/diensten/septic-tank-en-vetputonderhoud` |
| 9 | Dak(goot)reiniging | `https://www.wiso.nl/content/diensten/cont_dakgoot.html` | Diensten | `/diensten/dakgootreiniging` |
| 10 | Kruipruimte-inspectie | `https://www.wiso.nl/content/diensten/cont_kruipruimte.html` | Diensten | `/diensten/kruipruimte-inspectie` |
| 11 | Leidingdetectie | `https://www.wiso.nl/content/diensten/cont_leiding.html` | Diensten | `/diensten/leidingdetectie` |
| 12 | Producten (RVS Keerklep) | `https://www.wiso.nl/content/prod.html` | Producten | `/producten` (of `/producten/rvs-keerklep`) |
| 13 | Tips / advies | `https://www.wiso.nl/content/tip.html` | Tips / Advies | `/tips-en-advies` |
| 14 | Contact | `https://www.wiso.nl/content/cont.html` | Contact | `/contact` |

---

## 3. Bedrijfs- en Contactgegevens

| Gegeven | Waarde op website | Status / Opmerking |
| :--- | :--- | :--- |
| **Bedrijfsnaam** | Wiso Allround ontstoppingsbedrijf | Ook geschreven als *Allround ontstoppingsbedrijf Wiso* |
| **Bezoek-/vestigingsadres** | Markslagweg 1 | — |
| **Postcode & Plaats** | 7481 RE Haaksbergen | Provincie Overijssel, Nederland |
| **Telefoonnummer** | `(053) 4356824` | Staat alleen als platte tekst; geen `tel:`-link aanwezig |
| **E-mailadres** | `robert@hubertmail.nl` | Link `mailto:robert@hubertmail.nl`; geen `@wiso.nl` adres gebruikt |
| **KvK-nummer** | *Niet vermeld* | Aanvullen voor moderne website |
| **BTW-nummer** | *Niet vermeld* | Optioneel/aanvullen indien gewenst |
| **Openingstijden / 24/7 spoed** | *Niet vermeld* | Sterk aanbevolen om na te vragen bij opdrachtgever |
| **WhatsApp / Mobiel** | *Niet vermeld* | Navragen bij opdrachtgever |
| **Social media** | *Geen links aanwezig* | Navragen of LinkedIn/Facebook/Instagram bestaan |
| **Keurmerken / Reviews** | *Niet vermeld* | Navragen (bijv. VCA, Bouwend Nederland, Google Reviews) |

---

## 4. Formulieren, Functionaliteiten & SEO-Metadata per Pagina

### Formulieren & Interactieve Elementen
- **HTML-formulieren:** **0 formulieren** aanwezig op de gehele website. Er is geen contactformulier, offerteformulier, spoedaanvraagformulier of terugbelverzoek.
- **Interactieve elementen:** Alleen grafische rollover-navigatieknoppen (`.gif` + `_f2.gif` hover + `_f3.gif` active via Dreamweaver `MM_nbGroup`), één `mailto:robert@hubertmail.nl` link op de contactpagina, en een browser-native `<frameset>`-verdeling.
- **Embeds / Downloads:** Geen PDF's, geen video's, geen Google Maps-iframe (werkgebied is een statisch `.jpg` plaatje), geen cookiebanner, geen analytics-script waargenomen.

### SEO-Metadata Audit (per pagina)
Algemene gebreken over de **gehele** website:
- Geen `<html lang="nl">` attribuut.
- Geen `<meta name="description">`, `<meta name="keywords">`, `<link rel="canonical">` of Open Graph (`og:*`) tags.
- **0 semantische koppen (`<h1>`–`<h6>`):** alle koppen zijn opgemaakt als `<span class="kop">` of `<span class="tussenkop">`.
- Alle contentpagina's draaien in een `<frame>`, waardoor zoekmachines subpagina's geïsoleerd indexeren zonder navigatie en de URL in de adresbalk altijd `https://www.wiso.nl/` blijft.
- Meerdere pagina's hebben een placeholder `<title>` zoals `"right"` of `"Untitled Document"`.

| Pagina | Huidige `<title>` | Huidige Kop (`.kop` / `.tussenkop`) | Meta description / OG / Canonical | Alt-teksten afbeeldingen |
| :--- | :--- | :--- | :--- | :--- |
| `/` (root frameset) | `Welkom bij Wiso Allround ontstoppingsbedrijf.` | *(frameset)* | Geen (`metaCount: 0`, `<noframes>` leeg) | n.v.t. |
| `submenu/sub_*.html` (alle 5) | `Wiso Allround Ontstoppingsbedrijf` | *(frameset)* | Geen | n.v.t. |
| `content/intr.html` | `Wiso Allround ontstoppingsbedrijf` | `Welkom op de internetsite van Allround ontstoppingsbedrijf Wiso!` | Geen | `alt="Werkgebied"` |
| `content/dienst.html` | `right` *(placeholder)* | `Diensten` | Geen | `alt="Servicewagen"` |
| `content/diensten/cont_rein.html` | `Wiso Allround Ontstoppingsbedrijf` | `Rioolreiniging en -onstopping` *(spelfout)* | Geen | `alt="Vetput onderhoud en reiniging"`, `alt="Vetput"` *(mismatch met onderwerp)* |
| `content/diensten/cont_rep.html` | `Wiso Allround Ontstoppingsbedrijf` | `Rioolreparatie en -aanleg` / `Vaste prijsafspraak, 5 jaar garantie` | Geen | `alt="Oude Gres leiding"`, `alt="Moderne PVC rioleringsbuis"` |
| `content/diensten/cont_stank.html` | `Wiso Allround Ontstoppingsbedrijf` | `Rioolstank-detectie` | Geen | `alt=""` *(leeg)* |
| `content/diensten/cont_inspec.html` | `Wiso Allround Ontstoppingsbedrijf` | `Riool camera-inspectie` | Geen | 2× `alt=""` *(leeg)* |
| `content/diensten/cont_onderhoud.html` | `Wiso Allround Ontstoppingsbedrijf` | `Onderhoud (contract)` | Geen | `alt=""` *(leeg)* |
| `content/diensten/cont_vetput.html` | `right` *(placeholder)* | `Septic tank en vetputonderhoud` | Geen | `alt="Verzamelput"` |
| `content/diensten/cont_dakgoot.html` | `Wiso Allround Ontstoppingsbedrijf` | `Dak(goot)reiniging` | Geen | 2× `alt=""` *(leeg)* |
| `content/diensten/cont_kruipruimte.html` | `Wiso Allround Ontstoppingsbedrijf` | `Kruipruimte-inspectie` | Geen | `alt=""` *(leeg)* |
| `content/diensten/cont_leiding.html` | `Wiso Allround Ontstoppingsbedrijf` | `Leidingdetectie` | Geen | `alt=""` *(leeg)* |
| `content/prod.html` | `Untitled Document` *(placeholder)* | `Producten` | Geen | `alt=""`, `alt="Vernielde keerklep"`, `alt="Roestvrijstalen keerklep"` |
| `content/tip.html` | `right` *(placeholder)* | `Tips/advies` | Geen | `alt=""` *(leeg)* |
| `content/cont.html` | `right` *(placeholder)* | `Contact` | Geen | Geen afbeeldingen |

---

## 5. Aandachtspunten in de Bestaande Copy (Verifiëren vóór livegang)

Bij de inspectie van de letterlijke teksten zijn de volgende verouderde claims en tekstfouten gevonden die in een moderne website gecorrigeerd/bevestigd moeten worden:
1. **"al 25 jaar actief"** (`intr.html`): De site stamt technisch uit begin jaren 2000; grote kans dat WISO inmiddels 40+ jaar bestaat (of een exact oprichtingsjaar heeft). Navragen bij de eigenaar!
2. **"op videoband"** (`cont_inspec.html`): *"Desgewenst krijgt u de onderzoeksresultaten op videoband."* Vervangen door moderne drager/oplevering (bijv. digitaal videobestand, USB of online inspectierapport).
3. **Spelfouten & typefouten in de huidige live teksten:**
   - `cont_rein.html`: `Rioolreiniging en -onstopping` → mist een `t` (`-ontstopping`).
   - `cont_onderhoud.html`: `tegen een vaste, afgesproken afgesproken.` → dubbel woord `afgesproken` i.p.v. `prijs` (*"tegen een vaste, afgesproken prijs."*).
   - `cont_dakgoot.html`: `muren(schimmel)` en `(platte)daken` → spatie toevoegen (`muren (schimmel)`, `(platte) daken`).
   - `cont_stank.html` / `cont_rein.html` / `cont_rep.html` / `cont_vetput.html`: Inconsistent spatiegebruik (*Riool reiniging* vs *Rioolreiniging*, *Septic tank* met hoofdletter, *C.V. leidingen*, *Gres leiding*, *Rioleringbuis*).
   - `cont_rein.html` alt-teksten: De foto's heten `vetput-busjes.jpg` / `rioolontstop.jpg` met alt-teksten *"Vetput onderhoud en reiniging"* en *"Vetput"*, terwijl de pagina over rioolreiniging en -ontstopping gaat.
4. **Centrum werkgebied vs. vestigingsadres:** Het werkgebiedkaartje (`kaartje.jpg`) is gecentreerd rondom **Enschede** (groene stip/cirkel) en telefoonnummer heeft netnummer **053** (Enschede/Haaksbergen), terwijl het vestigingsadres in **Haaksbergen** (Markslagweg 1, 7481 RE) ligt.

---

## 6. Blauwdruk & Aanbevelingen voor de Moderne Website

### 1. Informatiearchitectuur & Navigatie (Zonder Frames!)
Vervang de `<frameset>`-constructie door een moderne, responsieve single-page-app of multi-page site (bijv. **Next.js** of **Astro** met static generation / SSR) met schone URL's (`/` , `/diensten/...`, `/producten`, `/tips-en-advies`, `/contact`):
- **Sticky Header:**
  - Links: Modern vector-logo (`SVG` op basis van het WISO-woordmerk + waterkolk-symbool).
  - Midden: Hoofdnavigatie (`Home`, `Diensten` met dropdown voor alle 9 diensten, `Producten`, `Tips & advies`, `Contact`).
  - Rechts (conversie-gericht!): Direct klikbare telefoonbutton (`Bel direct: 053 - 435 68 24` met `tel:+31534356824`) + secundaire CTA-knop (`Offerte / Afspraak aanvragen`).
- **Footer (momenteel volledig afwezig):**
  - Kolom 1: WISO logo, korte introductie (ervaring + 5 jaar garantie + werkgebied Twente & Achterhoek).
  - Kolom 2: Snelle links naar de 9 diensten.
  - Kolom 3: Direct contact (Markslagweg 1, 7481 RE Haaksbergen, telefoon, e-mail, openingstijden/spoed).
  - Onderbalk: Copyright, KvK-nummer, Privacyverklaring (AVG) & Algemene voorwaarden.

### 2. Aanbevolen Pagina-indeling & Conversie-componenten
- **Homepage (`/`):**
  1. **Hero-sectie:** Krachtige kop (*"Verstopping of rioolprobleem in Twente of de Achterhoek?"*), subtitel met moderne apparatuur & vaste prijsafspraak, dubbele CTA (**Direct bellen** + **Storing melden / Offerte aanvragen**), aangevuld met een moderne foto van de groene WISO-servicewagen (vervanging van lage-resolutie `200x132` foto's).
  2. **USP-balk (Trust Signals):** *Vaste prijsafspraak vooraf* · *5 jaar garantie op reparaties* · *32 mm t/m 250 mm leidingen* · *Particulier & Zakelijk*.
  3. **Dienstenoverzicht (3×3 grid van kaarten):** Alle 9 diensten met iconen, korte samenvatting en link naar de detailpagina (vervangt het oude `"Maak hiernaast uw keuze"`).
  4. **Product-highlight:** RVS rattenkeerklep (diam. 125 mm) als onderscheidend product met directe link naar `/producten`.
  5. **Werkgebied-sectie:** Moderne interactieve kaart (Leaflet/Mapbox/SVG) rond Haaksbergen/Enschede met opsomming van kernplaatsen in Twente, Achterhoek en Duitse grensstreek (vervangt de `350x280` rasterafbeelding `kaartje.jpg`).
  6. **Preventietips & Direct Contactblok.**
- **Diensten-detailpagina's (`/diensten/[slug]`):**
  - Semantische `<h1>` + broodkruimelpad (`Home > Diensten > ...`).
  - Gestructureerde secties: *Wanneer inschakelen?*, *Onze werkwijze & apparatuur*, *Voordelen / Garantie*, en een zijbalk/onderblok met **Direct contact opnemen / Vrijblijvende offerte**.
  - Gebruik van moderne hoge-resolutie foto's (de huidige foto's zijn `200×150px` en daardoor te klein voor full-width moderne schermen — opnieuw fotograferen of zorgvuldig opschalen/vervangen in overleg met WISO).
- **Contact- & Aanvraagpagina (`/contact`):**
  - Interactief **Contact- / Spoedformulier** (velden: *Naam*, *Telefoonnummer*, *E-mailadres*, *Postcode / Plaats*, *Type klant (Particulier / Zakelijk)*, *Gewenste dienst* (dropdown met alle 9 diensten + RVS keerklep), *Spoed? (Ja, direct / Nee, regulier)*, *Omschrijving bericht* en *AVG-akkoord checkbox*).
  - Klikbare `tel:` en `mailto:` links, interactieve Google Maps / OpenStreetMap-kaart op `Markslagweg 1, 7481 RE Haaksbergen`.

### 3. Technische & SEO-Vereisten voor Nieuwbouw
- **301 Redirects:** Oude URL's (zoals `/content/intr.html`, `/content/diensten/cont_rein.html`, enz.) omleiden naar de nieuwe schone URL's om eventueel bestaand zoekverkeer te behouden.
- **Metadata & Structured Data:** Unieke `<title>` en `<meta name="description">` per pagina, Open Graph tags, `<html lang="nl">`, `sitemap.xml`, `robots.txt`, vector `favicon.svg` + `apple-touch-icon.png`, en `LocalBusiness` / `Plumber` JSON-LD Schema.org markup met adres in Haaksbergen en `areaServed` (Twente, Achterhoek).
- **Toegankelijkheid (WCAG AA):** Let op het contrast van de huidige huisstijlkleur `#99CC33` op `#FFFFFF` (zie `HUISSTIJL.md` voor toegankelijke donkergroene tekstvarianten).
