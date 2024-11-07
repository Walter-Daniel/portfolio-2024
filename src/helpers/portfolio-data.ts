import journal1 from '../assets/journal1.jpeg';
import journal2 from '../assets/journal2.jpeg';

import turismo1 from '../assets/turismo1.jpg';
import turismo2 from '../assets/turismo2.jpeg';

import astro1 from '../assets/astrowiki.png';
import astro2 from '../assets/astro2.jpeg';

//Purple-Shop
import pshop1 from '../assets/pshop1.png';
import pshop2 from '../assets/pshop2.jpeg';

//Backend
import back1 from '../assets/back1.jpeg';
import back2 from '../assets/back2.jpeg';

export const projectsData = [
  {
    id: 1,
    pretitle: 'Full Stack',
    title: 'Purple Shop',
    thumbnail: pshop1,
    imageUrl: pshop2,
    description:
      'Purple Shop es un e-commerce de venta de indumentaria basado en TesloShop. El usuario podrá crear ordenes, añadir dirección de entrega y pagar de forma segura a través de una pasarela de pago integrada con PayPal. Dispone de un panel de administración exclusivo para el administrador, quien puede crear, editar y eliminar productos, así como supervisar el estado de las órdenes y la gestión de usuarios.',
    technologies: ['HTML', 'CSS', 'TypeScript','Next.js', 'Auth.js', 'TailwindCSS'],
    demoUrl: 'https://purple-shop-theta.vercel.app/',
    repoFrontUrl: 'https://github.com/Walter-Daniel/purple-shop',
    repoBackUrl: null,
  },
  {
    id: 2,
    pretitle: 'Frontend',
    title: 'ASTROWIKI',
    thumbnail: astro1,
    imageUrl: astro2,
    description:
      'AstroWiki es un sitio web educativo donde puedes encontrar información sobre asteroides cercanos a la Tierra y exoplanetas. Este proyecto frontend consume la API de la NASA e incluye una página de inicio, página de contacto, formularios, y un componente hecho con Three.js que compara el radio de la Tierra con el exoplaneta más grande.',
    technologies: ['HTML', 'TailwindCSS', 'TypeScript', 'React', 'Three.js'],
    demoUrl: 'https://astrowiki-purpledev.vercel.app/',
    repoFrontUrl: 'https://github.com/Walter-Daniel/curso-next/tree/main/clase-1',
    repoBackUrl: null,
  },
  {
    id: 3,
    pretitle: 'Full Stack',
    title: 'Journal App',
    thumbnail: journal1,
    imageUrl: journal2,
    description:
      'Journal App es una aplicación full-stack donde puedes crear, editar, eliminar notas y añadir imágenes. Las rutas están protegidas, por lo que necesitas registrarte en la aplicación y luego iniciar sesión.',
    technologies: ['HTML', 'CSS', 'React-Redux-Toolkit', 'MUI', 'MongoDB', 'Cloudinary', 'Firebase'],
    demoUrl: 'https://journal-project.vercel.app/auth/login',
    repoFrontUrl: 'https://github.com/Walter-Daniel/JournalProyect',
    repoBackUrl: null,
  },
  {
    id: 4,
    pretitle: 'Frontend',
    title: 'Turismo Argentina',
    thumbnail: turismo1,
    imageUrl: turismo2,
    description:
      'Turismo Argentina es un blog responsive diseñado para proporcionar información sobre puntos turísticos en Argentina. Tiene páginas estáticas: página de inicio, galería, contacto, inicio de sesión y sobre nosotros.',
    technologies: ['HTML', 'CSS', 'Bootstrap 5'],
    demoUrl: 'https://turismo-arg.netlify.app/',
    repoFrontUrl: 'https://github.com/Walter-Daniel/turismo-argentina',
    repoBackUrl: null,
  },
  {
    id: 5,
    pretitle: 'Backend',
    title: 'REST API',
    thumbnail: back1,
    imageUrl: back2,
    description:
      'Esta API permite realizar operaciones CRUD completas para la gestión de productos, construida con Express y TypeScript para un desarrollo eficiente y seguro. Incluye documentación con Swagger, pruebas robustas con Jest y SuperTest, y validación de datos con express-validator.',
    technologies: ['HTML', 'Node.js', 'TypeScript', 'Express', 'Jest', 'Supertest'],
    demoUrl: 'https://rest-api-project-r7uo.onrender.com/docs/',
    repoFrontUrl: null,
    repoBackUrl: 'https://github.com/Walter-Daniel/BACKEND-PERN-Project?tab=readme-ov-file',
  },
];
