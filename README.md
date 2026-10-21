# Handleiding voor de leraar — Les 13: Phishing of echt?

<!-- Beginvragen (stap 1 van CONTEXT.md), 21-10-2026. Jonas vroeg "Je mag beginnen met de lessen voor volgende week. Buiten
     3MWWE"; hij koos in de chat (21-10-2026) telkens het voorstel:
     klassen 3ORLO, 4ORLOa, 4ORLOb · les 13 van het jaarplan (module 3), uur 2 van W09: 3ORLO wo 28 oktober (2de uur),
     4ORLOb wo 28 oktober (3de uur), 4ORLOa do 29 oktober (7de uur) · vorige les: les 12 (Aan, CC, BCC en een bijlage),
     di 27-10 (4ORLOb, 3ORLO) en wo 28-10 (4ORLOa), dus vóór les 13 in elke klas → lesstart = ophalen uit les 12 ·
     toestel lokaal 18, Windows 11 · werkvorm: **escaperoom in duo** zoals in het jaarplan, maar **elke leerling vult en
     levert het eigen werkdocument in** (Jonas, 21-10-2026) · werkdocument CO3_Phishing-of-echt (reeks Communicatie,
     opdracht *Communicatie 3 — Phishing of echt?*, onderwerp *Digitale competenties*), 20 punten, deadline vr 30-10
     20.00 · de verdachte berichten zijn tekeningen (nagebootste mails en sms'en) op de lespagina en in het werkdocument;
     er wordt nergens op een echte link geklikt · geen zip · context NovaDepot · repository Phishing-NovaDepot. -->

**Vak:** Toegepaste Informatica
**Doelgroep:** 3ORLO, 4ORLOa en 4ORLOb — 2de graad Organisatie en logistiek, arbeidsmarktgerichte finaliteit
**Lesduur:** 1 × 50 minuten: 10 minuten instructie + 40 minuten keuzewerktijd
**Context:** NovaDepot, *de inbox van Tom* — module 3 van het jaarplan, les 13 (reeks *Communicatie 3*)
**Toestel:** **lokaal 18, Windows 11** — alles in Chrome, een muis om een link aan te wijzen, geen bestanden
**Lesdag:** 3ORLO wo 28 oktober (2de uur) · 4ORLOb wo 28 oktober (3de uur) · 4ORLOa do 29 oktober (7de uur)
**Werkvorm:** escaperoom **in duo** (stap 2–4); elke leerling vult en levert het **eigen** werkdocument in
**Kernleerplandoel:** `BV2_04.04` (toepassen) · ondersteunend `BV2_02.04`, `BV2_04.01` · contextueel `BV2_05.01`
**Deadline:** vrijdag 30 oktober 2026, 20.00 uur · 20 punten
**Pages:** https://jonasdaltongent.github.io/Phishing-NovaDepot/ · dia's: …/presentatie.html · repository: `jonasdaltongent/Phishing-NovaDepot`

Sara Claes (preventiedienst) heeft gemerkt dat er valse berichten rondgaan bij NovaDepot. Tom Peeters twijfelt over vier berichten in
zijn inbox. Het duo is haar veiligheidsteam: per bericht zeggen ze echt of vals, noemen ze twee dingen die dat tonen en zeggen ze wat Tom
doet. Op de lespagina gaat elke kamer pas open als het slot van de vorige juist is; elk slot geeft een letter van het codewoord (**HAAK**).
Niemand klikt op een echte link: de berichten zijn tekeningen. Opbouw en bronnen: `lesvoorbereiding.md`; de uitleg komt uit
`_vakinhoud/phishing-en-oplichting.md` (nieuw, 21-10-2026: één keer goed te keuren door Jonas).

---

## 1. Inhoud van het pakket

```text
W09 - Les 13 - ORLO - Phishing of echt/
├── index.html                   # de lespagina: route · één stap · checklist, met de vier kamers in stap 2 en 3
├── presentatie.html             # 10 dia's: 1 Zo start je · 2 lesstart (les 12) · 3 lesdoel · 4 de opdracht van Sara · 5 demo (Uw mailbox is vol) · 6 de zeven vragen · 7 controle (het domein) · 8 stap 1 samen · 9 kloktijden · 10 exitvraag
├── css/style.css, css/slides.css
├── js/script.js, js/slides.js
├── assets/                      # logo's, lettertypes, mascotte, het filmpje Inleveren (geen schermafbeeldingen)
├── werkdocument/
│   ├── CO3_Phishing-of-echt.docx     # het werkdocument dat de leerling INLEVERT (kopie per leerling)
│   ├── maak_werkdocumenten.py        # maakt het opnieuw (python-docx)
│   └── huisstijl.py, go-dalton-gent.png
├── lesvoorbereiding.md
├── dalton-lesfiche.html         # openen, Kopieer de fiche, plakken in je planner (stap 2–4 in duo, stap 1 en 5 individueel)
├── classroom.json               # de opdracht voor _tools/zet_opdracht_klaar.py
├── lesdoelen.json               # leerplandoelen voor je jaaroverzicht
└── README.md                    # deze handleiding
```

Geen zip en geen bronbestanden: er is niets te downloaden, uit te pakken of te uploaden.

### 1b. Hoe de lespagina werkt

Zoals les 11: links de **route** (*De inbox van Tom*: stap 1–3 · *Ontsnapt!*: stap 4–5), midden **één stap** met *Toon stapjes* per
handeling (de les begint in *Kort*, zonder knop), rechts de **checklist** met 14 taken. Geen *Hulp nodig?*, geen AI-hulp.

- **Startpagina** met drie beelden (de opdracht in Classroom → deze lespagina → je werkdocument CO3), daaronder *Dit maak je vandaag*: een
  tekening van de inbox van Tom met vier kamers, vier sloten (dicht) en vier lege letterbakjes. Ze verklapt niets. Verder *Na deze
  les kan je*, *Zo werken jullie in duo* en *Vast?* (*Toon stapjes* → je duopartner → je leraar).
- **Stap 1** (individueel): duopartner, werkdocument openen, kader en voorbeeld lezen. Onder de handelingen staat het voorbeeld
  *Uw mailbox is vol* als bericht met een knop die je kan aanwijzen (zoals dia 5).
- **Stap 2 en 3** (duo): twee **infokaders** in stap 2 (*Zo herken je een vals bericht*, de zeven vragen van Safeonweb in eigen woorden;
  *Waar gaat de link naartoe?*, met twee adressen waarin het woord dat telt geel staat) en daaronder **De kamers**. Stap 3 heeft geen
  nieuwe infokader: het kader van het werkdocument (*Wat Tom al weet*) en de infokaders van stap 2 volstaan.
- **Stap 4** (duo): de vier letters (`.letters`) en een groene regel *Nog n sloten te openen*; het blok eronder (handelingen, de
  infokaders *Je klikte toch?* en *Waar meld je een vals bericht?*, en een tip) is **dicht tot de vier sloten juist zijn**. De
  infokaders zeggen niet wat de leerling moet antwoorden: *Je klikte toch?* stelt vragen (*Wat zei Safeonweb in les 09?*), *Waar meld je …?*
  geeft het adres, want dat kan een leerling niet afleiden.
- **Stap 5** (individueel): nalezen, controletabel, **Inleveren** (stapjes en het filmpje). Er is **geen zelftest** meer: het slot
  van elke kamer vervangt ze, en het codewoord van stap 4 is het bewijs in het werkdocument.
- **Extra** (telt niet mee): drie tips voor de collega's, in het werkdocument onder *Extra*; opnieuw inleveren met **Ongedaan maken**,
  dan weer **Inleveren** (met de rode waarschuwing).
- `localStorage` bewaart vinkjes, de laatste stap **en welke sloten open zijn** (voorvoegsel `novadepot_phishing_v1_`), met een wisknop
  (*Vinkjes wissen* zet ook de sloten terug). Geen login, geen tracking, geen externe scripts.

**Het slotmechanisme** (`js/script.js`, § 6):

- In `index.html` staat per kamer `<section class="kamer" data-kamer="n">` met een bericht, een slot van twee vragen (`.sv`, met knoppen
  `data-keuze="…"` en een `data-hint`) en een verborgen regel `.kamer-klaar` met de letter.
- De **juiste keuzes en de letters** staan in `js/script.js`, in het object `SLOTEN` (kamer → `antwoord: [vraag 1, vraag 2]`, `letter`).
  Dat staat bewust niet in de HTML: zo staat het antwoord niet in de tekst van de pagina. Een leerling die de broncode leest, vindt ze; dat
  is geen probleem, want het werkdocument telt (§ 28 van de lesvoorbereiding).
- Fout antwoord: de knop wordt rood en de hint van die vraag verschijnt (nooit het antwoord). Beide vragen juist: het slot is open, de
  letter verschijnt en kamer n+1 gaat open. Kamer 1 is altijd open; kamer 3 gaat pas open na kamer 2 (in stap 2).
- `localStorage` (`novadepot_phishing_v1_sloten`) onthoudt de opgeloste kamers, zodat een herladen pagina het werk niet wist. Een andere
  computer of een ander profiel begint opnieuw (dan lost de leerling de kamers opnieuw op: ze zijn in een paar minuten gedaan).
- Zijn alle vier de sloten open, dan toont stap 4 de letters (**H A A K**) en gaat het blok open. `?leraar` achter het adres zet alle
  kamers en het blok van stap 4 open en onthoudt niets.
- De **links in de berichten** zijn geen echte links: een `<span role="link" tabindex="0">` zonder `href`. Zweven, focus of klik toont
  onderaan het bericht het adres (de statusbalk, `.statusbalk`), zoals een browser. De adressen staan zonder `https://` in de HTML
  (`data-adres`; `data-http` voor `http://`): `controleer_les.py` meldt elke `http(s)://` als externe verwijzing, en het script zet het
  schema ervoor. Geen `<a href>`, geen QR-code, geen logo van een echt bedrijf.

---

## 2. Klaarzetten

### Stap 1 — Publiceren via GitHub Pages

Repository `jonasdaltongent/Phishing-NovaDepot`, Pages op `main`, map `/ (root)`; adres hierboven. Dat adres staat op dia 9, in
`classroom.json` en in `lesdoelen.json`.

### Stap 2 — De opdracht in Classroom, met de koppeling

`classroom.json`: **Communicatie 3 — Phishing of echt?**, onderwerp *Digitale competenties*, 3ORLO, 4ORLOa en 4ORLOb, 20 punten,
deadline vrijdag 30 oktober 2026, 20.00 uur. Bijlagen: de link naar de lespagina en `CO3_Phishing-of-echt` (**Een kopie maken voor
elke leerling**). Geen zip. Als **concept** klaargezet op 21-10-2026 en teruggelezen (`DRAFT`, zonder tijdstip, deadline vr 30-10 20.00 uur, 20 punten, het werkdocument als `STUDENT_COPY`) in 3ORLO, 4ORLOa en 4ORLOb. **Nog niet ingepland**: de hoofdsessie doet dat na het nakijken.

Instructietekst:

```text
1. Open de lespagina (link) en je werkdocument CO3_Phishing-of-echt.
2. Je werkt samen met je buur, maar je schrijft alles in je eigen werkdocument.
3. Klik op Inleveren, ten laatste vrijdag 30 oktober 2026 om 20.00 uur.
```

Inplannen (door de hoofdsessie, na het nakijken): een half uur vóór elke les: wo 28-10 om 8.45 (3ORLO) en 9.55 (4ORLOb), do 29-10 om 13.15 (4ORLOa).

### Stap 3 — Met de hand, als de koppeling niet werkt

1. Upload `werkdocument/CO3_Phishing-of-echt.docx` **in Drive zelf** (**Nieuw** › **Bestand uploaden**, met *Uploads converteren* aan) en
   voeg het toe met **Bijvoegen** › **Drive** › **Een kopie maken voor elke leerling**.
2. Voeg de lespagina toe met **Link**.

### Afvinklijst vóór de les

- [ ] De lespagina staat online en het adres op dia 9 klopt.
- [ ] De opdracht staat in de drie klassen, met twee bijlagen (de link en het werkdocument).
- [ ] Een testleerling krijgt een eigen kopie van het werkdocument, met de eigen naam in de titel.
- [ ] **De duo's staan vast**: naast elkaar, een sterkere lezer bij een zwakkere; een oneven aantal: één trio. Op het bord of op dia 1.
- [ ] Les 12 is in die klas gegeven (dia 2 haalt er een vraag uit op); zo niet: sla dia 2 over.
- [ ] Kijk in de app *Na de les* of er over les 11 of 12 iets bij te sturen is.
- [ ] **Elke computer heeft een muis** (zweven over een link). Zonder muis: klikken op de link toont het adres ook.
- [ ] De Dalton-lesfiche staat in je planner (open `dalton-lesfiche.html`, klik op **Kopieer de fiche**, plak).
- [ ] `presentatie.html` opent op de beamer; `N` toont je notities, `F` is volledig scherm. Op dia 5 wijs je zelf de knop aan met de muis.

### 2b. Nagelezen klikpaden

| Handeling | Klikpad / naam | Bron |
|---|---|---|
| Werkdocument openen | in de opdracht rechts bij **Jouw werk** op de naam klikken | `_afspraken/klikpaden.md` |
| Inleveren | **Inleveren** › venster **Je werk inleveren?** › **Inleveren** › status **Ingeleverd** | [Classroom 6020285](https://support.google.com/edu/classroom/answer/6020285?hl=nl); het venster gezien met demoleerling3 (15-10-2026) |
| Opnieuw inleveren (Extra) | **Ongedaan maken**, daarna weer **Inleveren** | zelfde bron en dezelfde proef; zie *Wat nog moet blijken* |

Geen nieuwe knoppen: de lespagina werkt met haar eigen knoppen (*Toon stapjes*, de antwoorden van het slot, *Vinkjes wissen*).

---

## 3. Het verloop van de les

| Fase | Tijd | Wat |
|---|---|---|
| **Instructie** | **10'** | Dia 1 terwijl de computers opstarten (1'). Dia 2 lesstart (2'): Bcc (les 12), met vingers, en de herkenbare situatie (*Wie kreeg al eens een vreemde sms over een pakje?*, 1 op 4 jongeren). Dia 3–6 (5'): lesdoel; de opdracht van Sara en de inbox; **demo, hardop denkend** (*Uw mailbox is vol*: wijs de knop aan, lees het woord vóór `.example`); de zeven vragen als tekening. Dia 7 controle (1'): *naar welke website gaat de link?* |
| **Samen** | **3'** | Dia 8: de duo's zitten naast elkaar; iedereen doet stap 1; duim op. |
| **Keuzewerktijd** | **tot het einde** | Dia 9 blijft staan, met **kloktijden** (`_tools/zet_lesmomenten.py`); stap 2 tot 5, inleveren inbegrepen. Dia 10 in de laatste minuut. |

Stap 1–5: 3 + 12 + 12 + 6 + 7 = **40 minuten**.

**Eerste rondgang:** heeft **elke** leerling van het duo het eigen werkdocument open (naam in de titel)? **Tweede rondgang, rond kamer 2:**
wijzen ze de link aan met de muis? Staat er bij *Wat doet Tom?* geen *antwoorden op de mail*? Zeg aan het einde mondeling dat wie niet klaar is,
toch inlevert, en dat elk van het duo zelf inlevert. Minimumroute: deel 2, deel 3 en vraag 4a, en inleveren; vraag 4b mag later, vóór de deadline.
Werkt één leerling niet mee, zet die naast een ander duo (een trio).

---

## 4. Verbetersleutel

- **Codewoord** bovenaan *Deel 4 — Ontsnapt!*: **HAAK**. Ontbreekt het, dan zijn de sloten niet allemaal juist gemaakt. Het telt niet mee voor de punten.

De leerling levert alleen het werkdocument in (20 punten: 0 · 8 · 8 · 4). Elk bericht heeft drie vakken: *Echt of vals?*, *Welke twee dingen tonen dat?*
(*Kort mag*) en *Wat doet Tom?* (één zin). Deel 1 (het voorbeeld) staat ingevuld en telt niet mee.

| Bericht | Echt of vals | Dingen die het tonen (twee zijn genoeg) | Wat doet Tom? |
|---|---|---|---|
| 1 Kim Wouters | **echt** | Tom verwachtte dit antwoord (hij vroeg het zelf, *RE:*) · het adres van De Melkkan kent hij · het bestelnummer 2026-0418 en de datum kloppen · ze spreekt hem aan met zijn naam · geen link, geen vraag om geld of een wachtwoord, niet dringend | de nieuwe dag en het uur noteren (vrijdag 30 oktober, 11 uur) · Kim bedanken of bevestigen · de levering doorgeven |
| 2 sms PakjeSnel | **vals** | onverwacht (Tom bestelde niets) · dringend (binnen 12 uur) · vraagt een betaling · de link gaat naar *levering-betalen*, niet naar pakjesnel · een buitenlands nummer · geen naam en geen pakjesnummer | niet klikken en niet betalen · een schermafbeelding doorsturen naar verdacht@safeonweb.be · de sms verwijderen |
| 3 De Bonenbaas | **vals** | onverwacht een nieuw rekeningnummer · een buitenlands rekeningnummer · dringend en dreigend (*anders stoppen de leveringen*) · een ander adres dan gewoonlijk (*bonenbaas-betaling*, niet *debonenbaas*) · *Geachte klant* (onpersoonlijk) | niet betalen · De Bonenbaas bellen op het nummer dat hij al kent (niet uit de mail) · het melden aan Sara of de boekhouding · doorsturen naar verdacht@safeonweb.be |
| 4 Lotte Maes | **echt** | Tom verwachtte de mail (Lotte zei het gisteren) · het adres eindigt op `@novadepot.example` · de link gaat naar *novadepot* · ze spreekt hem aan met zijn naam · geen vraag om geld of een wachtwoord, niet dringend | de planning openen en nakijken · Lotte antwoorden of de ploegen kloppen |

**Deel 4a** (3 punten; drie zijn genoeg): niets meer invullen of de pagina sluiten · **meteen zijn wachtwoord veranderen** (ook op andere sites met
hetzelfde wachtwoord) · tweestapsverificatie aanzetten · het **melden** (Sara, de IT-verantwoordelijke, zijn werkgever) · zijn collega's
waarschuwen als er rare berichten in zijn naam vertrekken. **Deel 4b** (1 punt): **verdacht@safeonweb.be**, letter voor letter; een tikfout = ½.

**Hoe de punten verdeeld worden** (de controletabel onderaan het werkdocument heeft dezelfde criteria, samen 20; § 22 van de lesvoorbereiding):

| Criterium | Punten |
|---|---|
| Deel 2: echt of vals, bij bericht 1 en 2 | 2 |
| Deel 2: twee dingen die het tonen, bij bericht 1 en 2 | 4 |
| Deel 2: wat Tom doet, bij bericht 1 en 2 | 2 |
| Deel 3: echt of vals, bij bericht 3 en 4 | 2 |
| Deel 3: twee dingen die het tonen, bij bericht 3 en 4 | 4 |
| Deel 3: wat Tom doet, bij bericht 3 en 4 | 2 |
| Deel 4: drie dingen die Tom doet na een klik | 3 |
| Deel 4: het adres om een verdachte mail door te sturen | 1 |

**Wat niet telt**: een ding dat niet bij dit bericht past (*taalfouten* bij een bericht zonder taalfouten; *een link* als bewijs dat het vals is, bij
Lotte) · *het ziet er raar uit* zonder te zeggen wat · bij *Wat doet Tom?*: *antwoorden op de mail om te vragen of het echt is*, of *het nummer
in de mail bellen* = 0; *verwijderen* alleen = ½ · bij 4a twee keer hetzelfde telt één keer. *Twijfel* of beide bij *echt of vals* = 0.

### Essentiële fouten — geef hier altijd feedback op

- Een vals bericht *echt* noemen en zeggen dat Tom betaalt of klikt (bericht 2 of 3).
- *Antwoorden op de mail* of *het nummer in de mail bellen* om na te kijken.
- Na een klik niets doen, of het wachtwoord niet veranderen.

Verbeteren en opnieuw inleveren mag. Phishing komt terug in les 39 en in module 6 (mediawijsheid).

---

## 5. Schermafbeeldingen (optioneel)

Geen: alle beelden zijn tekeningen in HTML en CSS (de opdracht in Classroom, de berichten, de inbox van Tom, het slot, de tabellen van het
werkdocument), behalve het filmpje *Inleveren* uit het lespakket. Zie `assets/screenshots/LEESMIJ.md`.

---

## 6. Het materiaal opnieuw maken

```bash
python3 "werkdocument/maak_werkdocumenten.py"
```

Maakt `CO3_Phishing-of-echt.docx` opnieuw. Vereist `python-docx` en `Pillow`. De opdracht van Sara en wat Tom al weet staan bovenaan
het script; wijzig je de vakken of de punten, doe het ook in § 14 en § 22 van `lesvoorbereiding.md`.

---

## 7. Leerplandoelen in je jaaroverzicht

`lesdoelen.json`: `BV2_04.04` (kern), `BV2_02.04` en `BV2_04.01` (ondersteunend), `BV2_05.01` (contextueel). De repository krijgt de `pre-push`
hook uit `_sjablonen/pre-push`.

---

## 8. Wat nog moet blijken in de klas

- **De escaperoom in duo** is nieuw voor ORLO en is nog nooit met leerlingen getest. Lukt het wisselen tussen lespagina en werkdocument per
  leerling? Typen beide leerlingen echt in het eigen document, of kijkt er één mee? Het codewoord in deel 4 en de overeenkomst tussen de twee
  documenten van een duo (dezelfde zinnen) tonen het; samenwerken mag.
- **Haalbaarheid in 40 minuten.** Per kamer: een bericht lezen, twee vragen, drie vakken typen: ± 6 minuten. Zakt het tempo, dan is de
  minimumroute (deel 2, deel 3, vraag 4a, inleveren) de uitweg.
- **De sloten**: zijn de twee vragen en de hints haalbaar voor de zwakkere duo's? Blijft een duo hangen op *Wat geeft de doorslag?* (kamer 1)
  of op het woord vóór `.example` (kamer 2 en 4)? Een duo dat vastzit: kom langs; de hint zegt wat ze moeten doen, het antwoord niet.
- **Zweven over een link**: de statusbalk onder het bericht is een nagemaakte statusbalk. Begrijpen de leerlingen dat dit hetzelfde is als wat Chrome
  linksonder toont? Zonder muis (touchpad) werkt klikken ook.
- **Alles vals?** Noemen ze kamer 1 of 4 vals omdat er een link of een bestelnummer in staat? Dat is de bedoeling van twee echte berichten.
- **Wat doet Tom?** Antwoorden ze *op de mail antwoorden* of *het nummer bellen*? Dat is de essentiële fout (kamer 3 vraagt het in het slot).
- **De Extra en *Ongedaan maken*:** de knop komt uit de proef met demoleerling3 (15-10-2026). Kijk na de deadline of er opdrachten op *Toegewezen* staan.
- **Dia 4 en 6** zijn nieuwe soorten tekeningen (de inbox met sloten, de zeven vragen); de notities lezen ze de eerste keer hardop voor. Dia 2 haalt een
  vraag uit les 12 op; over les 11 en 12 is er nog geen verslag.
- De lespagina en dia's zijn gemeten met scripts en in de ingebouwde browser bekeken (geen horizontaal scrollen op 683, 1024, 1280 en 1440 px; elke dia
  binnen de rand; de sloten, de hints, het onthouden en het zweven getest), maar niet door een mens op een Windows-toestel: kijk de tekeningen na.
