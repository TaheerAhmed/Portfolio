import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  next,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  starbucks,
  tesla,
  voicegpt,
  jobit,
  tripguide,
  threejs,
  DashBoard,
  panda,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next.js",
    icon: next,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "GreedyGame",
    icon: tesla,
    // iconBg: "#E6DEDD",
    iconBg: "#383E56",

    date: "April 2023 - Current",
    points: [
      "Led development and design of PandaDraw web app with Next.js 13, incorporating infinite scroll feed for creators' posts.",

      "Generated an average of $100 per week in post-deployment ad revenue using Google Ad Sense.",
      "Resolved bugs, integrated marketing team's content using MDX files, and migrated Next.js 12 app to Next.js 13.",
      "Increased app-performance metrics by reducing TBT, LCP, FCP, and CLS.",

      "Implemented Creator and Visitor Authentication for enhanced user experience.",
      "Employed cutting-edge routing technology for seamless navigation and parallel routing.",
      "Decreased infrastructure costs by 30% in EpicPlay app through Next.js Middleware routing and re-routing.",
      "Implemented performance enhancement plan, resulting in a 40% app-performance improvement.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Commutatus",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2022 - June 2022",
    points: [
      "Collaborated on various internal applications of AIESEC International, serving 450K+ monthly users, by building functional components in web apps built with React and Angular.",
      "Utilized GraphQL to fetch and transmit API data between web apps and backend database.",
      "Identified and resolved production application bugs efficiently by creating tickets and utilizing Jira for project management.",
      "Upgraded webpack of existing applications from v4 to v5.",
      "Optimized app build time by refactoring codebase, removing components and variables.",
      "Improved codebase quality by configuring ESLint and SonarLint to decrease code cognitive complexity.",
      "Fixed styling issues using SASS with a mobile-first approach in various applications.",
      "Designed and implemented push notification features, added new screens, and incorporated requested changes in the MyCaptain mobile app through collaboration with the client.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "PandaDraw ",
    description:
      " Developed 'PandaDraw' at GreedyGame, harnessing the power of in-house implementation, utilizing advanced techniques such as infinite scroll content and bespoke functionalities. This project was meticulously crafted using Next.js 13, leveraging the latest Next.js 13 app router. The application is built keeping performance and scalability in mind.",
    tags: [
      {
        name: "Next.js 13",
        color: "black-text-gradient",
      },
      {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "Go Lang",
        color: "green-text-gradient",
      },
      {
        name: "Vercel",
        color: "pink-text-gradient",
      },
    ],
    image: panda,
    // source_code_link: "https://github.com/",
  },

  {
    name: "CRM Dashboard",
    description:
      "An advanced Analytics Dashboard created withour using any third-party libraries leveraging React, Redux, having a suite of powerful features including a dynamic Date Picker, configurable drag and drop columns, reordering functionality, sorting, filters, and responsive design for seamless data exploration and analysis.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
    ],
    image: DashBoard,
    source_code_link: "https://github.com/TaheerAhmed/DataTableGG",
  },
  {
    name: "Voice GPT",
    description:
      "Cutting-edge web application integrating OpenAI's LLMs via voice-to-chat interface, supporting multiple chat-saving functionalities and secure user authentication with Google OAuth",
    tags: [
      {
        name: "Next.js 13",
        color: "black-text-gradient",
      },
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "Open AI",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: voicegpt,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
