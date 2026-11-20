/* Accès & contact : l'itinéraire depuis Bordeaux qui se dessine, temps de route, train et avion,
   en arrivant, formulaire de contact simulé. */
import { html, brut } from '../../outils/gabarit.mjs';
import { img } from '../gabarits/outils.mjs';

export const page = { cle: 'acces', fichier: 'acces', imagePartage: 'facade-face-1280.webp' };

const carte = (c) => {
  const t = (k) => c.s('acces.tete.' + k);
  return brut(`<svg viewBox="0 0 500 400" role="img" aria-labelledby="carte-titre">
  <title id="carte-titre">${t('bordeaux')}, ${t('rocade')}, ${t('a62')}, ${t('langon')}, ${t('d8')}, ${t('d125')}, ${t('sauternes')}</title>
  <g class="vignes">${Array.from({ length: 9 }, (_, i) => `<path d="M${200 + i * 14} 300 q 18 -10 36 0 t 36 0 t 36 0"/>`).join('')}${Array.from({ length: 6 }, (_, i) => `<path d="M${30 + i * 12} ${250 + i * 9} q 14 -8 28 0 t 28 0"/>`).join('')}</g>
  <path class="fleuve" d="M40 70 C 120 90, 150 150, 210 170 S 330 200, 380 230 S 450 280, 480 300"/>
  <path class="route-fond" d="M86 66 L 128 112 L 250 180 L 362 238 L 336 296 L 262 336"/>
  <path class="route" data-fx-trait d="M86 66 L 128 112 L 250 180 L 362 238 L 336 296 L 262 336"/>
  <g class="etape"><circle cx="86" cy="66" r="9"/><text x="100" y="58">${t('bordeaux')}</text></g>
  <g class="etape"><circle cx="128" cy="112" r="6"/><text x="140" y="108">${t('rocade')}</text></g>
  <g class="etape"><circle cx="250" cy="180" r="0"/><text x="196" y="208">${t('a62')}</text></g>
  <g class="etape"><circle cx="362" cy="238" r="6"/><text x="374" y="234">${t('langon')}</text></g>
  <g class="etape"><circle cx="336" cy="296" r="6"/><text x="350" y="300">${t('d8')}</text></g>
  <g class="etape"><text x="306" y="328">${t('d125')}</text></g>
  <g class="arrivee"><circle cx="262" cy="336" r="11"/><text x="150" y="374">${t('sauternes')}</text></g>
</svg>`);
};

export default (c) => html`
<section class="ouv" id="debut">
  <div class="conteneur ouv-carte-grille">
    <div>
      <p class="surtitre">${c.t('acces.tete.surtitre')}</p>
      <h1 data-anime="gsap" class="ouv-titre"><span class="ligne-masque"><span class="hero-ligne">${c.t('acces.tete.titre1')}</span></span><span class="ligne-masque"><span class="hero-ligne"><em>${c.t('acces.tete.titre2')}</em></span></span></h1>
      <p class="chapo">${c.t('acces.tete.texte')}</p>
      <p class="actions">
        <a class="bouton" href="#route" data-action-principale data-sans-transition>${c.t('acces.tete.action')}</a>
        <a class="bouton bouton--contour" href="tel:${c.site.contact.telephoneLien}">${c.t('commun.appeler')}</a>
      </p>
      <p class="info-cle" data-info-cle style="margin-top:14px">${c.t('acces.tete.info')}</p>
    </div>
    <div class="itineraire" data-fx="trace" data-effet="itineraire" data-iris-centre data-visuel>
      ${carte(c)}
      <p class="itineraire-legende">Schéma, pas à l’échelle</p>
    </div>
  </div>
</section>

<section class="section fond-pierre" id="route" aria-labelledby="route-titre">
  <div class="conteneur deux" style="align-items:start">
    <div>
      <h2 class="titre-section" id="route-titre" data-anime="lignes">${c.t('acces.route.titre')}</h2>
      <h3 style="font-size:1.6rem">${c.t('acces.route.itineraire')}</h3>
      <ol class="etapes-route" data-anime="cascade">${[1, 2, 3, 4].map((i) => html`<li>${c.t('acces.route.i' + i)}</li>`)}</ol>
    </div>
    <div>
      <h3 style="font-size:1.6rem">${c.t('acces.route.temps')}</h3>
      <ul class="temps" data-anime="cascade" data-visuel>${c.donnees.acces.map((x) => html`<li><strong>${x.ville}</strong><span>${x.temps} · ${x.km}</span></li>`)}</ul>
      <h3 style="font-size:1.6rem;margin-top:1.6em">${c.t('acces.train.titre')}</h3>
      <p data-anime>${c.t('acces.train.texte')}</p>
    </div>
  </div>
</section>

<section class="section" id="arriver" aria-labelledby="arriver-titre">
  <div class="conteneur deux">
    ${img(c, 'facade-face', { sizes: '(max-width: 860px) 92vw, 46vw', classe: 'media--paysage', attrs: 'data-anime="rideau"' })}
    <div>
      <h2 class="titre-section" id="arriver-titre" data-anime="lignes">${c.t('acces.arriver.titre')}</h2>
      <ul class="liste-fine" data-anime="cascade">
        <li>${c.t('acces.arriver.parking')}</li>
        <li>${c.t('acces.arriver.entree')}</li>
        <li>${c.t('acces.arriver.horaires')}</li>
      </ul>
    </div>
  </div>
</section>

<section class="section fond-cave" id="contact" aria-labelledby="contact-titre">
  <div class="conteneur deux" style="align-items:start">
    <div>
      <h2 class="titre-section" id="contact-titre" data-anime="lignes">${c.t('acces.contact.titre')}</h2>
      <p class="chapo" data-anime>${c.t('acces.contact.texte')}</p>
      <dl class="coordonnees" data-anime="cascade">
        <div><dt>${c.t('acces.contact.adresse')}</dt><dd>${c.site.contact.adresse}</dd></div>
        <div><dt>${c.t('acces.contact.telephone')}</dt><dd><a href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephoneInternational}</a></dd></div>
      </dl>
      ${img(c, 'jardin', { classe: 'contact-photo', sizes: '(max-width: 860px) 92vw, 420px', attrs: 'data-anime="rideau"' })}
    </div>
    <form class="formulaire formulaire--sombre" data-formulaire novalidate aria-labelledby="contact-titre">
      <div class="champs-2">
        <div class="champ"><label for="c-prenom">${c.t('acces.contact.prenom')}</label><input id="c-prenom" name="prenom" autocomplete="given-name" required></div>
        <div class="champ"><label for="c-nom">${c.t('acces.contact.nom')}</label><input id="c-nom" name="nom" autocomplete="family-name" required></div>
      </div>
      <div class="champ"><label for="c-email">${c.t('acces.contact.email')}</label><input id="c-email" name="email" type="email" autocomplete="email" required></div>
      <div class="champ"><label for="c-message">${c.t('acces.contact.message')}</label><textarea id="c-message" name="message" rows="4" required></textarea></div>
      <p class="mention-donnees">${c.t('acces.contact.donnees')}</p>
      <p><button class="bouton" type="submit">${c.t('acces.contact.envoyer')}</button></p>
      <p data-message-envoi tabindex="-1" hidden data-texte="${c.s('acces.contact.envoye')}"></p>
    </form>
  </div>
</section>
`;
