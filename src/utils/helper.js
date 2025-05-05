import {
  FaDiagramProject,
  FaEnvelope,
  FaFacebookF,
  FaGithub,
  FaHouse,
  FaInstagram,
  FaLinkedinIn,
  FaRenren,
  FaUser,
  FaYoutube,
} from "react-icons/fa6";
import {
  BeachEvents,
  FridgeManagerApp,
  keylogger,
  Pokemon,
  airbrush,
  chatbot,
  fraudShieldImg,
  optiLearnImg,
  brightMindImg,
  schedulEaseImg,
} from "../assets";

export const Socials = [
  {
    id: `linkedin-${Date.now()}`,
    Icon: FaLinkedinIn,
    uri: "https://www.linkedin.com/in/dhruvgorasiya/",
    color: "#0072b1",
  },
  {
    id: `github-${Date.now()}`,
    Icon: FaGithub,
    uri: "https://github.com/DhruvGorasiya",
    color: "#fff",
  },

];

export const Menus = [
  {
    id: `home-${Date.now()}`,
    Icon: FaHouse,
    uri: "#home",
    name: "Home",
  },
  {
    id: `about-${Date.now()}`,
    Icon: FaUser,
    uri: "#about",
    name: "About",
  },
  {
    id: `skills-${Date.now()}`,
    Icon: FaRenren,
    uri: "#skills",
    name: "Skills",
  },
  {
    id: `projects-${Date.now()}`,
    Icon: FaDiagramProject,
    uri: "#projects",
    name: "Projects",
  },
  {
    id: `contact-${Date.now()}`,
    Icon: FaEnvelope,
    uri: "#contact",
    name: "Contact",
  },
];

export const ProjectsData = [
  {
    id: 1,
    imgSrc: fraudShieldImg,
    name: "FraudShield",
    description: "A fraud detection pipeline built to analyze millions of transactions and flag anomalies in real-time. Combines advanced classification and sampling strategies to secure digital payments and reduce false positives.",
    gitURL: "https://github.com/DhruvGorasiya/Fraudulent-Transaction-Detection",
    techStack: ["Python", "Machine Learning", "Pandas", "Scikit-learn"],
  },
  {
    id: 2,
    imgSrc: optiLearnImg,
    name: "OptiLearn",
    description: "An intelligent course scheduler that minimizes cognitive load and burnout. It dynamically generates personalized academic plans based on feedback, performance trends, and workload optimization.",
    gitURL: "https://github.com/DhruvGorasiya/OptiLearn",
    techStack: ["Python", "Flask", "React", "Genetic Algorithm"],
  },
  {
    id: 3,
    imgSrc: brightMindImg,
    name: "BrightMind",
    description: "An AI-powered tutoring system that adapts to individual learning styles using reinforcement learning and NLP. It delivers personalized feedback and guidance while continuously improving through student interactions.",
    gitURL: "https://github.com/DhruvGorasiya/Brightmind",
    techStack: ["Python", "NLP", "Reinforcement Learning", "Flask"],
  },
  {
    id: 4,
    imgSrc: schedulEaseImg,
    name: "SchedulEase",
    description: "A smart event scheduling tool designed to reduce mismatches in availability, venue, and timing. It forecasts and adapts to real-world constraints with user-friendly planning and data-driven optimization.",
    gitURL: "https://github.com/DhruvGorasiya/SchedulEase",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    id: `chatbot-${Date.now()}`,
    name: "Chatbot",
    imgSrc: chatbot,
    description: "Revolutionize Conversations with Specialized Topic Chatbot Experience intelligent, domain-specific discussions powered by OpenAI GPT-4 and Pinecone. Effortlessly manage conversation history with advanced vector embeddings and UUID-based retrieval. Enjoy reliable performance with built-in error handling and API rate limiting—designed to keep your conversations smooth and focused!",
    gitURL: "https://github.com/DhruvGorasiya/Chatbot",
  },
  {
    id: `beachEvents-${Date.now()}`,
    name: "BeachEvents",
    imgSrc: BeachEvents,
    description: "Created a mobile app tailored for CSULB students, delivering real-time updates on club meetings, campus events, and university life. Employed React Native for cross-platform development, implemented Django for the backend, and harnessed MongoDB for robust data storage. Collaborated seamlessly with a development team, utilizing Git for version control.",
    gitURL: "https://github.com/orgs/BeachEvents/teams/dev/repositories",
  },
  {
    id: `keylogger-${Date.now()}`,
    name: "Keylogger",
    imgSrc: keylogger,
    description: "Developed a Python-based keylogger that discreetly captures user keystrokes, mirroring Google Chrome's functionality, and securely transmits the data to an email address.",
    gitURL: "https://github.com/DhruvGorasiya/Keylogger",
  },
  {
    id: `codepen-${Date.now()}`,
    name: "Fridge Helper",
    imgSrc: FridgeManagerApp,
    description: "Transformed kitchen organization with a cutting-edge Django-based web application. Eliminated food wastage and enhanced efficiency by providing automated food expiry alerts, low space notifications, and multi-account sharing capabilities. Contributed to a streamlined food management experience.",
    gitURL: "https://github.com/DhruvGorasiya/fridgeHelper/tree/main/FridgeManagerProject",
  },
  {
    id: `pokemon-${Date.now()}`,
    name: "Pokemon",
    imgSrc: Pokemon,
    description: "Designed and created a command line based Pokémon game with a captivating storyline, enabling players to explore diverse locations, battle with others' Pokémon, and capture new creatures.",
    gitURL: "https://github.com/DhruvGorasiya/Pokemon",
  },
  {
    id: `airbrush-${Date.now()}`,
    name: "AirBrush",
    imgSrc: airbrush,
    description: "AirBrush is a computer vision-based application that allows users to paint virtually in the air using hand gestures. Using your computer's webcam, you can draw and create digital artwork simply by moving your finger in the air.",
    gitURL: "https://github.com/DhruvGorasiya/AirBrush",
  },

  // {
  //   id: `imageSharing-${Date.now()}`,
  //   name: "Image Sharing App",
  //   imgSrc: ImageSharing,
  //   gitURL: "https://github.com/Vetrivel-VP",
  // },
  // {
  //   id: `pixabayclone-${Date.now()}`,
  //   name: "Pixabay Clone 2.0",
  //   imgSrc: PixabayClone,
  //   gitURL: "https://github.com/Vetrivel-VP",
  // },
  // {
  //   id: `freshjuiceui-${Date.now()}`,
  //   name: "Fresh Juice UI Build",
  //   imgSrc: FreshJuiceUI,
  //   gitURL: "https://github.com/Vetrivel-VP",
  // },
  // {
  //   id: `socialmedia-${Date.now()}`,
  //   name: "Social Media App",
  //   imgSrc: SocialMedia,
  //   gitURL: "https://github.com/Vetrivel-VP",
  // },
  // {
  //   id: `portfoliofirebase-${Date.now()}`,
  //   name: "Portfolio UI Fireabse",
  //   imgSrc: PortfolioFirebase,
  //   gitURL: "https://github.com/Vetrivel-VP",
  // },
];
