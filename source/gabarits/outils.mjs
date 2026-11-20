/* Petits outils des pages de La Sauternaise. */
import { html, brut } from '../../outils/gabarit.mjs';

/* Image tirée de donnees/images.json (alt, cadrages) : on ne précise que ce qui change. */
export function img(c, nom, o = {}) {
  const d = (c.donnees.images || {})[nom] || {};
  const fond = o.priorite && c.donnees.flous ? c.donnees.flous[nom] || '' : '';
  return c.media({ nom, alt: d.alt || '', cadrage: d.cadrage || '50% 50%', cadrageMobile: d.mobile && d.mobile.cadrage ? d.mobile.cadrage : undefined, fond, ...o });
}

/* Feuille de vigne (ornement du logo). */
export const feuille = (classe = 'feuille') => brut(`<svg class="${classe}" viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path fill="currentColor" d="M16 3c1.2 2.4 3 3.3 5.2 3.1-.5 2 .3 3.7 2.4 4.6-1.4 1.3-1.7 3.1-.8 5.2-2.1-.3-3.6.4-4.6 2.3-.6-1.4-1.3-2.3-2.2-2.7v8.9h-1.9v-8.9c-.9.4-1.6 1.3-2.2 2.7-1-1.9-2.5-2.6-4.6-2.3.9-2.1.6-3.9-.8-5.2 2.1-.9 2.9-2.6 2.4-4.6C12.9 6.3 14.8 5.4 16 3z"/></svg>`);

/* Titre sur plusieurs lignes, la dernière en italique (mot fort). */
export function titre(niveau, lignes, { classe = '', anime = 'lignes', id = '' } = {}) {
  const n = lignes.length;
  const corps = lignes.map((l, i) => (i === n - 1 && n > 1 ? html`<span class="l"><em>${l}</em></span>` : html`<span class="l">${l}</span>`));
  return html`<${brut('h' + niveau)}${id ? brut(` id="${id}"`) : ''} class="${classe}"${anime ? brut(` data-anime="${anime}"`) : ''}>${corps}</${brut('h' + niveau)}>`;
}
