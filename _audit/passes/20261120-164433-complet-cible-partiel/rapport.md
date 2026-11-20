# Rapport d’audit

Projet : `lasauternaise-maquette` · 20/11/2026 17:48:43 · 4 min · 4 page(s) · audit complet ciblé sur /,/acces,/environs,/la-maison (étapes : fichiers, mesures)

## Résumé

- Statut : **5 échec(s)**
- Passe : `20261120-164433-complet-cible-partiel` · version ?v=1
- Échecs : **5**
- À regarder : **2**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (156), balayage (4)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261120-154927-rapide-cible | rapide | /chambres,/la-maison | toutes | 31 | 20 | 1 | échecs |
| 20261120-155729-rapide-cible | rapide | /,/environs,/reserver,/acces | toutes | 28 | 22 | 1 | échecs |
| 20261120-161250-standard | standard | toutes | toutes | 3 | 17 | 1 | échecs |
| 20261120-163545-complet-partiel | complet | toutes | fichiers, mesures, ecran | 6 | 3 | 0 | échecs |
| **20261120-164433-complet-cible-partiel** (celle-ci) | complet | /,/acces,/environs,/la-maison | fichiers, mesures | 5 | 2 | 0 | échecs |

## Échecs

### texte coupé (4)

- **texte coupé** — `/` — div.conteneur.pile-grille > div.pile:nth-of-type(2) > figure.pile-tirage:nth-of-type(1) > figcaption « Terre de Margaux » — coupé par section#chambres « LES CHAMBRES Quatre chambres, quatre grands vins C » _(768×1024 normal, 768×1024 sansWebgl)_
- **texte coupé** — `/` — div.conteneur.pile-grille > div.pile:nth-of-type(2) > figure.pile-tirage:nth-of-type(2) > figcaption « Pierre et lin » — coupé par section#chambres « LES CHAMBRES Quatre chambres, quatre grands vins C » _(768×1024 normal, 768×1024 sansWebgl)_
- **texte coupé** — `/` — div.conteneur.pile-grille > div.pile:nth-of-type(2) > figure.pile-tirage:nth-of-type(3) > figcaption « Cheminée de marbre » — coupé par section#chambres « LES CHAMBRES Quatre chambres, quatre grands vins C » _(768×1024 normal, 768×1024 sansWebgl)_
- **texte coupé** — `/` — div.conteneur.pile-grille > div.pile:nth-of-type(2) > figure.pile-tirage:nth-of-type(4) > figcaption « Le mur ocre » — coupé par section#chambres « LES CHAMBRES Quatre chambres, quatre grands vins C » _(768×1024 normal, 768×1024 sansWebgl)_

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.hero-texte > p.info-cle:nth-of-type(4) « Arrivée autonome dès 16 h · petit-déjeuner compris » _(1000×560 sansJs)_

## À regarder

### « à compléter » visible (2)

- **« à compléter » visible** — `acces.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `reserver.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 6 étape(s) notée(s), 110 min de travail pour 115 min de budget, 14 min d’attente de l’utilisateur.
- Journal : « construction : contact et page de catégorie » 37 min pour 10 prévues.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/ --seulement=fichiers,mesures
```
