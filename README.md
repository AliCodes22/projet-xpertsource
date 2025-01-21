## Pour demarrer l'application

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Application de Présentation de Produits
Il s'agit d'une application basée sur React/Next.js qui récupère les données des produits depuis une API et les affiche à l'aide de cartes Material UI. L'application présente une sélection de produits en excluant un élément spécifique ("Webcam 1080p") et affiche des détails tels que le nom du produit, la description, le prix et l'image.

Fonctionnalités
Récupère les données des produits depuis une API simulée.
Exclut l'élément "Webcam 1080p".
Affiche les détails des produits dans des cartes Material UI.
Chaque carte produit montre une image, le nom, la description et le prix.
La carte permet aux utilisateurs de naviguer vers une vue détaillée pour chaque produit.
Installation
Suivez ces étapes pour configurer le projet en local :

1. Cloner le dépôt
bash
Copy
Edit
git clone https://github.com/tonusername/product-showcase.git
cd product-showcase
2. Installer les dépendances
Assurez-vous que Node.js et npm ou yarn sont installés. Exécutez la commande suivante pour installer les dépendances nécessaires :

bash
Copy
Edit
npm install
# ou si vous utilisez yarn
yarn install
3. Lancer l'application
Une fois les dépendances installées, démarrez le serveur de développement :

bash
Copy
Edit
npm run dev
# ou si vous utilisez yarn
yarn dev
Ouvrez votre navigateur et allez à http://localhost:3000 pour voir l'application en action.

Structure du Projet
Voici un aperçu rapide de la structure du projet :

bash
Copy
Edit
/src
  /app
    /components
      MuiCard.tsx           # Composant de carte de produit
    /utils
      imageMap.ts           # Utilitaire de mappage des images
    HomePage.tsx            # Page principale affichant les cartes de produits
  /assets
    /icons
      Logo.tsx              # Composants de logo personnalisés
  /lib
    /utils.ts               # Fonctions utilitaires comme la fusion des classNames
/pages
  index.tsx                # Point d'entrée de l'application (Page principale)
  /produits
    [id].tsx                # Page de détail du produit
Explication du Code
HomePage.tsx : C'est le composant principal où nous récupérons les données des produits depuis une API simulée et affichons les 6 premiers articles (en excluant la "Webcam 1080p").

MuiCard.tsx : Ce composant représente l'interface d'une seule carte produit, qui inclut une image, le nom, la description et le prix.

imageMap.ts : Ce fichier utilitaire associe les noms des produits à leurs images respectives pour l'affichage.

utils.ts : Un fichier utilitaire contenant des fonctions d'aide comme cn (pour la gestion conditionnelle des classNames).

Technologies Utilisées
Next.js - Framework React pour créer des applications web statiques et dynamiques.
React - Bibliothèque JavaScript pour la création d'interfaces utilisateurs.
Material UI - Framework React populaire utilisé pour styliser les composants.
TypeScript - Superset de JavaScript qui ajoute du typage statique, améliorant la qualité du code et la productivité des développeurs.
Tailwind CSS - Framework CSS utilitaire pour un développement rapide de l'interface utilisateur.
Contribuer
N'hésitez pas à forker ce projet, soumettre des problèmes, et envoyer des pull requests. Pour contribuer :

Forkez le dépôt.
Créez une nouvelle branche pour votre fonctionnalité ou correction de bug.
Apportez vos modifications.
Testez vos modifications.
Soumettez une pull request.
Licence
Ce projet est sous la licence MIT - consultez le fichier LICENSE pour plus de détails.

