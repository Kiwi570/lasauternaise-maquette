# Rapport d’audit

Projet : `lasauternaise-maquette` · 23/11/2026 15:54:18 · 10 min · 7 page(s) · audit complet (étapes : fichiers, mesures, mouvement)

## Résumé

- Statut : **1 échec(s)**
- Passe : `20261123-144435-complet-partiel` · version ?v=2
- Échecs : **1**
- À regarder : **2**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (273), balayage (6), mouvement (12), effets du plan (13), souris immobile (6)

## Passes de cette version (?v=2)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261123-141502-complet | complet | toutes | toutes | 48 | 11 | 1 | échecs |
| **20261123-144435-complet-partiel** (celle-ci) | complet | toutes | fichiers, mesures, mouvement | 1 | 2 | 0 | échecs |

## Échecs

### débordement horizontal (1)

- **débordement horizontal** — `/` — page large de 909 px — largeurs : 880 px _(balayage 320–1920 normal)_

## À regarder

### « à compléter » visible (2)

- **« à compléter » visible** — `acces.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `reserver.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=2
- Journal v2 : 1 étape(s) notée(s), 19 min de travail pour 15 min de budget, 0 min d’attente de l’utilisateur.
- Journal : « analyse complète de la v1 (captures section par section, films) » 19 min pour 15 prévues.
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
