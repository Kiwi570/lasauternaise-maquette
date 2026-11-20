# Rapport d’audit

Projet : `lasauternaise-maquette` · 20/11/2026 16:56:01 · 7 min · 2 page(s) · audit RAPIDE : ne vaut pas pour une livraison ciblé sur /chambres,/la-maison

## Résumé

- Statut : **31 échec(s)**
- Passe : `20261120-154927-rapide-cible` · version ?v=1
- Échecs : **31**
- À regarder : **20**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (2), mesures (12), films d’ouverture (4), films de transition (4), bords de l’écran (2), intro accélérable et passable (7), menu (1), clavier (2), liens et boutons (2), liens vers la page en cours (2), changements de hauteur (2), tient dans l’écran (2), films des épinglages (1), fluidité (4), défilement selon l’appareil (5), mouvement (4), effets du plan (11), souris immobile (2), vitesse (2), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✗ absent | aucun data-grille="manipuler" sur l’accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 6 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en rideau |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | ⚠ à regarder | galerie générique sur /chambres |
| 7. L’action principale a un retour physique | ✗ absent | sur aucune page |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Échecs

### image de partage (6)

- **image de partage** — `acces.html` — fichier introuvable : /assets/partage/acces-fr.jpg
- **image de partage** — `chambres.html` — fichier introuvable : /assets/partage/chambres-fr.jpg
- **image de partage** — `environs.html` — fichier introuvable : /assets/partage/environs-fr.jpg
- **image de partage** — `index.html` — fichier introuvable : /assets/partage/accueil-fr.jpg
- **image de partage** — `la-maison.html` — fichier introuvable : /assets/partage/la-maison-fr.jpg
- **image de partage** — `reserver.html` — fichier introuvable : /assets/partage/reserver-fr.jpg

### texte sous 12 px (12)

- **texte sous 12 px** — `/chambres` — li#or-de-bordeaux > p.etiquette-mot:nth-of-type(1) « CLIMATISÉE » — 11.8 px _(390×844 normal, 390×844 sansWebgl, 1366×768 normal, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **texte sous 12 px** — `/chambres` — li#reflets-de-saint-emilion > p.etiquette-mot:nth-of-type(1) « CLIMATISÉE » — 11.8 px _(390×844 normal, 390×844 sansWebgl, 1366×768 normal, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **texte sous 12 px** — `/chambres` — li#terre-de-margaux > p.etiquette-mot:nth-of-type(1) « LA SAUTERNAISE » — 11.8 px _(390×844 normal, 390×844 sansWebgl, 1366×768 normal, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **texte sous 12 px** — `/chambres` — li#lettre-de-sauternes > p.etiquette-mot:nth-of-type(1) « LA SAUTERNAISE » — 11.8 px _(390×844 normal, 390×844 sansWebgl, 1366×768 normal, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **texte sous 12 px** — `/chambres` — div.conteneur > ul.soins.fx-fini > li:nth-of-type(1) > em « EFFEGIBI » — 11.8 px _(390×844 normal, 390×844 sansWebgl, 1366×768 normal, 844×390 normal)_
- **texte sous 12 px** — `/chambres` — div.conteneur > ul.soins.fx-fini > li:nth-of-type(2) > em « TYLÖ » — 11.8 px _(390×844 normal, 390×844 sansWebgl, 1366×768 normal, 844×390 normal)_
- **texte sous 12 px** — `/chambres` — div.conteneur > ul.soins.fx-fini > li:nth-of-type(3) > em « KINEDO » — 11.8 px _(390×844 normal, 390×844 sansWebgl, 1366×768 normal, 844×390 normal)_
- **texte sous 12 px** — `/chambres` — div.conteneur > ul.soins.fx-fini > li:nth-of-type(4) > em « HANSGROHE » — 11.8 px _(390×844 normal, 390×844 sansWebgl, 1366×768 normal, 844×390 normal)_
- **texte sous 12 px** — `/chambres` — div.conteneur > ul.soins > li:nth-of-type(1) > em « EFFEGIBI » — 11.8 px _(390×844 sansJs, 320×568 sansJs)_
- **texte sous 12 px** — `/chambres` — div.conteneur > ul.soins > li:nth-of-type(2) > em « TYLÖ » — 11.8 px _(390×844 sansJs, 320×568 sansJs)_
- **texte sous 12 px** — `/chambres` — div.conteneur > ul.soins > li:nth-of-type(3) > em « KINEDO » — 11.8 px _(390×844 sansJs, 320×568 sansJs)_
- **texte sous 12 px** — `/chambres` — div.conteneur > ul.soins > li:nth-of-type(4) > em « HANSGROHE » — 11.8 px _(390×844 sansJs, 320×568 sansJs)_

### texte coupé (5)

- **texte coupé** — `/chambres` — div:nth-of-type(1) > h1.ouv-titre > span.ligne-masque:nth-of-type(1) > span.hero-ligne « Quatre chambres, » — coupé par div.conteneur.ouv-bandeau-tete > div:nth-of-type(1) > h1.ouv-titre > span.ligne-masque:nth-of-type(1) « Quatre chambres, » _(390×844 normal, 390×844 sansWebgl, 1366×768 normal, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **texte coupé** — `/chambres` — h1.ouv-titre > span.ligne-masque:nth-of-type(2) > span.hero-ligne > em « quatre grands vins » — coupé par div.conteneur.ouv-bandeau-tete > div:nth-of-type(1) > h1.ouv-titre > span.ligne-masque:nth-of-type(2) « quatre grands vins » _(390×844 normal, 390×844 sansWebgl, 1366×768 normal, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **texte coupé** — `/la-maison` — div.conteneur.ouv-texte > h1.ouv-titre > span.ligne-masque:nth-of-type(1) > span.hero-ligne « « Une maison légendaire » — coupé par section#debut > div.conteneur.ouv-texte > h1.ouv-titre > span.ligne-masque:nth-of-type(1) « « Une maison légendaire » _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **texte coupé** — `/la-maison` — h1.ouv-titre > span.ligne-masque:nth-of-type(2) > span.hero-ligne > em « qui vient de renaître » — coupé par section#debut > div.conteneur.ouv-texte > h1.ouv-titre > span.ligne-masque:nth-of-type(2) « qui vient de renaître » » _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **texte coupé** — `/la-maison` — div.conteneur.ouv-texte > h1.ouv-titre > span.ligne-masque:nth-of-type(2) > span.hero-ligne « qui vient de renaître » » — coupé par section#debut > div.conteneur.ouv-texte > h1.ouv-titre > span.ligne-masque:nth-of-type(2) « qui vient de renaître » » _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_

### photo faible affichée en grand (1)

- **photo faible affichée en grand** — `/chambres` — div.conteneur.deux > figure.media > picture > img « Draps de satin de coton blanc et deux oreillers » — linge-satin (4/5, faible, 41 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_

### premier écran : bouton principal hors de l’écran (2)

- **premier écran : bouton principal hors de l’écran** — `/chambres` — div.conteneur.ouv-bandeau-tete > div.colonne:nth-of-type(2) > p.actions:nth-of-type(2) > a.bouton « Demander mes dates » _(320×568 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/la-maison` — section#debut > div.conteneur.ouv-texte > p.actions:nth-of-type(3) > a.bouton:nth-of-type(1) « Réserver » _(390×844 sansJs)_

### premier écran : information clé hors de l’écran (2)

- **premier écran : information clé hors de l’écran** — `/chambres` — section#debut > div.conteneur.ouv-bandeau-tete > div.colonne:nth-of-type(2) > p.info-cle:nth-of-type(3) « Petit-déjeuner compris · arrivée dès 16 h » _(320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/la-maison` — section#debut > div.conteneur.ouv-texte > p.info-cle:nth-of-type(4) « 22 rue Principale, place de l’Église, Sauternes » _(390×844 sansJs, 320×568 sansJs)_

### contraste sur image (3)

- **contraste sur image** — `/la-maison` — section#debut > div.conteneur.ouv-texte > p.surtitre:nth-of-type(1) « LA MAISON » — 2.26:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_
- **contraste sur image** — `/la-maison` — section#debut > div.conteneur.ouv-texte > p.surtitre:nth-of-type(1) « LA MAISON » — 1.51:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_
- **contraste sur image** — `/la-maison` — div.conteneur.ouv-texte > h1.ouv-titre > span.ligne-masque:nth-of-type(1) > span.hero-ligne « « Une maison légendaire » — 2.98:1 sur les 10 % de la photo les moins favorables (minimum 3:1) _(1366×768 normal)_

## À regarder

### « à compléter » visible (2)

- **« à compléter » visible** — `acces.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `reserver.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### grille : effet signature qui ne se manipule pas (point 1) (1)

- **grille : effet signature qui ne se manipule pas (point 1)** — `/` — aucun élément data-grille="manipuler" sur l’accueil : objet à attraper, faire tourner ou glisser (module objet-a-faire-tourner, lumiere-au-pointeur…)

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### grille : galerie horizontale générique (point 6) (1)

- **grille : galerie horizontale générique (point 6)** — `/chambres` — le métier a-t-il son geste (feuilleter un bac, empiler des planches, tourner les pages, ouvrir un tiroir) ? Modules bac-a-feuilleter, planches-empilees ; si la rangée qui défile est le geste du métier, ajouter data-grille="scene"

### grille : action principale sans retour physique (point 7) (1)

- **grille : action principale sans retour physique (point 7)** — ajout au panier, réservation, envoi ou filtre : quelque chose de l’objet part, se pose ou se transforme (module envol-vers-le-panier, tampon « reçu »), marqué data-grille="retour"

### section sans visuel (2)

- **section sans visuel** — `/chambres` — section#fin « Quelle chambre vous tente ? Dites-nous vos dates e » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 390×844 sansWebgl, 1366×768 normal, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **section sans visuel** — `/la-maison` — section#fin « Venez la découvrir Demander mes dates Les environs » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_

### texte de contenu sous 13 px (ordinateur) (4)

- **texte de contenu sous 13 px (ordinateur)** — `/chambres` — section#debut > div.conteneur.ouv-bandeau-tete > div:nth-of-type(1) > p.surtitre « LES CHAMBRES » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/chambres` — section#bien-etre > div.conteneur > div.vapeur-texte > p.surtitre:nth-of-type(1) « LE BIEN-ÊTRE » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/la-maison` — section#petit-dejeuner > div.conteneur.deux > div > p.surtitre:nth-of-type(1) « LE PETIT-DÉJEUNER » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/la-maison` — section#services > div.conteneur > p.surtitre « DANS LA MAISON » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_

### typographie française (4)

- **typographie française** — `/la-maison` — div.conteneur.ouv-texte > h1.ouv-titre > span.ligne-masque:nth-of-type(1) > span.hero-ligne « « Une maison légendaire » — espace insécable manquante avant ou après « « » _(1366×768 normal)_
- **typographie française** — `/la-maison` — div.conteneur.ouv-texte > h1.ouv-titre > span.ligne-masque:nth-of-type(2) > span.hero-ligne « qui vient de renaître » » — espace insécable manquante avant ou après « » » _(1366×768 normal)_
- **typographie française** — `/la-maison` — div.conteneur > div.portraits.fx-fini > article.portrait:nth-of-type(1) > blockquote « « Depuis plus de dix ans, j’œuvre pour partager, p » — espace insécable manquante avant ou après « « » » _(1366×768 normal)_
- **typographie française** — `/la-maison` — div.conteneur > div.portraits.fx-fini > article.portrait:nth-of-type(2) > blockquote « « J’ai longuement réfléchi à l’agencement, l’équip » — espace insécable manquante avant ou après « « » » _(1366×768 normal)_

### retour avant : changement brusque (2)

- **retour avant : changement brusque** — `/la-maison` — à 75 ms (différence 24 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_
- **retour avant : changement brusque** — `/la-maison` — à 61 ms (différence 22 %) (films/retour-avant-390.png) _(390×844 retour avant)_

### effet qui ne bouge pas au défilement (1)

- **effet qui ne bouge pas au défilement** — `/la-maison` — div.duo-photos — duo : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 4 étape(s) notée(s), 36 min de travail pour 75 min de budget, 14 min d’attente de l’utilisateur.
- Audit rapide : étapes lourdes sur /chambres, /la-maison.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.
- Ouverture /chambres (1366×768) : 2892 ms depuis le premier octet
- Ouverture /la-maison (1366×768) : 2662 ms depuis le premier octet
- Ouverture /chambres (390×844) : 2650 ms depuis le premier octet
- Ouverture /la-maison (390×844) : 2646 ms depuis le premier octet
- Bords de l’écran : 177 images d’intro, 5 de voile et 45 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun lien profond vers une section d’une autre page.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran /la-maison : aucune section épinglée ou plein écran.
- Fluidité /chambres 1366×768 (molette) : 0 % d'images lentes sur 485, tâche la plus longue 0 ms
- Fluidité /la-maison 1366×768 (molette) : 0 % d'images lentes sur 286, tâche la plus longue 0 ms
- Fluidité /chambres 390×844 (doigt) : 0 % d'images lentes sur 1343, tâche la plus longue 0 ms
- Fluidité /la-maison 390×844 (doigt) : 0 % d'images lentes sur 1336, tâche la plus longue 0 ms
- Vitesse /chambres : 0.36 s de calcul au chargement (téléphone ralenti).
- Vitesse /la-maison : 0.33 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --rapide --seulement=fichiers,mesures
```
