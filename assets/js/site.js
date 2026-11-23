/* La Sauternaise : effets propres au projet (le reste vient du socle et de sa bibliothèque d'effets).
   Effets du plan (data-effet) : facade, tirage, pile-de-tirages, buee, regle-des-distances, ruban, bandeau,
   plein-cadre, revelateur, brume, filtres-environs, itineraire. */
import { demarrer, boucle, etat, versObjet, quand } from './socle/index.js?v=2';

const gsap = window.gsap;
const ST = () => window.ScrollTrigger;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const tactile = () => window.matchMedia('(hover: none)').matches;

/* ---------- Ouverture ---------- */
function titreOuverture(tl, a) {
  const lignes = $$('.ouv-titre .hero-ligne');
  if (!lignes.length) return;
  tl.fromTo(lignes, { yPercent: 130, y: 0 }, { yPercent: 0, y: 0, duration: 0.85, stagger: 0.11, ease: 'power3.out' }, a);
}

/* Accueil : le tirage d'archive se pose, se développe en couleurs, puis s'envole vers la photo d'ouverture.
   Uniquement des transformations (aucun changement de taille ni de position mesurée : stabilité au chargement). */
function introTirage(tl) {
  const tirage = $('.intro-tirage');
  const cible = $('.hero-media');
  const panneau = $('[data-ouverture]');
  if (!tirage || !cible || !panneau) return false;
  const r = cible.getBoundingClientRect();
  const t0 = tirage.getBoundingClientRect();
  const dx = r.left + r.width / 2 - (t0.left + t0.width / 2);
  const dy = r.top + Math.min(r.height, innerHeight - r.top) / 2 - (t0.top + t0.height / 2);
  const echelle = Math.min(2.6, Math.max(1.1, r.width / t0.width));
  tl.set(tirage, { xPercent: -50, yPercent: -50, x: 0, y: 0 }, 0)
    .fromTo('.ouverture-logo', { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, 0)
    .fromTo('.ouverture-trait', { scaleX: 0 }, { scaleX: 1, duration: 0.55, ease: 'power2.out' }, 0.12)
    .fromTo('.ouverture-ligne', { opacity: 0 }, { opacity: 1, duration: 0.35 }, 0.3)
    .to('.ouverture-logo, .ouverture-trait, .ouverture-ligne', { opacity: 0, y: -24, duration: 0.3, ease: 'power2.in' }, 0.55)
    .fromTo(tirage, { opacity: 0, rotation: -7, y: 40, scale: 0.9 }, { opacity: 1, rotation: -3, y: 0, scale: 1, duration: 0.45, ease: 'power3.out' }, 0.5)
    .fromTo(tirage, { '--revele': '-18%' }, { '--revele': '118%', duration: 0.7, ease: 'power1.inOut' }, 0.9)
    .to(tirage, { rotation: 0, duration: 0.5, ease: 'power2.inOut' }, 0.95)
    .to(tirage, { x: dx, y: dy, scale: echelle, duration: 0.65, ease: 'power3.inOut' }, 1.5)
    .to(tirage, { opacity: 0, duration: 0.35, ease: 'power1.in' }, 1.82)
    .to(panneau, { opacity: 0, duration: 0.45, ease: 'power1.out' }, 1.62)
    .set(tirage, { autoAlpha: 0 }, 2.2);
  titreOuverture(tl, 1.72);
  tl.fromTo('.hero .surtitre', { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.5 }, 1.7)
    .fromTo('.hero-intro, .hero .actions, .hero .info-cle', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.55, stagger: 0.08 }, 1.95)
    .fromTo('.cachet', { opacity: 0, scale: 0.6, rotation: -40 }, { opacity: 1, scale: 1, rotation: 0, duration: 0.7, ease: 'back.out(1.6)' }, 1.95);
  return true;
}

function jouer() {
  if (!gsap) return null;
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  if (introTirage(tl)) return tl;
  tl.fromTo('.ouverture-logo', { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.5 }, 0)
    .fromTo('.ouverture-trait', { scaleX: 0 }, { scaleX: 1, duration: 0.6 }, 0.1)
    .fromTo('.ouverture-ligne', { opacity: 0 }, { opacity: 1, duration: 0.4 }, 0.3)
    .to('.ouverture-trait, .ouverture-ligne', { opacity: 0, duration: 0.3 }, 0.85);
  versObjet(tl, { a: 1.0, echelleMax: 0.6 });
  titreOuverture(tl, 1.5);
  ouvertureDePage(tl, 1.4);
  return tl;
}

/* Gestes d'ouverture propres à chaque page (intro et arrivée sous le voile). */
function ouvertureDePage(tl, a) {
  const bandeau = $('.bandeau[data-effet="bandeau"]');
  if (bandeau) tl.fromTo(bandeau, { clipPath: 'inset(0% 50% 0% 50%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.1, ease: 'power3.inOut' }, a);
  const tir = $('.tirage-ouv');
  if (tir) tl.fromTo(tir, { rotation: -8, scale: 0.92 }, { rotation: -2, scale: 1, duration: 1, ease: 'power3.out' }, Math.max(0, a - 0.2));
  const chiffre = $('.chiffre-geant');
  if (chiffre) tl.fromTo(chiffre, { opacity: 0, scale: 0.92 }, { opacity: 1, scale: 1, duration: 0.9, ease: 'power3.out' }, Math.max(0, a - 0.3));
}

function etatFinal() {
  if (!gsap) return;
  gsap.set('.ouv-titre .hero-ligne', { yPercent: 0, y: 0 });
  gsap.set('.ouv-titre, .hero .surtitre, .hero-intro, .hero .actions, .hero .info-cle', { opacity: 1, y: 0 });
  gsap.set('.bandeau[data-effet="bandeau"]', { clipPath: 'inset(0% 0% 0% 0%)' });
  gsap.set('.chiffre-geant', { opacity: 1, scale: 1 });
  gsap.set('.cachet', { opacity: 1, scale: 1, rotation: 0 });
  gsap.set('.tirage-ouv', { rotation: -2, scale: 1 });
  document.querySelectorAll('[data-effet="eventail"]').forEach((e) => e.classList.add('ouvert'));
}

function arrivee() {
  if (!gsap) return;
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  titreOuverture(tl, 0.1);
  tl.fromTo('.hero .surtitre', { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.5 }, 0.1)
    .fromTo('.hero-intro, .hero .actions, .hero .info-cle', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.55, stagger: 0.08 }, 0.3);
  ouvertureDePage(tl, 0.15);
}

/* ---------- Accueil ---------- */
/* La façade glisse doucement au défilement. */
function facade() {
  const f = $('.hero-media[data-effet="facade"] img');
  if (!f || !ST()) return;
  gsap.fromTo(f, { scale: 1, yPercent: 0 }, { scale: 1.08, yPercent: 4, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
}


/* Le cachet tourne doucement, et plus vite quand on défile. */
function cachet() {
  const c = $('[data-effet="cachet"]');
  if (!c) return;
  const g = $('.cachet-tourne', c);
  let angle = 0, elan = 0;
  if (ST()) ST().create({ trigger: '.hero', start: 'top top', end: 'bottom top', onUpdate: (st) => { elan = Math.min(220, Math.abs(st.getVelocity()) * 0.12); } });
  boucle(c, (dt) => {
    elan *= Math.exp(-dt * 2.2);
    angle = (angle + dt * (9 + elan)) % 360;
    g.setAttribute('transform', `rotate(${angle.toFixed(2)} 100 100)`);
  });
}

/* Curseur : libellé sur les zones à manipuler (« Glisser », « Essuyer »). */
function curseurLibelle() {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  const attacher = () => {
    const c = $('.curseur');
    if (!c) return false;
    const l = document.createElement('span');
    l.className = 'curseur-libelle';
    c.appendChild(l);
    let actuel = null;
    window.addEventListener('pointermove', (e) => {
      if (e.pointerType !== 'mouse') return;
      const z = e.target.closest && e.target.closest('[data-curseur-texte]');
      if (z === actuel) return;
      actuel = z;
      c.classList.toggle('curseur-texte', !!z);
      if (z) l.textContent = z.dataset.curseurTexte;
    }, { passive: true });
    return true;
  };
  if (!attacher()) setTimeout(attacher, 400);
}

/* Hier et aujourd'hui : l'archive s'écarte au défilement, et se glisse à la main. */
function tirage() {
  const zone = $('[data-effet="tirage"]');
  if (!zone) return;
  const a = $('.tirage--archive', zone);
  let s = { x: 0, y: 0, r: -4 }, d = { x: 0, y: 0 };
  const poser = () => { a.style.transform = `translate(${s.x + d.x}px, ${s.y + d.y}px) rotate(${s.r}deg)`; };
  if (ST()) {
    let largeur = zone.offsetWidth;
    ST().addEventListener('refreshInit', () => { largeur = zone.offsetWidth; });
    ST().create({
      trigger: zone, start: 'top 75%', end: 'bottom 25%', scrub: 0.6,
      onUpdate: (st) => { const p = st.progress; s = { x: -p * largeur * 0.3, y: p * largeur * 0.12, r: -4 - p * 9 }; poser(); },
    });
  }
  let depart = null;
  a.addEventListener('pointerdown', (e) => {
    depart = { x: e.clientX - d.x, y: e.clientY - d.y };
    a.setPointerCapture(e.pointerId);
  });
  a.addEventListener('pointermove', (e) => {
    if (!depart) return;
    d = { x: Math.max(-260, Math.min(260, e.clientX - depart.x)), y: Math.max(-160, Math.min(160, e.clientY - depart.y)) };
    poser();
  });
  const fin = () => { depart = null; };
  a.addEventListener('pointerup', fin);
  a.addEventListener('pointercancel', fin);
  poser();
}

/* Les chambres : chaque tirage se pose sur le précédent. */
function pile() {
  if (!ST()) return;
  const mm = gsap.matchMedia();
  $$('.pile-tirage').forEach((t) => {
    mm.add('(min-width: 861px)', () => {
      const r = parseFloat(getComputedStyle(t).getPropertyValue('--r')) || 0;
      gsap.fromTo(t, { rotation: r + 6, scale: 1.05, y: 60 }, { rotation: r, scale: 1, y: 0, ease: 'none', scrollTrigger: { trigger: t, start: 'top bottom', end: 'top 45%', scrub: 0.5 } });
    });
    /* Sur une colonne : le tirage glisse sans tourner ni grandir (rien ne dépasse de l'écran). */
    mm.add('(max-width: 860px)', () => {
      gsap.fromTo(t, { y: 70, rotation: 0, scale: 1 }, { y: 0, ease: 'none', scrollTrigger: { trigger: t, start: 'top bottom', end: 'top 50%', scrub: 0.5 } });
    });
  });
}

/* La buée : condensation (gouttelettes, coulures) qui se dissipe au défilement et s'essuie à la souris ou au doigt.
   À l'arrivée, un doigt invisible essuie une première trace pour inviter à continuer. */
function buee() {
  const zone = $('[data-effet="buee"]');
  if (!zone) return;
  const cv = $('canvas', zone), ctx = cv.getContext('2d');
  const brouillard = document.createElement('canvas'), essuie = document.createElement('canvas');
  let base = 0.96, sale = true, W = 0, H = 0;
  const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
  function fabriquer() {
    const w = Math.round(zone.offsetWidth * dpr), h = Math.round(zone.offsetHeight * dpr);
    if (!w || !h || (w === W && h === H)) return;
    const copie = W ? (() => { const c = document.createElement('canvas'); c.width = W; c.height = H; c.getContext('2d').drawImage(essuie, 0, 0); return c; })() : null;
    W = w; H = h;
    [cv, brouillard, essuie].forEach((c) => { c.width = W; c.height = H; });
    if (copie) essuie.getContext('2d').drawImage(copie, 0, 0, W, H);
    const b = brouillard.getContext('2d');
    const g = b.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, 'rgba(232,236,238,.93)'); g.addColorStop(1, 'rgba(214,221,224,.9)');
    b.fillStyle = g; b.fillRect(0, 0, W, H);
    let graine = 11;
    const hasard = () => ((graine = (graine * 16807) % 2147483647) / 2147483647);
    /* Fine condensation */
    for (let i = 0; i < 1400; i++) {
      const x = hasard() * W, y = hasard() * H, r = (0.3 + hasard() * 1.1) * dpr;
      b.fillStyle = `rgba(255,255,255,${0.25 + hasard() * 0.35})`;
      b.beginPath(); b.arc(x, y, r, 0, Math.PI * 2); b.fill();
    }
    /* Grosses gouttes : bord sombre, reflet clair, centre plus transparent */
    b.save(); b.globalCompositeOperation = 'destination-out';
    const gouttes = [];
    for (let i = 0; i < 70; i++) {
      const x = hasard() * W, y = hasard() * H, r = (2 + hasard() * 5.5) * dpr;
      gouttes.push([x, y, r]);
      b.fillStyle = 'rgba(0,0,0,.55)'; b.beginPath(); b.ellipse(x, y, r, r * 1.12, 0, 0, Math.PI * 2); b.fill();
    }
    /* Coulures : traces claires sous quelques gouttes */
    for (let i = 0; i < 9; i++) {
      const [x, y, r] = gouttes[i * 7];
      const lg = (60 + hasard() * 220) * dpr;
      const gr = b.createLinearGradient(0, y, 0, y + lg);
      gr.addColorStop(0, 'rgba(0,0,0,.7)'); gr.addColorStop(1, 'rgba(0,0,0,0)');
      b.fillStyle = gr; b.beginPath();
      b.moveTo(x - r * 0.5, y); b.quadraticCurveTo(x + r * 0.3, y + lg * 0.5, x - r * 0.2, y + lg); b.lineTo(x + r * 0.5, y + lg); b.quadraticCurveTo(x + r, y + lg * 0.5, x + r * 0.5, y); b.fill();
    }
    b.restore();
    for (const [x, y, r] of gouttes) {
      b.strokeStyle = 'rgba(120,130,134,.35)'; b.lineWidth = Math.max(1, r * 0.22); b.beginPath(); b.ellipse(x, y, r, r * 1.12, 0, 0, Math.PI * 2); b.stroke();
      b.fillStyle = 'rgba(255,255,255,.85)'; b.beginPath(); b.arc(x - r * 0.35, y - r * 0.4, r * 0.28, 0, Math.PI * 2); b.fill();
    }
    sale = true; dessiner();
  }
  let rafa = 0;
  function dessiner() {
    if (rafa) return;
    rafa = requestAnimationFrame(() => {
      rafa = 0;
      if (!sale || !W) return;
      sale = false;
      ctx.clearRect(0, 0, W, H);
      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha = base;
      ctx.drawImage(brouillard, 0, 0);
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = 'destination-out';
      ctx.drawImage(essuie, 0, 0);
      ctx.globalCompositeOperation = 'source-over';
    });
  }
  function frotter(x, y, k = 1) {
    const e = essuie.getContext('2d');
    const r = Math.max(W, H) * 0.07 * k;
    const g = e.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, 'rgba(0,0,0,.95)'); g.addColorStop(0.65, 'rgba(0,0,0,.7)'); g.addColorStop(1, 'rgba(0,0,0,0)');
    e.fillStyle = g; e.beginPath(); e.arc(x, y, r, 0, Math.PI * 2); e.fill();
    sale = true; dessiner();
  }
  function trait(a, b, k) {
    const n = Math.max(1, Math.ceil(Math.hypot(b.x - a.x, b.y - a.y) / (7 * dpr)));
    for (let i = 1; i <= n; i++) frotter(a.x + ((b.x - a.x) * i) / n, a.y + ((b.y - a.y) * i) / n, k);
  }
  let precedent = null, touche = false;
  const point = (e) => { const r = cv.getBoundingClientRect(); return { x: (e.clientX - r.left) * dpr, y: (e.clientY - r.top) * dpr }; };
  cv.addEventListener('pointermove', (e) => {
    if (e.pointerType === 'touch' && !e.isPrimary) return;
    touche = true;
    const p = point(e);
    if (precedent) trait(precedent, p, 1); else frotter(p.x, p.y);
    precedent = p;
  });
  cv.addEventListener('pointerleave', () => { precedent = null; });
  cv.addEventListener('pointerdown', (e) => { touche = true; const p = point(e); frotter(p.x, p.y, 1.2); precedent = p; });
  cv.addEventListener('pointerup', () => { if (tactile()) precedent = null; });
  new ResizeObserver(() => fabriquer()).observe(zone);
  fabriquer();
  if (!ST()) return;
  ST().create({ trigger: zone, start: 'top 85%', end: 'bottom 30%', scrub: true, onUpdate: (st) => { base = 0.96 - st.progress * 0.4; sale = true; dessiner(); } });
  /* Première trace, une seule fois : une vague de gauche à droite à mi-hauteur. */
  ST().create({
    trigger: zone, start: 'top 62%', once: true,
    onEnter: () => {
      if (touche || !W) return;
      const o = { t: 0 };
      let avant = null;
      gsap.to(o, {
        t: 1, duration: 1.5, ease: 'power1.inOut', delay: 0.25,
        onUpdate: () => {
          if (touche) return;
          const p = { x: W * (0.12 + o.t * 0.76), y: H * (0.46 + Math.sin(o.t * Math.PI * 2) * 0.07) };
          if (avant) trait(avant, p, 0.85); else frotter(p.x, p.y, 0.85);
          avant = p;
        },
      });
    },
  });
}

/* La règle des distances : elle se remplit d'or au défilement, chaque château s'allume à son passage. */
function regle() {
  const r = $('[data-effet="regle-des-distances"]');
  if (!r || !ST()) return;
  const points = $$('.regle-point', r).map((el) => ({ el, x: parseFloat(el.style.getPropertyValue('--x')), xi: parseFloat(el.style.getPropertyValue('--xi')), on: false }));
  const etroit = window.matchMedia('(max-width: 860px)');
  ST().create({
    trigger: r, start: 'top 78%', end: 'bottom 45%', scrub: 0.4,
    onUpdate: (st) => {
      const p = st.progress;
      r.style.setProperty('--p', p.toFixed(4));
      points.forEach((q) => { const on = p >= (etroit.matches ? q.xi : q.x) - 0.005; if (on !== q.on) { q.on = on; q.el.classList.toggle('atteint', on); } });
    },
  });
}

/* Appel final : l'éventail de tirages s'ouvre à son arrivée, et suit le défilement. */
function eventails() {
  $$('[data-effet="eventail"]').forEach((e) => {
    if (!ST()) { e.classList.add('ouvert'); return; }
    ST().create({ trigger: e, start: 'top 85%', onEnter: () => e.classList.add('ouvert') });
    gsap.fromTo(e, { y: 30 }, { y: -10, ease: 'none', scrollTrigger: { trigger: e, start: 'top bottom', end: 'bottom top', scrub: true } });
  });
}

/* ---------- Les chambres ---------- */
function bandeau() {
  const b = $('.bandeau[data-effet="bandeau"]');
  if (!b || !ST()) return;
  const i = $('img', b);
  gsap.fromTo(i, { scale: 1, yPercent: 0 }, { scale: 1.1, yPercent: 5, ease: 'none', scrollTrigger: { trigger: b, start: 'top 60%', end: 'bottom top', scrub: true } });
}

/* ---------- La maison ---------- */
function pleinCadre() {
  const m = $('[data-effet="plein-cadre"]');
  if (!m || !ST()) return;
  gsap.fromTo($('img', m), { scale: 1.02 }, { scale: 1.12, ease: 'none', scrollTrigger: { trigger: m.closest('section'), start: 'top top', end: 'bottom top', scrub: true } });
}

/* L'archive se développe au défilement : le bain de révélateur s'éclaircit, l'image se resserre. */
function revelateur() {
  const r = $('[data-effet="revelateur"]');
  if (!r || !ST()) return;
  const i = $('.media img', r);
  ST().create({ trigger: r, start: 'top 85%', end: 'center 45%', scrub: 0.6, onUpdate: (st) => {
    const p = st.progress;
    r.style.setProperty('--bain', (0.92 * (1 - p)).toFixed(3));
    i.style.transform = `scale(${(1.08 - p * 0.08).toFixed(4)})`;
  } });
}

/* La maison : le tirage d'ouverture se pose, puis dérive doucement au défilement. */
function tirageOuverture() {
  const t = $('[data-effet="tirage-ouv"]');
  if (!t || !ST()) return;
  gsap.fromTo(t, { y: 0, rotation: -2 }, { y: -40, rotation: 1, ease: 'none', scrollTrigger: { trigger: t.closest('section'), start: 'top top', end: 'bottom top', scrub: true } });
}

/* ---------- Les environs ---------- */
function brume() {
  const b = $('[data-effet="brume"]');
  if (!b) return;
  const nappes = $$('span', b).map((el, i) => ({ el, v: 14 + i * 7, a: i * 1.7 }));
  boucle(b, (dt, t) => {
    nappes.forEach((n, i) => {
      const x = Math.sin(t * 0.05 * (1 + i * 0.3) + n.a) * 9;
      const y = Math.cos(t * 0.04 * (1 + i * 0.2) + n.a) * 3;
      n.el.style.transform = `translate3d(${x}vw, ${y}vh, 0)`;
    });
  });
}

function filtresEnvirons() {
  const liste = $('[data-visites]');
  if (!liste) return;
  const cartes = $$('.visite', liste);
  const groupes = $$('[data-groupe]');
  const resultat = $('[data-resultat]'), aucun = $('[data-aucun]');
  const params = new URLSearchParams(location.search);
  const choix = { distance: params.get('distance') || '', envie: params.get('envie') || '' };
  const compte = (c) => cartes.filter((x) => (!c.distance || x.dataset.zone === c.distance) && (!c.envie || x.dataset.theme === c.envie)).length;
  function rendre(anime) {
    const garder = (x) => (!choix.distance || x.dataset.zone === choix.distance) && (!choix.envie || x.dataset.theme === choix.envie);
    const appliquer = () => {
      let n = 0;
      cartes.forEach((x) => { const g = garder(x); x.classList.toggle('masquee', !g); if (g) n++; });
      $$('[data-zone-titre]', liste).forEach((t) => { t.classList.toggle('masquee', !cartes.some((x) => x.dataset.zone === t.dataset.zoneTitre && garder(x))); });
      resultat.textContent = n === 1 ? resultat.dataset.un : resultat.dataset.modele.replace('{n}', n);
      aucun.hidden = n > 0;
      groupes.forEach((g) => {
        const nom = g.dataset.groupe;
        $$('.filtre', g).forEach((b) => {
          b.setAttribute('aria-pressed', String(b.dataset.valeur === choix[nom]));
          b.disabled = b.dataset.valeur !== '' && compte({ ...choix, [nom]: b.dataset.valeur }) === 0;
        });
      });
      liste.classList.remove('en-change');
    };
    if (!anime) { appliquer(); return; }
    liste.classList.add('en-change');
    setTimeout(() => {
      appliquer();
      /* La liste a raccourci : on remonte à son début si on l'a dépassé. */
      const haut = liste.getBoundingClientRect().top;
      if (haut < 0) window.scrollTo({ top: window.scrollY + haut - (parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--entete-h')) || 72) - 140, behavior: 'instant' });
    }, 260);
  }
  groupes.forEach((g) => g.addEventListener('click', (e) => {
    const b = e.target.closest('.filtre');
    if (!b || b.disabled) return;
    choix[g.dataset.groupe] = b.dataset.valeur;
    const u = new URL(location.href);
    ['distance', 'envie'].forEach((k) => (choix[k] ? u.searchParams.set(k, choix[k]) : u.searchParams.delete(k)));
    history.replaceState(history.state, '', u);
    rendre(true);
  }));
  rendre(false);
}

/* ---------- Réserver ---------- */
/* Calendrier de séjour : un clic pour l'arrivée, un autre pour le départ ; jours passés grisés, jour même repéré,
   nuits colorées entre les deux. Les champs de date restent la source (saisie au clavier possible). */
function calendrier() {
  const boite = $('[data-calendrier]');
  const f = $('[data-sejour]');
  if (!boite || !f) return;
  const arr = $('#arrivee', f), dep = $('#depart', f);
  const MOIS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
  const JOURS = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];
  const iso = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  const lire = (v) => (v ? new Date(v + 'T12:00:00') : null);
  const auj = new Date(); auj.setHours(12, 0, 0, 0);
  let premier = new Date(auj.getFullYear(), auj.getMonth(), 1, 12);
  let survol = null;
  const nbMois = () => (boite.clientWidth >= 640 ? 2 : 1);
  function rendre() {
    const debut = lire(arr.value), fin = lire(dep.value);
    const n = nbMois();
    let h = `<div class="cal-nav"><button type="button" class="cal-fleche" data-cal="-1" aria-label="${boite.dataset.precedent}" ${premier <= new Date(auj.getFullYear(), auj.getMonth(), 1, 12) ? 'disabled' : ''}>‹</button><button type="button" class="cal-fleche" data-cal="1" aria-label="${boite.dataset.suivant}">›</button></div><div class="cal-mois-liste">`;
    for (let m = 0; m < n; m++) {
      const d0 = new Date(premier.getFullYear(), premier.getMonth() + m, 1, 12);
      h += `<div class="cal-mois"><p class="cal-titre">${MOIS[d0.getMonth()]} ${d0.getFullYear()}</p><div class="cal-grille"><span class="cal-js">L</span><span class="cal-js">M</span><span class="cal-js">M</span><span class="cal-js">J</span><span class="cal-js">V</span><span class="cal-js">S</span><span class="cal-js">D</span>`;
      const decal = (d0.getDay() + 6) % 7;
      for (let i = 0; i < decal; i++) h += '<span class="cal-vide"></span>';
      const nbj = new Date(d0.getFullYear(), d0.getMonth() + 1, 0).getDate();
      for (let j = 1; j <= nbj; j++) {
        const d = new Date(d0.getFullYear(), d0.getMonth(), j, 12);
        const passe = d < auj;
        const cl = ['cal-jour'];
        if (passe) cl.push('passe');
        if (+d === +auj) cl.push('aujourdhui');
        if (debut && +d === +debut) cl.push('debut');
        if (fin && +d === +fin) cl.push('fin');
        if (debut && fin && d > debut && d < fin) cl.push('dans');
        const etiquette = `${JOURS[(d.getDay() + 6) % 7]} ${j} ${MOIS[d.getMonth()]} ${d.getFullYear()}`;
        h += `<button type="button" class="${cl.join(' ')}" data-date="${iso(d)}" aria-label="${etiquette}" aria-pressed="${(debut && +d === +debut) || (fin && +d === +fin) ? 'true' : 'false'}" ${passe ? 'disabled' : ''}>${j}</button>`;
      }
      h += '</div></div>';
    }
    boite.innerHTML = h + '</div>';
  }
  function apercu() {
    const debut = lire(arr.value), fin = lire(dep.value);
    $$('.cal-jour', boite).forEach((b) => {
      const d = lire(b.dataset.date);
      b.classList.toggle('apercu', !!(debut && !fin && survol && d > debut && d <= survol));
    });
  }
  boite.addEventListener('click', (e) => {
    const fl = e.target.closest('[data-cal]');
    if (fl) { premier = new Date(premier.getFullYear(), premier.getMonth() + Number(fl.dataset.cal), 1, 12); rendre(); return; }
    const b = e.target.closest('.cal-jour');
    if (!b || b.disabled) return;
    const d = lire(b.dataset.date), debut = lire(arr.value), fin = lire(dep.value);
    if (!debut || fin || d <= debut) { arr.value = iso(d); dep.value = ''; }
    else dep.value = iso(d);
    survol = null;
    arr.dispatchEvent(new Event('input', { bubbles: true }));
    rendre();
    const meme = $(`.cal-jour[data-date="${iso(d)}"]`, boite);
    if (meme) meme.focus({ preventScroll: true });
  });
  boite.addEventListener('pointerover', (e) => {
    const b = e.target.closest('.cal-jour');
    if (!b || e.pointerType !== 'mouse') return;
    survol = lire(b.dataset.date); apercu();
  });
  boite.addEventListener('pointerleave', () => { survol = null; apercu(); });
  f.addEventListener('change', (e) => { if (e.target === arr || e.target === dep) rendre(); });
  let largeur = 0;
  new ResizeObserver(() => { const w = boite.clientWidth; if (Math.abs(w - largeur) > 20) { largeur = w; rendre(); } }).observe(boite);
  rendre();
}

/* Tampon : à l’envoi (simulé) de la demande, un cachet d’encre se pose sur le récapitulatif avec le nombre de nuits. */
function tampon() {
  const t = document.querySelector('[data-tampon]');
  const f = document.querySelector('[data-sejour]');
  const msg = f && f.querySelector('[data-message-envoi]');
  if (!t || !msg) return;
  const nuits = t.querySelector('[data-tampon-nuits]');
  const mot = t.querySelector('[data-tampon-mot]');
  new MutationObserver(() => {
    if (msg.hidden) return;
    const a = f.querySelector('#arrivee'), d = f.querySelector('#depart');
    const n = a && d && a.value && d.value ? Math.round((new Date(d.value) - new Date(a.value)) / 864e5) : 0;
    if (n > 0) { nuits.textContent = String(n); mot.textContent = n > 1 ? t.dataset.nuits : t.dataset.nuit; }
    t.classList.remove('pose');
    void t.offsetWidth;
    t.classList.add('pose');
  }).observe(msg, { attributes: true, attributeFilter: ['hidden'] });
}

function sejour() {
  const f = $('[data-sejour]');
  if (!f) return;
  const arr = $('#arrivee', f), dep = $('#depart', f), nuitsEl = $('[data-nuits]', f);
  const rNuits = $('[data-recap-nuits]'), rDates = $('[data-recap-dates]'), rCh = $('[data-recap-chambre]'), rRem = $('[data-recap-remise]');
  const jour = (d) => { const z = new Date(d.getTime() - d.getTimezoneOffset() * 60000); return z.toISOString().slice(0, 10); };
  const auj = new Date();
  arr.min = jour(auj);
  dep.min = jour(new Date(auj.getTime() + 86400000));
  const format = (s) => new Date(s + 'T12:00:00').toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric', month: 'long' });
  function maj() {
    if (arr.value) { const m = new Date(arr.value + 'T12:00:00'); m.setDate(m.getDate() + 1); dep.min = jour(m); }
    let n = 0;
    if (arr.value && dep.value) n = Math.round((new Date(dep.value + 'T12:00:00') - new Date(arr.value + 'T12:00:00')) / 86400000);
    if (arr.value && dep.value && n <= 0) nuitsEl.textContent = nuitsEl.dataset.erreur;
    else nuitsEl.textContent = n > 0 ? (n === 1 ? nuitsEl.dataset.un : nuitsEl.dataset.modele.replace('{n}', n)) : nuitsEl.dataset.zero;
    rNuits.textContent = n > 0 ? (n === 1 ? nuitsEl.dataset.un : nuitsEl.dataset.modele.replace('{n}', n)) : '—';
    rDates.textContent = arr.value && dep.value && n > 0 ? `${format(arr.value)} → ${format(dep.value)}` : '—';
    const ch = $('input[name="chambre"]:checked', f);
    rCh.textContent = ch ? ch.closest('label').querySelector('span').firstChild.textContent.trim() : '—';
    const actif = n >= 4;
    rRem.classList.toggle('active', actif);
    rRem.textContent = actif ? rRem.dataset.actif : rRem.dataset.inactif;
  }
  f.addEventListener('input', maj);
  f.addEventListener('change', maj);
  maj();
}

demarrer({
  preparer() {
    if (gsap) gsap.set('.ouv-titre', { opacity: 1 });
    [facade, cachet, curseurLibelle, tirage, pile, buee, regle, eventails, bandeau, pleinCadre, revelateur, tirageOuverture, brume, filtresEnvirons, sejour, calendrier, tampon].forEach((f) => {
      try { f(); } catch (err) { console.error('[site]', f.name, err); }
    });
  },
  jouer,
  etatFinal,
  arrivee,
});
