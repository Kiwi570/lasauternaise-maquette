/* Aperçus flous (24 px, base64) des images d'ouverture : fond de leur figure, pour qu'aucune case grise
   n'apparaisse avant le décodage (retour arrière, connexion lente). Écrit donnees/flous.json. */
import { createRequire } from 'node:module';
import { writeFileSync, existsSync } from 'node:fs';
const sharp = createRequire(import.meta.url)(process.env.SHARP || '/usr/local/lib/node_modules_global/sharp');
const noms = ['facade', 'chambres-bandeau', 'hier-aujourdhui', 'vignes-brume', 'cour', 'cle-ancienne'];
const sortie = {};
for (const n of noms) {
  const f = ['1280', '1600', '1800', '800'].map((w) => `assets/images/${n}-${w}.webp`).find((p) => existsSync(p));
  if (!f) continue;
  const b = await sharp(f).resize(24).blur(1.2).webp({ quality: 40 }).toBuffer();
  sortie[n] = `data:image/webp;base64,${b.toString('base64')}`;
}
writeFileSync('donnees/flous.json', JSON.stringify(sortie, null, 1));
console.log(Object.keys(sortie).length, 'aperçus flous');
