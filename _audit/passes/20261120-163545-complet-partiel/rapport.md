# Rapport d’audit

Projet : `lasauternaise-maquette` · 20/11/2026 17:43:19 · 8 min · 7 page(s) · audit complet (étapes : fichiers, mesures, ecran)

## Résumé

- Statut : **6 échec(s)**
- Passe : `20261120-163545-complet-partiel` · version ?v=1
- Échecs : **6**
- À regarder : **3**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (273), balayage (6), tient dans l’écran (8), films des épinglages (1)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261120-154927-rapide-cible | rapide | /chambres,/la-maison | toutes | 31 | 20 | 1 | échecs |
| 20261120-155729-rapide-cible | rapide | /,/environs,/reserver,/acces | toutes | 28 | 22 | 1 | échecs |
| 20261120-161250-standard | standard | toutes | toutes | 3 | 17 | 1 | échecs |
| **20261120-163545-complet-partiel** (celle-ci) | complet | toutes | fichiers, mesures, ecran | 6 | 3 | 0 | échecs |

## Échecs

### premier écran : information clé hors de l’écran (4)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.hero-texte > p.info-cle:nth-of-type(4) « Arrivée autonome dès 16 h · petit-déjeuner compris » _(1000×560 normal, 1000×560 sansWebgl, 1000×560 sansJs)_
- **premier écran : information clé hors de l’écran** — `/acces` — section#debut > div.conteneur.ouv-carte-grille > div:nth-of-type(1) > p.info-cle:nth-of-type(4) « Bordeaux 30 min · gare Saint-Jean 38 min · aéropor » _(1000×560 sansJs)_
- **premier écran : information clé hors de l’écran** — `/environs` — section#debut > div.conteneur:nth-of-type(2) > div:nth-of-type(2) > p.info-cle:nth-of-type(4) « Bordeaux à 30 min · Saint-Émilion à 50 km » _(320×568 normal, 375×667 normal, 320×568 sansWebgl, 375×667 sansJs, 375×667 sansWebgl)_
- **premier écran : information clé hors de l’écran** — `/la-maison` — section#debut > div.conteneur.ouv-texte > p.info-cle:nth-of-type(4) « 22 rue Principale, place de l’Église, Sauternes » _(320×568 normal, 375×667 normal, 320×568 sansJs, 375×667 sansJs, 320×568 sansWebgl, 375×667 sansWebgl)_

### texte coupé (2)

- **texte coupé** — `/` — div.conteneur.pile-grille > div.pile:nth-of-type(2) > figure.pile-tirage:nth-of-type(2) > figcaption « Pierre et lin » — coupé par section#chambres « LES CHAMBRES Quatre chambres, quatre grands vins C » _(768×1024 normal, 768×1024 sansWebgl)_
- **texte coupé** — `/` — div.conteneur.pile-grille > div.pile:nth-of-type(2) > figure.pile-tirage:nth-of-type(4) > figcaption « Le mur ocre » — coupé par section#chambres « LES CHAMBRES Quatre chambres, quatre grands vins C » _(768×1024 normal, 768×1024 sansWebgl)_

## À regarder

### « à compléter » visible (2)

- **« à compléter » visible** — `acces.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `reserver.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### texte de contenu sous 13 px (ordinateur) (1)

- **texte de contenu sous 13 px (ordinateur)** — `/acces` — section#debut > div.conteneur.ouv-carte-grille > div.itineraire:nth-of-type(2) > p.itineraire-legende « Schéma, pas à l’échelle » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 6 étape(s) notée(s), 110 min de travail pour 115 min de budget, 14 min d’attente de l’utilisateur.
- Journal : « construction : contact et page de catégorie » 37 min pour 10 prévues.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /acces : aucune section épinglée ou plein écran.
- Tient dans l'écran /environs : aucune section épinglée ou plein écran.
- Tient dans l'écran /la-maison : aucune section épinglée ou plein écran.
- Tient dans l'écran /reserver : aucune section épinglée ou plein écran.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/acces,/environs,/la-maison --seulement=fichiers,mesures
```
