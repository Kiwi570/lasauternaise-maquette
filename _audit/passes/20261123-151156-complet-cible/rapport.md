# Rapport d’audit

Projet : `lasauternaise-maquette` · 23/11/2026 16:20:55 · 9 min · 2 page(s) · audit complet ciblé sur /,/reserver

## Résumé

- Statut : **1 échec(s)**
- Passe : `20261123-151156-complet-cible` · version ?v=2
- Échecs : **1**
- À regarder : **6**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (4), mesures (78), balayage (2), films d’ouverture (4), films de transition (4), bords de l’écran (3), intro accélérable et passable (7), menu (1), clavier (2), liens et boutons (2), liens profonds (2), liens vers la page en cours (2), changements de hauteur (2), fluidité (4), défilement selon l’appareil (5), mouvement (4), effets du plan (13), souris immobile (2), vitesse (2), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✓ présent | accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 6 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en rideau |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | ⚠ à regarder | galerie générique sur /chambres |
| 7. L’action principale a un retour physique | ✓ présent | sur /reserver |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Passes de cette version (?v=2)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261123-141502-complet | complet | toutes | toutes | 48 | 11 | 1 | échecs |
| 20261123-144435-complet-partiel | complet | toutes | fichiers, mesures, mouvement | 1 | 2 | 0 | échecs |
| 20261123-150152-complet-partiel | complet | toutes | fichiers, mesures | 0 | 0 | 0 | complet |
| **20261123-151156-complet-cible** (celle-ci) | complet | /,/reserver | toutes | 1 | 6 | 1 | échecs |

## Échecs

### élément recouvert (1)

- **élément recouvert** — `/reserver` — h2#recap-titre « Votre séjour » — par div.recap-carte > div.recap-corps > div.tampon > svg _(390×844 normal)_

## À regarder

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### grille : galerie horizontale générique (point 6) (1)

- **grille : galerie horizontale générique (point 6)** — `/chambres` — le métier a-t-il son geste (feuilleter un bac, empiler des planches, tourner les pages, ouvrir un tiroir) ? Modules bac-a-feuilleter, planches-empilees ; si la rangée qui défile est le geste du métier, ajouter data-grille="scene"

### grille : objet d’ouverture hors du premier écran (1)

- **grille : objet d’ouverture hors du premier écran** — `/reserver` — 358 × 46 px visibles : l’intro et le voile s’ouvrent depuis le centre de l’écran à cette taille _(390×844)_

### retour arrière : changement brusque (1)

- **retour arrière : changement brusque** — `/` — à 86 ms (différence 24 %) (films/retour-arrière-1366.png) _(1366×768 retour arrière)_

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/` — écran différent à la même position après rechargement (4.5 %), voir comparaisons/rechargement-*.png _(1366×768)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=2
- Journal v2 : 1 étape(s) notée(s), 19 min de travail pour 15 min de budget, 0 min d’attente de l’utilisateur.
- Journal : « analyse complète de la v1 (captures section par section, films) » 19 min pour 15 prévues.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2893 ms depuis le premier octet
- Ouverture /reserver (1366×768) : 2534 ms depuis le premier octet
- Ouverture / (390×844) : 2909 ms depuis le premier octet
- Ouverture /reserver (390×844) : 2550 ms depuis le premier octet
- bords de l’écran / 1920×1080 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 260 images d’intro, 9 de voile et 60 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /reserver : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 438, tâche la plus longue 0 ms
- Fluidité /reserver 1366×768 (molette) : 0 % d'images lentes sur 190, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1438, tâche la plus longue 0 ms
- Fluidité /reserver 390×844 (doigt) : 0 % d'images lentes sur 1345, tâche la plus longue 0 ms
- Vitesse / : 0.54 s de calcul au chargement (téléphone ralenti).
- Vitesse /reserver : 0.33 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/reserver --seulement=fichiers,mesures
```
