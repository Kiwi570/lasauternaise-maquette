/* Accueil de La Sauternaise : la façade et son archive, les chambres en tirages, la buée, le matin,
   les hôtes, la règle des distances, la réservation directe. */
import { html, brut } from '../../outils/gabarit.mjs';
import { img, feuille, titre } from '../gabarits/outils.mjs';

export const page = { cle: 'accueil', fichier: 'index', imagePartage: 'facade-1280.webp', intro: 'tirage' };

const POINTS = [
  { nom: 'La maison', km: 0, cache: true },
  { nom: 'Église', km: 0.06, d: '< 100 m', cote: 'bas' },
  { nom: 'Château d’Arche', km: 0.5, d: '500 m', cote: 'haut' },
  { nom: 'Château Guiraud', km: 0.8, d: '800 m', cote: 'bas', rdv: true },
  { nom: 'Château Filhot', km: 0.9, d: '900 m', cote: 'haut' },
  { nom: 'Rayne Vigneau', km: 1.4, d: '1,4 km', cote: 'bas' },
  { nom: 'Clos Haut-Peyraguey', km: 1.5, d: '1,5 km', cote: 'haut', rdv: true },
  { nom: 'Château d’Yquem', km: 2, d: '2 km', cote: 'bas', rdv: true, vedette: true },
  { nom: 'Lafaurie-Peyraguey', km: 2.2, d: '2,2 km', cote: 'haut' },
];
const MAX = 2.3;
const PLUS_LOIN = [['Château de Roquetaillade', '9 km'], ['Villandraut', '11 km'], ['Lacs d’Hostens', '12 km'], ['Bazas', '20 km'], ['Bordeaux', '44 km'], ['Saint-Émilion', '50 km'], ['Château Margaux', '77 km'], ['Dune du Pilat', '85 km']];
const TIRAGES = [
  ['chambre-terre-de-margaux', 'Terre de Margaux', '-2deg'],
  ['chambre-pierre', 'Pierre et lin', '1.6deg'],
  ['chambre-blanche', 'Cheminée de marbre', '-1.2deg'],
  ['chambre-ocre', 'Le mur ocre', '2deg'],
];

export default (c) => {
  const ch = c.donnees.chambres;
  const ruban = PLUS_LOIN.map(([n, d]) => html`${n}<span>${d}</span>`);
  return html`
<section class="hero" id="debut">
  <div class="hero-texte">
    <p class="surtitre" data-anime="gsap">${c.t('accueil.hero.surtitre')}</p>
    <h1 class="hero-titre ouv-titre" data-anime="gsap"><span class="ligne-masque"><span class="hero-ligne">${c.t('accueil.hero.titre1')}</span></span><span class="ligne-masque"><span class="hero-ligne">${c.t('accueil.hero.titre2')}</span></span><span class="ligne-masque"><span class="hero-ligne"><em>${c.t('accueil.hero.titre3')}</em></span></span></h1>
    <p class="hero-intro masque-ecran-tres-bas" data-anime="gsap">${c.t('accueil.hero.texte')}</p>
    <p class="actions" data-anime="gsap">
      ${c.lien('reserver', { classe: 'bouton', texte: c.t('accueil.hero.action'), attrs: 'data-action-principale data-survol="magnetique"' })}
      ${c.lien('chambres', { classe: 'bouton bouton--contour', texte: c.t('accueil.hero.action2') })}
    </p>
    <p class="info-cle" data-info-cle data-anime="gsap">${c.t('accueil.hero.info')}</p>
  </div>
  ${img(c, 'facade', { priorite: true, classe: 'hero-media', sizes: '(max-width: 760px) 100vw, 55vw', attrs: 'data-iris-centre data-effet="facade" data-boucle-css' })}
</section>

<section class="section fond-pierre" id="histoire" aria-labelledby="hier-titre">
  <div class="conteneur hier-grille">
    <div>
      <p class="surtitre">${c.t('accueil.hier.surtitre')}</p>
      <blockquote class="citation" id="hier-titre" data-anime="mots">«&nbsp;${c.t('accueil.hier.citation')}&nbsp;»</blockquote>
      <p class="citation-source" data-anime>${c.t('accueil.hier.source')}</p>
      <p data-anime>${c.t('accueil.hier.texte')}</p>
      <p data-anime>${c.lien('la-maison', { ancre: 'histoire', classe: 'lien-fleche', texte: c.t('accueil.hier.lien') })}</p>
    </div>
    <div class="tirages" data-effet="tirage">
      <figure class="tirage tirage--aujourdhui">
        ${img(c, 'facade-face', { sizes: '(max-width: 860px) 86vw, 44vw' })}
        <figcaption class="tirage-legende">${c.t('accueil.hier.aujourdhui')}</figcaption>
      </figure>
      <figure class="tirage tirage--archive" data-superpose>
        ${img(c, 'archive', { sizes: '(max-width: 860px) 78vw, 40vw' })}
        <figcaption class="tirage-legende">${c.t('accueil.hier.autrefois')}</figcaption>
      </figure>
      <p class="tirages-consigne"><span class="souris">${c.t('accueil.hier.consigne')}</span><span class="tactile">${c.t('accueil.hier.consigneTactile')}</span></p>
    </div>
  </div>
</section>

<section class="section" id="chambres" aria-labelledby="chambres-titre">
  <div class="conteneur pile-grille">
    <div class="pile-texte">
      <p class="surtitre">${c.t('accueil.chambres.surtitre')}</p>
      ${titre(2, [c.s('accueil.chambres.titre1'), c.s('accueil.chambres.titre2')], { classe: 'titre-section', id: 'chambres-titre' })}
      <p class="masque-ecran-bas" data-anime>${c.t('accueil.chambres.texte')}</p>
      <ul class="noms" data-anime="cascade">${ch.map((x) => html`<li>${x.nom}${x.clim ? html`<small>${c.t('accueil.chambres.clim')}</small>` : ''}</li>`)}</ul>
      <p>${c.lien('chambres', { classe: 'bouton', texte: c.t('accueil.chambres.lien'), attrs: 'data-survol="magnetique"' })}</p>
    </div>
    <div class="pile" data-effet="pile-de-tirages">
      ${TIRAGES.map(([n, legende, r], i) => html`<figure class="pile-tirage" style="--i:${i};--r:${r}" data-superpose>
        ${img(c, n, { sizes: '(max-width: 860px) 92vw, 50vw' })}
        <figcaption>${legende}</figcaption>
      </figure>`)}
    </div>
  </div>
</section>

<section class="section fond-cave" id="bien-etre" aria-labelledby="bienetre-titre">
  <div class="conteneur buee-grille">
    <div>
      <div class="buee" data-effet="buee" data-souris>
        ${img(c, 'bain-rouge', { sizes: '(max-width: 860px) 92vw, 50vw' })}
        <canvas aria-hidden="true" data-audit-ignorer></canvas>
      </div>
      <p class="buee-consigne"><span class="souris">${c.t('accueil.bienetre.consigne')}</span><span class="tactile">${c.t('accueil.bienetre.consigneTactile')}</span></p>
    </div>
    <div>
      <p class="surtitre">${c.t('accueil.bienetre.surtitre')}</p>
      ${titre(2, [c.s('accueil.bienetre.titre1'), c.s('accueil.bienetre.titre2')], { classe: 'titre-section', id: 'bienetre-titre' })}
      <p data-anime>${c.t('accueil.bienetre.texte')}</p>
      <ul class="equipements" data-anime="cascade">
        ${[1, 2, 3, 4].map((i) => html`<li><strong>${c.t('accueil.bienetre.e' + i)}</strong><span>${c.t('accueil.bienetre.m' + i)}</span></li>`)}
      </ul>
    </div>
  </div>
</section>

<section class="section" id="matin" aria-labelledby="matin-titre">
  <div class="conteneur matin-grille">
    ${img(c, 'petit-dejeuner', { sizes: '(max-width: 860px) 92vw, 42vw', attrs: 'data-anime="rideau"' })}
    <div>
      <p class="surtitre">${c.t('accueil.matin.surtitre')}</p>
      ${titre(2, [c.s('accueil.matin.titre1'), c.s('accueil.matin.titre2')], { classe: 'titre-section', id: 'matin-titre' })}
      <p class="chapo" data-anime>${c.t('accueil.matin.texte')}</p>
      <ul class="liste-fine" data-anime="cascade">${[1, 2, 3, 4].map((i) => html`<li>${c.t('accueil.matin.l' + i)}</li>`)}</ul>
      <p class="note" data-anime>${c.t('accueil.matin.pros')}</p>
    </div>
  </div>
</section>

<section class="section fond-pierre" id="hotes" aria-labelledby="hotes-titre">
  <div class="conteneur hotes-grille">
    ${img(c, 'pascale-didier', { sizes: '(max-width: 860px) 92vw, 36vw', attrs: 'data-fx="zoom"' })}
    <div>
      <p class="surtitre">${c.t('accueil.hotes.surtitre')}</p>
      ${titre(2, [c.s('accueil.hotes.titre1'), c.s('accueil.hotes.titre2')], { classe: 'titre-section', id: 'hotes-titre' })}
      <blockquote class="hotes-citation" data-anime="lignes">«&nbsp;${c.t('accueil.hotes.citation')}&nbsp;»</blockquote>
      <div class="hotes-bios" data-anime="cascade">
        <div><h3>Didier</h3><p>${c.t('accueil.hotes.didier')}</p></div>
        <div><h3>Pascale</h3><p>${c.t('accueil.hotes.pascale')}</p></div>
      </div>
      <p>${c.lien('la-maison', { classe: 'lien-fleche', texte: c.t('accueil.hotes.lien') })}</p>
    </div>
  </div>
</section>

<section class="section" id="a-pied" aria-labelledby="pied-titre">
  ${img(c, 'grappes', { classe: 'pied-bandeau', sizes: '100vw', attrs: 'data-fx="parallaxe" data-fx-force="12"' })}
  <div class="conteneur">
    <div class="pied-tete">
      <div>
        <p class="surtitre">${c.t('accueil.pied.surtitre')}</p>
        ${titre(2, [c.s('accueil.pied.titre1'), c.s('accueil.pied.titre2')], { classe: 'titre-section', id: 'pied-titre' })}
      </div>
      <p class="chapo" data-anime>${c.t('accueil.pied.texte')}</p>
    </div>
    <div class="regle" data-effet="regle-des-distances" role="img" aria-label="${c.s('accueil.pied.echelle')} : ${POINTS.filter((p) => !p.cache).map((p) => `${p.nom} ${p.d}`).join(', ')}">
      <div class="regle-axe">
        <span class="regle-plein"></span>
        ${feuille('regle-maison')}
        ${POINTS.filter((p) => !p.cache).map((p, i, t) => html`<div class="regle-point ${p.cote}${p.vedette ? ' vedette' : ''}${p.km < 0.2 ? ' debut' : ''}${p.km > 2.1 ? ' fin' : ''}" style="--x:${(p.km / MAX).toFixed(4)};--xi:${(0.04 + (i / (t.length - 1)) * 0.92).toFixed(4)}" data-km="${p.km}" data-repere>
          <p class="regle-etiquette"><strong>${p.nom}</strong>${p.d}${p.rdv ? html`<em>${c.t('accueil.pied.rdv')}</em>` : ''}</p>
        </div>`)}
      </div>
    </div>
  </div>
  <div class="conteneur">
    <p class="surtitre">${c.t('accueil.pied.plusLoin')}</p>
    <div class="ruban-section">
      <div class="ruban" id="ruban" data-boucle-css data-ruban data-effet="ruban"><p>${ruban}${ruban}</p></div>
      <button type="button" class="ruban-pause" data-pause-pour="ruban" data-libelle-pause="${c.s('commun.pause')}" data-libelle-lecture="${c.s('commun.lecture')}"><span data-libelle-bouton>${c.t('commun.pause')}</span></button>
    </div>
    <p style="margin-top:1.4em">${c.lien('environs', { classe: 'lien-fleche', texte: c.t('accueil.pied.lien') })}</p>
  </div>
</section>

<section class="section fond-cave direct" id="reserver" aria-labelledby="direct-titre">
  <div class="conteneur direct-grille">
    <div>
      <p class="surtitre">${c.t('accueil.reserver.surtitre')}</p>
      ${titre(2, [c.s('accueil.reserver.titre1'), c.s('accueil.reserver.titre2')], { classe: 'titre-section', id: 'direct-titre' })}
      <ul class="direct-chiffres" data-anime="cascade">
        ${[1, 2, 3].map((i) => html`<li><strong data-prix>${c.t('accueil.reserver.c' + i)}</strong><span>${c.t('accueil.reserver.t' + i)}</span></li>`)}
      </ul>
      <p data-anime>${c.t('accueil.reserver.texte')}</p>
      <p class="actions">
        ${c.lien('reserver', { classe: 'bouton', texte: c.t('accueil.reserver.action'), attrs: 'data-survol="magnetique"' })}
        <a class="bouton bouton--contour" href="tel:${c.site.contact.telephoneLien}">${c.t('commun.appeler')} ${c.site.contact.telephone}</a>
      </p>
      <p class="direct-acces">${c.t('accueil.reserver.acces')} · ${c.lien('acces', { texte: c.t('accueil.reserver.lienAcces') })}</p>
    </div>
    ${img(c, 'verre-dore', { sizes: '(max-width: 860px) 92vw, 40vw', attrs: 'data-fx="parallaxe" data-fx-force="8"' })}
  </div>
</section>
`;
};
