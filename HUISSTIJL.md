# Huisstijl, Design Tokens & Media-assets: https://www.wiso.nl/

> **Bron:** Exact uitgelezen uit `https://www.wiso.nl/stylesheet/style_master.css`, de HTML-broncode van alle frames/pagina's en visuele inspectie van de live rendered screenshots (`final_step_24.png` en `final_step_34.png`).  
> *Opmerking over extractiemethode:* `window.getComputedStyle` via `evaluate` wordt niet ondersteund door de browser-sandbox; omdat `wiso.nl` een zuivere statische HTML4-site is met één centrale stylesheet (`style_master.css`) zonder inline styles of CSS-frameworks, geeft de onderstaande CSS-analyse de volledige en exacte styling weer.

---

## 1. Originele Stylesheet (Exact)

Bestand: `https://www.wiso.nl/stylesheet/style_master.css`

```css
/*	###########################################
	### Stylesheet voor WWW.WISO.NL Website ###
	########################################### */

.body {
	font-family: Arial, Helvetica, sans-serif;
	font-size: 13px;
	font-style: normal;
	font-weight: normal;
	color: #666666
	}

.kop {
	font-family: Verdana, Arial, Helvetica, sans-serif;
	font-size: 12px;
	font-style: normal;
	font-weight: bold;
	color: #99CC33
	}

.kleingroen {
	font-family: Verdana, Arial, Helvetica, sans-serif;
	font-size: 9px;
	font-style: normal;
	font-weight: normal;
	color: #99CC33
	}

.tussenkop {
	font-family: Arial, Helvetica, sans-serif;
	font-size: 11px;
	font-style: normal;
	font-weight: bold;
	color: #666666
	}

ul, li { list-style-type: square;}
```

---

## 2. Kleurenpalet

### A. Exacte kleuren uit CSS & HTML-attributen
| Rol | CSS-selector / Attribuut | HEX | RGB | Toepassing |
| :--- | :--- | :--- | :--- | :--- |
| **Accent / Merkkleur (Appelgroen)** | `.kop`, `.kleingroen` | `#99CC33` | `rgb(153, 204, 51)` | Paginakoppen, kleine groene accentteksten, vierkante opsommingstekens (`<li class="kop">`) |
| **Primaire tekstkleur (Middengrijs)** | `.body`, `.tussenkop` | `#666666` | `rgb(102, 102, 102)` | Alle broodteksten, tussenkoppen en opsommingsteksten (`<span class="body">`) |
| **Achtergrondkleur** | `<body bgcolor="#FFFFFF">` | `#FFFFFF` | `rgb(255, 255, 255)` | Pagina-achtergrond van alle contentframes en het linkerzijframe |
| **HTML fallback tekstkleur** | `<body text="#000000">` *(alleen `prod.html`)* | `#000000` | `rgb(0, 0, 0)` | Overschreven door `.body` (`#666666`) op de `<span>`-elementen |

### B. Visuele kleuren in grafische elementen & huisstijl (geobserveerd op screenshots)
Uit de live screenshots van de homepage (`final_step_34.png`) en de dienstenpagina (`final_step_24.png`) blijkt hoe de merkidentiteit visueel wordt gedragen buiten de tekst-CSS:
- **Header-achtergrond (`bg.jpg`, `476×100`):**
  - Bovenste zone (~72% van de banner): Heldere **appel-/limegroene** fotografische achtergrond met **waterdruppels** (sluit visueel aan bij `#99CC33`, ook terug te zien op de eigen groene WISO-servicewagens op foto `vetput-busjes.jpg`).
  - Onderste balk (~28% van de banner): **Donkergrijze / antraciete** horizontale navigatiebalk waarin de menulabels staan.
- **Topnavigatie-iconen & labels (`top.html`):**
  - **Standaardstaat:** Witte (`#FFFFFF`) cirkelomlijning met hoofdletter (`I`, `D`, `P`, `T`, `C`) in de groene banner + wit menulabel in kleine letters (`introductie`, `diensten`, `producten`, `tips / advies`, `contact`) in de donkergrijze balk.
  - **Hover (`*_f2.gif`):** Geel/lichtgroene highlight.
  - **Actief (`*_f3.gif`):** Gedimde/lichtgroene markering in de cirkel en **limegroene** tekst op de donkergrijze balk.
- **Subnavigatie Diensten (`dienst.html`):**
  - **Standaardstaat:** Lege grijze cirkelomlijning + donkergrijze tekst (`#666666`).
  - **Actieve dienst:** Gevulde limegroene stip + vetgedrukte limegroene tekst (`#99CC33`).
- **Werkgebiedkaart (`kaartje.jpg`):**
  - Zachte groene radiale cirkel over een lichtgrijze wegenkaart, met een donkerrode stip op Enschede.

### C. Voorgestelde moderne Design Tokens (CSS Custom Properties + Toegankelijkheid)
> **Belangrijk WCAG-contrastpunt:** Het originele merk-groen `#99CC33` op een witte achtergrond (`#FFFFFF`) heeft een contrastverhouding van ca. **1,98 : 1** — dat is onvoldoende voor normale tekst en grote koppen volgens WCAG 2.1 AA (minimaal 4,5:1 voor normale tekst, 3:1 voor grote tekst/UI).  
> **Aanbeveling voor de moderne site:** Behoud `#99CC33` volop voor **achtergrondvlakken, iconen, accentlijnen, badges en buttons met donkere tekst**, gebruik donkergroen (**bijv. `#4B6E0A` of `#3D5C06`**) voor groene tekst/links op wit, en verdiep de broodtekst naar antraciet (`#374151` / `#1F2937`) in plaats van `#666666` voor optimale leesbaarheid.

```css
:root {
  /* Merkkleuren (getrouw aan WISO huisstijl & servicewagens) */
  --wiso-lime: #99CC33;           /* Originele merk-accentkleur (.kop) */
  --wiso-lime-light: #EAF5D3;     /* Zachte tint voor badges, kaart-highlights, callouts */
  --wiso-lime-hover: #84B327;     /* Hover-state voor groene vlakken */
  --wiso-green-text: #4D6E0A;     /* WCAG AA toegankelijk donkergroen voor tekst/links op wit */

  /* Donkere & neutrale tinten (gebaseerd op headerbalk & .body) */
  --wiso-charcoal: #4A4D4E;       /* Donkergrijze header-/navigatiebalk uit bg.jpg */
  --wiso-charcoal-dark: #26292B;  /* Moderne donkere footer & koppen */
  --wiso-text-primary: #2D3134;   /* Aanbevolen moderne leesbare broodtekst */
  --wiso-text-muted: #666666;     /* Originele CSS .body/.tussenkop tekstkleur */
  --wiso-border: #E2E6E1;         /* Subtiele randen voor kaarten en scheidingslijnen */
  --wiso-surface: #F7F9F5;        /* Lichte alternerende sectie-achtergrond */
  --wiso-white: #FFFFFF;          /* Originele pagina-achtergrond */

  /* Semantische / conversie-accenten */
  --wiso-urgent: #D97706;         /* Optioneel voor 24/7 spoed-badge (of blijf binnen lime/charcoal) */
}
```

---

## 3. Typografie

### Huidige typografie (`style_master.css`)
- **Webfonts:** Geen (uitsluitend systeemfonts).
- **Broodtekst (`.body`):** `Arial, Helvetica, sans-serif`, `13px`, `normal`, `#666666` (`line-height` browser default).
- **Hoofdkop (`.kop`):** `Verdana, Arial, Helvetica, sans-serif`, `12px`, `bold`, `#99CC33`. *(Opmerking: de kop is `1px` kleiner dan de broodtekst!)*
- **Tussenkop (`.tussenkop`):** `Arial, Helvetica, sans-serif`, `11px`, `bold`, `#666666`.
- **Klein groen (`.kleingroen`):** `Verdana, Arial, Helvetica, sans-serif`, `9px`, `normal`, `#99CC33`.
- **Semantische HTML-koppen (`<h1>`–`<h6>`):** Niet gebruikt op de gehele site.

### Aanbevolen moderne typografie (Google Fonts / Self-hosted)
Om de strakke, no-nonsense uitstraling van Verdana + Arial te moderniseren:
- **Koppen (`--font-heading`):** **Plus Jakarta Sans** of **Outfit** (weights `600`, `700`, `800`) — geometrisch en helder, sluit aan bij de ronde en strakke lijnen van het WISO-logo.
- **Broodtekst (`--font-body`):** **Inter** of **DM Sans** (weights `400`, `500`, `600`, basisgrootte `16px` / `1rem`, `line-height: 1.65`) — vervangt `13px` Arial voor moderne leesbaarheid op desktop en mobiel.
- **Type-schaal (suggestie):**
  - `h1`: `clamp(2rem, 3.5vw, 3rem)` (`700`–`800`, `-0.02em` letter-spacing)
  - `h2`: `clamp(1.5rem, 2.5vw, 2.125rem)` (`700`)
  - `h3`: `1.25rem` (`600`)
  - `body`: `1rem` (`16px`, `line-height: 1.65`)

---

## 4. UI-Elementen, Vormtaal & Layout

### Huidige layout & componenten
- **Layout-methode:** Geneste `<frameset>` (`90px` header + `160px` subnav + flexibel contentframe) met gefixeerde `<table>`-breedtes (`740px` header, `144px` subnav, `500px` content met `50px` linker- en `30px` bovenspacer via `spacer.gif`).
- **Niet responsive:** Geen viewport meta-tag, geen media queries; op mobiele schermen schaalt de tabel niet mee.
- **UI-stijlen:**
  - `border-radius`: Geen (`0px` op alle foto's, tabellen en containers; alleen ronde knoppen als statische `.gif`-plaatjes).
  - `box-shadow`: Geen.
  - Knoppen/kaarten/formulieren: Niet aanwezig in CSS of HTML.
  - Opsommingen (`ul, li`): `list-style-type: square;` (groene vierkante bullets via `<li class="kop"><span class="body">...</span></li>`).

### Beeldmotief & Visuele Stijlkenmerken voor Nieuwbouw
Het visuele DNA van WISO rust op **4 herkenbare pijlers** die in het nieuwe design behouden en gemoderniseerd kunnen worden:
1. **Kleurcontrast Appelgroen + Antraciet + Fris Wit:** Herkenbaar van zowel de websiteheader als de groene WISO-servicewagens.
2. **Water & Stroming-motief:** Waterdruppels in de headerbanner (`bg.jpg`) en het wervel-/afvoerkolksymbool rechts van "WISO" in `logo.gif`. Dit leent zich uitstekend voor subtiele moderne SVG-achtergrondpatronen of vloeiende sectie-overgangen.
3. **Cirkelvormige iconografie:** De witte omlijnde cirkels in de hoofdnavigatie en de open/gevulde cirkel-indicatoren in de dienstenlijst.
4. **Vierkante groene bullets:** Strakke vierkante of afgeronde groene checklist-iconen bij opsommingen en USP's.

---

## 5. Volledige Inventaris van Alle Media & Assets

Alle mediabestanden bevinden zich in `https://www.wiso.nl/images/`. Er is **geen** `favicon.ico` aanwezig op de server (HTTP 404).

### A. Merk-, Header- & Layout-assets
| Asset | URL | Afmetingen | Gebruik / Omschrijving |
| :--- | :--- | :--- | :--- |
| **Header Logo** | `https://www.wiso.nl/images/logo.gif` | `117 × 49` | Wit woordmerk "WISO" met zwart-wit-groene waterkolk/vortex rechts naast de "O" |
| **Header Achtergrond** | `https://www.wiso.nl/images/bg.jpg` | `476 × 100` | Herhalende achtergrond: appelgroene banner met waterdruppels + donkergrijze onderbalk |
| **Spacer GIF** | `https://www.wiso.nl/images/spacer.gif` | `1 × 1` | Transparante spacer gebruikt in tabellen voor marges en padding |
| **Shim GIF** | `https://www.wiso.nl/images/shim.gif` | `1 × 1` | Transparante spacer |
| **Favicon** | `https://www.wiso.nl/favicon.ico` | — | **Ontbreekt (404)** — nieuw ontwerpen als SVG/ICO op basis van het WISO-kolksymbool |

### B. Hoofdnavigatie GIF-knoppen (`content/top.html`)
Alle 5 hoofdknoppen zijn `height="53"` en bestaan uit 3 toestanden: normaal (`*.gif`), hover (`*_f2.gif`) en actief (`*_f3.gif`). *Voor de moderne website vervangen door echte HTML/CSS-tekstlinks met vectoriconen.*

| Menu-item | Afmetingen | Normaal | Hover (`_f2`) | Actief (`_f3`) |
| :--- | :--- | :--- | :--- | :--- |
| **Introductie** | `68 × 53` | `https://www.wiso.nl/images/intr.gif` | `https://www.wiso.nl/images/intr_f2.gif` | `https://www.wiso.nl/images/intr_f3.gif` |
| **Diensten** | `53 × 53` | `https://www.wiso.nl/images/dienst.gif` | `https://www.wiso.nl/images/dienst_f2.gif` | `https://www.wiso.nl/images/dienst_f3.gif` |
| **Producten** | `62 × 53` | `https://www.wiso.nl/images/prod.gif` | `https://www.wiso.nl/images/prod_f2.gif` | `https://www.wiso.nl/images/prod_f3.gif` |
| **Tips / Advies** | `80 × 53` | `https://www.wiso.nl/images/tip.gif` | `https://www.wiso.nl/images/tip_f2.gif` | `https://www.wiso.nl/images/tip_f3.gif` |
| **Contact** | `47 × 53` | `https://www.wiso.nl/images/cont.gif` | `https://www.wiso.nl/images/cont_f2.gif` | `https://www.wiso.nl/images/cont_f3.gif` |

### C. Subnavigatie Diensten GIF-knoppen (`submenu/dienst.html`)
Alle 9 subnavigatie-knoppen zijn `102 × 20` px en hebben ook een normaal (`*.gif`), hover (`*_f2.gif`) en actief (`*_f3.gif`) bestand in `https://www.wiso.nl/images/`.

| Submenu-item | Afmetingen | Normaal | Hover (`_f2`) | Actief (`_f3`) |
| :--- | :--- | :--- | :--- | :--- |
| Rioolreiniging en -ontstopping | `102 × 20` | `https://www.wiso.nl/images/rein.gif` | `https://www.wiso.nl/images/rein_f2.gif` | `https://www.wiso.nl/images/rein_f3.gif` |
| Rioolreparatie en -aanleg | `102 × 20` | `https://www.wiso.nl/images/rep.gif` | `https://www.wiso.nl/images/rep_f2.gif` | `https://www.wiso.nl/images/rep_f3.gif` |
| Rioolstank detectie | `102 × 20` | `https://www.wiso.nl/images/stank.gif` | `https://www.wiso.nl/images/stank_f2.gif` | `https://www.wiso.nl/images/stank_f3.gif` |
| Riool camera inspectie | `102 × 20` | `https://www.wiso.nl/images/inspec.gif` | `https://www.wiso.nl/images/inspec_f2.gif` | `https://www.wiso.nl/images/inspec_f3.gif` |
| Onderhoud (contract) | `102 × 20` | `https://www.wiso.nl/images/onderhoud.gif` | `https://www.wiso.nl/images/onderhoud_f2.gif` | `https://www.wiso.nl/images/onderhoud_f3.gif` |
| Septic tank en vetputonderhoud | `102 × 20` | `https://www.wiso.nl/images/vetput.gif` | `https://www.wiso.nl/images/vetput_f2.gif` | `https://www.wiso.nl/images/vetput_f3.gif` |
| Dak(goot) reiniging | `102 × 20` | `https://www.wiso.nl/images/dakgoot.gif` | `https://www.wiso.nl/images/dakgoot_f2.gif` | `https://www.wiso.nl/images/dakgoot_f3.gif` |
| Kruipruimte inspectie | `102 × 20` | `https://www.wiso.nl/images/kruipruimte.gif` | `https://www.wiso.nl/images/kruipruimte_f2.gif` | `https://www.wiso.nl/images/kruipruimte_f3.gif` |
| Leidingdetectie | `102 × 20` | `https://www.wiso.nl/images/leiding.gif` | `https://www.wiso.nl/images/leiding_f2.gif` | `https://www.wiso.nl/images/leiding_f3.gif` |

### D. Contentfoto's & Kaarten (19 afbeeldingen)
> **Let op resolutie:** Alle inhoudelijke foto's op de huidige site zijn maximaal **200×150px** (en `kaartje.jpg` is **350×280px**). Voor een moderne website is het raadzaam nieuwe hoge-resolutie foto's van de servicewagens en werkzaamheden aan te vragen bij WISO (of de originele bestanden te archiveren als referentie/bewijsmateriaal).

| # | URL | Afmetingen | Huidige `alt`-tekst | Gebruikt op pagina |
| :- | :--- | :--- | :--- | :--- |
| 1 | `https://www.wiso.nl/images/kaartje.jpg` | `350 × 280` | `Werkgebied` | `content/intr.html` (Introductie) |
| 2 | `https://www.wiso.nl/images/busje.jpg` | `200 × 132` | `Servicewagen` | `content/dienst.html` (Diensten overzicht) |
| 3 | `https://www.wiso.nl/images/vetput-busjes.jpg` | `200 × 150` | `Vetput onderhoud en reiniging` | `content/diensten/cont_rein.html` |
| 4 | `https://www.wiso.nl/images/rioolontstop.jpg` | `200 × 150` | `Vetput` | `content/diensten/cont_rein.html` |
| 5 | `https://www.wiso.nl/images/rep-aanleg1.jpg` | `200 × 150` | `Oude Gres leiding` | `content/diensten/cont_rep.html` |
| 6 | `https://www.wiso.nl/images/rep-aanleg2.jpg` | `200 × 150` | `Moderne PVC rioleringsbuis` | `content/diensten/cont_rep.html` |
| 7 | `https://www.wiso.nl/images/rookdetectie.jpg` | `200 × 150` | *(leeg)* | `content/diensten/cont_stank.html` |
| 8 | `https://www.wiso.nl/images/takinriool.jpg` | `200 × 150` | *(leeg)* | `content/diensten/cont_inspec.html` |
| 9 | `https://www.wiso.nl/images/steeninriool.jpg` | `200 × 150` | *(leeg)* | `content/diensten/cont_inspec.html` |
| 10 | `https://www.wiso.nl/images/man.jpg` | `200 × 150` | *(leeg)* | `content/diensten/cont_onderhoud.html` |
| 11 | `https://www.wiso.nl/images/vetput.jpg` | `200 × 150` | `Verzamelput` | `content/diensten/cont_vetput.html` |
| 12 | `https://www.wiso.nl/images/schimmelmuur.jpg` | `200 × 150` | *(leeg)* | `content/diensten/cont_dakgoot.html` |
| 13 | `https://www.wiso.nl/images/dakgoot.jpg` | `200 × 150` | *(leeg)* | `content/diensten/cont_dakgoot.html` |
| 14 | `https://www.wiso.nl/images/kruipruimte.jpg` | `200 × 150` | *(leeg)* | `content/diensten/cont_kruipruimte.html` |
| 15 | `https://www.wiso.nl/images/radiodetectie.jpg` | `200 × 150` | *(leeg)* | `content/diensten/cont_leiding.html` |
| 16 | `https://www.wiso.nl/images/product1.jpg` | `200 × 181` | *(leeg)* | `content/prod.html` (Producten) |
| 17 | `https://www.wiso.nl/images/keerklep-ratten.jpg` | `136 × 115` | `Vernielde keerklep` | `content/prod.html` (Producten) |
| 18 | `https://www.wiso.nl/images/prod2.jpg` | `150 × 166` | `Roestvrijstalen keerklep` | `content/prod.html` (Producten) |
| 19 | `https://www.wiso.nl/images/steneninriool.jpg` | `200 × 150` | *(leeg)* | `content/tip.html` (Tips/advies) |
