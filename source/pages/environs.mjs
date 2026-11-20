/* Les environs : « 2 km » en très grand sur les vignes dans la brume, puis l'outil des 39 visites
   (filtres par distance et par envie, gardés dans l'adresse), le conseil de Didier, l'appel. */
import { html, brut } from '../../outils/gabarit.mjs';
import { img, feuille } from '../gabarits/outils.mjs';

export const page = { cle: 'environs', fichier: 'environs', imagePartage: 'vignes-brume-1280.webp' };

const ZONES = ['pied', '30', '60', 'loin'];
const THEMES = ['crus', 'patrimoine', 'nature', 'villes'];
const sansPhoto = brut('<svg viewBox="0 0 48 48" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" d="M6 40h36M10 40V22l14-10 14 10v18M20 40V28h8v12"/></svg>');

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
      ${v.map((x) => html`<li class="visite" id="${x.id}" data-zone="${x.zone}" data-theme="${x.theme}">
        ${x.image ? img(c, x.image, { sizes: '(max-width: 600px) 92vw, 300px' }) : html`<div class="visite-sans-photo" data-visuel>${sansPhoto}</div>`}
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
