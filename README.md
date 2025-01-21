# Application de Gadget Hub

Bienvenue sur l'**Application de Gadget Hub**, une application web construite avec **React** et **Next.js**. Cette application récupère les données des produits via une API simulée et les affiche sous forme de cartes dynamiques, en utilisant **Material UI (MUI)** et **ShadCn** pour les composants. L'application illustre des fonctionnalités puissantes de **Next.js**, telles que le
**rendu côté serveur (SSR)**, la **génération de pages statiques (SSG)**, et l'usage des **API Routes**.

 <img width="1464" alt="Screenshot 2025-01-21 at 2 56 58 AM" src="https://github.com/user-attachments/assets/dae26a71-bbbf-4121-8bb2-8c72b222db0c" />
<img width="1468" alt="Screenshot 2025-01-21 at 2 56 49 AM" src="https://github.com/user-attachments/assets/fb240410-969b-40ae-a197-6122558b32a7" />
<img width="1466" alt="Screenshot 2025-01-21 at 2 56 36 AM" src="https://github.com/user-attachments/assets/aeb9fde4-632f-4766-b016-12d2a89c4a22" />




## Fonctionnalités

- **Récupération des données** : L'application récupère les données des produits depuis une API simulée.
- **Affichage dynamique** : Les produits sont affichés dans des cartes, chacune contenant une image, le nom, la description et le prix.
- **Navigation dynamique** : Les cartes permettent de naviguer vers une vue détaillée de chaque produit.
  
## Installation

### Prérequis

Assurez-vous que **Node.js** et un gestionnaire de paquets comme **npm**, **yarn**, **pnpm**, ou **bun** sont installés.

### Étapes d'installation

1. **Cloner le dépôt**

   ```bash
   git clone https://github.com/AliCodes22/projet-xpertsource.git
   cd projet-xpertsource

2. **Installer les dépendances**

Utilisez la commande suivante en fonction de votre gestionnaire de paquets préféré :

npm install
ou
yarn install
ou
pnpm install
ou
bun install

3. **Démarrer l'application**

Après avoir installé les dépendances, lancez le serveur de développement :

npm run dev
ou
yarn dev
ou
pnpm dev
ou
bun dev

Ouvrez votre navigateur et accédez à http://localhost:3000 pour voir l'application en action.

# Routes

- **`/produits`** : La page d'accueil qui affiche tous les produits récupérés depuis l'API. Chaque produit est affiché sous forme de carte, avec son nom, description, prix et image.
- **`/produits/[id]`** : La page de détail d'un produit spécifique, accessible en cliquant sur une carte. Cette page affiche plus d'informations sur le produit en fonction de son `id`.
- **`/categories`** : Une page vide pour le moment, mais elle peut être utilisée pour afficher des catégories de produits dans le futur.

## Explication des Composants

- HomePage.tsx : Ce composant est la page principale de l'application. Il récupère les données des produits depuis l'API simulée et affiche les 6 premiers produits (en excluant la "Webcam 1080p").

- MuiCard.tsx : Représente une carte produit, qui inclut une image, le nom, la description et le prix du produit.

- imageMap.ts : Ce fichier utilitaire associe le nom des produits à leurs images respectives pour un rendu dynamique.

- utils.ts : Contient des fonctions utilitaires, comme cn, pour gérer conditionnellement les classNames.

## Technologies Utilisées

- Next.js : Framework React pour la création d'applications web modernes, permettant un rendu côté serveur (SSR) et une génération de pages statiques (SSG).
- React : Bibliothèque JavaScript utilisée pour construire des interfaces utilisateurs dynamiques et réactives.
- Material UI et ShadCn : Frameworks de composants React permettant de créer des interfaces utilisateur élégantes et accessibles.
- TypeScript : Superset de JavaScript qui permet un typage statique et améliore la robustesse du code.
- Tailwind CSS : Framework CSS utilitaire pour un développement rapide et réactif de l'interface utilisateur.





