import fermeImage from "../assets/images/ferme_link.png";
import pwaImage from "../assets/images/pwa_link.png";
import kasaImage from "../assets/images/kasa_link.png";
import blogImage from "../assets/images/blog_link.png";
import teamwise from "../assets/images/teamwise/teamwise.jpg";

const worklist = [
  {
    id: 1,
    title: "FERME DE LA ROUGERAIE",
    description: "Site E-commerce",
    period: "Mars - Juin 2025",
    image: fermeImage,
    tags: ["Vue 3", "Pinia", "PHP", "Symfony", "Easyadmin", "MySQL", "Tailwind", "Figma"],
    link: "ferme-rougeraie",
    intro: "Site e-commerce pour une productrice de produits bio.",
    pitch: `Ce site de vente en ligne a été développé pour Léa, une productrice de produits bios.
            Les utilisateurs peuvent parcourir les produits, les ajouter à leur panier et passer commande.
            Le frontend est construit avec Vue 3, tandis que le backend repose sur PHP / Symfony et utilise EasyAdmin pour la gestion du back-office.
            Le site s’appuie sur une base de données MySQL pour stocker les produits, les commandes et les utilisateurs.
            Depuis son espace d’administration sécurisé, Léa peut consulter un tableau de bord regroupant l’ensemble des commandes passées, créer, modifier ou supprimer des fiches produits, et gérer l’affichage des articles proposés à la vente.`,

    url: "https://github.com/ThomasdevLC/ferme_de_la_rougeraie_v2-symfony-backend",
    url2: "https://github.com/ThomasdevLC/ferme_de_la_rougeraie_v2-vue-frontend",
  },
  {
    id: 2,
    title: "TEAMWISE",
    description: "Application de covoiturage",
    period: "2024",
    image: teamwise,
    tags: ["Angular", "PrimeNG", "Tailwind", "Java", "Spring Boot", "MySQL"],
    link: "teamwise",
    intro: "Application de covoiturage pour entreprise.",
    pitch:
        "TeamWise a été développé pour promouvoir le covoiturage entre collègues et optimiser l’utilisation des véhicules de service en entreprise.\n" +
        " L’objectif est de réduire l’empreinte carbone des déplacements professionnels tout en facilitant la gestion des trajets et véhicules.\n",
    url: "https://github.com/ThomasdevLC/app-covoiturage-back",
    url2: "https://github.com/ThomasdevLC/app-covoiturage-front",
  },
  {
    id: 3,
    title: "BLOG",
    description: "Blog pour une association",
    period: "2024",
    image: blogImage,
    tags: ["Nuxt 3", "Strapi", "Tailwind", "Figma"],
    link: "blog",
    intro: "Blog pour une association, utilisant les technologies Nuxt.js et Strapi.",
    pitch:
      " Cette combinaison de Nuxt et Strapi a permis de créer un blog dynamique et facile à gérer pour l'association. J'ai utilisé Strapi comme système de gestion de contenu (CMS) pour permettre à l'administrateur  de gérer facilement les publications d'articles. Grâce à l'interface de Strapi, l'administrateur peut ajouter, modifier et supprimer des articles sans nécessiter de connaissances techniques approfondies.",
    url: "https://github.com/ThomasdevLC/blog-front-nuxt",
  },
  {
    id: 4,
    title: "GCA",
    description: "Stage Gca",
    period: "2023",
    image: pwaImage,
    tags: ["Vue", "Pinia", "Sass", "Figma"],
    link: "gca",
    intro:
      "Application mobile first conçue  pour répondre aux besoins des équipes commerciales.",
    pitch:
      "Ce projet, développé avec Vue 3 et configuré avec Vite, a été créé dans le but de tenir les commerciaux informés de leurs chiffres de vente et de leurs objectifs en temps réel. En adoptant une approche PWA (Progressive Web App), l'application peut  être installée directement sur l'écran d'accueil des utilisateurs, offrant ainsi une expérience similaire à celle d'une application native.",
    url: "https://github.com/ThomasdevLC/pwa",
  },
  {
    id: 5,
    title: "KASA",
    description: "Formation OpenClassrooms",
    period: "2022",
    image: kasaImage,
    tags: ["React", "Sass"],
    link: "kasa",
    intro:
      "Dans le cadre d'un des projets Openclassrooms, il était demandé d'intégrer la maquette figma d'une plateforme de location de logements entre particuliers avec la technologie React.js et l'utilisation de react-router.",
    pitch: "J'ai implémenté la partie front-end à l'aide de React. Le site est responsive et les composants sont modulaires et réutilisables.",
    url: "https://kasa.thomaslecam.com/",
  },
 // {
  //   id: 5,
  //  title: "ASPHALT",
  // description: "Site E-commerce",
  // period: "Août 2023",
  // image: asphaltImage,
  //  tags: ["React", "Sass", "Gsap", "Framer-Motion", "Figma"],
  // link: "bikeshop",
  //  intro: " Site web pour une marque de vélo fictive",
  //  pitch:
  //    "L'objectif de ce projet était d'explorer deux bibliothèques d'animation : GSAP et Framer Motion. Mon principal but était de créer des animations fluides et des effets visuels pour un site web fictif de marque de vélo.",
  // url: "https://bike-shop.thomaslecam.com/",
  //},
];

export default worklist;
