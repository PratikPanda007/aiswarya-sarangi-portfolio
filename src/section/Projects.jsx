import { projects } from "../data";
import CheckCircle from "../svg components/CheckCircle";
import ArrowUpRight from "../svg components/ArrowUpRight";
import grain from "../assets/images/grain.jpg";
const Projects = () => {
  return (
    <div className="pb-16" id="projects-section">
      <div className="container">
        <p className="flex justify-center pb-6 pt-16 md:pt-20 lg:pt-32">
          <span className="text-center text-base uppercase tracking-widest font-semibold bg-gradient-to-r  from-emerald-400 to-sky-400 text-transparent bg-clip-text">
            Real-world Results
          </span>
        </p>
        <h2 className="font-calistoga text-center mb-4 text-3xl md:text-5xl">
          Featured Projects
        </h2>
        <p className="text-center text-lg text-white/60 mb-10 md:mb-20 md:max-w-md mx-auto lg:text-xl">
          See how I transformed concepts into engaging digital experiences.
        </p>
        <div className="flex flex-col items-center gap-20">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="sticky lg:relative px-8 pt-8 bg-gray-800 rounded-3xl border-2 border-white/20 overflow-y-hidden z-0 md:pt-12 md:px-12 lg:max-w-full lg:pb-12"
              style={{top:`calc(32px + ${index * 32}px)`}}
            >
              <div
                className="absolute inset-0 -z-[30] opacity-5"
                style={{ backgroundImage: `url('${grain}')` }}
              />
              <div className="lg:flex lg:flex-col-reverse gap-10">
                <div>
                  <div className="inline-flex gap-2 bg-gradient-to-r from-emerald-300 to-sky-300 text-transparent bg-clip-text font-bold tracking-widest uppercase text-sm mb-2 md:mb-5">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-calistoga text-2xl md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 my-4 md:my-5" />
                  <ul className="flex flex-col gap-4 mb-8">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm text-white/50 md:text-base"
                      >
                        <CheckCircle />
                        {result.title}
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="flex justify-center items-center gap-1 bg-white text-gray-950 rounded-xl font-bold w-full h-12 tracking-wide md:w-auto md:px-6">
                      Visit Live Site <ArrowUpRight size={16} />
                    </button>
                  </a>
                </div>
              <div>
              <img
                  className="mt-8 -mb-4 mx-auto md:mb-auto lg:mt-0 lg:rounded-lg"
                  src={project.image}
                  alt={project.title}
                />
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
