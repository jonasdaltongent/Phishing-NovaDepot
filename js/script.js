/**
 * Les 13 · Phishing of echt? (NovaDepot, ORLO) — script.js
 * Uit les 11 (ORLO), met de escaperoom (§ 6) en de links in de berichten (§ 6b).
 * Opbouw naar het voorbeeld van PedalPro: links de route, midden één stap,
 * rechts een checklist met concrete taken.
 *
 * - één stap tegelijk tonen; de laatst geopende stap wordt onthouden
 * - checklist: voortgang, afgewerkte stappen krijgen een vinkje in de route
 * - op een smal scherm toont de checklist alleen de taken van de huidige stap
 * - in de laatste stap (data-laatste-stap op body) staat de hele checklist open
 * - de escaperoom: vier kamers met elk een slot van twee vragen (onthouden in localStorage), de letters, het codewoord
 * - links in de berichten: geen echte links; zweven, focus of klik toont het adres in de statusbalk
 * - screenshot-plaatsen: tonen de afbeelding alleen als het bestand bestaat
 * - melding als alles afgevinkt is
 *
 * localStorage bewaart alleen vinkjes en de stap. Geen persoonsgegevens.
 * Geen externe bibliotheken.
 */
(function () {
  'use strict';

  var body = document.body;
  body.classList.add('js');
  var PREFIX = body.getAttribute('data-storage') || 'novadepot_phishing_v1_';
  var LAATSTE = body.getAttribute('data-laatste-stap') || '5';
  var teacherMode = new URLSearchParams(window.location.search).has('leraar');
  if (teacherMode) body.classList.add('teacher');

  /* ---------- Opslag (werkt ook als localStorage geblokkeerd is) ---------- */
  function store(key, value) {
    try { localStorage.setItem(PREFIX + key, JSON.stringify(value)); } catch (e) { /* geen opslag */ }
  }
  function load(key, fallback) {
    try {
      var raw = localStorage.getItem(PREFIX + key);
      return raw === null ? fallback : JSON.parse(raw);
    } catch (e) { return fallback; }
  }

  /* ---------- Een nieuwe leerling aan dezelfde computer (Jonas, 06-11-2026) ----------
   * In lokaal 18 delen de klassen de computers: wie het volgende lesuur dezelfde lespagina opent, zag de vinkjes, de
   * stap en de open sloten (en dus het codewoord) van de vorige leerling. Daarom onthoudt de pagina in welk lesuur ze
   * het laatst geopend werd. Is dat op een schooldag een ander lesuur dan nu, dan begint de pagina opnieuw: alles met
   * PREFIX wordt gewist. Een pauze hoort bij het lesuur erna. Buiten de lesuren (thuis, 's avonds, in het weekend)
   * wist de pagina niets. Gevolg: wie in een volgend lesuur verder werkt, vinkt opnieuw af; het werkdocument verandert niet. */
  var BELTIJDEN = [[505, 555], [555, 605], [625, 675], [675, 725], [725, 775], [825, 875], [875, 925], [925, 975], [975, 1025]];   // minuten na middernacht, campus LEF (_afspraken/school-en-klassen.md)
  function lesuurVan(d) {
    if (d.getDay() === 0 || d.getDay() === 6) return null;
    var m = d.getHours() * 60 + d.getMinutes();
    for (var i = 0; i < BELTIJDEN.length; i++) {
      if (m < BELTIJDEN[i][1]) return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + '/' + i;
    }
    return null;
  }
  function nieuwLesuur() {
    var nu = lesuurVan(new Date());
    if (teacherMode || !nu) return false;
    var vorig = load('lesuur', null);
    var nieuw = vorig !== null && vorig !== nu;
    if (nieuw) {
      try {
        Object.keys(localStorage).forEach(function (k) { if (k.indexOf(PREFIX) === 0) localStorage.removeItem(k); });
      } catch (e) { /* geen opslag */ }
    }
    store('lesuur', nu);
    return nieuw;
  }
  nieuwLesuur();
  // een pagina die Chrome uit zijn geheugen terugzet (terug-knop, hersteld tabblad), laadt opnieuw als het lesuur veranderde
  window.addEventListener('pageshow', function (e) { if (e.persisted && nieuwLesuur()) window.location.reload(); });

  function all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  /* ---------- 1. Checklist ---------- */
  var checklist = document.getElementById('checklist');
  var checks = all('.cl-item input[type="checkbox"]');
  var groups = all('.cl-group');
  var fill = document.getElementById('clFill');
  var count = document.getElementById('clCount');
  var klaar = document.getElementById('klaar');
  var navButtons = all('.nav-btn[data-step]');

  var saved = load('vinkjes', []);
  checks.forEach(function (cb) { cb.checked = saved.indexOf(cb.id) !== -1; });

  function updateProgress(fromUser) {
    var done = checks.filter(function (c) { return c.checked; }).length;
    var pct = checks.length ? Math.round(done / checks.length * 100) : 0;
    fill.style.width = pct + '%';
    fill.parentElement.setAttribute('aria-valuenow', String(pct));
    count.textContent = done + ' van ' + checks.length + ' klaar';

    groups.forEach(function (g) {
      var boxes = all('input[type="checkbox"]', g);
      var groupDone = boxes.length > 0 && boxes.every(function (b) { return b.checked; });
      g.classList.toggle('done', groupDone);
      var btn = document.querySelector('.nav-btn[data-step="' + g.getAttribute('data-step') + '"]');
      if (btn) btn.classList.toggle('done', groupDone);
    });

    // Melding alleen op het moment dat het laatste vinkje gezet wordt
    if (fromUser && done === checks.length && checks.length > 0) openKlaar();
  }

  checks.forEach(function (cb) {
    cb.addEventListener('change', function () {
      store('vinkjes', checks.filter(function (c) { return c.checked; }).map(function (c) { return c.id; }));
      updateProgress(true);
    });
  });

  // Smal scherm: alleen de huidige stap, met een knop om alles te tonen
  var toggle = document.getElementById('clToggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var open = checklist.classList.toggle('alles');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.textContent = open ? 'Toon minder' : 'Toon alles';
    });
  }

  function markCurrentGroup(step) {
    var any = false;
    groups.forEach(function (g) {
      // In de laatste stap loop je de hele lijst na: dan zijn alle groepen "huidig"
      var cur = step === LAATSTE || g.getAttribute('data-step') === step;
      g.classList.toggle('current', cur);
      if (cur) any = true;
    });
    checklist.classList.toggle('leeg', !any);
  }

  /* ---------- 2. Stappen ---------- */
  var panes = all('.pane');
  var order = panes.map(function (p) { return p.id.replace('pane-', ''); });

  function showStep(key, focus) {
    if (order.indexOf(key) === -1) key = order[0];
    panes.forEach(function (p) { p.classList.toggle('active', p.id === 'pane-' + key); });
    navButtons.forEach(function (b) {
      if (b.getAttribute('data-step') === key) b.setAttribute('aria-current', 'step');
      else b.removeAttribute('aria-current');
    });
    markCurrentGroup(key);
    store('stap', key);
    if (history.replaceState) history.replaceState(null, '', '#' + key);
    window.scrollTo(0, 0);
    if (focus) {
      var h = document.querySelector('#pane-' + key + ' h1, #pane-' + key + ' h2');
      if (h) { h.setAttribute('tabindex', '-1'); h.focus({ preventScroll: true }); }
    }
  }

  navButtons.forEach(function (b) {
    b.addEventListener('click', function () { showStep(b.getAttribute('data-step'), true); });
  });
  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-goto]');
    if (!t) return;
    e.preventDefault();
    showStep(t.getAttribute('data-goto'), true);
  });

  /* ---------- 3b. Stap voor stap of Kort (11-10-2026) ----------
   * Stap voor stap: elke handeling staat open, met haar kleine stapjes en een beeld.
   * Kort: alleen de handelingen; een leerling klapt zelf open wat ze niet weet.
   * Een handeling met data-dicht (alleen voor wie ze nodig heeft) blijft dicht tot de leerling ze opent.
   * De beginstand komt uit data-modus-start op body (standaard kort, Jonas 18-10-2026). Sinds 18-10-2026
   * staat de knop niet meer op de pagina (Jonas: "Doe maar voor iedereen"): de leerling opent per handeling
   * Toon stapjes. Zonder knop telt alleen data-modus-start; met een knop wordt de keuze per les onthouden. */
  var modusBtns = all('.modus-btn');
  var stapjes = all('details.stapjes');
  function zetModus(m, bewaar) {
    if (m !== 'stap') m = 'kort';
    body.classList.toggle('modus-kort', m === 'kort');
    stapjes.forEach(function (d) { d.open = (m === 'stap') && !d.hasAttribute('data-dicht'); });
    modusBtns.forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-modus') === m ? 'true' : 'false'); });
    if (bewaar) store('modus', m);
  }
  modusBtns.forEach(function (b) {
    b.addEventListener('click', function () { zetModus(b.getAttribute('data-modus'), true); });
  });
  var modusStart = body.getAttribute('data-modus-start') || 'kort';
  zetModus(modusBtns.length ? load('modus', modusStart) : modusStart, false);

  /* ---------- 4. Vinkjes wissen ---------- */
  var reset = document.getElementById('btnReset');
  if (reset) {
    reset.addEventListener('click', function () {
      if (!window.confirm('Wil je alle vinkjes en alle geopende sloten op deze pagina wissen? Je werkdocument verandert niet.')) return;
      checks.forEach(function (c) { c.checked = false; });
      store('vinkjes', []);
      opgelost = [];
      store('sloten', []);
      codeOk = false;
      store('code', false);
      all('[data-codeslot]').forEach(function (cs) { cs.querySelector('input').value = ''; cs.querySelector('.feedback').textContent = ''; });
      all('.sv').forEach(function (sv) {
        sv.classList.remove('juist');
        all('button', sv).forEach(function (b) { b.classList.remove('right', 'wrong'); });
        var fb = sv.querySelector('.feedback');
        if (fb) fb.textContent = '';
      });
      toonSloten();
      updateProgress(false);
    });
  }

  /* ---------- 5. Klaar! ---------- */
  var lastFocus = null;
  function openKlaar() {
    if (!klaar) return;
    lastFocus = document.activeElement;
    klaar.hidden = false;
    var btn = document.getElementById('klaarSluit');
    if (btn) btn.focus();
  }
  function closeKlaar() {
    if (!klaar || klaar.hidden) return;
    klaar.hidden = true;
    if (lastFocus) lastFocus.focus();
  }
  if (klaar) {
    document.getElementById('klaarSluit').addEventListener('click', closeKlaar);
    klaar.addEventListener('click', function (e) { if (e.target === klaar) closeKlaar(); });
  }
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeKlaar(); });

  /* ---------- 6. De escaperoom: vier kamers met elk een slot (Les 13) ----------
   * Hoe het werkt (README, § 1b):
   *  - elke kamer (.kamer, data-kamer="1".."4") heeft een slot van twee vragen (.sv). Elke vraag heeft knoppen met
   *    data-keuze="…"; de juiste keuzes en de letter van de kamer staan hieronder in SLOTEN (niet in de HTML, dus
   *    ook niet in ai-bron.txt). Een leerling die de broncode leest, vindt ze: geen probleem, het werkdocument telt.
   *  - fout antwoord: de knop wordt rood en de hint van de vraag (data-hint) verschijnt, nooit het antwoord.
   *  - beide vragen juist: het slot is open. De letter verschijnt, en kamer n+1 gaat open. Kamer 1 is altijd open.
   *  - welke sloten open zijn, onthoudt localStorage (sleutel "sloten"): een herlaadde pagina wist het werk niet. De
   *    knop Vinkjes wissen zet de sloten terug.
   *  - zijn alle vier de sloten open, dan gaat het blok in stap 4 (.na-sloten) open en tonen de balkjes .letters
   *    de vier letters: samen het codewoord.
   *  - met ?leraar staan alle kamers en het blok van stap 4 open; er wordt dan niets onthouden.
   * Er is niets echt: de berichten zijn tekeningen en er wordt nergens gebeld, geklikt of verstuurd. */
  var SLOTEN = {
    1: { antwoord: ['echt', 'a'], letter: 'H' },
    2: { antwoord: ['vals', 'b'], letter: 'A' },
    3: { antwoord: ['vals', 'c'], letter: 'A' },
    4: { antwoord: ['echt', 'b'], letter: 'K' }
  };
  var AANTAL_SLOTEN = 4;
  var kamers = all('.kamer');
  var opgelost = load('sloten', []);
  var codeOk = load('code', false) === true;   // het laatste slot: het codewoord getypt (stap 4)
  if (!Array.isArray(opgelost)) opgelost = [];
  opgelost = opgelost.filter(function (n) { return SLOTEN[n]; });

  function isOpgelost(n) { return opgelost.indexOf(n) !== -1; }

  function toonSloten() {
    kamers.forEach(function (k) {
      var n = parseInt(k.getAttribute('data-kamer'), 10);
      var klaar = isOpgelost(n);
      var open = teacherMode || n === 1 || isOpgelost(n - 1) || klaar;
      k.classList.toggle('open', open);
      k.classList.toggle('klaar', klaar);
      if (klaar) {
        all('.sv', k).forEach(function (sv, i) {
          sv.classList.add('juist');
          all('button', sv).forEach(function (b) {
            b.classList.toggle('right', b.getAttribute('data-keuze') === SLOTEN[n].antwoord[i]);
          });
          var fb = sv.querySelector('.feedback');
          if (fb && !fb.textContent) fb.textContent = 'Juist.';
        });
        var letter = k.querySelector('.kl-letter');
        if (letter) letter.textContent = SLOTEN[n].letter;
        var volgende = k.querySelector('.kl-volgende');
        if (volgende) volgende.textContent = n < AANTAL_SLOTEN ? 'Kamer ' + (n + 1) + ' is open.' : 'Alle vier de sloten zijn open. Ga naar stap 4.';
      }
    });
    all('.letters[data-live] .letter').forEach(function (l) {
      var n = parseInt(l.getAttribute('data-nr'), 10);
      l.textContent = isOpgelost(n) ? SLOTEN[n].letter : '?';
      l.classList.toggle('vol', isOpgelost(n));
    });
    var alle = opgelost.length === AANTAL_SLOTEN;
    var ontsnapt = alle && codeOk;
    all('.na-sloten').forEach(function (blok) { blok.classList.toggle('open', ontsnapt || teacherMode); });
    all('[data-codeslot]').forEach(function (cs) { cs.classList.toggle('open', alle && !codeOk && !teacherMode); });
    all('.slot[data-sloten]').forEach(function (slot) {
      var tekst = slot.querySelector('.slot-tekst');
      var rest = AANTAL_SLOTEN - opgelost.length;
      slot.classList.toggle('open', ontsnapt);
      if (tekst) tekst.textContent = ontsnapt ? 'Ontsnapt! Typ het codewoord nu ook in je werkdocument.' :
        alle ? 'Alle vier de sloten zijn open. Zet de letters in volgorde en typ het codewoord hieronder.' :
        'Nog ' + rest + (rest === 1 ? ' slot' : ' sloten') + ' te openen. Doe eerst de kamers in stap 2 en 3. Dan zie je hier wat je nog moet doen.';
    });
  }

  kamers.forEach(function (k) {
    var n = parseInt(k.getAttribute('data-kamer'), 10);
    var vragen = all('.sv', k);
    vragen.forEach(function (sv, i) {
      var fb = sv.querySelector('.feedback');
      all('button', sv).forEach(function (btn) {
        btn.addEventListener('click', function () {
          if (sv.classList.contains('juist')) return;
          all('button', sv).forEach(function (b) { b.classList.remove('right', 'wrong'); });
          var ok = btn.getAttribute('data-keuze') === SLOTEN[n].antwoord[i];
          btn.classList.add(ok ? 'right' : 'wrong');
          sv.classList.toggle('juist', ok);
          if (fb) fb.textContent = ok ? 'Juist.' : 'Nog niet. Hint: ' + (sv.getAttribute('data-hint') || 'Lees het bericht nog eens.');
          if (ok && vragen.every(function (v) { return v.classList.contains('juist'); }) && !isOpgelost(n) && !teacherMode) {
            opgelost.push(n);
            store('sloten', opgelost);
            toonSloten();
          }
        });
      });
    });
  });

  /* Het laatste slot (stap 4, Jonas 06-11-2026: "Ik kon precies niets intypen bij de codes"): zijn de vier sloten open,
   * dan typt het duo het codewoord. Het woord zelf staat niet in de HTML: het zijn de letters uit SLOTEN.
   * Juist (hoofdletters, spaties en een punt maken niet uit): het blok van stap 4 gaat open, en localStorage onthoudt het. */
  var CODEWOORD = Object.keys(SLOTEN).map(function (n) { return SLOTEN[n].letter; }).join('');
  all('[data-codeslot]').forEach(function (cs) {
    var veld = cs.querySelector('input');
    var knop = cs.querySelector('button');
    var fb = cs.querySelector('.feedback');
    function probeer() {
      var getypt = (veld.value || '').toUpperCase().replace(/[^A-Z]/g, '');
      if (!getypt) { fb.textContent = 'Typ eerst de vier letters.'; return; }
      if (getypt === CODEWOORD) {
        fb.textContent = '';
        codeOk = true;
        if (!teacherMode) store('code', true);
        toonSloten();
      } else {
        cs.classList.remove('fout'); void cs.offsetWidth; cs.classList.add('fout');
        fb.textContent = 'Nog niet. Kijk naar jullie letters hierboven: kamer 1, 2, 3 en 4, in die volgorde.';
      }
    }
    knop.addEventListener('click', probeer);
    veld.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); probeer(); } });
  });

  /* ---------- 6b. Links in de berichten (Les 13) ----------
   * Een link in een bericht is geen echte link: een span zonder href. Bij zweven, focus of klik toont de statusbalk
   * onderaan het bericht het adres (data-adres, zonder schema in de HTML), zoals de statusbalk van een browser. Er gebeurt niets anders. */
  function adresVan(el) {   // het adres staat zonder schema in de HTML: https://, of http:// bij data-http
    var a = el.getAttribute('data-adres') || '';
    return a ? (el.hasAttribute('data-http') ? 'http://' : 'https://') + a : '';
  }
  all('.bericht.tekening .sb-tekst[data-adres]').forEach(function (el) { el.textContent = adresVan(el); });
  all('.bericht:not(.tekening)').forEach(function (bericht) {
    var balk = bericht.querySelector('.statusbalk');
    var tekst = bericht.querySelector('.sb-tekst');
    if (!balk || !tekst) return;
    all('.lnk', bericht).forEach(function (l) {
      function toon() { tekst.textContent = adresVan(l); }
      function weg() { tekst.textContent = ''; balk.classList.remove('vast'); }
      l.addEventListener('mouseenter', toon);
      l.addEventListener('mouseleave', function () { if (document.activeElement !== l) weg(); });
      l.addEventListener('focus', toon);
      l.addEventListener('blur', weg);
      l.addEventListener('click', function (e) { e.preventDefault(); toon(); balk.classList.add('vast'); });
      l.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toon(); balk.classList.add('vast'); }
      });
    });
  });

  /* ---------- 7. Screenshot-plaatsen ---------- */
  all('figure.shot').forEach(function (fig) {
    var file = fig.getAttribute('data-shot');
    var caption = fig.getAttribute('data-caption') || '';
    if (!file) return;
    var img = new Image();
    img.alt = fig.getAttribute('data-alt') || caption;
    img.onload = function () {
      fig.innerHTML = '';
      fig.appendChild(img);
      if (caption) { var c = document.createElement('figcaption'); c.textContent = caption; fig.appendChild(c); }
      fig.classList.add('loaded');
    };
    img.onerror = function () {
      if (teacherMode) fig.innerHTML = '📷 <strong>Screenshot-plaats</strong>: bewaar als <code>assets/screenshots/' + file + '</code><br>' + (fig.getAttribute('data-alt') || '');
    };
    img.src = 'assets/screenshots/' + file;
  });

  /* ---------- Start ---------- */
  toonSloten();
  updateProgress(false);
  var start = window.location.hash ? window.location.hash.slice(1) : load('stap', 'start');
  showStep(start, false);
})();
