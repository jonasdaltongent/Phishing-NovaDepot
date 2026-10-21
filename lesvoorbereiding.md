---
title: "Lesvoorbereiding — Les 13: Phishing of echt? (Communicatie 3: escaperoom in duo, de inbox van Tom)"
vak: "Toegepaste Informatica"
studierichting: "Organisatie en logistiek (arbeidsmarktgerichte finaliteit), 2de graad — 3ORLO, 4ORLOa en 4ORLOb"
lesduur: "1 × 50 minuten: 10 minuten instructie + 40 minuten keuzewerktijd"
week: "W09 — 2026-2027"
lokaal: "Lokaal 18 — Windows 11, Google Workspace in Chrome"
lesdag: "3ORLO wo 28 oktober (2de uur), 4ORLOb wo 28 oktober (3de uur), 4ORLOa do 29 oktober (7de uur)"
leerplan: "Leerplannen/Leerplannen_2de_graad_TOINFO_ORLO_arbeidsmarkt.md"
jaarplan: "Leerplannen/Lessenplan_TOINFO_ORLO_arbeidsmarkt_2026-2027.md — module 3, les 13"
vakinhoud: "_vakinhoud/phishing-en-oplichting.md"
register: "_bronnen/register/G-burgerschap-en-veiligheid.md § G2, G3 · didactiek.md § D5 (en D1–D4, D7)"
opgesteld_volgens: "_afspraken/ (werkruimte Toegepaste Informatica)"
---

# Lesvoorbereiding — Les 13: Phishing of echt?

> [!NOTE]
> Opbouw *Ik doe → Jullie doen* in plaats van de vierfasige opbouw (`_afspraken/didactiek.md`): een instructie
> van **10 minuten** (lesstart uit les 12 en een herkenbare situatie, de opdracht van Sara, één demo met het voorbeeld
> *Uw mailbox is vol*, de vragen om een vals bericht te herkennen, een controlevraag), daarna **40 minuten**
> keuzewerktijd: een **escaperoom in duo** op de lespagina, stap 1 samen. De demo is het uitgewerkte voorbeeld: het
> voorbeeldbericht staat ingevuld in deel 1 van het werkdocument.

> [!IMPORTANT]
> **Escaperoom in duo, elk een eigen werkdocument** (jaarplan; Jonas, 21-10-2026).
> - Het duo bespreekt elk bericht samen, aan één of twee computers; **elke leerling typt in het eigen werkdocument** en
>   levert het zelf in. Op de lespagina gaat de volgende *kamer* pas open als het slot van de vorige juist is; elk slot
>   geeft een letter van het codewoord **HAAK** (phishing komt van *vissen*: wie bijt, hangt aan de haak).
> - **Niemand klikt op een echte link.** De berichten zijn tekeningen in HTML; met de muis over een link zweven toont waar
>   hij naartoe leidt (zoals Safeonweb aanraadt), maar niets is aanklikbaar naar buiten. Geen echte merken of
>   organisaties als afzender: een verzonnen pakjesdienst, verzonnen leveranciers, adressen op `.example`, een
>   rekeningnummer dat niet kan bestaan.
> - **Zelfde systeem als les 11 en 12**: startpagina, route, *Toon stapjes* per handeling (de les begint in *Kort*),
>   checklist, *Jouw werk* en *Inleveren*. Het slot per kamer vervangt de zelftest; het codewoord komt in deel 4.
> - **Kort mag**: *noem twee*, *één zin* (voorstel na 3MWWE les 3).

---

## 1. Titel

**Phishing of echt?** — Communicatie 3: het veiligheidsteam ontmaskert de valse berichten in de inbox van Tom en ontsnapt
met het codewoord.

## 2. Doelgroep en beginsituatie

3ORLO, 4ORLOa en 4ORLOb: 2de graad Organisatie en logistiek, arbeidsmarktgerichte finaliteit. Dezelfde les in de drie
klassen.

**Gegeven:** les 09 (*Een veilig account*: een aanmelding op een onbekend toestel, wat als je gehackt bent), les 11 (*De
zakelijke e-mail*: Tom mailde Kim Wouters van De Melkkan) en les 12 (*Aan, CC, BCC en een bijlage*: di 27-10 in 4ORLOb
en 3ORLO, wo 28-10 in 4ORLOa; in elke klas vóór deze les). 3ORLO heeft les 13 de ochtend na les 12.

**Wat we weten** (`2026-2027/na-de-les.md`): de manier van werken (*Classroom › lespagina › werkdocument › Inleveren*)
lukt steeds beter; de tijd is krap. Het is de eerste les in duo in ORLO dit jaar. Over les 11 en 12 is er nog geen
verslag: kijk vóór de les in de app *Na de les*.

**Wat ze al kennen:** valse sms'en over pakjes of prijzen (1 op 4 Vlaamse jongeren kwam het voorbije jaar in contact met
phishing, Apenstaartjaren 2026 p. 69). Wat ze vaak niet weten: hoe je de echte bestemming van een link leest, en dat ook
een echt bericht een link kan hebben.

## 3. Tijdsduur

1 × 50 minuten: **10 minuten instructie** en **40 minuten keuzewerktijd** (keuzewerktijd = 50 − instructie). De
verdeling over de stappen staat in `dalton-lesfiche.html` en op dia 9.

## 4. Context

**NovaDepot.** Sara Claes (preventiedienst) heeft gemerkt dat er valse berichten rondgaan bij NovaDepot. Tom Peeters
(magazijn) twijfelt over vier berichten in zijn inbox. Sara vraagt het duo: *"Jullie zijn vandaag mijn veiligheidsteam.
Bekijk de inbox van Tom. Welke berichten zijn echt, welke vals, en wat moet Tom doen?"*

**Wat Tom al weet** (het kader in het werkdocument en op de lespagina):

| Feit | |
|---|---|
| Het adres van NovaDepot | alles eindigt op `@novadepot.example`; de website is `www.novadepot.example` |
| Zuivelhoeve De Melkkan | Tom mailde Kim Wouters (`verkoop@demelkkan.example`) in les 11 over bestelling **2026-0418** |
| Koffiebranderij De Bonenbaas | mailt altijd van `info@debonenbaas.example`; NovaDepot betaalt hen altijd op **hetzelfde Belgische rekeningnummer**, en het telefoonnummer staat in Toms adresboek |
| Lotte Maes | zei gisteren aan de telefoon dat ze de planning van de jobstudenten stuurt |
| Pakjes | Tom bestelde de laatste weken niets voor zichzelf |

Op de lespagina: *In deze les eindigt elk adres op `.example`: dat is verzonnen. Kijk naar het woord vlak vóór `.example`
en vóór de eerste `/`: dat is de echte website.* (de regel van Safeonweb, met `.example` in plaats van `.be` of `.com`).

**Het voorbeeld** (de demo, ingevuld in deel 1) — **vals**:

```text
Van:        NovaDepot Helpdesk <helpdesk@novadepot-mail.example>
Onderwerp:  DRINGEND: uw mailbox is vol

Beste gebruiker,
Uw mailbox is 99 % vol. Binnen 24 uur worden uw nieuwe berichten verwijderd.
Meld u nu aan om uw mailbox gratis te vergroten.
[ Mailbox vergroten ]          ← zweven toont: http://novadepot.mailbox-check.example/login
NovaDepot IT
```

**De vier kamers** (de inbox van Tom), elk met een slot op de lespagina:

| Kamer | Bericht | Echt of vals? | Het slot (twee vragen, allebei juist → een letter) |
|---|---|---|---|
| 1 | **Mail van Kim Wouters**, `verkoop@demelkkan.example`, onderwerp *RE: Levering bestelling 2026-0418 verplaatsen naar vrijdag 30 oktober*: *Beste meneer Peeters, bedankt voor uw bericht. Vrijdag 30 oktober past, maar pas om 11 uur. Onze chauffeur levert bestelling 2026-0418 dan aan poort 3. Met vriendelijke groeten, Kim Wouters, Verkoopdienst, Zuivelhoeve De Melkkan.* Geen link. | **echt** | *Echt of vals?* · *Wat geeft de doorslag?* **Tom vroeg zelf om dit antwoord, en het bestelnummer klopt** · er staan geen emoji's in · de mail is kort → **H** |
| 2 | **Sms** van `+44 7700 900123`: *PakjeSnel: uw pakket kon niet geleverd worden. Betaal binnen 12 uur 1,99 EUR verzendkosten, anders gaat het terug: pakjesnel.levering-betalen.example/tom* | **vals** | *Echt of vals?* · *Naar welke website leidt de link?* pakjesnel · **levering-betalen** · tom → **A** |
| 3 | **Mail** van *Koffiebranderij De Bonenbaas* `<facturatie@bonenbaas-betaling.example>`, onderwerp *Nieuw rekeningnummer - factuur 2026-311*: *Geachte klant, wegens een wijziging bij onze bank is ons rekeningnummer veranderd. Betaal factuur 2026-311 (486,20 euro) vandaag nog op ons nieuwe rekeningnummer LT00 1234 5678 9012 3456. Betaalt u niet vandaag, dan stoppen wij uw leveringen.* | **vals** (factuurfraude) | *Echt of vals?* · *Wat doet Tom eerst?* meteen betalen, anders stoppen de leveringen · antwoorden op de mail en vragen of het klopt · **De Bonenbaas bellen op het nummer dat hij al kent** → **A** |
| 4 | **Mail van Lotte Maes**, `lotte.maes@novadepot.example`, onderwerp *Planning jobstudenten 21–24 december*: *Dag Tom, zoals ik gisteren aan de telefoon zei: de planning van de jobstudenten staat klaar. Je vindt ze hier: www.novadepot.example/personeel/planning. Kijk je na of de ploegen kloppen? Bedankt! Lotte · Personeelsdienst · toestel 205* (zweven toont `https://www.novadepot.example/personeel/planning`) | **echt** | *Echt of vals?* · *Naar welke website leidt de link?* **novadepot** · personeel · planning → **K** |

Het codewoord: **HAAK**. Twee echte en twee valse berichten, zodat *alles is vals* niet werkt (`_vakinhoud/phishing-en-oplichting.md`, *Typische fouten*).

- `+44 7700 900123`: een Brits nummer uit de reeks die de Britse regulator voor films en series voorbehoudt (*voorstel
  AI*); het is ook een buitenlands nummer, een signaal. `LT00 …`: een IBAN met controlecijfers 00 bestaat nooit.
- PakjeSnel, De Melkkan, De Bonenbaas en NovaDepot zijn verzonnen (De Melkkan en De Bonenbaas komen uit les 07 en 11).
- Kim schreef in les 11 (de Extra) al dat het *pas om 11 uur* past: dit is dat antwoord.

## 5–6. Officiële leerplandoelen en beheersingsniveaus

Keuze volgens het jaarplan (les 13: **`BV2_04.04`** · `BV2_02.04`) en cluster G van het leerplan (*Digitaal burgerschap
en veiligheid*: kern `BV2_04.04`; ondersteunend `BV2_02.04`, `BV2_05.01`).

**Kern**

- **BV2_04.04** — *De leerlingen respecteren ethische, sociale en legale regels bij het gebruiken van digitale
  technologie.* · **Toepassen** — mogelijke lesinhouden in het leerplan: *phishing en social engineering*, *sterke
  wachtwoorden*, *vertrouwelijkheid in een professionele context*; mogelijk leerproduct: *analyse van een
  phishingbericht*. In deze les: vier berichten beoordelen en zeggen wat Tom moet doen (niet klikken, niet betalen,
  nakijken via een gekend kanaal, melden, na een klik het wachtwoord veranderen).

**Ondersteunend**

- **BV2_02.04** — *De leerlingen beoordelen doelgericht informatie op betrouwbaarheid, correctheid en bruikbaarheid bij
  het lezen en luisteren.* · **Evalueren** (`BV2_02.04.02` *bij het lezen*) — mogelijke evaluatiecriteria in het leerplan:
  *auteur of afzender*, *doel van de publicatie*, *bewijs en controleerbaarheid*. In deze les: de afzender, het doel (geld,
  een wachtwoord) en wat Tom kan nakijken.
- **BV2_04.01** — *De leerlingen gebruiken doelgericht courante functionaliteiten van vergelijkbare toepassingen om
  digitaal te communiceren.* · **Toepassen** — mogelijke lesinhoud: *phishing en verdachte communicatie herkennen*.

**Contextueel**

- **BV2_05.01** — *De leerlingen gaan respectvol en constructief met anderen in interactie rekening houdend met elkaars
  grenzen.* · **Creëren** — de escaperoom is duo-werk (`BV2_05.01.01` *dragen in groepsactiviteiten actief bij aan de
  uitwerking van een gezamenlijk resultaat*). Het samenwerken wordt niet beoordeeld.

**Bewust niet opgenomen**

- **`BV2_04.05`** (impact van digitale systemen) en malware, ransomware, hacken (register G3): achtergrond; ORLO les 56.
- **`BV2_04.03`** (veilig delen van bestanden): les 08 vervallen, komt terug in les 59.
- De woorden *social engineering*, *pretexting*, *CEO-fraude*: te veel nieuwe begrippen; CEO-fraude komt alleen als
  situatie in de exitvraag (`_vakinhoud/phishing-en-oplichting.md`, *Nog na te kijken* 4).

## 7. Concrete lesdoelen · 9. Bloomniveau en kennisdimensie

1. De leerlingen beoordelen of een bericht echt of vals is, aan de hand van signalen: onverwacht, dringend, de afzender,
   een vreemde vraag, de echte bestemming van een link, de aanspreking, een betaling. *(evalueren, conceptueel)*
2. De leerlingen lezen de domeinnaam van een link: het woord vóór `.example` (of `.be`, `.com`) en vóór de eerste `/`.
   *(toepassen, procedureel)*
3. De leerlingen zeggen wat je doet met een vals bericht (niet klikken of betalen, nakijken via een gekend kanaal,
   doorsturen naar verdacht@safeonweb.be) en na een klik (niets meer invullen, het wachtwoord veranderen, het melden).
   *(toepassen, procedureel)*

## 8. Succescriteria (leerlingtaal)

- Ik zeg bij elk bericht of het echt of vals is, en ik noem twee dingen die dat tonen.
- Ik kijk met mijn muis waar een link echt naartoe gaat, en ik lees het juiste woord.
- Ik weet wat Tom doet met een vals bericht: niet klikken, niet betalen, nakijken op een manier die hij al kent.
- Ik weet wat Tom doet als hij toch klikte.
- Ik werk samen met mijn buur, maar ik schrijf alles in mijn eigen werkdocument.

## 10. Benodigde voorkennis

Les 09 (een gehackt account: meteen het wachtwoord veranderen, tweestapsverificatie) · les 11 (de mail van Tom aan Kim) ·
les 12 (adressen lezen: Aan, Cc, Bcc) · het werkdocument bij *Jouw werk*, typen in de lichtblauwe vakken.

## 11. Benodigd materiaal en software

- Een computer in lokaal 18 (Windows 11) met het schoolaccount, Google Chrome en **een muis** (zweven over een link).
- Google Documenten en Google Classroom.
- Beamer met `presentatie.html` (10 dia's).
- De lespagina en het werkdocument **CO3_Phishing-of-echt**. Geen zip, geen bronbestanden.

## 12. Voorbereiding door de leraar

Zie `README.md` §2. Maak de duo's vooraf (naast elkaar, een sterkere lezer bij een zwakkere; een oneven aantal: één trio).
Op dia 5 zweef je zelf met de muis over de knop van het voorbeeld.

## 13. Opbouw in Google Classroom

Onderwerp **Digitale competenties**. Eén opdracht in elke klas, *Communicatie 3 — Phishing of echt?*, 20 punten,
deadline **vrijdag 30 oktober 2026, 20.00 uur**:

| Bijlage | Instelling | Waarom |
|---|---|---|
| Link naar de lespagina | link | de escaperoom en de instructies |
| `CO3_Phishing-of-echt` (Google-document) | **Een kopie maken voor elke leerling** | het enige in te leveren bestand; ook in duo levert elk zijn eigen document in |

Instructie in de opdracht:

```text
1. Open de lespagina (link) en je werkdocument CO3_Phishing-of-echt.
2. Je werkt samen met je buur, maar je schrijft alles in je eigen werkdocument.
3. Klik op Inleveren, ten laatste {deadline}.
```

Inplannen: een half uur vóór elke les (`_afspraken/publiceren.md`): wo 28-10 om 8.45 (3ORLO) en 9.55 (4ORLOb), do 29-10
om 13.15 (4ORLOa).

## 14. Het individuele werkdocument

**CO3_Phishing-of-echt**, gegenereerd met `werkdocument/maak_werkdocumenten.py` in de huisstijl van het sjabloon
(`huisstijl.py`): logo, titel *Phishing of echt?* en puntenvak (/20). Geen naam, klas of datum. Elk antwoord in een
lichtblauw vak. De delen heten `Deel <n> — <titel>` (met `deel(..., punten=…)`).

**Kader** (bovenaan): de opdracht van Sara (§ 4) en *Wat Tom al weet* (de tabel van § 4). Daaronder: *Je werkt samen met
je buur, maar je schrijft alles zelf in dit document.*

**Elk bericht** krijgt in het werkdocument dezelfde tabel van drie rijen, met een kop *Bericht <n> — <van wie>* (de
berichten zelf staan op de lespagina):

| Vraag | Antwoord (vak) |
|---|---|
| Echt of vals? | |
| Welke twee dingen tonen dat? Noem er **twee**. *Kort mag.* | |
| Wat doet Tom? Schrijf **één zin**. | |

**Deel 1 — Het voorbeeld** (stap 1, 0 punten): de tabel voor het voorbeeld *Uw mailbox is vol*, **ingevuld in grijs**:
*Vals* · *Het is dringend (binnen 24 uur), en de link gaat naar mailbox-check, niet naar novadepot.* · *Tom klikt niet en
meldt de mail aan Sara.*

**Deel 2 — Kamer 1 en 2** (stap 2, 8 punten): bericht 1 (Kim Wouters) en bericht 2 (de sms van PakjeSnel).

**Deel 3 — Kamer 3 en 4** (stap 3, 8 punten): bericht 3 (De Bonenbaas) en bericht 4 (Lotte Maes).

**Deel 4 — Ontsnapt!** (stap 4 en 5, 4 punten)

- Bovenaan het vak *Het codewoord van de escaperoom* (codewoord **HAAK**).
- a. *Vorige maand klikte Tom op een link in een mail zoals het voorbeeld, en hij typte zijn wachtwoord in. Wat doet hij
  nu? Noem **drie** dingen.* [vak] (3)
- b. *Tom krijgt thuis een verdachte mail. Naar welk adres stuurt hij ze door?* [vak] (1)
- **Controletabel** (`controletabel`): de criteria van § 22; de leerling leest na en typt een x.

**Extra — niet verplicht** (na het inleveren): *Schrijf voor de collega's van NovaDepot drie tips tegen valse berichten,
elk in één zin.* [vak] Telt niet mee. (Naar het idee van TC KS4 Online safety L5, act. 4 *Educating others*.)

**Verwachte antwoorden** (ook in `README.md` §4; hier voor de verbetertool). Twee dingen per bericht zijn genoeg; elk
ding dat **bij dit bericht** past, telt:

| Bericht | Echt of vals | Dingen die het tonen (twee zijn genoeg) | Wat doet Tom? |
|---|---|---|---|
| 1 Kim Wouters | **echt** | Tom verwachtte dit antwoord (hij vroeg het zelf, *RE:*) · het adres van De Melkkan kent hij · het bestelnummer 2026-0418 en de datum kloppen · ze spreekt hem aan met zijn naam · geen link, geen vraag om geld of een wachtwoord, niet dringend | de nieuwe dag en het uur noteren (vrijdag 30 oktober, 11 uur) · Kim bedanken of bevestigen · de levering doorgeven |
| 2 sms PakjeSnel | **vals** | onverwacht (Tom bestelde niets) · dringend (binnen 12 uur) · vraagt een betaling · de link gaat naar *levering-betalen*, niet naar pakjesnel · een buitenlands nummer · geen naam en geen pakjesnummer | niet klikken en niet betalen · een schermafbeelding doorsturen naar verdacht@safeonweb.be · de sms verwijderen |
| 3 De Bonenbaas | **vals** | onverwacht een nieuw rekeningnummer · een buitenlands rekeningnummer · dringend en dreigend (*anders stoppen de leveringen*) · een ander adres dan gewoonlijk (*bonenbaas-betaling*, niet *debonenbaas*) · *Geachte klant* (onpersoonlijk) | niet betalen · De Bonenbaas bellen op het nummer dat hij al kent (niet uit de mail) · het melden aan Sara of de boekhouding · doorsturen naar verdacht@safeonweb.be |
| 4 Lotte Maes | **echt** | Tom verwachtte de mail (Lotte zei het gisteren) · het adres eindigt op `@novadepot.example` · de link gaat naar *novadepot* · ze spreekt hem aan met zijn naam · geen vraag om geld of een wachtwoord, niet dringend | de planning openen en nakijken · Lotte antwoorden of de ploegen kloppen |

Deel 4a (drie zijn genoeg, `_vakinhoud/phishing-en-oplichting.md` en `veilige-accounts.md`): niets meer invullen of de
pagina sluiten · **meteen zijn wachtwoord veranderen** (ook op andere sites met hetzelfde wachtwoord) · tweestapsverificatie
aanzetten · het **melden** (Sara, de IT-verantwoordelijke, zijn werkgever) · zijn collega's waarschuwen als er rare
berichten in zijn naam vertrekken. Deel 4b: **verdacht@safeonweb.be**.

**Wat niet telt** (voorstel AI, 21-10-2026): een ding dat niet bij dit bericht past (*taalfouten* bij een bericht zonder
taalfouten; *een link* als bewijs dat het vals is, bij Lotte) · *het ziet er raar uit* zonder te zeggen wat · bij *Wat doet
Tom?*: *antwoorden op de mail om te vragen of het echt is*, of *het nummer in de mail bellen* (dan praat hij met de
oplichter) = 0 · bij 4a twee keer hetzelfde (*wachtwoord veranderen* en *een nieuw wachtwoord kiezen*) telt één keer.

## 15–17. Korte klassikale instructie en demonstratie (Ik doe → Jullie doen)

| Fase | Tijd | Inhoud |
|---|---|---|
| **Instructie** — lesstart | 1' + 2' | **Dia 1** (*Zo start je*) terwijl de computers opstarten. **Dia 2**, ophalen uit les 12: *Lotte mailt 30 klanten die elkaar niet kennen. Waar zet ze hun adressen?* A Aan · B Cc · **C Bcc** (vingers). Dan de herkenbare situatie: *"Wie kreeg al eens een vreemde sms over een pakje?"* (handen) en het cijfer: *1 op 4 Vlaamse jongeren kreeg vorig jaar een phishingbericht* (Apenstaartjaren 2026). |
| **Instructie** — Ik doe | **5'** | **Dia 3** lesdoel (30"). **Dia 4** de opdracht van Sara: *jullie zijn het veiligheidsteam; vier berichten; twee regels: samen bespreken, elk schrijft in het eigen werkdocument; een kamer gaat pas open als het slot juist is* (1'). **Dia 5, demo, hardop denkend** (2'): het voorbeeld *Uw mailbox is vol*. *"Is het onverwacht? Dringend? Wie stuurt het: novadepot-mail, niet novadepot. Wat vraagt het: aanmelden, dus mijn wachtwoord. En de knop…"*: zweef met de muis, lees het adres onderaan, wijs het woord vóór `.example` aan: *mailbox-check*. *"Vals. Wat doet Tom? Niet klikken, het melden aan Sara."* Dat staat ingevuld in deel 1. **Dia 6** de vragen van Safeonweb als tekening (onverwacht · dringend · afzender · vreemde vraag · waar gaat de link · aanspreking · betaling) (1'30"). |
| **Instructie** — controle | 1' | **Dia 7**: *Naar welke website gaat `pakjesnel.betaal-nu.example/tom`?* A pakjesnel · **B betaal-nu** · C tom. Vingers; wie A toont, komt zo dadelijk even bij je. |
| **Samen** | **3'** | **Dia 8**: de duo's zitten naast elkaar; iedereen doet stap 1 (het eigen werkdocument openen, het kader en het voorbeeld lezen); duim op. |
| **Keuzewerktijd** | **tot het einde** | **Dia 9** blijft staan, met de kloktijden; stap 2 tot 5, inleveren inbegrepen. Eerste rondgang: heeft **elke** leerling van het duo het eigen werkdocument open? Tweede rondgang, rond kamer 2: zweven ze over de link? Staat er bij *Wat doet Tom?* geen *antwoorden op de mail*? Laatste minuut: **dia 10**, de exitvraag, en mondeling: wie niet klaar is, levert toch in. |

Niet voorgedaan: de vier kamers (ze doen het meteen zelf, `_afspraken/didactiek.md`). Wel voorgedaan wat nieuw is en
makkelijk misloopt: zweven over een link en het juiste woord lezen.

## 18–19. Zelfstandige verwerking en stappenplan

Route · één stap · checklist (± 15 taken). Zoals les 11 en 12: *Toon stapjes* per handeling, de les begint in *Kort*
(`data-modus-start="kort"`, zonder knop), grijze regels en één tip per stap. Leesmateriaal in een **infokader**, in de
volgorde van de vragen, zonder de antwoorden aan te wijzen. Bij de eerste handeling waarin de leerling typt: *typ in
het lichtblauwe vak*.

Route in twee groepen: *De inbox van Tom* (stap 1–3) · *Ontsnapt!* (stap 4–5).

1. **Klaarzetten** (samen, 3') — *Werkdocument · Lespagina* — individueel
   - Open je werkdocument **CO3_Phishing-of-echt** (stapjes zoals les 11–12). Ga naast je duopartner zitten; elk opent het
     eigen werkdocument.
   - Lees het kader: wat weet Tom al? Lees het voorbeeld in deel 1: zo vul je elk bericht in.
   - Tip: *Staat jouw naam niet in de titel? Dan opende je niet je eigen kopie.*
2. **Kamer 1 en 2** (12') — *Lespagina · Werkdocument, deel 2* — in duo
   - Infokader *Zo herken je een vals bericht* (de vragen van Safeonweb, in eigen woorden, uit
     `_vakinhoud/phishing-en-oplichting.md`): onverwacht? · dringend? · ken je de afzender (en het adres)? · een vreemde
     vraag (wachtwoord, bankgegevens, geld)? · waar gaat de link echt naartoe? · word je persoonlijk aangesproken? · een
     betaling? Plus: *Geen enkel ding bewijst het alleen. Ook een echt bericht kan een link hebben.*
   - Infokader *Waar gaat de link naartoe?*: zweef met je muis over de link; onderaan verschijnt het adres; het woord vlak
     vóór `.example` en vóór de eerste `/` is de echte website. Met de twee voorbeelden van het type
     `www.novadepot.example/planning` (novadepot) en `www.novadepot.mailbox-check.example/login` (mailbox-check).
   - Handelingen: open kamer 1 en lees het bericht samen · beantwoord het slot (twee vragen) · schrijf in je werkdocument
     bij *Bericht 1*: echt of vals, twee dingen die het tonen, wat Tom doet · daarna hetzelfde voor kamer 2.
   - Bij een fout antwoord in het slot: een hint, geen antwoord (*Tom vroeg Kim in les 11 zelf iets. Is dit haar
     antwoord?* · *Zweef over de link: welk woord staat vóór .example?*).
   - Tip: *Jullie zijn het niet eens? Overloop samen de vragen van het infokader, één voor één.*
3. **Kamer 3 en 4** (12') — *Lespagina · Werkdocument, deel 3* — in duo
   - Handelingen zoals stap 2, voor kamer 3 en 4. Bij kamer 3: lees ook het kader (*Wat Tom al weet* over De Bonenbaas).
   - Hints: *Vergelijk het adres met wat Tom al weet.* · *Bel je het nummer uit een valse mail, wie neemt er dan op?* ·
     *Zweef over de link van Lotte.*
   - Tip: *Niet alles is vals. Een bericht dat Tom verwachtte, van een adres dat hij kent, zonder vreemde vraag, kan echt
     zijn.*
4. **Ontsnapt!** (6') — *Lespagina · Werkdocument, deel 4* — in duo
   - De vier letters vormen het codewoord; typ het bovenaan deel 4 (het blok met het codewoord gaat pas open als de vier
     sloten juist zijn).
   - Infokader *Je klikte toch?* (uit `_vakinhoud/phishing-en-oplichting.md` en `veilige-accounts.md`, kort, zonder de
     drie antwoorden als lijstje voor te kauwen: *Wat zei Safeonweb in les 09 over een gehackt account?*) en *Waar meld
     je een vals bericht?*
   - Handelingen: beantwoord vraag a (drie dingen) en b in je werkdocument.
5. **Nalezen en inleveren** (7') — *Werkdocument · Opdracht* — individueel
   - Handelingen: staat bij elk bericht echt of vals, twee dingen en één zin? · loop de controletabel na · klik in je
     opdracht op **Inleveren** (het filmpje *Inleveren*). *Ook je duopartner levert zelf in.*

**Extra** (na het inleveren, telt niet mee): drie tips voor de collega's (§ 14). De lespagina zegt hoe de leerling opnieuw
inlevert: **Ongedaan maken**, daarna weer **Inleveren**, met de rode waarschuwing.

Stap 1 tot 5 samen: **40 minuten** (3 + 12 + 12 + 6 + 7), de keuzewerktijd, inleveren inbegrepen. Dezelfde minuten
staan op dia 9 en in `dalton-lesfiche.html` (stap 2–4 *in duo*, stap 1 en 5 *individueel*).

## 20. Differentiatie en scaffolding

- **Ondersteuning:** het uitgewerkte voorbeeld in deel 1; het duo; de vragen in het infokader; hints bij een fout slot;
  *noem twee* en *één zin*; de theoriekaart; de hulpvolgorde *Toon stapjes → je duopartner → je leraar*.
- **Minimumroute:** deel 2, deel 3 en vraag 4a, en inleveren. Vraag 4b mag later, vóór de deadline.
- **Een duo dat sneller of trager is:** het slot laat geen kamer over; wie vastzit, krijgt een hint. Werkt één leerling van
  het duo niet mee, dan zet Jonas die naast een ander duo (een trio).
- **Voor wie snel klaar is:** de Extra (drie tips), telt niet mee.
- **Taalvaardigheid:** de berichten zijn kort; de vragen van het infokader zijn ja/nee-vragen; spelling telt niet mee.

## 21. Controle van begrip

- **Lesstart:** Bcc (dia 2), met vingers; de herkenbare situatie (handen).
- **Controle na de demo:** het domein lezen (dia 7), met vingers.
- **Tijdens de rondgang:** *"Wie stuurt dit echt? Kijk naar het adres."* · *"Waar gaat die link naartoe?"* · *"Waarom bel je
  niet het nummer uit de mail?"* · *"Waarom is bericht 4 echt, ook al staat er een link in?"*
- **Op de lespagina:** de sloten van de vier kamers (directe feedback, met hints) en de checklist.
- **Exitvraag (dia 10):** *Tom krijgt een mail van "de directeur", van een adres dat hij niet kent: "Koop snel vijf
  cadeaubonnen van 100 euro en stuur me de codes. Zeg het tegen niemand." Wat doet hij?* A meteen kopen, het is de baas ·
  **B de directeur bellen op het nummer dat hij al kent** · C op de mail antwoorden en vragen of het echt is. Een
  scharniervraag (CEO-fraude, Safeonweb 07-09-2026): wie C kiest, praat met de oplichter.

## 22. Evaluatiecriteria

Op het **werkdocument** (20 punten in Classroom), nooit op de vinkjes of de sloten. De criteria staan als `controletabel`
onderaan het werkdocument. Verbetersleutel: `README.md` §4.

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
| **Totaal** | **20** |

Punten per deel: 0 · 8 · 8 · 4.

**Hoe de punten verdeeld worden** (voorstel AI, 21-10-2026; Jonas past aan bij het verbeteren):

- **Echt of vals** (1 per bericht): alleen het woord telt. *Twijfel* of beide = 0.
- **Twee dingen** (2 per bericht): 1 per ding dat bij **dit** bericht past (tabel in § 14). Een ding dat niet past, of *het
  ziet er raar uit* zonder te zeggen wat = 0. Is *echt of vals* fout, dan tellen de dingen toch, als ze kloppen (een
  leerling die bij bericht 4 *de link gaat naar novadepot* schrijft maar *vals* kiest, krijgt 1 voor dat ding).
- **Wat doet Tom** (1 per bericht): een handeling uit de tabel in § 14. Bij een vals bericht: *antwoorden op de mail* of
  *het nummer in het bericht bellen* = 0; *verwijderen* alleen = ½ (hij meldt het niet en kijkt niets na).
- **Deel 4a** (3): 1 per ding uit de lijst in § 14; twee keer hetzelfde telt één keer.
- **Deel 4b** (1): `verdacht@safeonweb.be`, letter voor letter; een tikfout = ½.

**De feiten** die in de antwoorden juist moeten zijn: de domeinen *levering-betalen*, *bonenbaas-betaling*, *novadepot*,
*mailbox-check* · het bestelnummer 2026-0418 · verdacht@safeonweb.be.

**Essentiële fouten:** een vals bericht *echt* noemen en zeggen dat Tom betaalt of klikt (bericht 2 of 3) · *antwoorden op de
mail* of *het nummer in de mail bellen* om na te kijken · na een klik niets doen of het wachtwoord niet veranderen.

**Het codewoord** (bovenaan deel 4): **HAAK**. Ontbreekt het, dan zijn de sloten niet allemaal juist gemaakt; het telt niet
mee voor de punten.

### Jonas' beslissingen bij het verbeteren

- (nog geen)

## 23. Feedback

- **Tijdens de les**, met denkvragen (§ 21) en de hints van de sloten.
- **Na de les:** één top en één tip in Classroom. Verbeteren en opnieuw inleveren mag. Phishing komt terug in les 39 en in
  module 6 (mediawijsheid).

## 24. Indieninstructies

- De leerling leest op de **lespagina**, werkt samen met de duopartner, en schrijft in de eigen kopie van
  **CO3_Phishing-of-echt**.
- Alleen het werkdocument wordt ingeleverd; **elke leerling levert zelf in**.
- **Deadline:** vrijdag 30 oktober 2026 om 20.00 uur.
- Niet klaar? Toch inleveren. De leraar zegt dat mondeling aan het einde van de les.

## 25. Privacy, auteursrecht en digitale veiligheid

- Alle berichten, namen, nummers, rekeningnummers en adressen zijn **fictief** (§ 4): geen echte bank, pakjesdienst,
  overheid of bedrijf als afzender van een vals bericht. Safeonweb wordt wel genoemd (de raad en verdacht@safeonweb.be).
- **Geen echte links.** De links in de berichten zijn tekst in een tekening; zweven toont het adres, klikken doet niets.
  Geen QR-code (een echte QR-code zou een echte website openen).
- De leerlingen vullen nergens een echt wachtwoord of gegeven in; ook het slot van de escaperoom vraagt alleen een keuze.
- De lespagina bewaart alleen vinkjes, de laatste stap en welke sloten open zijn in `localStorage`, met een wisknop. Geen
  login, geen tracking, geen externe scripts.
- Uitleg in **eigen woorden**, uit `_vakinhoud/phishing-en-oplichting.md` (Safeonweb heeft geen open licentie). De
  werkvorm is naar het idee van Teach Computing en Hello World (§ *Bronnenonderzoek*); niets overgenomen.

## 26. Herhaling en vervolg

- **Les 14** (*Uitnodigen met de agenda*): een uitnodiging van een onbekende? Dezelfde vragen.
- **Les 15** (E1): de e-mailopdracht.
- **Les 39** en **module 6** (mediawijsheid: *Echt of nep?*, les 36): dezelfde vragen voor nieuws en websites
  (`BV2_02.04`).
- **Gespreide herhaling:** les 09 (gehackt account) in deel 4; les 11 (de mail aan Kim) in kamer 1; les 12 (adressen
  lezen) in de lesstart.

## 27. Inhoudsstructuur van de HTML-pagina

- Kopbalk met het logo van NovaDepot, de lestitel en het logo van GO! Dalton Gent.
- **Startpagina**: welkom (Sara heeft een veiligheidsteam nodig; *werk in duo*; Dalton *welkom* of *letop*) · *Wat heb je
  nodig?* met **drie** beelden (de opdracht in Classroom → deze lespagina → je werkdocument CO3) · *Dit maak je vandaag*:
  een tekening van de inbox van Tom met vier berichten en vier sloten (dicht), en de vier letters als lege vakjes
  (verklapt niets) · *Na deze les kan je* (drie punten) · *Zo werken jullie in duo* (samen bespreken, elk eigen
  werkdocument, elk zelf inleveren) · *Start met stap 1*.
- **Links** de route: *Start*, *Theoriekaart*, stap 1–3 (*De inbox van Tom*), stap 4–5 (*Ontsnapt!*), *Extra*.
- **Midden** één stap tegelijk; in stap 2 en 3 de **kamers**: per kamer het bericht als tekening (mail of sms), daaronder
  het slot (twee vragen met knoppen), een hint bij een fout antwoord, en bij een juist antwoord de letter en *Kamer <n+1>
  is open*. Een kamer die nog dicht is, toont alleen een slotje.
- **Rechts** de checklist: ± 15 taken, per stap.
- **Theoriekaart** (± 10 kaartjes): zo werkt elke les · zo werken jullie in duo · wat is phishing (de haak) · de vragen van
  Safeonweb · waar gaat de link naartoe (het woord vóór `.example`) · ook echt kan een link hebben · niet klikken, niet
  betalen, nakijken via een gekend nummer · verdacht@safeonweb.be · je klikte toch? (les 09) · woorden (phishing,
  afzender, domeinnaam, oplichter, verdacht) · veelgemaakte fouten.
- **Beelden** (tekeningen in HTML en CSS, `_afspraken/vormgeving-en-techniek.md`): de opdracht in Classroom; de vier
  berichten en het voorbeeld als mail- of sms-venster (dia 5, stap 2–3); de vragen van Safeonweb als tekening (dia 6, stap
  2, theoriekaart); een link met het adres onderaan, zoals de statusbalk van een browser (dia 5 en 7, infokader). Geen
  logo's van echte merken, geen logo van Gmail.

## 28. Benodigde interactieve functies

- Checklist met voortgangsbalk (`localStorage`, voorvoegsel `novadepot_phishing_v1_`) en een wisknop; groen vinkje in de
  route; op een smal scherm alleen de taken van de huidige stap.
- Vorige/volgende-knoppen; de laatst geopende stap wordt onthouden.
- *Toon stapjes* per handeling zoals les 11–12.
- **De escaperoom**: vier sloten, elk met twee keuzevragen; allebei juist → de letter verschijnt en de volgende kamer gaat
  open; fout → een hint, opnieuw proberen. Welke sloten open zijn, wordt onthouden (`localStorage`), zodat een herladen
  pagina het werk niet wist; de wisknop zet ook de sloten terug. Na vier sloten gaat het blok met het codewoord **HAAK**
  open (in stap 4). De antwoorden staan in `js/script.js` (een leerling die de broncode leest, vindt ze: geen probleem,
  het werkdocument telt).
- **Zweven over een link**: een link in een bericht is geen echte link (`<span>` of `<a>` zonder `href` naar buiten);
  bij zweven of focus (en bij een klik, voor wie geen muis heeft) verschijnt onderaan het bericht het adres, zoals de
  statusbalk van een browser.
- Het filmpje *Inleveren* in stap 5 (`assets/video/inleveren.mp4`).
- Toestel: Windows 11 (lokaal 18). `data-ai-hulp="uit"`. Geen logins, tracking of externe scripts.

## Bronnenonderzoek

Gedaan op 21-10-2026, vóór de opbouw vastlag (`_afspraken/vakinhoud.md`, § *Bronnenonderzoek*). Register G2, G3,
didactiek D5 (en D1–D4, D7 voor duo-werk); het vakinhoudbestand bestond nog niet: `_vakinhoud/phishing-en-oplichting.md`
is nieuw (21-10-2026), uit de bronnen hieronder. `2026-2027/na-de-les.md`: nog niets over phishing. Alleen verwijzingen en
eigen woorden.

| Bron | Waar | Wat de les ervan gebruikt | Bewust niet, en waarom |
|---|---|---|---|
| Safeonweb (online, in de browser) | *Leer valse mails herkennen* (gelezen 21-10-2026) | de vragen om een vals bericht te herkennen (het infokader, dia 6), de regel van de domeinnaam met het voorbeeld (dia 5 en 7), *klik niet, open de bijlage niet*, verdacht@safeonweb.be (deel 4b), *je klikte toch?* (deel 4a) | de QR-code (een echte code opent een echte site), de spam-map (geen Gmail in de les) |
| Safeonweb (online) | *Een factuur per e-mail ontvangen?* (23-09-2026) | kamer 3: het nieuwe rekeningnummer, eerst bellen via een gekend nummer | het onderscheppen van een echte factuur (mailbox gehackt): te ingewikkeld |
| Safeonweb (online) | *Pas op voor CEO-fraude via Microsoft Teams* (07-09-2026) | de exitvraag: de "directeur", geheim houden, snel; nakijken via een tweede, gekend kanaal | Teams zelf (de leerlingen kennen het niet) |
| Safeonweb (online) | *Trap nooit meer in de val!* | verdacht@safeonweb.be, ook voor een sms (schermafbeelding) | de browserextensie en de app (niet installeren op een schoolcomputer) |
| GBA Stappenplan | p. 18 (*Let op met Phishing!*) | de korte omschrijving (een valse webpagina die je wachtwoord vraagt): het voorbeeld *Uw mailbox is vol* | — |
| Apenstaartjaren 2026 | p. 69–70 | het cijfer in de lesstart (1 op 4 jongeren), de herkenbare situatie (een bericht over een pakje of een cadeautje) | de citaten van jongeren (namen, ook al zijn ze verzonnen in het rapport) |
| TC KS4 Cyber security | L2, dia 16 (waarom *phishing*), dia 18–28 + *A3 Activity sheet – Phishing email* (tien aanwijzingen in een valse bankmail) | het idee van de haak (codewoord **HAAK**) en van *zoek de aanwijzingen* per bericht; de aanwijzingen zelf komen uit Safeonweb (Belgisch, Nederlands) | de bankmail en de Britse bank (een echt merk); het werkblad zelf (voorwaarden van de site); *pharming*, *blagging*, *shoulder surfing* (te veel begrippen) |
| TC KS3 Cybersecurity | L2, dia 11 (*Key indicators*), start *Which rock star are you?* | bevestigt de signalen | de quiz die stiekem gegevens vraagt (in een lesuur met een escaperoom te veel) |
| TC KS4 Cyber security | L6 *Where is the danger* (scenario's) | — | de scenario's gaan over netwerkbeveiliging van een bedrijf (KS4) |
| TC KS4 Online safety | L5 act. 4 *Educating others* | de Extra: drie tips voor de collega's | — |
| Hello World | 06 p. 36–37 (*Improving problem-solving skills using escape games*) | de opbouw: sloten die elkaar openen; de eerste aanwijzing haalbaar voor iedereen, met hints; samenwerken laat elk een rol nemen | fysieke sloten en uv-lampen (alles op de lespagina) |
| Hello World | 24 p. 36–37 (*Using gamification to improve engagement in cybersecurity*) | een echte rol: *het veiligheidsteam van Sara* | punten of badges (de punten komen uit het werkdocument) |
| Hello World | 18 p. 26, p. 30 | — (gelezen via het register: echte phishingmails verzamelen; *capture the flag*) | echte phishingmails tonen (echte merken en links) |
| Register D7 (duo-werk) | Wijze lessen r. 1536 en r. 2017 (samenwerkend leren monitoren) | de duo-regels: samen bespreken, elk schrijft zelf (geen meelifter: elk werkdocument telt apart) | rollen in het duo (te veel voor een eerste duo-les) |
| Leerplan ORLO | `BV2_04.04` (*phishing en social engineering*; leerproduct *analyse van een phishingbericht*), `BV2_02.04`, `BV2_04.01`, `BV2_05.01`, cluster G | de doelen | zie § 5–6 |
| `_vakinhoud/veilige-accounts.md` | § *Gehackt?* (Safeonweb, les 09) | deel 4a | — |

Breder gezocht met `zoek_bronnen.py` op: `phishing`, `phishing OR oplichting OR scam`, `escape`, `"social engineering"`.
De treffers staan in het register (G2, D5); niets nieuws buiten het register. De EDUbox *Cybersecurity*, de phishingtest
en de e-learning van Safeonweb zijn niet bekeken (niet in de werkruimte; `_vakinhoud/phishing-en-oplichting.md`, *Nog na
te kijken*).

**Tegenstrijdigheden:** geen in de feiten. Safeonweb zegt dat taalfouten op een vals bericht *kunnen* wijzen, maar dat
ervaren oplichters foutloos schrijven: de valse berichten in de les hebben daarom (bijna) geen taalfouten, zodat de
leerlingen naar andere signalen kijken.
