import asphaltImage from "../assets/images/asphalt_link.png";
import fermeImage from "../assets/images/ferme_link.png";
import pwaImage from "../assets/images/pwa_link.png";
import kasaImage from "../assets/images/kasa_link.png";
import blogImage from "../assets/images/blog_link.png";

const worklist = [
  {
    id: 1,
    title: "BLOG",
    description: "Blog pour une association",
    period: "Février 2024",
    image: blogImage,
    tags: ["Nuxt 3", "Strapi", "Tailwind", "Figma"],
    link: "blog",
    intro: "Blog pour une association, utilisant les technologies Nuxt.js et Strapi.",
    pitch:
      " Cette combinaison de Nuxt et Strapi a permis de créer un blog dynamique et facile à gérer pour l'association. J'ai utilisé Strapi comme système de gestion de contenu (CMS) pour permettre à l'administrateur  de gérer facilement les publications d'articles. Grâce à l'interface de Strapi, l'administrateur peut ajouter, modifier et supprimer des articles sans nécessiter de connaissances techniques approfondies.",
    url: "https://amities-talea.fr/",
  },
  {
    id: 2,
    title: "FERME DE LA ROUGERAIE",
    description: "Site E-commerce",
    period: "Mai 2023",
    image: fermeImage,
    tags: ["Vue", "Pinia", "Sass", "NodeJs", "Figma"],
    link: "ferme-rougeraie",
    intro: " Site e-commerce pour une productrice de produits bio .",
    pitch:
      "Le site a été développé à l'aide de Vue 3 pour la partie frontend, NodeJS pour la partie Backend et MongoDb pour la bade de données de produits. J'ai implémenté un panier pour que les utilisateurs puissent ajouter des produits et passer leur commande. En tant qu'administrateur, Léa, la productrice, peut se connecter au site et accéder à un résumé complet de toutes les commandes. La page d'administration lui permet également de créer les cartes produits et de gérer leur affichage sur le site.",
    url: "http://fermerougeraie.thomaslecam.com/",
    url2: "http://fermerougeraie.thomaslecam.com/admin",
  },
  {
    id: 3,
    title: "ASPHALT",
    description: "Site E-commerce",
    period: "Août 2023",
    image: asphaltImage,
    tags: ["React", "Sass", "Gsap", "Framer-Motion", "Figma"],
    link: "bikeshop",
    intro: " Site web pour une marque de vélo fictive",
    pitch:
      "Dans ma démarche d'amélioration en tant que développeur frontend, j'ai récemment entrepris un projet personnel. L'objectif initial était d'explorer deux bibliothèques d'animation : GSAP et Framer Motion. Mon principal but était de créer des animations fluides et des effets visuels pour un site web fictif de marque de vélo.",
    url: "https://bike-shop.thomaslecam.com/",
  },

  {
    id: 4,
    title: "GCA",
    description: "Stage Gca",
    period: "Mars 2023",
    image: pwaImage,
    tags: ["Vue", "Pinia", "Sass", "Figma"],
    link: "gca",
    intro:
      "Lors de mon stage dans l'entreprise GCA, j'ai développé une application mobile first conçue spécifiquement pour répondre aux besoins des équipes commerciales.",
    pitch:
      "Ce projet, développé avec Vue 3 et configuré avec Vite, a été créé dans le but de tenir les commerciaux informés de leurs chiffres de vente et de leurs objectifs en temps réel. En adoptant une approche PWA (Progressive Web App), l'application peut  être installée directement sur l'écran d'accueil des utilisateurs, offrant ainsi une expérience similaire à celle d'une application native.",
    url: "http://gstatpwa.thomaslecam.com/login/b_duveau",
    url2: "http://gstatpwa.thomaslecam.com/login/d_bauchu",
  },
  {
    id: 5,
    title: "KASA",
    description: "Formation OpenClassrooms",
    period: "Décembre 2022",
    image: kasaImage,
    tags: ["React", "Sass"],
    link: "kasa",
    intro:
      "Dans le cadre d'un des projets Openclassrooms, il était demandé d'intégrer la maquette figma d'une plateforme de location de logements entre particuliers avec la technologie React.js et l'utilisation de react-router.",
    pitch: "J'ai implémenté la partie front-end à l'aide de React. Le site est responsive et les composants sont modulaires et réutilisables.",
    url: "https://kasa.thomaslecam.com/",
  },
];

export default worklist;
