import proshopLandingPage from "./assets/images/proshopLandingPage.png";
import linkSharingApp from "./assets/images/linkSharingApp.png";
import Html5Svg from "./svg components/Html5Svg";
import JavascriptSvg from "./svg components/JavascriptSvg";
import Css3Svg from "./svg components/Css3Svg";
import ReactSvg from "./svg components/ReactSvg";
import GithubSvg from "./svg components/GithubSvg";
import TailwindCSSSvg from "./svg components/TailwindCSSSvg";
import githubProfiles from "./assets/images/github-profiles.png";
import netflixUI from "./assets/images/netflix-ui-clone.png";
import seemlessScrolling from "./assets/images/seemless-scrolling.png";
import mixMaster from "./assets/images/mix-master.png";
import Redux from "./svg components/Redux";
import StyledCompo from "./svg components/StyledCompo";
import ReactHooks from "./svg components/ReactHooks";
import Postman from "./svg components/Postman";
import APIIcon from "./svg components/API";
export const projects = [
  {
    company: "ECOMMERCE APP",
    year: "2024",
    title: "ProShop Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://mern-proshop-6705.onrender.com/",
    image: proshopLandingPage,
  },
  {
    company: "CONTENT SHARING APP",
    year: "2024",
    title: "Link Sharing App",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://mern-link-sharing-app.onrender.com/",
    image: linkSharingApp,
  },
];

export const miniProjects = [
  {
    image: githubProfiles,
    codeLink: "https://github.com/aiswarya8110/GitHub-Profiles",
    liveLink: "https://view-github-profiles-app.netlify.app/",
    title: "Github Profiles",
  },
  {
    image: netflixUI,
    codeLink: "https://github.com/aiswarya8110/netflix-ui-clone-app",
    liveLink: "https://neflix-ui-clone-app-b724fb.netlify.app/",
    title: "Netflix UI",
  },
  {
    image: seemlessScrolling,
    codeLink: "https://github.com/aiswarya8110/Seemless-Scrolling",
    liveLink: "https://seamless-scrolling.netlify.app/",
    title: "Seemless Scrolling",
  },
  {
    image: mixMaster,
    codeLink: "https://github.com/aiswarya8110/react-mix-master-app",
    liveLink: "https://mix-master-9058e8.netlify.app/",
    title: "Mix Master",
  },
  {
    image: githubProfiles,
    codeLink: "https://github.com/aiswarya8110/GitHub-Profiles",
    liveLink: "https://view-github-profiles-app.netlify.app/",
    title: "Github Profiles",
  },
  {
    image: netflixUI,
    codeLink: "https://github.com/aiswarya8110/netflix-ui-clone-app",
    liveLink: "https://neflix-ui-clone-app-b724fb.netlify.app/",
    title: "Netflix UI",
  },
  {
    image: seemlessScrolling,
    codeLink: "https://github.com/aiswarya8110/Seemless-Scrolling",
    liveLink: "https://seamless-scrolling.netlify.app/",
    title: "Seemless Scrolling",
  },
  {
    image: mixMaster,
    codeLink: "https://github.com/aiswarya8110/react-mix-master-app",
    liveLink: "https://mix-master-9058e8.netlify.app/",
    title: "Mix Master",
  },
];

export const hobbies = [
  {
    hobby: "Gardening",
    emoji: "🌴",
    top: "5%",
    left: "5%",
  },
  {
    hobby: "Photography",
    emoji: "📷",
    top: "5%",
    left: "50%",
  },
  {
    hobby: "Yoga",
    emoji: "🧘‍♀️",
    top: "60%",
    left: "5%",
  },
  {
    hobby: "Jogging",
    emoji: "🚶‍♀️",
    top: "40%",
    left: "35%",
  },
  {
    hobby: "Travelling",
    emoji: "🧳",
    top: "30%",
    left: "10%",
  },
  {
    hobby: "Reading",
    emoji: "📘",
    top: "70%",
    left: "45%",
  },
  {
    hobby: "Music",
    emoji: "🎵",
    top: "45%",
    left: "68%",
  },
];

export const toolboxItems = [
  {
    title: "Javascript",
    icon: <JavascriptSvg />,
  },
  {
    title: "HTML5",
    icon: <Html5Svg />,
  },
  {
    title: "CSS3",
    icon: <Css3Svg />,
  },
  {
    title: "React",
    icon: <ReactSvg />,
  },
   {
     title: "Redux",
    icon: <Redux />,
  },
  {
    title: "Styled Components",
    icon: <StyledCompo />,
  },
  {
    title: "React Hooks",
    icon: <ReactHooks />,
  },
  {
    title: "TailwindCSS",
    icon: <TailwindCSSSvg />
  },
  {
    title: "Github",
    icon: <GithubSvg />,
  },
  {
    title: "Postman",
    icon: <Postman />,
  },
  {
    title: "API",
    icon: <APIIcon />,
  },
];

export const headerData = [
  {
    title:"Home",
    link:"#home-section",
  },
  {
    title:"Projects",
    link:"#projects-section",
  },
  {
    title:"Mini Projects",
    link:"#mini-projects-section",
  },
  {
    title:"Contact",
    link:"#contact-section",
  },
]