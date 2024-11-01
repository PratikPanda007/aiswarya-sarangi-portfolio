import grain from "../assets/images/grain.jpg";
import githubProfiles from "../assets/images/github-profiles.png";
import netflixUI from "../assets/images/netflix-ui-clone.png";
import seemlessScrolling from "../assets/images/seemless-scrolling.png";
import mixMaster from "../assets/images/mix-master.png";
import ArrowUpRight from "../svg components/ArrowUpRight";
import { useId } from "react";
const projects = [
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

const MiniProjects = () => {
  return (
    <div className="pb-16 lg:pb-24" id="mini-projects-section">
      <div className="container">
        <p className="flex justify-center mb-6 pt-16 md:pt-20 lg:pt-32">
          <span className="text-center text-base uppercase tracking-widest font-semibold bg-gradient-to-r  from-emerald-400 to-sky-400 text-transparent bg-clip-text">
            Mini Projects
          </span>
        </p>
        <h2 className="font-calistoga text-center mb-4 text-3xl md:text-5xl">
          What other Projects I worked on
        </h2>
        <p className="text-center text-lg text-white/60 mb-10 md:mb-20 md:max-w-md mx-auto lg:text-xl">
          Check out these extra projects that reflect my continuous learning and
          experimentation.
        </p>
        <div className="-mt-10 overflow-x-scroll no-scrollbar [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="inline-flex justify-start gap-8 p-10 animate-move-tape-left">
            {projects.map((project) => {
              return (
                <div
                  key={useId()}
                  className="relative z-0 bg-gray-800 border-2 border-white/20 rounded-3xl shrink-0 sm:max-w-xs md:max-w-md hover:-rotate-3 transition duration-300"
                >
                  <div
                    className="absolute inset-0 z-[-1] opacity-5"
                    style={{ backgroundImage: `url(${grain})` }}
                  />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-tl-3xl rounded-tr-3xl"
                  />
                  <div className="p-4 md:p-8">
                    <h4 className="text-lg md:text-2xl">{project.title}</h4>
                    <div className="flex gap-5 mt-5">
                    <a href={project.liveLink}>
                      <button className="flex justify-center items-center text-sm gap-1 bg-white text-gray-950 rounded-xl font-bold w-full h-10 md:h-12 tracking-wide md:w-auto px-3 md:px-4">
                        Visit Live Site <ArrowUpRight size={16} />
                      </button>
                    </a>
                    <a href={project.codeLink}>
                      <button className="flex justify-center items-center text-sm gap-1 bg-white text-gray-950 rounded-xl font-bold w-full h-10 md:h-12  tracking-wide md:w-auto px-3 md:px-4">
                        View Code <ArrowUpRight size={16} />
                      </button>
                    </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniProjects;
