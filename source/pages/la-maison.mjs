/* La maison : plein cadre (l'archive tenue devant la façade), l'histoire avec le révélateur, les hôtes,
   le petit-déjeuner, le café, la cave et le salon, la cour, la table, l'appel. */
import { html } from '../../outils/gabarit.mjs';
import { img, feuille, titre } from '../gabarits/outils.mjs';

export const page = { cle: 'la-maison', fichier: 'la-maison', imagePartage: 'hier-aujourdhui-1280.webp' };

export default (c) => html`
<section class="ouv ouv-plein" id="debut">
  ${img(c, 'hier-aujourdhui', { priorite: true, sizes: '100vw', attrs: 'data-iris-centre data-effet="plein-cadre"' })}
  <div class="conteneur ouv-texte">
    <p class="surtitre">${c.t('maison.tete.surtitre')}</p>
    <h1 data-anime="gsap" class="ouv-titre"><span class="ligne-masque"><span class="hero-ligne">«&nbsp;${c.t('maison.tete.titre1')}</span></span><span class="ligne-masque"><span class="hero-ligne"><em>${c.t('maison.tete.titre2')}</em>&nbsp;»</span></span></h1>
    <p class="ouv-source">${c.t('maison.tete.source')}</p>
    <p class="actions">
      ${c.lien('reserver', { classe: 'bouton', texte: c.t('commun.actionEntete'), attrs: 'data-action-principale data-survol="magnetique"' })}
      ${c.lien('chambres', { classe: 'bouton bouton--contour', texte: c.t('maison.tete.action') })}
    </p>
    <p class="info-cle" data-info-cle style="margin-top:14px">${c.t('maison.tete.info')}</p>
  </div>
</section>

<section class="section" id="histoire" aria-labelledby="histoire-titre">
  <div class="conteneur deux">
    <div>
      <p class="surtitre">${c.t('maison.histoire.surtitre')}</p>
      <h2 class="titre-section" id="histoire-titre" data-anime="lignes">${c.t('maison.histoire.titre')}</h2>
      <p class="chapo" data-anime>${c.t('maison.histoire.texte')}</p>
      <p data-anime><em>${c.t('maison.histoire.nom')}</em></p>
    </div>
    <div class="revelateur" data-effet="revelateur" data-superpose>
      ${img(c, 'archive', { classe: 'revelateur-archive', sizes: '(max-width: 860px) 92vw, 46vw' })}
      ${img(c, 'facade-face', { classe: 'revelateur-couleur', sizes: '(max-width: 860px) 92vw, 46vw' })}
      <p class="revelateur-etiquettes" aria-hidden="true"><span>${c.t('maison.histoire.autrefois')}</span><span>${c.t('maison.histoire.aujourdhui')}</span></p>
    </div>
  </div>
</section>

<section class="section fond-pierre" id="hotes" aria-labelledby="hotes-titre">
  <div class="conteneur">
    <p class="surtitre">${c.t('maison.hotes.surtitre')}</p>
    <h2 class="titre-section" id="hotes-titre" data-anime="lignes">${c.t('maison.hotes.titre')}</h2>
    <div class="portraits" data-anime="cascade">
      ${img(c, 'pascale-didier', { sizes: '(max-width: 960px) 92vw, 36vw' })}
      <article class="portrait">
        ${img(c, 'didier', { sizes: '180px' })}
        <h3>${c.t('maison.hotes.didierNom')}</h3>
        <p>${c.t('maison.hotes.didier')}</p>
        <blockquote>«&nbsp;${c.t('maison.hotes.didierCitation')}&nbsp;»</blockquote>
      </article>
      <article class="portrait">
        ${img(c, 'pascale', { sizes: '180px' })}
        <h3>${c.t('maison.hotes.pascaleNom')}</h3>
        <p>${c.t('maison.hotes.pascale')}</p>
        <blockquote>«&nbsp;${c.t('maison.hotes.pascaleCitation')}&nbsp;»</blockquote>
      </article>
    </div>
  </div>
</section>

<section class="section" id="petit-dejeuner" aria-labelledby="matin-titre">
  <div class="conteneur deux deux--inverse">
    <div>
      <p class="surtitre">${c.t('maison.matin.surtitre')}</p>
      <h2 class="titre-section" id="matin-titre" data-anime="lignes">${c.t('maison.matin.titre')}</h2>
      <p class="chapo" data-anime>${c.t('maison.matin.texte')}</p>
      <div class="colonnes-matin" data-anime="cascade">
        <div><h3>${c.t('maison.matin.boissons')}</h3><p>${c.t('maison.matin.b')}</p></div>
        <div><h3>${c.t('maison.matin.table')}</h3><p>${c.t('maison.matin.t')}</p></div>
        <div><h3>${c.t('maison.matin.demande')}</h3><p>${c.t('maison.matin.d')}</p></div>
        <div><h3>${c.t('maison.matin.sans')}</h3><p>${c.t('maison.matin.s')}</p></div>
      </div>
    </div>
    ${img(c, 'petit-dejeuner', { sizes: '(max-width: 860px) 92vw, 44vw', attrs: 'data-fx="parallaxe"' })}
  </div>
</section>

<section class="section fond-cave" id="services" aria-labelledby="services-titre">
  <div class="conteneur">
    <p class="surtitre">${c.t('maison.services.surtitre')}</p>
    <h2 class="titre-section" id="services-titre" data-anime="lignes">${c.t('maison.services.titre')}</h2>
    <div class="cartes-3" data-anime="cascade">
      <article class="carte-service">${img(c, 'salle-a-manger', { sizes: '(max-width: 860px) 92vw, 30vw' })}<h3>${c.t('maison.services.cafeTitre')}</h3><p>${c.t('maison.services.cafe')}</p></article>
      <article class="carte-service">${img(c, 'cave-lampe', { sizes: '(max-width: 860px) 92vw, 30vw' })}<h3>${c.t('maison.services.caveTitre')}</h3><p>${c.t('maison.services.cave')}</p></article>
      <article class="carte-service">${img(c, 'salon-escalier', { sizes: '(max-width: 860px) 92vw, 30vw' })}<h3>${c.t('maison.services.salonTitre')}</h3><p>${c.t('maison.services.salon')}</p></article>
    </div>
  </div>
</section>

<section class="section" id="jardin" aria-labelledby="jardin-titre">
  <div class="conteneur deux">
    <div>
      <h2 class="titre-section" id="jardin-titre" data-anime="lignes">${c.t('maison.jardin.titre')}</h2>
      <p class="chapo" data-anime>${c.t('maison.jardin.texte')}</p>
      <div class="table-granges" data-anime>
        <h3 style="font-size:1.7rem;margin-top:1.4em">${c.t('maison.table.titre')}</h3>
        <p>${c.t('maison.table.texte')}</p>
        <p><a class="lien-fleche" href="https://www.les-granges-de-sauternes.com/" target="_blank" rel="noopener">${c.t('maison.table.lien')}<span class="visuellement-cache"> ${c.t('commun.nouvelOnglet')}</span></a></p>
      </div>
    </div>
    <div class="duo-photos" >
      ${img(c, 'cour', { sizes: '(max-width: 860px) 56vw, 26vw', attrs: 'data-fx="parallaxe"' })}
      ${img(c, 'jardin', { sizes: '(max-width: 860px) 40vw, 20vw', attrs: 'data-fx="parallaxe" data-fx-force="16"' })}
    </div>
  </div>
</section>

<section class="section fin-page fond-pierre" id="fin" aria-labelledby="fin-titre">
  <div class="conteneur">
    <div class="eventail" data-effet="eventail" aria-hidden="true"><figure class="tirage-mini">${img(c, 'salle-a-manger', { sizes: '170px' })}</figure><figure class="tirage-mini">${img(c, 'jardin', { sizes: '170px' })}</figure><figure class="tirage-mini">${img(c, 'cave-lampe', { sizes: '170px' })}</figure></div>
    <h2 class="titre-section" id="fin-titre" data-anime="lignes">${c.t('maison.fin.titre')}</h2>
    <p class="actions" data-anime>
      ${c.lien('reserver', { classe: 'bouton', texte: c.t('maison.fin.action'), attrs: 'data-survol="magnetique"' })}
      ${c.lien('environs', { classe: 'bouton bouton--contour', texte: c.t('maison.fin.action2') })}
    </p>
  </div>
</section>
`;
