#!/usr/bin/env python3
"""
maak_werkdocumenten.py
Genereert het werkdocument voor les 13 "Phishing of echt?" (NovaDepot, ORLO, Communicatie 3).

  CO3_Phishing-of-echt.docx   het werkdocument dat de leerling INLEVERT (een kopie per leerling)

Geen bronbestanden en geen zip: de les werkt alleen in het werkdocument en op de lespagina. De berichten zelf
(vier kamers van de escaperoom en het voorbeeld) staan op de lespagina, niet in het werkdocument: de leerling
beoordeelt ze daar en typt zijn antwoorden hier. Er wordt op niets geklikt, niets verstuurd.

Gebruik:  python3 maak_werkdocumenten.py
Vereist:  python-docx, Pillow (huisstijl.py en go-dalton-gent.png staan ernaast)

LET OP bij aanpassen:
 - Alle namen, nummers, rekeningnummers en adressen zijn verzonnen; de adressen eindigen op .example (RFC 2606).
 - Deel 1 (het voorbeeld) is de demo van dia 5, volledig ingevuld in het grijs. Het telt niet mee (0 punten).
 - Elk bericht heeft DRIE vakken: echt of vals / twee dingen die het tonen / wat Tom doet. Zo kan de verbetertool
   per criterium punten geven (lesvoorbereiding § 22). Wijzig je de vakken, wijzig dan ook § 14 en § 22.
 - De punten staan per deel (0 · 8 · 8 · 4) en samen in de controletabel (lesvoorbereiding § 22). Verander je ze,
   doe het op beide plaatsen.
 - Het codewoord (HAAK) staat bovenaan deel 4. De lespagina toont de vier letters pas als de vier sloten juist zijn.
"""
import os

import huisstijl as hs   # de huisstijl van het werkdocument (uit _sjablonen/lespakket/werkdocument/)

HERE = os.path.dirname(os.path.abspath(__file__))
UIT = os.path.join(HERE, "CO3_Phishing-of-echt.docx")

# Het kader bovenaan: de opdracht van Sara en wat Tom al weet (lesvoorbereiding § 4)
OPDRACHT = ("Sara Claes van de preventiedienst bij NovaDepot vraagt jullie: “Jullie zijn vandaag mijn veiligheidsteam. "
            "Bekijk de inbox van Tom Peeters. Welke berichten zijn echt, welke vals, en wat moet Tom doen?”")
WAT_TOM_WEET = [
    ("Het adres van NovaDepot:", "alles eindigt op @novadepot.example; de website is www.novadepot.example"),
    ("Zuivelhoeve De Melkkan:", "Tom mailde Kim Wouters (verkoop@demelkkan.example) over bestelling 2026-0418"),
    ("Koffiebranderij De Bonenbaas:", "mailt altijd van info@debonenbaas.example; NovaDepot betaalt hen altijd op "
                                      "hetzelfde Belgische rekeningnummer; hun telefoonnummer staat in Toms adresboek"),
    ("Lotte Maes:", "zei gisteren aan de telefoon dat ze de planning van de jobstudenten stuurt"),
    ("Pakjes:", "Tom bestelde de laatste weken niets voor zichzelf"),
]

# De drie vragen bij elk bericht. De tweede en derde krijgen een vak waarin de leerling typt.
VRAGEN = [
    ("Echt of vals?", 1.0),
    ("Welke twee dingen tonen dat? Noem er twee. Kort mag.", 1.9),
    ("Wat doet Tom? Schrijf één zin.", 1.6),
]

# Deel 1: het voorbeeld, ingevuld in het grijs (de demo van dia 5)
VOORBEELD = [
    ("Echt of vals?", "Vals"),
    ("Welke twee dingen tonen dat? Noem er twee. Kort mag.",
     "Het is dringend (binnen 24 uur), en de link gaat naar mailbox-check, niet naar novadepot."),
    ("Wat doet Tom? Schrijf één zin.", "Tom klikt niet en meldt de mail aan Sara."),
]

# De criteria van lesvoorbereiding § 22 (samen 20): 2 · 4 · 2 · 2 · 4 · 2 · 3 · 1
CRITERIA = [
    ("Deel 2: bij bericht 1 en 2 staat echt of vals.", 2),
    ("Deel 2: bij bericht 1 en 2 noem ik twee dingen die het tonen, en ze passen bij dat bericht.", 4),
    ("Deel 2: bij bericht 1 en 2 schrijf ik wat Tom doet.", 2),
    ("Deel 3: bij bericht 3 en 4 staat echt of vals.", 2),
    ("Deel 3: bij bericht 3 en 4 noem ik twee dingen die het tonen, en ze passen bij dat bericht.", 4),
    ("Deel 3: bij bericht 3 en 4 schrijf ik wat Tom doet.", 2),
    ("Deel 4: ik noem drie dingen die Tom doet na een klik.", 3),
    ("Deel 4: ik schrijf het adres waarnaar Tom een verdachte mail doorstuurt.", 1),
]


class _AlleRijen:
    """Voor hs.tabel(voorbeeld_rij=...): maakt elke rij van de tabel grijs (hier is het hele voorbeeld ingevuld)."""
    def __eq__(self, andere):
        return True
    __hash__ = None


def bericht(doc, titel, voorbeeld=None):
    """Eén bericht: een tabel van drie rijen. voorbeeld: de ingevulde antwoorden in het grijs (deel 1)."""
    if voorbeeld:
        rijen = [(v, a) for v, a in voorbeeld]
        hs.tabel(doc, [titel, "Antwoord"], rijen, [6.2, hs.BREEDTE - 6.2], invul=(1,), rijhoogte=1.1,
                 voorbeeld_rij=_AlleRijen(), vet=(0,))
    else:
        rijen = [(v, "") for v, _ in VRAGEN]
        t = hs.tabel(doc, [titel, "Antwoord"], rijen, [6.2, hs.BREEDTE - 6.2], invul=(1,), rijhoogte=1.0, vet=(0,))
        for r, (_, hoogte) in enumerate(VRAGEN, start=1):
            hs.hoogte(t.rows[r], hoogte)
    hs.ruimte(doc, 6)


def nieuwe_bladzijde(doc):
    """Een bladzijdeskeer vóór een deel met puntenvak: page_break_before in een tabelcel (huisstijl.deel met punten)
    negeert Google Documenten. Een kleine lege alinea die zelf op een nieuwe bladzijde begint, doet het wel."""
    p = doc.add_paragraph()
    p.paragraph_format.page_break_before = True
    hs.zonder_ruimte(p)
    p.paragraph_format.line_spacing = hs.Pt(2)
    r = p.add_run("")
    r.font.size = hs.Pt(1)
    return p


def werkdocument():
    """In de huisstijl van 12-10-2026 (huisstijl.py): alleen wat de leerling invult, en de feiten die hij
    daarvoor nodig heeft. Hoe hij werkt, staat op de lespagina."""
    doc = hs.nieuw_document()
    doc.core_properties.title = "CO3 Phishing of echt - werkdocument"
    doc.core_properties.author = "Toegepaste Informatica"
    hs.kopblok(doc, "PHISHING OF ECHT?", punten=20)

    hs.kader(doc, "De opdracht van Sara", [OPDRACHT, ("Wat Tom al weet:", "")] + WAT_TOM_WEET)
    hs.tekst(doc, "Je werkt samen met je buur, maar je schrijft alles zelf in dit document.", klein=True, cursief=True)

    hs.deel(doc, 1, "Het voorbeeld")
    hs.tekst(doc, "Zo vul je elk bericht in. Dit voorbeeld deden we samen.", klein=True, cursief=True)
    bericht(doc, "Voorbeeld — “Uw mailbox is vol”", voorbeeld=VOORBEELD)

    nieuwe_bladzijde(doc)
    hs.deel(doc, 2, "Kamer 1 en 2", punten=8)
    bericht(doc, "Bericht 1 — de mail van Kim Wouters")
    bericht(doc, "Bericht 2 — de sms van PakjeSnel")

    nieuwe_bladzijde(doc)
    hs.deel(doc, 3, "Kamer 3 en 4", punten=8)
    bericht(doc, "Bericht 3 — de mail van De Bonenbaas")
    bericht(doc, "Bericht 4 — de mail van Lotte Maes")

    nieuwe_bladzijde(doc)
    hs.deel(doc, 4, "Ontsnapt!", punten=4)
    # eerst het codewoord van de escaperoom: de lespagina laat de vier letters pas zien als de vier sloten juist
    # zijn; zo ziet Jonas wie de escaperoom echt deed (_afspraken/lespagina.md, De laatste stap, het codewoord)
    hs.vraag(doc, "Het codewoord van de escaperoom (stap 4 op de lespagina):")
    hs.antwoordvak(doc, 0.9)
    hs.vraag(doc, "a. Vorige maand klikte Tom op een link in een mail zoals het voorbeeld, en hij typte zijn "
                  "wachtwoord in. Wat doet hij nu? Noem drie dingen.")
    hs.antwoordvak(doc, 2.8)
    hs.vraag(doc, "b. Tom krijgt thuis een verdachte mail. Naar welk adres stuurt hij ze door?")
    hs.antwoordvak(doc, 0.9)
    hs.controletabel(doc, CRITERIA)

    hs.deel(doc, None, "Extra — niet verplicht")
    hs.vraag(doc, "Schrijf voor de collega’s van NovaDepot drie tips tegen valse berichten, elk in één zin.")
    hs.antwoordvak(doc, 3.0)

    doc.save(UIT)


if __name__ == "__main__":
    werkdocument()
    print("Klaar.")
    print("  werkdocument om in te leveren : " + os.path.basename(UIT))
