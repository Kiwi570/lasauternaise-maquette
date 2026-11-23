# Rapport d’audit

Projet : `lasauternaise-maquette` · 23/11/2026 15:40:39 · 26 min · 7 page(s) · audit complet

## Résumé

- Statut : **48 échec(s)**
- Passe : `20261123-141502-complet` · version ?v=2
- Échecs : **48**
- À regarder : **11**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (2), mesures (273), balayage (6), films d’ouverture (12), films de transition (12), bords de l’écran (7), intro accélérable et passable (7), menu (1), clavier (7), liens et boutons (7), liens profonds (2), liens vers la page en cours (6), changements de hauteur (5), tient dans l’écran (8), films des épinglages (1), fluidité (12), défilement selon l’appareil (5), mouvement (12), effets du plan (11), souris immobile (6), vitesse (6), captures (1)

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

### textes qui se chevauchent (1)

- **textes qui se chevauchent** — `/` — section#a-pied > div.conteneur:nth-of-type(1) > div.pied-tete:nth-of-type(1) > p.chapo « Les grands crus de Sauternes commencent au bout de » — avec div.conteneur:nth-of-type(1) > div.regle:nth-of-type(2) > div.regle-axe > span.regle-depart:nth-of-type(3) « La maison » _(390×844 normal, 375×667 normal, 320×568 normal, 320×568 sansJs, 375×667 sansJs, 390×844 sansJs, +3)_

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.hero-texte:nth-of-type(1) > p.info-cle:nth-of-type(4) « Arrivée autonome dès 16 h · petit-déjeuner compris » _(1280×720 sansJs)_

### contraste insuffisant (44)

- **contraste insuffisant** — `/reserver` — div.cal-mois-liste:nth-of-type(2) > div.cal-mois > div.cal-grille > button.cal-jour.passe:nth-of-type(1) « 1 » — 1.88:1 (minimum 4.5:1) _(320×568 normal, 375×667 normal, 390×844 normal, 1024×768 normal, 1000×560 normal, 320×568 sansWebgl, +4)_
- **contraste insuffisant** — `/reserver` — div.cal-mois-liste:nth-of-type(2) > div.cal-mois > div.cal-grille > button.cal-jour.passe:nth-of-type(2) « 2 » — 1.88:1 (minimum 4.5:1) _(320×568 normal, 375×667 normal, 390×844 normal, 1024×768 normal, 1000×560 normal, 320×568 sansWebgl, +4)_
- **contraste insuffisant** — `/reserver` — div.cal-mois-liste:nth-of-type(2) > div.cal-mois > div.cal-grille > button.cal-jour.passe:nth-of-type(3) « 3 » — 1.88:1 (minimum 4.5:1) _(320×568 normal, 375×667 normal, 390×844 normal, 1024×768 normal, 1000×560 normal, 320×568 sansWebgl, +4)_
- **contraste insuffisant** — `/reserver` — div.cal-mois-liste:nth-of-type(2) > div.cal-mois > div.cal-grille > button.cal-jour.passe:nth-of-type(4) « 4 » — 1.88:1 (minimum 4.5:1) _(320×568 normal, 375×667 normal, 390×844 normal, 1024×768 normal, 1000×560 normal, 320×568 sansWebgl, +4)_
- **contraste insuffisant** — `/reserver` — div.cal-mois-liste:nth-of-type(2) > div.cal-mois > div.cal-grille > button.cal-jour.passe:nth-of-type(5) « 5 » — 1.88:1 (minimum 4.5:1) _(320×568 normal, 375×667 normal, 390×844 normal, 1024×768 normal, 1000×560 normal, 320×568 sansWebgl, +4)_
- **contraste insuffisant** — `/reserver` — div.cal-mois-liste:nth-of-type(2) > div.cal-mois > div.cal-grille > button.cal-jour.passe:nth-of-type(6) « 6 » — 1.88:1 (minimum 4.5:1) _(320×568 normal, 375×667 normal, 390×844 normal, 1024×768 normal, 1000×560 normal, 320×568 sansWebgl, +4)_
- **contraste insuffisant** — `/reserver` — div.cal-mois-liste:nth-of-type(2) > div.cal-mois > div.cal-grille > button.cal-jour.passe:nth-of-type(7) « 7 » — 1.88:1 (minimum 4.5:1) _(320×568 normal, 375×667 normal, 390×844 normal, 1024×768 normal, 1000×560 normal, 320×568 sansWebgl, +4)_
- **contraste insuffisant** — `/reserver` — div.cal-mois-liste:nth-of-type(2) > div.cal-mois > div.cal-grille > button.cal-jour.passe:nth-of-type(8) « 8 » — 1.88:1 (minimum 4.5:1) _(320×568 normal, 375×667 normal, 390×844 normal, 1024×768 normal, 1000×560 normal, 320×568 sansWebgl, +4)_
- **contraste insuffisant** — `/reserver` — div.cal-mois-liste:nth-of-type(2) > div.cal-mois > div.cal-grille > button.cal-jour.passe:nth-of-type(9) « 9 » — 1.88:1 (minimum 4.5:1) _(320×568 normal, 375×667 normal, 390×844 normal, 1024×768 normal, 1000×560 normal, 320×568 sansWebgl, +4)_
- **contraste insuffisant** — `/reserver` — div.cal-mois-liste:nth-of-type(2) > div.cal-mois > div.cal-grille > button.cal-jour.passe:nth-of-type(10) « 10 » — 1.88:1 (minimum 4.5:1) _(320×568 normal, 375×667 normal, 390×844 normal, 1024×768 normal, 1000×560 normal, 320×568 sansWebgl, +4)_
- **contraste insuffisant** — `/reserver` — div.cal-mois-liste:nth-of-type(2) > div.cal-mois > div.cal-grille > button.cal-jour.passe:nth-of-type(11) « 11 » — 1.88:1 (minimum 4.5:1) _(320×568 normal, 375×667 normal, 390×844 normal, 1024×768 normal, 1000×560 normal, 320×568 sansWebgl, +4)_
- **contraste insuffisant** — `/reserver` — div.cal-mois-liste:nth-of-type(2) > div.cal-mois > div.cal-grille > button.cal-jour.passe:nth-of-type(12) « 12 » — 1.88:1 (minimum 4.5:1) _(320×568 normal, 375×667 normal, 390×844 normal, 1024×768 normal, 1000×560 normal, 320×568 sansWebgl, +4)_
- **contraste insuffisant** — `/reserver` — div.cal-mois-liste:nth-of-type(2) > div.cal-mois > div.cal-grille > button.cal-jour.passe:nth-of-type(13) « 13 » — 1.88:1 (minimum 4.5:1) _(320×568 normal, 375×667 normal, 390×844 normal, 1024×768 normal, 1000×560 normal, 320×568 sansWebgl, +4)_
- **contraste insuffisant** — `/reserver` — div.cal-mois-liste:nth-of-type(2) > div.cal-mois > div.cal-grille > button.cal-jour.passe:nth-of-type(14) « 14 » — 1.88:1 (minimum 4.5:1) _(320×568 normal, 375×667 normal, 390×844 normal, 1024×768 normal, 1000×560 normal, 320×568 sansWebgl, +4)_
- **contraste insuffisant** — `/reserver` — div.cal-mois-liste:nth-of-type(2) > div.cal-mois > div.cal-grille > button.cal-jour.passe:nth-of-type(15) « 15 » — 1.88:1 (minimum 4.5:1) _(320×568 normal, 375×667 normal, 390×844 normal, 1024×768 normal, 1000×560 normal, 320×568 sansWebgl, +4)_
- **contraste insuffisant** — `/reserver` — div.cal-mois-liste:nth-of-type(2) > div.cal-mois > div.cal-grille > button.cal-jour.passe:nth-of-type(16) « 16 » — 1.88:1 (minimum 4.5:1) _(320×568 normal, 375×667 normal, 390×844 normal, 1024×768 normal, 1000×560 normal, 320×568 sansWebgl, +4)_
- **contraste insuffisant** — `/reserver` — div.cal-mois-liste:nth-of-type(2) > div.cal-mois > div.cal-grille > button.cal-jour.passe:nth-of-type(17) « 17 » — 1.88:1 (minimum 4.5:1) _(320×568 normal, 375×667 normal, 390×844 normal, 1024×768 normal, 1000×560 normal, 320×568 sansWebgl, +4)_
- **contraste insuffisant** — `/reserver` — div.cal-mois-liste:nth-of-type(2) > div.cal-mois > div.cal-grille > button.cal-jour.passe:nth-of-type(18) « 18 » — 1.88:1 (minimum 4.5:1) _(320×568 normal, 375×667 normal, 390×844 normal, 1024×768 normal, 1000×560 normal, 320×568 sansWebgl, +4)_
- **contraste insuffisant** — `/reserver` — div.cal-mois-liste:nth-of-type(2) > div.cal-mois > div.cal-grille > button.cal-jour.passe:nth-of-type(19) « 19 » — 1.88:1 (minimum 4.5:1) _(320×568 normal, 375×667 normal, 390×844 normal, 1024×768 normal, 1000×560 normal, 320×568 sansWebgl, +4)_
- **contraste insuffisant** — `/reserver` — div.cal-mois-liste:nth-of-type(2) > div.cal-mois > div.cal-grille > button.cal-jour.passe:nth-of-type(20) « 20 » — 1.88:1 (minimum 4.5:1) _(320×568 normal, 375×667 normal, 390×844 normal, 1024×768 normal, 1000×560 normal, 320×568 sansWebgl, +4)_
- **contraste insuffisant** — `/reserver` — div.cal-mois-liste:nth-of-type(2) > div.cal-mois > div.cal-grille > button.cal-jour.passe:nth-of-type(21) « 21 » — 1.88:1 (minimum 4.5:1) _(320×568 normal, 375×667 normal, 390×844 normal, 1024×768 normal, 1000×560 normal, 320×568 sansWebgl, +4)_
- **contraste insuffisant** — `/reserver` — div.cal-mois-liste:nth-of-type(2) > div.cal-mois > div.cal-grille > button.cal-jour.passe:nth-of-type(22) « 22 » — 1.88:1 (minimum 4.5:1) _(320×568 normal, 375×667 normal, 390×844 normal, 1024×768 normal, 1000×560 normal, 320×568 sansWebgl, +4)_
- **contraste insuffisant** — `/reserver` — div.cal-mois-liste:nth-of-type(2) > div.cal-mois:nth-of-type(1) > div.cal-grille > button.cal-jour.passe:nth-of-type(1) « 1 » — 1.88:1 (minimum 4.5:1) _(844×390 normal, 768×1024 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, +10)_
- **contraste insuffisant** — `/reserver` — div.cal-mois-liste:nth-of-type(2) > div.cal-mois:nth-of-type(1) > div.cal-grille > button.cal-jour.passe:nth-of-type(2) « 2 » — 1.88:1 (minimum 4.5:1) _(844×390 normal, 768×1024 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, +10)_
- **contraste insuffisant** — `/reserver` — div.cal-mois-liste:nth-of-type(2) > div.cal-mois:nth-of-type(1) > div.cal-grille > button.cal-jour.passe:nth-of-type(3) « 3 » — 1.88:1 (minimum 4.5:1) _(844×390 normal, 768×1024 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, +10)_
- **contraste insuffisant** — `/reserver` — div.cal-mois-liste:nth-of-type(2) > div.cal-mois:nth-of-type(1) > div.cal-grille > button.cal-jour.passe:nth-of-type(4) « 4 » — 1.88:1 (minimum 4.5:1) _(844×390 normal, 768×1024 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, +10)_
- **contraste insuffisant** — `/reserver` — div.cal-mois-liste:nth-of-type(2) > div.cal-mois:nth-of-type(1) > div.cal-grille > button.cal-jour.passe:nth-of-type(5) « 5 » — 1.88:1 (minimum 4.5:1) _(844×390 normal, 768×1024 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, +10)_
- **contraste insuffisant** — `/reserver` — div.cal-mois-liste:nth-of-type(2) > div.cal-mois:nth-of-type(1) > div.cal-grille > button.cal-jour.passe:nth-of-type(6) « 6 » — 1.88:1 (minimum 4.5:1) _(844×390 normal, 768×1024 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, +10)_
- **contraste insuffisant** — `/reserver` — div.cal-mois-liste:nth-of-type(2) > div.cal-mois:nth-of-type(1) > div.cal-grille > button.cal-jour.passe:nth-of-type(7) « 7 » — 1.88:1 (minimum 4.5:1) _(844×390 normal, 768×1024 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, +10)_
- **contraste insuffisant** — `/reserver` — div.cal-mois-liste:nth-of-type(2) > div.cal-mois:nth-of-type(1) > div.cal-grille > button.cal-jour.passe:nth-of-type(8) « 8 » — 1.88:1 (minimum 4.5:1) _(844×390 normal, 768×1024 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, +10)_
- **contraste insuffisant** — `/reserver` — div.cal-mois-liste:nth-of-type(2) > div.cal-mois:nth-of-type(1) > div.cal-grille > button.cal-jour.passe:nth-of-type(9) « 9 » — 1.88:1 (minimum 4.5:1) _(844×390 normal, 768×1024 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, +10)_
- **contraste insuffisant** — `/reserver` — div.cal-mois-liste:nth-of-type(2) > div.cal-mois:nth-of-type(1) > div.cal-grille > button.cal-jour.passe:nth-of-type(10) « 10 » — 1.88:1 (minimum 4.5:1) _(844×390 normal, 768×1024 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, +10)_
- **contraste insuffisant** — `/reserver` — div.cal-mois-liste:nth-of-type(2) > div.cal-mois:nth-of-type(1) > div.cal-grille > button.cal-jour.passe:nth-of-type(11) « 11 » — 1.88:1 (minimum 4.5:1) _(844×390 normal, 768×1024 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, +10)_
- **contraste insuffisant** — `/reserver` — div.cal-mois-liste:nth-of-type(2) > div.cal-mois:nth-of-type(1) > div.cal-grille > button.cal-jour.passe:nth-of-type(12) « 12 » — 1.88:1 (minimum 4.5:1) _(844×390 normal, 768×1024 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, +10)_
- **contraste insuffisant** — `/reserver` — div.cal-mois-liste:nth-of-type(2) > div.cal-mois:nth-of-type(1) > div.cal-grille > button.cal-jour.passe:nth-of-type(13) « 13 » — 1.88:1 (minimum 4.5:1) _(844×390 normal, 768×1024 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, +10)_
- **contraste insuffisant** — `/reserver` — div.cal-mois-liste:nth-of-type(2) > div.cal-mois:nth-of-type(1) > div.cal-grille > button.cal-jour.passe:nth-of-type(14) « 14 » — 1.88:1 (minimum 4.5:1) _(844×390 normal, 768×1024 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, +10)_
- **contraste insuffisant** — `/reserver` — div.cal-mois-liste:nth-of-type(2) > div.cal-mois:nth-of-type(1) > div.cal-grille > button.cal-jour.passe:nth-of-type(15) « 15 » — 1.88:1 (minimum 4.5:1) _(844×390 normal, 768×1024 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, +10)_
- **contraste insuffisant** — `/reserver` — div.cal-mois-liste:nth-of-type(2) > div.cal-mois:nth-of-type(1) > div.cal-grille > button.cal-jour.passe:nth-of-type(16) « 16 » — 1.88:1 (minimum 4.5:1) _(844×390 normal, 768×1024 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, +10)_
- **contraste insuffisant** — `/reserver` — div.cal-mois-liste:nth-of-type(2) > div.cal-mois:nth-of-type(1) > div.cal-grille > button.cal-jour.passe:nth-of-type(17) « 17 » — 1.88:1 (minimum 4.5:1) _(844×390 normal, 768×1024 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, +10)_
- **contraste insuffisant** — `/reserver` — div.cal-mois-liste:nth-of-type(2) > div.cal-mois:nth-of-type(1) > div.cal-grille > button.cal-jour.passe:nth-of-type(18) « 18 » — 1.88:1 (minimum 4.5:1) _(844×390 normal, 768×1024 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, +10)_
- … et 4 autres (rapport.json)

### débordement horizontal (1)

- **débordement horizontal** — `/` — page large de 893 px — largeurs : 880 px _(balayage 320–1920 normal)_

### effet du plan absent (1)

- **effet du plan absent** — « plein-cadre » : aucun élément data-effet="plein-cadre"

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

### grille : objet d’ouverture hors du premier écran (1)

- **grille : objet d’ouverture hors du premier écran** — `/reserver` — 358 × 0 px visibles : l’intro et le voile s’ouvrent depuis le centre de l’écran à cette taille _(390×844)_

### section sans visuel (1)

- **section sans visuel** — `/chambres` — section#les-quatre « Choisissez votre cru Toutes les chambres ont leur  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_

### retour arrière : changement brusque (1)

- **retour arrière : changement brusque** — `/` — à 80 ms (différence 24 %) (films/retour-arrière-1366.png) _(1366×768 retour arrière)_

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
- Ouverture / (1366×768) : 2878 ms depuis le premier octet
- Ouverture /acces (1366×768) : 2588 ms depuis le premier octet
- Ouverture /chambres (1366×768) : 2705 ms depuis le premier octet
- Ouverture /environs (1366×768) : 2669 ms depuis le premier octet
- Ouverture /la-maison (1366×768) : 2614 ms depuis le premier octet
- film de l'ouverture /la-maison 1366×768 : réussi à la tentative 3 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /reserver (1366×768) : 2470 ms depuis le premier octet
- Ouverture / (390×844) : 2894 ms depuis le premier octet
- Ouverture /acces (390×844) : 2580 ms depuis le premier octet
- Ouverture /chambres (390×844) : 2641 ms depuis le premier octet
- Ouverture /environs (390×844) : 2619 ms depuis le premier octet
- Ouverture /la-maison (390×844) : 2624 ms depuis le premier octet
- Ouverture /reserver (390×844) : 2533 ms depuis le premier octet
- bords de l’écran /acces 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 583 images d’intro, 18 de voile et 151 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Changements de hauteur /acces : aucun effet ScrollTrigger, rien à recalculer.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /acces : aucune section épinglée ou plein écran.
- Tient dans l'écran /environs : aucune section épinglée ou plein écran.
- Tient dans l'écran /la-maison : aucune section épinglée ou plein écran.
- Tient dans l'écran /reserver : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 1 % d'images lentes sur 420, tâche la plus longue 53 ms
- Fluidité /acces 1366×768 (molette) : 0 % d'images lentes sur 185, tâche la plus longue 0 ms
- Fluidité /chambres 1366×768 (molette) : 0 % d'images lentes sur 483, tâche la plus longue 0 ms
- Fluidité /environs 1366×768 (molette) : 0 % d'images lentes sur 357, tâche la plus longue 0 ms
- Fluidité /la-maison 1366×768 (molette) : 0 % d'images lentes sur 344, tâche la plus longue 0 ms
- Fluidité /reserver 1366×768 (molette) : 0 % d'images lentes sur 185, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1432, tâche la plus longue 0 ms
- Fluidité /acces 390×844 (doigt) : 0 % d'images lentes sur 1343, tâche la plus longue 0 ms
- Fluidité /chambres 390×844 (doigt) : 0 % d'images lentes sur 1344, tâche la plus longue 0 ms
- Fluidité /environs 390×844 (doigt) : 0 % d'images lentes sur 1411, tâche la plus longue 0 ms
- Fluidité /la-maison 390×844 (doigt) : 0 % d'images lentes sur 1340, tâche la plus longue 0 ms
- Fluidité /reserver 390×844 (doigt) : 0 % d'images lentes sur 1344, tâche la plus longue 0 ms
- Vitesse / : 0.43 s de calcul au chargement (téléphone ralenti).
- Vitesse /acces : 0.27 s de calcul au chargement (téléphone ralenti).
- Vitesse /chambres : 0.42 s de calcul au chargement (téléphone ralenti).
- Vitesse /environs : 0.48 s de calcul au chargement (téléphone ralenti).
- Vitesse /la-maison : 0.44 s de calcul au chargement (téléphone ralenti).
- Vitesse /reserver : 0.32 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --seulement=fichiers,mesures,mouvement
```
