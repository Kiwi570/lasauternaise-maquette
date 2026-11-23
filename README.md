# La Sauternaise · maquette

Maquette du futur site de **La Sauternaise**, maison d'hôtes de charme à Sauternes (Gironde), d'après le site actuel lasauternaise.com.
Adresse de la maquette : https://lasauternaise-maquette.vercel.app (à mettre dans le module Wix « Intégrer un site »).

Direction artistique « L'Office de dégustation » : chaux, pierre blonde et cave ; rouge et or du logo ; titres Ibarra Real Nova, texte Hanken Grotesk.
Pages : accueil, Les chambres, La maison, Les environs, Réserver, Accès & contact, page 404.

## Construire et vérifier

```
node outils/generer.mjs          pages HTML générées depuis donnees/ et source/ (ne jamais modifier les .html à la main)
node outils/flous.mjs            aperçus flous des images d'ouverture (donnees/flous.json)
node _audit/audit.mjs            audit standard (--complet : 13 tailles)
```

Les textes sont dans `donnees/textes/fr.json`, les chambres dans `donnees/chambres.json`, les 39 visites dans `donnees/environs.json`, les temps de route dans `donnees/acces.json`.

## À fournir par le client (fiche récapitulative)

Mentions et obligations, marquées « à compléter » dans la maquette :
- Mentions légales : éditeur (raison sociale, adresse, SIRET), directeur de la publication : **à compléter**.
- Hébergeur : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis (adresse vérifiée le 20 novembre 2026 dans la politique de confidentialité de Vercel), à reporter dans les mentions légales.
- Politique de confidentialité (formulaires de réservation et de contact, RGPD) : **à compléter**. Sous les formulaires, la maquette annonce « La politique de confidentialité sera publiée avec le site. »
- Conditions générales de vente (le site actuel en a une page) : **à compléter**.
- Assurance responsabilité civile, classement ou labels officiels (le site cite « Bacchus », « Vignobles & Découvertes », « Route des Vins ») : **à confirmer**.
- Crédit des photos : plusieurs photos portent la mention « LaSauternaiseLuxuryB&B©2016 FPoincet » : nom complet du photographe **à confirmer**.
- Crédits des illustrations générées : 5 images créées par IA (vignes dans la brume, verre doré, linge, vapeur, clé de la 404) portent la mention « Illustration générée », à garder sur le site final.

Retiré ou remplacé faute d'information :
- **Tarifs** : aucun prix publié sur le site actuel. Remplacé par « Tarifs selon la saison et la chambre, donnés à la demande » (accueil, Réserver).
- **Photos par chambre** : le site ne dit pas quelle photo correspond à quelle chambre, sauf Terre de Margaux. Les chambres sont présentées par leur nom, avec une galerie commune (page Les chambres). Fournir une ou deux photos par chambre.
- **Équipement bien-être de chaque chambre** (hammam, sauna infrarouge, balnéo ou douche hydromassante) : non précisé chambre par chambre. Présenté globalement (accueil, Les chambres).
- **Chambres avec entrée indépendante ou isolation renforcée** : non précisé. Proposé comme souhait dans la demande de réservation.
- **Capacité de chaque chambre** (nombre de personnes, type de lits) : non précisée. Champ libre « Nombre de personnes » dans la demande.
- **E-mail de contact** : non publié sur le site actuel. Seul le téléphone est affiché.
- **Photo du salon Aquitaine** : remplacée par la photo de l'escalier et du salon (page La maison).
- **Sélection Guide MICHELIN** : vérifiée sur guide.michelin.com mais absente du site actuel ; non affichée (à ajouter si le client le souhaite).

## À la mise en ligne définitive

À retirer :
- la consigne `noindex` (balise robots dans `source/gabarits/commun.mjs` et en-tête X-Robots-Tag dans `vercel.json`) ;
- les formulaires simulés (Réserver, Accès & contact) : les brancher sur un vrai envoi ou le moteur de réservation ;
- la mention « Maquette : demandes et réservations simulées » du pied de page ;
- les mentions « à compléter » du pied de page et des formulaires, remplacées par les vraies pages.

À garder : la mention « Illustration générée » sur les 5 images créées par IA.

## Crédits

- Photos : site actuel de La Sauternaise (et des propriétés citées dans Les environs).
- Illustrations générées (Grok) : `vignes-brume`, `verre-dore`, `linge-satin`, `vapeur`, `cle-ancienne`.
- Polices : Ibarra Real Nova et Hanken Grotesk (SIL Open Font License), hébergées avec le site.
- GSAP (ScrollTrigger, SplitText).
