import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },

  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "React.js Developer",
    company_name: "Deutics Global",
    icon: starbucks,
    iconBg: "#accbe1",
    date: "May 2024 - Present",
    points: [
      "Led frontend development initiatives using React.js, focusing on creating responsive and intuitive web applications.",
      "Utilized Redux Toolkit for state management, ensuring efficient data flow and application scalability on the frontend.",
      "Collaborated closely with designers using Figma to translate UI/UX designs into pixel-perfect, functional components.",
      "Designed and implemented RESTful APIs with Node.js and Express.js on the backend, integrating various third-party APIs for data fetching and processing.",
      "Integrated secure authentication using JSON Web Tokens (JWT) and bcrypt.js.",
      "Worked extensively with MongoDB for data storage, implementing efficient data models and query optimizations.",
      "Implemented middleware and utilized tools like Nodemon for seamless backend development workflows.",
      "Participated actively in code reviews, providing constructive feedback to enhance code quality and maintain best practices.",
      "Developed reusable UI components and optimized applications for cross-browser compatibility and responsive design.",
      "Continuously updated skills and knowledge in frontend and backend technologies to deliver cutting-edge solutions.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Znz Technologies",
    icon: tesla,
    iconBg: "#fbc3bc",
    date: "Jan 2024 - March 2024",
    points: [
      "Served as a Junior React.js Developer, working on reusable components and efficient state management.",
      "Developed and maintained web applications using React.js and other related technologies.",
      "Integrated APIs to fetch and display data dynamically within the application.",
      "Implemented responsive design to ensure a seamless user experience across various devices.",
      "Collaborated with designers using tools like Figma to convert UI/UX designs into functional components.",
      "Participated in code reviews and provided constructive feedback to improve code quality.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Vvork Cloud Technologies",
    icon: shopify,
    iconBg: "#b7e4c7",
    date: "Nov 2021 - Sep 2022",
    points: [
      "Certified MERN Stack Developer with hands-on experience in developing and maintaining web applications using React.js, Node.js, Express.js, and MongoDB.",
      "Acquired industry-level skills in API integration, state management, and responsive design.",
      "Developed reusable components and implemented efficient data fetching techniques to enhance application performance.",
      "Gained proficiency in using design tools like Figma to convert UI/UX designs into functional components.",
      "Contributed actively in code reviews, providing valuable feedback to improve code quality and maintain best practices.",
      "Continuously learning and implementing industry best practices to deliver scalable and maintainable code.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/sameerjohn1",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/sameer-john-5a9418256/",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Real-Estate Application",
    description:
      "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
    link: "https://realestate-4713d.web.app/",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Coral Ecommerce",
    description:
      "Created a React.js-based eCommerce website, allowing users to browse products, see items , sort items . Fully responsive on all devices.",
    link: "https://coral-894f6.web.app/",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Shoes Ecomerce",
    description:
      "Developed a React.js-based eCommerce platform for shoes, enabling users to browse a variety of products, add sorting , add filters , searching etc...",
    link: "https://shoesapplication-2f0e0.web.app/",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "React Dashboard",
    description:
      "Developed a static dashboard using React.js, featuring comprehensive data visualization and user management capabilities.",
    link: "https://myadmin-fb77b.web.app",
  },
];
