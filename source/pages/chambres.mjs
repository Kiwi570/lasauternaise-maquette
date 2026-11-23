/* Les chambres : grand titre puis bandeau qui s'ouvre, étiquettes des quatre crus, galerie épinglée,
   le bien-être sur la vapeur, la literie, le plateau, l'appel. */
import { html } from '../../outils/gabarit.mjs';
import { img, feuille, titre } from '../gabarits/outils.mjs';

export const page = { cle: 'chambres', fichier: 'chambres', imagePartage: 'chambre-terre-de-margaux-1280.webp' };

const VUES = [
  ['chambre-terre-de-margaux', 'Terre de Margaux', ''],
  ['chambre-pierre', 'Pierre blonde et lin', ''],
  ['chambre-mezzanine', 'Sous la mezzanine', 'vue--haute'],
  ['chambre-blanche', 'Cheminée de marbre', ''],
  ['chambre-ocre', 'Le mur ocre', ''],
  ['chambre-grise', 'Gris anthracite', ''],
  ['chambre-poutres', 'Sous les poutres', ''],
  ['chambre-jaune', 'Lumière du jour', ''],
  ['chambre-douce', 'Lit capitonné', ''],
];

export default (c) => html`
<section class="ouv" id="debut">
  <div class="conteneur ouv-bandeau-tete">
    <div>
      <p class="surtitre">${c.t('chambres.tete.surtitre')}</p>
      <h1 data-anime="gsap" class="ouv-titre"><span class="ligne-masque"><span class="hero-ligne">${c.t('chambres.tete.titre1')}</span></span><span class="ligne-masque"><span class="hero-ligne"><em>${c.t('chambres.tete.titre2')}</em></span></span></h1>
    </div>
    <div class="colonne">
      <p class="chapo masque-ecran-bas">${c.t('chambres.tete.texte')}</p>
      <p class="actions">${c.lien('reserver', { classe: 'bouton', texte: c.t('chambres.tete.action'), attrs: 'data-action-principale data-survol="magnetique"' })}</p>
      <p class="info-cle" data-info-cle style="margin-top:14px">${c.t('chambres.tete.info')}</p>
    </div>
  </div>
  ${img(c, 'chambres-bandeau', { priorite: true, classe: 'bandeau', sizes: '100vw', attrs: 'data-iris-centre data-effet="bandeau"' })}
</section>

<section class="section" id="les-quatre" aria-labelledby="noms-titre">
  <div class="conteneur">
    <div class="pied-tete">
      <h2 class="titre-section" id="noms-titre" data-anime="lignes">${c.t('chambres.noms.titre')}</h2>
      <p data-anime>${c.t('chambres.noms.texte')}</p>
    </div>
    <ul class="etiquettes" data-anime="cascade" data-visuel>
      ${c.donnees.chambres.map((x) => html`<li class="etiquette-place" id="${x.id}"><div class="etiquette" style="--teinte:${x.teinte}" data-survol="incline">
        <span class="etiquette-bandeau" aria-hidden="true"></span>
        <span class="etiquette-initiale" aria-hidden="true" data-audit-ignorer>${x.nom.charAt(0)}</span>
        <p class="etiquette-mot">Chambre</p>
        <h3>${x.nom}</h3>
        <span class="etiquette-orne" aria-hidden="true">${feuille('etiquette-feuille')}</span>
        <p class="etiquette-details">${x.clim ? html`<strong>Climatisée</strong>` : ''}${c.t('chambres.noms.commun')}</p>
        ${c.lien('reserver', { params: `chambre=${x.id}`, classe: 'lien-fleche', texte: c.t('chambres.noms.choisir') })}
      </div></li>`)}
    </ul>
  </div>
</section>

<section class="galerie ecran epingle fond-pierre" id="en-images" data-entete-cache data-fx="galerie" aria-labelledby="galerie-titre">
  <div class="conteneur galerie-tete">
    <h2 id="galerie-titre" data-anime="lignes">${c.t('chambres.galerie.titre')}</h2>
    <p>${c.t('chambres.galerie.texte')}</p>
  </div>
  <div class="piste galerie-piste" data-galerie tabindex="0" role="region" aria-label="${c.s('chambres.galerie.region')}" data-anime="cascade">
    ${VUES.map(([n, legende, cl]) => html`<figure class="vue ${cl}">${img(c, n, { sizes: '(max-width: 760px) 80vw, 46vw' })}<figcaption>${legende}</figcaption></figure>`)}
  </div>
  <div class="galerie-progres" aria-hidden="true"><span></span></div>
</section>

<section class="section vapeur" id="bien-etre" aria-labelledby="soins-titre">
  ${img(c, 'vapeur', { sizes: '100vw', attrs: 'data-fx="parallaxe" data-fx-force="6"' })}
  <div class="conteneur">
    <div class="vapeur-texte">
      <p class="surtitre">${c.t('chambres.bienetre.surtitre')}</p>
      <h2 class="titre-section" id="soins-titre" data-anime="lignes">${c.t('chambres.bienetre.titre')}</h2>
      <p data-anime>${c.t('chambres.bienetre.texte')}</p>
    </div>
    <ul class="soins" data-anime="cascade">
      ${[['Hammam', 'Effegibi'], ['Sauna infrarouge', 'Tylö'], ['Baignoire balnéo', 'Kinedo'], ['Douche hydromassante', 'Hansgrohe']].map(([e, m], i) => html`<li><em>${m}</em><strong>${e}</strong><span>${c.t('chambres.bienetre.d' + (i + 1))}</span></li>`)}
    </ul>
    <div class="salles" data-anime="cascade" id="salles-de-bains">
      <figure>${img(c, 'sauna', { sizes: '(max-width: 760px) 32vw, 26vw' })}<figcaption>Sauna infrarouge</figcaption></figure>
      <figure>${img(c, 'bain-rouge', { sizes: '(max-width: 760px) 32vw, 26vw' })}<figcaption>Douche et carreaux de ciment</figcaption></figure>
      <figure>${img(c, 'porte-peignoir', { sizes: '(max-width: 760px) 32vw, 26vw' })}<figcaption>Porte ancienne et peignoir</figcaption></figure>
    </div>
  </div>
</section>

<section class="section fond-pierre" id="sommeil" aria-labelledby="linge-titre">
  <div class="conteneur deux">
    ${img(c, 'linge-satin', { sizes: '(max-width: 860px) 92vw, 44vw', attrs: 'data-anime="rideau"' })}
    <div>
      <p class="surtitre">${c.t('chambres.linge.surtitre')}</p>
      <h2 class="titre-section" id="linge-titre" data-anime="lignes">${c.t('chambres.linge.titre')}</h2>
      <ul class="liste-fine" data-anime="cascade">${[1, 2, 3, 4].map((i) => html`<li>${c.t('chambres.linge.l' + i)}</li>`)}</ul>
      <h3 style="margin-top:1.6em;font-size:1.6rem">${c.t('chambres.plateau.titre')}</h3>
      <div class="colonnes-matin" data-anime="cascade" style="margin-top:.6em">
        <div><h4 class="surtitre">${c.t('chambres.plateau.offert')}</h4><p>${c.t('chambres.plateau.offertTexte')}</p></div>
        <div><h4 class="surtitre">${c.t('chambres.plateau.minibar')}</h4><p>${c.t('chambres.plateau.minibarTexte')}</p></div>
      </div>
    </div>
  </div>
</section>

<section class="section fin-page" id="fin" aria-labelledby="fin-titre">
  <div class="conteneur">
    <div class="eventail" data-effet="eventail" aria-hidden="true"><figure class="tirage-mini">${img(c, 'chambre-mezzanine', { sizes: '170px' })}</figure><figure class="tirage-mini">${img(c, 'chambre-jaune', { sizes: '170px' })}</figure><figure class="tirage-mini">${img(c, 'chambre-douce', { sizes: '170px' })}</figure></div>
    <h2 class="titre-section" id="fin-titre" data-anime="lignes">${c.t('chambres.fin.titre')}</h2>
    <p class="chapo" data-anime>${c.t('chambres.fin.texte')}</p>
    <p class="actions" data-anime>
      ${c.lien('reserver', { classe: 'bouton', texte: c.t('chambres.fin.action'), attrs: 'data-survol="magnetique"' })}
      <a class="bouton bouton--contour" href="tel:${c.site.contact.telephoneLien}">${c.t('commun.appeler')} ${c.site.contact.telephone}</a>
    </p>
  </div>
</section>
`;
