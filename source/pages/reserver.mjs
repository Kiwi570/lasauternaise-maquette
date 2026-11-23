/* Réserver : la demande commence tout de suite (dates, chambre, souhaits, coordonnées), récapitulatif collant
   qui compte les nuits et applique le code 4N dès 4 nuits. Envoi simulé. */
import { html } from '../../outils/gabarit.mjs';
import { img, feuille } from '../gabarits/outils.mjs';

export const page = { cle: 'reserver', fichier: 'reserver', imagePartage: 'cour-1280.webp' };

export default (c) => {
  const f = (k) => c.t('reserver.form.' + k);
  const s = (k) => c.s('reserver.form.' + k);
  return html`
<section class="ouv ouv-outil" id="debut">
  <div class="conteneur">
    <p class="surtitre">${c.t('reserver.tete.surtitre')}</p>
    <h1 data-anime="gsap" class="ouv-titre" data-iris-centre><span class="ligne-masque"><span class="hero-ligne">${c.t('reserver.tete.titre1')} <em>${c.t('reserver.tete.titre2')}</em></span></span></h1>
    <p class="chapo">${c.t('reserver.tete.texte')}</p>
    <div class="reserver-grille">
      <form class="formulaire" data-formulaire data-sejour novalidate aria-labelledby="debut-form" data-anime="cascade">
        <h2 class="visuellement-cache" id="debut-form">${c.t('pages.reserver.nav')}</h2>
        <fieldset>
          <legend><span>1</span>${f('etape1')}</legend>
          <div class="champs-2">
            <div class="champ"><label for="arrivee">${f('arrivee')}</label><input id="arrivee" name="arrivee" type="date" required data-action-principale></div>
            <div class="champ"><label for="depart">${f('depart')}</label><input id="depart" name="depart" type="date" required></div>
          </div>
          <p class="nuits-direct" data-nuits aria-live="polite" data-info-cle data-zero="${s('nuits0')}" data-modele="${s('nuits')}" data-un="${s('nuit')}" data-erreur="${s('erreurDates')}">${f('nuits0')}</p>
          <div class="calendrier" data-calendrier aria-label="${s('calendrier')}" role="group" data-precedent="${s('precedent')}" data-suivant="${s('suivant')}"></div>
        </fieldset>
        <fieldset>
          <legend><span>2</span>${f('etape2')}</legend>
          <div class="choix-chambres" role="radiogroup" aria-label="${s('chambre')}">
            ${c.donnees.chambres.map((x) => html`<label class="choix"><input type="radio" name="chambre" value="${x.id}"><span>${x.nom}${x.clim ? html`<small>Climatisée</small>` : ''}</span></label>`)}
            <label class="choix"><input type="radio" name="chambre" value="indifferent" checked><span>${f('indifferent')}</span></label>
          </div>
          <div class="champ" style="max-width:240px"><label for="personnes">${f('personnes')}</label><input id="personnes" name="personnes" type="number" min="1" max="8" value="2" inputmode="numeric"></div>
        </fieldset>
        <fieldset>
          <legend><span>3</span>${f('etape3')}</legend>
          <div class="cases">
            ${[1, 2, 3, 4].map((i) => html`<label class="case"><input type="checkbox" name="souhait-${i}" value="${s('o' + i)}">${f('o' + i)}</label>`)}
          </div>
          <div class="champ"><label for="message">${f('message')}</label><textarea id="message" name="message" rows="3"></textarea></div>
        </fieldset>
        <fieldset>
          <legend><span>4</span>${f('etape4')}</legend>
          <div class="champs-2">
            <div class="champ"><label for="prenom">${f('prenom')}</label><input id="prenom" name="prenom" autocomplete="given-name" required></div>
            <div class="champ"><label for="nom">${f('nom')}</label><input id="nom" name="nom" autocomplete="family-name" required></div>
            <div class="champ"><label for="email">${f('email')}</label><input id="email" name="email" type="email" autocomplete="email" required></div>
            <div class="champ"><label for="telephone">${f('telephone')}</label><input id="telephone" name="telephone" type="tel" autocomplete="tel"></div>
          </div>
          <p class="mention-donnees">${f('donnees')}</p>
        </fieldset>
        <p><button class="bouton" type="submit">${f('envoyer')}</button></p>
        <p data-message-envoi tabindex="-1" hidden data-texte="${s('envoye')}"></p>
      </form>
      <aside class="recap" aria-labelledby="recap-titre">
        <div class="recap-carte">
          ${img(c, 'cour', { sizes: '(max-width: 960px) 92vw, 30vw', priorite: true })}
          <div class="recap-corps">
            <div class="tampon" data-tampon data-superpose data-grille="retour" data-nuit="${s('tamponNuit')}" data-nuits="${s('tamponNuits')}" aria-hidden="true">
              <svg viewBox="0 0 200 200" focusable="false">
                <defs>
                  <filter id="encre" x="-5%" y="-5%" width="110%" height="110%"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" seed="4"/><feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -.85 1.32"/><feComposite in="SourceGraphic" operator="in"/></filter>
                  <path id="tampon-cercle" d="M100,100 m-68,0 a68,68 0 1,1 136,0 a68,68 0 1,1 -136,0"/>
                </defs>
                <g filter="url(#encre)" fill="currentColor" stroke="currentColor">
                  <circle cx="100" cy="100" r="92" fill="none" stroke-width="4"/>
                  <circle cx="100" cy="100" r="84" fill="none" stroke-width="1.5"/>
                  <circle cx="100" cy="100" r="50" fill="none" stroke-width="1.5"/>
                  <text stroke="none" font-size="15" letter-spacing="2.4"><textPath href="#tampon-cercle" textLength="420">${s('tampon')}</textPath></text>
                  <text stroke="none" x="100" y="116" text-anchor="middle" font-size="58" data-tampon-nuits>★</text>
                  <text stroke="none" x="100" y="138" text-anchor="middle" font-size="12" letter-spacing="1.5" data-tampon-mot>${s('tamponSejour')}</text>
                </g>
              </svg>
            </div>
            <h2 id="recap-titre">${f('recap')}</h2>
            <p class="recap-nuits" data-recap-nuits>—</p>
            <dl>
              <dt>${f('recapDates')}</dt><dd data-recap-dates>—</dd>
              <dt>${f('recapChambre')}</dt><dd data-recap-chambre>${f('indifferent')}</dd>
            </dl>
            <p class="recap-remise" data-recap-remise data-actif="${s('recapRemise')}" data-inactif="${s('recapRemise0')}">${f('recapRemise0')}</p>
            <p class="recap-tarif">${f('recapInclus')} · ${f('recapHeures')}</p>
            <p class="recap-tarif" style="margin-top:.5em">${f('recapTarif')}</p>
          </div>
        </div>
      </aside>
    </div>
  </div>
</section>

<section class="section fond-pierre" id="conditions" aria-labelledby="conditions-titre">
  <div class="conteneur conditions-grille">
    <div>
      <h2 class="titre-section" id="conditions-titre" data-anime="lignes">${c.t('reserver.conditions.titre')}</h2>
      <ul class="conditions" data-anime="cascade">${[1, 2, 3, 4, 5].map((i) => html`<li>${c.t('reserver.conditions.c' + i)}</li>`)}</ul>
      <p style="margin-top:2em" class="actions" data-anime>
        <span>${c.t('reserver.conditions.tel')}</span>
        <a class="bouton bouton--contour" href="tel:${c.site.contact.telephoneLien}">${c.t('commun.appeler')} ${c.site.contact.telephone}</a>
      </p>
    </div>
    ${img(c, 'porte-peignoir', { sizes: '(max-width: 860px) 92vw, 30vw', attrs: 'data-fx="parallaxe"' })}
  </div>
</section>
`;
};
