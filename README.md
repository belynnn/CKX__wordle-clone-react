# ROADMAP perso
- ✔️ Créer une app react > npx create-react-app my-app > cd my-app
- ✔️ S'assurer que l'app fonctionne > npm start > localhost:3000
- ✔️ Envoyer l'app sur github via GIT
- ✔️ Finaliser la 1ère leçon - (branch master) - Introduction, roadmap, paramètrer l'app React, repo+remote git
- ✔️ Finaliser la 2è leçon - (branch master) - Utiliser JSON server (accéder à db.json qui contient toute nos solutions)
- ✔️ Finaliser la 3è leçon - (branch second-day) - Créer un hook Worlde (squelette)
- ✔️ Finaliser la 4è leçon - (branch second-day) - Traquer l'essai actuel (regex + Backspace)
- ✔️ Finaliser la 5è leçon - (branch second-day) - Gérer l'envoi des essais (Enter + conditions (5 lettres de long, doublons, 5 essais uniquement))
- ✔️ Finaliser la 6è leçon - (branch second-day) - Vérifier et formater les essais
- ✔️ Finaliser la 7è leçon (branch third-day) - Ajouter les nouveaux essais dans l'array d'objet (chaque lettres + sa couleur) + l'historique d'array string + compteur d'essais
- ✔️ Finaliser la 8è leçon (branch third-day) - Créer la grille du jeu en créant un composant "grid" pour la grille de 6 essais et un composant "row" pour chaque ligne contenant 5 lettres
- ✔️ Finaliser la 9è leçon (branch third-day) - Afficher les mots essayés dans la grille, appliquer la bonne couleur aux lettres
-  Finaliser la 10è leçon (branch third-day)
- Créer la branch first-day
- Retourner au dernier commit du first-day de la branch master
- Checkout sur la branch first-day pour y push la branch master
- Merge l'entièreté des branch à la branch master

## DONNEES QUE L'ON DOIT TRAQUER
### Mots trouvés
- 5 lettres, comme 'drain'

### Mots essayés
- un array de chaque mots essayés
- chaque mot essayé est un array de lettres objets [{d},{r},{a},{i},{n}]
- chaque objet représente une lettre du mot à trouver {key: 'a', color: 'yellow'}

### Mot essayé actuellement
- string 'radio'

### Lettre du clavier
- array des lettres objets [{key: 'r', color: 'yellow'},{key: 'a', color: 'yellow'},{key: 'd', color: 'grey'},{key: 'i', color: 'green'},{key: 'o', color: 'grey'}]

### Nombre de tours
- un int 0 - 6

## PROCESSUS DU JEU
### Entrer un mot
- l'utilisateur entre une lettre et un carré affiche cette lettre
- quand un utilisateur appuie sur "delete", cela supprime la dernière lettre entrée
- quand un utilisateur appuie sur "enter", cela envoi le mot entré
- -- si tout les carrés n'ont pas reçu de lettres attribuées, le mot n'est pas envoyé
- -- si le mot a déjà été utilisé lors d'un précédent tour, alors le mot n'est pas envoyé

### Vérifier le mot proposé
- chaque lettre est vérifiée pour voir si cela match avec la solution
- chaque lettre est assignée à une couleur basée sur son inclusion dans la solution
- -- une position correct dans la solution = vert
- -- dans la solution mais n'a pas de correcte position = jaune
- -- pas dans la solution = gris
- les lettres trouvées sont ajoutés à la grille avec les couleurs assignées
- le prochain tour à deviner bouge à la prochaine ligne de la grille
- les lettres du claviers sont mises à jour (couleurs)

### Fin du jeu
- Quand le mot deviné correspond entièrement à la solution
- -- 'well done'
- Quand l'utilisateur n'a pas assez de tours
- -- 'unlucky'

## Solution pour les données
- 1 - API
- 2 - acquérir une base de donnée
- 3 - fichier json