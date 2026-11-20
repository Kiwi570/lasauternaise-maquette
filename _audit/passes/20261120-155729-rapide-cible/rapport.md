# Rapport d’audit

Projet : `lasauternaise-maquette` · 20/11/2026 17:09:45 · 12 min · 4 page(s) · audit RAPIDE : ne vaut pas pour une livraison ciblé sur /,/environs,/reserver,/acces

## Résumé

- Statut : **28 échec(s)**
- Passe : `20261120-155729-rapide-cible` · version ?v=1
- Échecs : **28**
- À regarder : **22**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (2), mesures (24), films d’ouverture (8), films de transition (8), bords de l’écran (4), intro accélérable et passable (7), menu (1), clavier (4), liens et boutons (4), liens profonds (2), liens vers la page en cours (4), changements de hauteur (2), fluidité (8), défilement selon l’appareil (5), mouvement (8), effets du plan (11), souris immobile (3), vitesse (4), captures (1)

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

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261120-154927-rapide-cible | rapide | /chambres,/la-maison | toutes | 31 | 20 | 1 | échecs |
| **20261120-155729-rapide-cible** (celle-ci) | rapide | /,/environs,/reserver,/acces | toutes | 28 | 22 | 1 | échecs |

## Échecs

### image de partage (6)

- **image de partage** — `acces.html` — fichier introuvable : /assets/partage/acces-fr.jpg
- **image de partage** — `chambres.html` — fichier introuvable : /assets/partage/chambres-fr.jpg
- **image de partage** — `environs.html` — fichier introuvable : /assets/partage/environs-fr.jpg
- **image de partage** — `index.html` — fichier introuvable : /assets/partage/accueil-fr.jpg
- **image de partage** — `la-maison.html` — fichier introuvable : /assets/partage/la-maison-fr.jpg
- **image de partage** — `reserver.html` — fichier introuvable : /assets/partage/reserver-fr.jpg

### textes qui se chevauchent (10)

- **textes qui se chevauchent** — `/` — div.conteneur:nth-of-type(1) > div.pied-tete:nth-of-type(1) > div > p.surtitre « AUTOUR DE LA MAISON » — avec h2#pied-titre > span.l:nth-of-type(1) « Yquem à 2 km, » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — div.regle:nth-of-type(2) > div.regle-axe > div.regle-point.bas:nth-of-type(3) > p.regle-etiquette « Château Guiraud 800 m sur rendez-vous » — avec div.regle-axe > div.regle-point.haut:nth-of-type(4) > p.regle-etiquette > strong « Château Filhot » _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — div.regle:nth-of-type(2) > div.regle-axe > div.regle-point.bas:nth-of-type(3) > p.regle-etiquette « Château Guiraud 800 m sur rendez-vous » — avec div.regle:nth-of-type(2) > div.regle-axe > div.regle-point.haut:nth-of-type(4) > p.regle-etiquette « Château Filhot 900 m » _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — div.regle-axe > div.regle-point.bas:nth-of-type(3) > p.regle-etiquette > em « sur rendez-vous » — avec div.regle-axe > div.regle-point.haut:nth-of-type(4) > p.regle-etiquette > strong « Château Filhot » _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — div.regle-axe > div.regle-point.bas:nth-of-type(3) > p.regle-etiquette > em « sur rendez-vous » — avec div.regle:nth-of-type(2) > div.regle-axe > div.regle-point.haut:nth-of-type(4) > p.regle-etiquette « Château Filhot 900 m » _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — div.regle-axe > div.regle-point.bas:nth-of-type(5) > p.regle-etiquette > strong « Rayne Vigneau » — avec div.regle-axe > div.regle-point.haut:nth-of-type(6) > p.regle-etiquette > strong « Clos Haut-Peyraguey » _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — div.regle-axe > div.regle-point.bas:nth-of-type(5) > p.regle-etiquette > strong « Rayne Vigneau » — avec div.regle:nth-of-type(2) > div.regle-axe > div.regle-point.haut:nth-of-type(6) > p.regle-etiquette « Clos Haut-Peyraguey 1,5 km sur rendez-vous » _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — div.regle:nth-of-type(2) > div.regle-axe > div.regle-point.bas:nth-of-type(5) > p.regle-etiquette « Rayne Vigneau 1,4 km » — avec div.regle-axe > div.regle-point.haut:nth-of-type(6) > p.regle-etiquette > strong « Clos Haut-Peyraguey » _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — div.regle:nth-of-type(2) > div.regle-axe > div.regle-point.bas:nth-of-type(5) > p.regle-etiquette « Rayne Vigneau 1,4 km » — avec div.regle:nth-of-type(2) > div.regle-axe > div.regle-point.haut:nth-of-type(6) > p.regle-etiquette « Clos Haut-Peyraguey 1,5 km sur rendez-vous » _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **textes qui se chevauchent** — `/acces` — div.itineraire:nth-of-type(2) > svg > g.arrivee:nth-of-type(8) > text — avec section#debut > div.conteneur.ouv-carte-grille > div.itineraire:nth-of-type(2) > p.itineraire-legende « Schéma, pas à l’échelle » _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_

### premier écran : information clé hors de l’écran (2)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.hero-texte > p.info-cle:nth-of-type(4) « Arrivée autonome dès 16 h · petit-déjeuner compris » _(320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/environs` — section#debut > div.conteneur:nth-of-type(2) > div:nth-of-type(2) > p.info-cle:nth-of-type(4) « Bordeaux à 30 min · Saint-Émilion à 50 km » _(844×390 normal, 320×568 sansJs)_

### zone tactile sous 44 px (2)

- **zone tactile sous 44 px** — `/acces` — dl.coordonnees.fx-fini > div:nth-of-type(2) > dd > a « +33 6 78 00 64 18 » — 141 × 23 px _(390×844 normal, 844×390 normal, 390×844 sansWebgl)_
- **zone tactile sous 44 px** — `/acces` — dl.coordonnees > div:nth-of-type(2) > dd > a « +33 6 78 00 64 18 » — 141 × 23 px _(390×844 sansJs, 320×568 sansJs)_

### premier écran : bouton principal hors de l’écran (1)

- **premier écran : bouton principal hors de l’écran** — `/environs` — div.conteneur:nth-of-type(2) > div:nth-of-type(2) > p.actions:nth-of-type(3) > a.bouton « Voir les visites » _(844×390 normal)_

### contraste sur image (4)

- **contraste sur image** — `/environs` — section#debut > div.conteneur:nth-of-type(2) > div:nth-of-type(2) > p.surtitre:nth-of-type(1) « LES ENVIRONS » — 2.79:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_
- **contraste sur image** — `/environs` — h1.ouv-titre > span.ligne-masque:nth-of-type(2) > span.hero-ligne > em « à 100 km » — 2.73:1 sur les 10 % de la photo les moins favorables (minimum 3:1) _(1366×768 normal)_
- **contraste sur image** — `/environs` — section#debut > div.conteneur:nth-of-type(2) > div:nth-of-type(1) > p.chiffre-geant « 2 km jusqu’au Château d’Yquem, à pied » — 1.57:1 sur les 10 % de la photo les moins favorables (minimum 3:1) _(390×844 normal)_
- **contraste sur image** — `/environs` — div.conteneur:nth-of-type(2) > div:nth-of-type(1) > p.chiffre-geant > span.chiffre-legende « jusqu’au Château d’Yquem, à pied » — 3.15:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_

### stabilité au chargement (CLS) (2)

- **stabilité au chargement (CLS)** — `/` — div.intro-tirage ; div.intro-tirage ; div.intro-tirage — 0.099 (0 visé, 0,05 au plus) _(1366×768 premier chargement)_
- **stabilité au chargement (CLS)** — `/` — div.intro-tirage ; div.intro-tirage ; div.intro-tirage — 0.094 (0 visé, 0,05 au plus) _(390×844 premier chargement)_

### clavier (1)

- **clavier** — `/` — a « Découvrir les chambres » — le focus arrive sur un élément caché _(1366×768)_

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

### texte de contenu sous 13 px (ordinateur) (10)

- **texte de contenu sous 13 px (ordinateur)** — `/` — div.regle-axe > div.regle-point.bas:nth-of-type(3) > p.regle-etiquette > em « sur rendez-vous » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.regle-axe > div.regle-point.haut:nth-of-type(6) > p.regle-etiquette > em « sur rendez-vous » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.regle-axe > div.regle-point.bas:nth-of-type(7) > p.regle-etiquette > em « sur rendez-vous » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/acces` — section#debut > div.conteneur.ouv-carte-grille > div.itineraire:nth-of-type(2) > p.itineraire-legende « Schéma, pas à l’échelle » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/environs` — li#velos > div.visite-corps > span.visite-distance « MOINS DE 100 M » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/environs` — li#eglise > div.visite-corps > span.visite-distance « MOINS DE 100 M » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/environs` — li#guiraud > div.visite-corps > span.visite-rdv:nth-of-type(2) « Sur rendez-vous » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/environs` — li#clos-haut-peyraguey > div.visite-corps > span.visite-rdv:nth-of-type(2) « Sur rendez-vous » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/environs` — li#yquem > div.visite-corps:nth-of-type(2) > span.visite-rdv:nth-of-type(2) « Sur rendez-vous » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/environs` — li#hamel > div.visite-corps:nth-of-type(2) > span.visite-rdv:nth-of-type(2) « Sur rendez-vous » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_

### section sans visuel (2)

- **section sans visuel** — `/environs` — section#fin « Une base au cœur du vignoble Demander mes dates Ve » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/reserver` — section#conditions « Bon à savoir Arrivée autonome à partir de 16 h : n » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, 320×568 sansJs, 390×844 sansWebgl)_

### typographie française (1)

- **typographie française** — `/reserver` — aside.recap > div.recap-carte > div.recap-corps > p.recap-remise:nth-of-type(2) « Dès 4 nuits : -5 % avec le code 4N » — espace insécable manquante avant ou après « : » _(1366×768 normal)_

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/` — écran différent à la même position après rechargement (4.3 %), voir comparaisons/rechargement-*.png _(1366×768)_

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
- Audit rapide : étapes lourdes sur /, /acces, /environs, /reserver.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.
- Ouverture / (1366×768) : 2890 ms depuis le premier octet
- Ouverture /acces (1366×768) : 2661 ms depuis le premier octet
- film de l'ouverture /acces 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /environs (1366×768) : 2712 ms depuis le premier octet
- Ouverture /reserver (1366×768) : 2516 ms depuis le premier octet
- Ouverture / (390×844) : 2899 ms depuis le premier octet
- Ouverture /acces (390×844) : 2584 ms depuis le premier octet
- Ouverture /environs (390×844) : 2689 ms depuis le premier octet
- Ouverture /reserver (390×844) : 2484 ms depuis le premier octet
- bords de l’écran / 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 356 images d’intro, 13 de voile et 89 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Changements de hauteur /acces : aucun effet ScrollTrigger, rien à recalculer.
- Changements de hauteur /reserver : aucun effet ScrollTrigger, rien à recalculer.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /acces : aucune section épinglée ou plein écran.
- Tient dans l'écran /environs : aucune section épinglée ou plein écran.
- Tient dans l'écran /reserver : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 437, tâche la plus longue 0 ms
- Fluidité /acces 1366×768 (molette) : 0 % d'images lentes sur 176, tâche la plus longue 0 ms
- Fluidité /environs 1366×768 (molette) : 0 % d'images lentes sur 283, tâche la plus longue 0 ms
- Fluidité /reserver 1366×768 (molette) : 0 % d'images lentes sur 181, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1407, tâche la plus longue 0 ms
- Fluidité /acces 390×844 (doigt) : 0 % d'images lentes sur 1340, tâche la plus longue 0 ms
- Fluidité /environs 390×844 (doigt) : 0 % d'images lentes sur 1410, tâche la plus longue 0 ms
- Fluidité /reserver 390×844 (doigt) : 0 % d'images lentes sur 1344, tâche la plus longue 0 ms
- Vitesse / : 0.47 s de calcul au chargement (téléphone ralenti).
- Vitesse /acces : 0.30 s de calcul au chargement (téléphone ralenti).
- Vitesse /environs : 0.35 s de calcul au chargement (téléphone ralenti).
- Vitesse /reserver : 0.41 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --rapide --seulement=fichiers,mesures,films,parcours
```
