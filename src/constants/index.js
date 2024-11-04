import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  icpc,
  wku,
  wkucpc,
  INSA,
  admin,
  budget,
  alan,
  threejs,
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
    name: "React JS",
    icon: reactjs,
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
    title: "MERN Developer, Intern",
    company_name: "Wolkite University",
    icon: wku,
    iconBg: "#383E56",
    date: "June 2022 - April 2023",
    points: [
      "Developing and maintaining web applications using MERN-Stack and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "WKUCPC CLub Member",
    company_name: "WKUCPC",
    icon: wkucpc,
    iconBg: "#E6DEDD",
    date: "Mar 2023 - Present",
    points: [
      "Collaborated with club leaders and faculty advisors to participate in events, workshops, and guest lectures focused on building programming skills.",
      "Contributed to a hackathon that gathered students from across the university to work on innovative projects.",
      "Engaged with local tech companies through club partnerships, gaining career insights and exposure to industry opportunities.",
      "Received mentorship and support from club members and leaders, furthering individual programming skills.",
      "Developed teamwork, communication, and problem-solving abilities beneficial for future career pursuits.",
    ],
  },
  {
    title: "Backend Web Developer",
    company_name: "INSA(Information Network Security Administration, Intern",
    icon: INSA,
    iconBg: "#383E56",
    date: "March 2024 - June 2024",
    points: [
      "Completed a four-month internship from March 2024 to June 2024 as a backend developer.",
      "Developed a human resource management system using Spring Boot.",
      "Integrated Keycloak for authentication, ensuring secure and streamlined access management.",
      "Utilized Swagger to document and test APIs, enhancing system reliability and developer collaboration.",
      "Gained valuable experience in backend development, security implementation, and API design, contributing to future career growth.",
    ],
  },
  {
    title: "Ethiopian Collegiate Programming Contest 2023 Participant",
    company_name: "Adama Science and Technology University",
    icon: icpc,
    iconBg: "#383E56",
    date: "21 August - 22 September 2023",
    points: [
      "Competed in the Ethiopian Collegiate Programming Contest as part of Team Eagle alongside Abdi Tefera and Kefiyalew Kunta.",
      "Received intensive training in Data Structures, Algorithms, and competitive programming from CSEC-ASTU Software Engineering and Engineering Club Competitive Programming Division.",
      "Strengthened teamwork and problem-solving skills through both successful and challenging submissions.",
      "Grateful for the support of organizers and participants and excited to aim even higher in future contests.",
    ],
  },
];
const projects = [
  {
    name: "School management system using java",
    description:
      "This project is a comprehensive school management system developed using Java and JavaFX. It features user authentication, student and teacher management, providing an efficient solution for educational institutions.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "javafx",
        color: "green-text-gradient",
      },
    ],
    image: admin,
    source_code_link: "https://github.com/Tamedaree/",
  },
  {
    name: "Budget Planner",
    description:
      "A web application that helps users track their expenses, set budgeting goals, and manage their finances effectively with an intuitive and user-friendly interface.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: budget,
    source_code_link: "https://github.com/Tamedaree/",
  },
  {
    name: "Voice-powered Web Application with Alan AI",
    description:
      "A voice-controlled web application using Alan AI, enabling users to interact with the application hands-free for tasks like browsing news, searching topics, and getting real-time information updates.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: alan,
    source_code_link: "https://github.com/Tamedaree/",
  },
];

export { services, technologies, experiences, projects };
