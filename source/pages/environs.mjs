/* Les environs : « 2 km » en très grand sur les vignes dans la brume, puis l'outil des 39 visites
   (filtres par distance et par envie, gardés dans l'adresse), le conseil de Didier, l'appel. */
import { html, brut } from '../../outils/gabarit.mjs';
import { img, feuille } from '../gabarits/outils.mjs';

export const page = { cle: 'environs', fichier: 'environs', imagePartage: 'vignes-brume-1280.webp' };

const ZONES = ['pied', '30', '60', 'loin'];
const THEMES = ['crus', 'patrimoine', 'nature', 'villes'];
const PICTOS = {
  crus: '<circle cx="20" cy="18" r="4"/><circle cx="28" cy="18" r="4"/><circle cx="24" cy="25" r="4"/><circle cx="16" cy="25" r="4"/><circle cx="32" cy="25" r="4"/><circle cx="20" cy="32" r="4"/><circle cx="28" cy="32" r="4"/><circle cx="24" cy="39" r="4"/><path d="M24 14c0-4 2-7 6-8"/>',
  patrimoine: '<path d="M10 42V18h6v-6h4v6h8v-6h4v6h6v24"/><path d="M20 42v-9a4 4 0 0 1 8 0v9M6 42h36"/>',
  nature: '<path d="M24 42V26"/><path d="M24 8c-8 6-12 12-12 18a12 12 0 0 0 24 0c0-6-4-12-12-18z"/><path d="M8 42h32"/>',
  villes: '<path d="M6 42V26l8-6 8 6v16M22 42V18l10-8 10 8v24M6 42h36M30 42v-8h4v8"/>',
};
const picto = (t) => brut(`<svg viewBox="0 0 48 48" aria-hidden="true" focusable="false"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${PICTOS[t] || PICTOS.patrimoine}</g></svg>`);
const ZONE_TITRES = { pied: 'Moins de 3 km · à pied ou à vélo', 30: 'De 8 à 25 km', 60: 'De 25 à 50 km', loin: 'De 50 à 100 km' };

export default (c) => {
  const v = c.donnees.environs;
  return html`
<section class="ouv ouv-chiffre" id="debut">
  ${img(c, 'vignes-brume', { priorite: true, sizes: '100vw' })}
  <div class="brume" aria-hidden="true" data-effet="brume" data-audit-ignorer><span style="left:-10%;top:40%"></span><span style="left:30%;top:60%"></span><span style="left:55%;top:30%"></span></div>
  <div class="conteneur">
    <div>
      <p class="chiffre-geant" data-iris-centre aria-hidden="true">${c.t('environs.tete.chiffre')}<span class="chiffre-legende">${c.t('environs.tete.legende')}</span></p>
    </div>
    <div>
      <p class="surtitre">${c.t('environs.tete.surtitre')}</p>
      <h1 data-anime="gsap" class="ouv-titre"><span class="ligne-masque"><span class="hero-ligne">${c.t('environs.tete.titre1')}</span></span><span class="ligne-masque"><span class="hero-ligne"><em>${c.t('environs.tete.titre2')}</em></span></span></h1>
      <p class="chapo masque-ecran-bas">${c.t('environs.tete.texte')}</p>
      <p class="actions">${c.lien('environs', { ancre: 'visites', classe: 'bouton', texte: c.t('environs.tete.action'), attrs: 'data-action-principale data-sans-transition' })}</p>
      <p class="info-cle" data-info-cle style="margin-top:14px">${c.t('environs.tete.info')}</p>
    </div>
  </div>
</section>

<section class="section" id="visites" aria-labelledby="visites-titre">
  <div class="conteneur">
    <h2 class="titre-section" id="visites-titre" data-anime="lignes">${c.t('environs.outil.titre')}</h2>
    <div class="filtres" data-filtres>
      <fieldset class="filtres-groupe" data-groupe="distance">
        <legend>${c.t('environs.outil.distance')}</legend>
        <button type="button" class="filtre" data-valeur="" aria-pressed="true">${c.t('environs.outil.tout')}</button>
        ${ZONES.map((z) => html`<button type="button" class="filtre" data-valeur="${z}" aria-pressed="false">${c.t('environs.outil.z' + z)}</button>`)}
      </fieldset>
      <fieldset class="filtres-groupe" data-groupe="envie">
        <legend>${c.t('environs.outil.theme')}</legend>
        <button type="button" class="filtre" data-valeur="" aria-pressed="true">${c.t('environs.outil.tout')}</button>
        ${THEMES.map((t) => html`<button type="button" class="filtre" data-valeur="${t}" aria-pressed="false">${c.t('environs.outil.t' + t)}</button>`)}
      </fieldset>
    </div>
    <p class="resultat" aria-live="polite" data-resultat data-modele="${c.s('environs.outil.resultat')}" data-un="${c.s('environs.outil.un')}">${c.t('environs.outil.resultat', { n: v.length })}</p>
    <ul class="visites" data-visites data-effet="filtres-environs" data-anime="cascade" aria-label="${c.s('environs.outil.region')}">
      ${v.map((x, i) => html`${i === 0 || v[i - 1].zone !== x.zone ? html`<li class="visites-titre" data-zone-titre="${x.zone}"><h3>${ZONE_TITRES[x.zone]}</h3></li>` : ''}<li class="visite" id="${x.id}" data-zone="${x.zone}" data-theme="${x.theme}">
        ${x.image ? img(c, x.image, { sizes: '(max-width: 600px) 92vw, 300px' }) : html`<div class="visite-sans-photo" data-visuel>${picto(x.theme)}<span class="visite-sans-photo-km">${x.distance}</span></div>`}
        <div class="visite-corps">
          <span class="visite-distance">${x.distance}</span>
          <h3>${x.nom}</h3>
          <p>${x.texte}</p>
          ${x.rdv ? html`<span class="visite-rdv">${c.t('environs.outil.rdv')}</span>` : ''}
        </div>
      </li>`)}
    </ul>
    <p class="aucun" data-aucun hidden>${c.t('environs.outil.aucun')}</p>
  </div>
</section>

<section class="section fond-pierre" id="conseil" aria-labelledby="conseil-titre">
  <div class="conteneur conseil">
    ${img(c, 'didier', { sizes: '220px', classe: 'conseil-portrait', attrs: 'data-fx="zoom"' })}
    <div>
      <h2 class="titre-section" id="conseil-titre" data-anime="lignes">${c.t('environs.conseil.titre')}</h2>
      <p class="chapo" data-anime>${c.t('environs.conseil.texte')}</p>
    </div>
  </div>
</section>

<section class="section fin-page" id="fin" aria-labelledby="fin-titre">
  <div class="conteneur">
    <div class="eventail" data-effet="eventail" aria-hidden="true"><figure class="tirage-mini">${img(c, 'env-saint-emilion', { sizes: '170px' })}</figure><figure class="tirage-mini">${img(c, 'env-filhot', { sizes: '170px' })}</figure><figure class="tirage-mini">${img(c, 'env-pilat', { sizes: '170px' })}</figure></div>
    <h2 class="titre-section" id="fin-titre" data-anime="lignes">${c.t('environs.fin.titre')}</h2>
    <p class="actions" data-anime>
      ${c.lien('reserver', { classe: 'bouton', texte: c.t('environs.fin.action'), attrs: 'data-survol="magnetique"' })}
      ${c.lien('acces', { classe: 'bouton bouton--contour', texte: c.t('environs.fin.action2') })}
    </p>
  </div>
</section>
`;
};
