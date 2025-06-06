import fermeImage from "../assets/images/ferme_link.png";
import pwaImage from "../assets/images/pwa_link.png";
import kasaImage from "../assets/images/kasa_link.png";
import blogImage from "../assets/images/blog_link.png";
import teamwise from "../assets/images/teamwise/teamwise.jpg";

const worklistEn = [

  {
    id: 1,
    title: "FERME DE LA ROUGERAIE",
    description: "E-commerce Website",
    period: "March - June 2025",
    image: fermeImage,
    tags: ["Vue 3", "Pinia", "PHP", "Symfony", "Easyadmin", "MySQL", "Tailwind", "Figma"],
    link: "ferme-rougeraie",
    intro: "E-commerce website for an organic product producer.",
    pitch: `This e-commerce site was developed for Léa, a producer of organic products.
Users can browse items, add them to their cart, and place an order.

The frontend is built with Vue 3, while the backend uses PHP / Symfony and EasyAdmin for back-office management.
The site relies on a MySQL database to store products, orders, and users.

From her secure admin dashboard, Léa can view all past orders, create, edit, or delete product listings,
and manage the display of items available for sale on the site.`,
    url: "https://github.com/ThomasdevLC/ferme_de_la_rougeraie_v2-symfony-backend",
    url2: "https://github.com/ThomasdevLC/ferme_de_la_rougeraie_v2-vue-frontend",
  },
  {
    id: 2,
    title: "TEAMWISE",
    description: "Carpooling App",
    period: "2024",
    image: teamwise,
    tags: ["Angular", "PrimeNG", "Tailwind", "Java", "Spring Boot", "MySQL"],
    link: "teamwise",
    intro: "Carpooling app for companies.",
    pitch:
        "TeamWise was developed to promote carpooling among coworkers and optimize the use of company service vehicles.\n" +
        "The goal is to reduce the carbon footprint of professional travel while simplifying trip and vehicle management.\n",
    url: "https://github.com/ThomasdevLC/app-covoiturage-back",
    url2: "https://github.com/ThomasdevLC/app-covoiturage-front",
  },
  {
    id: 3,
    title: "BLOG",
    description: "Blog for an association",
    period: "2024",
    image: blogImage,
    tags: ["Nuxt 3", "Strapi", "Tailwind", "Figma"],
    link: "blog",
    intro: "Blog for an association using Nuxt.js and Strapi technologies.",
    pitch:
        "This combination of Nuxt and Strapi allowed the creation of a dynamic and easy-to-manage blog for the association. I used Strapi as a content management system (CMS), enabling the administrator to manage blog posts easily. Thanks to Strapi’s interface, the admin can add, edit, and delete articles without requiring deep technical knowledge.",
    url: "https://github.com/ThomasdevLC/blog-front-nuxt",
  },
  {
    id: 4,
    title: "GCA",
    description: "GCA Internship",
    period: "2023",
    image: pwaImage,
    tags: ["Vue", "Pinia", "Sass", "Figma"],
    link: "gca",
    intro: "Mobile-first application designed to meet the needs of sales teams.",
    pitch:
        "This project, developed with Vue 3 and set up using Vite, was created to keep sales representatives informed about their sales figures and targets in real time. By adopting a Progressive Web App (PWA) approach, the application can be installed directly on users’ home screens, offering a native app-like experience.",
    url: "https://github.com/ThomasdevLC/pwa",
  },
  {
    id: 5,
    title: "KASA",
    description: "OpenClassrooms Training Project",
    period: "2022",
    image: kasaImage,
    tags: ["React", "Sass"],
    link: "kasa",
    intro:
        "As part of an OpenClassrooms project, I was asked to integrate a Figma design for a rental platform using React.js and react-router.",
    pitch:
        "I implemented the front-end using React. The website is responsive and features modular, reusable components.",
    url: "https://kasa.thomaslecam.com/",
  }

];

export default worklistEn;
