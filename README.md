# ROADMAP
- CHECK 1 Créer une app react > npx create-react-app my-app > cd my-app
- CHECK 2 S'assurer que l'app fonctionne > npm start > localhost:3000
- CHECK 3 Envoyer l'app sur github via GIT
- CHECK 4 Finaliser la 1ère leçon

# DONNEES QUE L'ON DOIT TRAQUER
## Mots trouvés
- 5 lettres, comme 'drain'

## Mots essayés
- un array de chaque mots essayés
- chaque mot essayé est un array de lettres objets [{d},{r},{a},{i},{n}]
- chaque objet représente une lettre du mot à trouver {key: 'a', color: 'yellow'}

## Mot essayé actuellement
- string 'radio'

## Lettre du clavier
- array des lettres objets [{key: 'r', color: 'yellow'},{key: 'a', color: 'yellow'},{key: 'd', color: 'grey'},{key: 'i', color: 'green'},{key: 'o', color: 'grey'}]

## Nombre de tours
- un int 0 - 6


# PROCESSUS DU JEU
## Entrer un mot
l'utilisateur entre une lettre et un carré affiche cette lettre
quand un utilisateur appuie sur "delete", cela supprime la dernière lettre entrée
quand un utilisateur appuie sur "enter", cela envoi le mot entré
-- si tout les carrés n'ont pas reçu de lettres attribuées, le mot n'est pas envoyé
-- si le mot a déjà été utilisé lors d'un précédent tour, alors le mot n'est pas envoyé

## Vérifier le mot proposé
chaque lettre est vérifiée pour voir si cela match avec la solution
chaque lettre est assignée à une couleur basée sur son inclusion dans la solution
-- une position correct dans la solution = vert
-- dans la solution mais n'a pas de correcte position = jaune
-- pas dans la solution = gris
les lettres trouvées sont ajoutés à la grille avec les couleurs assignées
le prochain tour à deviner bouge à la prochaine ligne de la grille
les lettres du claviers sont mises à jour (couleurs)

## Fin du jeu
Quand le mot deviné correspond entièrement à la solution
-- 'well done'
Quand l'utilisateur n'a pas assez de tours
-- 'unlucky'

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
