/* Page 404 : une vieille clé sur le seuil. */
import { html } from '../../outils/gabarit.mjs';
import { img } from '../gabarits/outils.mjs';

export const page = { cle: '404', fichier: '404', langues: ['fr'], partage: false };

export default (c) => html`
<section class="introuvable" id="debut">
  ${img(c, 'cle-ancienne', { priorite: true, sizes: '100vw', attrs: 'data-iris-centre data-fx="zoom" data-fx-force="8"' })}
  <div class="conteneur">
    <p class="surtitre" style="color:#EAD9A6">404</p>
    <h1 data-anime>${c.t('introuvable.titre')}</h1>
    <p data-anime>${c.t('introuvable.texte')}</p>
    <p class="actions" data-anime>${c.lien('accueil', { classe: 'bouton', texte: c.t('introuvable.retour'), attrs: 'data-action-principale' })}<span class="info-cle" data-info-cle>${c.site.contact.telephoneInternational}</span></p>
  </div>
</section>
`;
