# EyanglessFrontEnd
Ce dépôt contient toute la partie interface de l'application EyangLess

## Initialisation du projet
Le projet est vide pour l'instant

## Technologies
Angular 18
Tailwind CSS

## Commandes pour installer toutes es dépendance nécessaires
npm install

Pour tailwind CSS 
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init


## A rajouter dans le fichier *tailwind.config.js*
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

## Et dans *styles.css* ou *styles.scss*
@tailwind base;
@tailwind components;
@tailwind utilities;



## Nommenclature pour les classes CSS
Ne pas mettre d'espace dans le nom d'une classes, plutôt les séparer par un underscore (_) pour les différencier des classes de tailwind CSS.
Ex : div_1

## descriprion du foncitonnement des modules
actuellemnt nous avons trois module administrateur , utilisateur et bailleur
chaque module est acompagne de son fichier de routing et du composant principale ( utilisateurcomponent , admincomponent , bailleurcomponent : se sont les fochoer ou seront definit les element reutilisable par les pages du composant (slidebar, navbar etc...))
par la suite bien vouloir cree les service pour chaque module dans un fichier service du module et creer des pages pour des actions dans chaque module par exemple
un bailleur cree une citer modifie suprime et consulte les details donc dans le module bailleur on aura un repertoire cite ou on aura les composant liste , details, et ajout (si jamais c'est une page)
la le projet est facilement comprehensible