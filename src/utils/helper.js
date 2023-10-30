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
  ChatApp,
  CodePenClone,
  FreshJuiceUI,
  ImageSharing,
  OpenAI,
  PixabayClone,
  PortfolioFirebase,
  RestaurantClone,
  SocialMedia,
  BeachEvents,
  FridgeManagerApp,
  keylogger,
  Pokemon
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
    id: `beachEvents-${Date.now()}`,
    name: "BeachEvents",
    imgSrc: BeachEvents,
    description: "Created a mobile app tailored for CSULB students, delivering real-time updates on club meetings, campus events, and university life. Employed React Native for cross-platform development, implemented Django for the backend, and harnessed MongoDB for robust data storage. Collaborated seamlessly with a development team, utilizing Git for version control.",
    gitURL: "https://github.com/orgs/BeachEvents/teams/dev/repositories",
  },
  {
    id: `codepen-${Date.now()}`,
    name: "Fridge Helper",
    imgSrc: FridgeManagerApp,
    description: "Transformed kitchen organization with a cutting-edge Django-based web application. Eliminated food wastage and enhanced efficiency by providing automated food expiry alerts, low space notifications, and multi-account sharing capabilities. Contributed to a streamlined food management experience.",
    gitURL: "https://github.com/DhruvGorasiya/fridgeHelper/tree/main/FridgeManagerProject",
  },
  {
    id: `keylogger-${Date.now()}`,
    name: "Keylogger",
    imgSrc: keylogger,
    description: "Developed a Python-based keylogger that discreetly captures user keystrokes, mirroring Google Chrome's functionality, and securely transmits the data to an email address.",
    gitURL: "https://github.com/DhruvGorasiya/Keylogger",
  },
  {
    id: `pokemon-${Date.now()}`,
    name: "pokemon",
    imgSrc: Pokemon,
    description: "Designed and created a text-based Pokémon game with a captivating storyline, enabling players to explore diverse locations, battle with others' Pokémon, and capture new creatures.",
    gitURL: "https://github.com/DhruvGorasiya/Pokemon",
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
