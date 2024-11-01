import { motion, useDragControls } from "framer-motion";
import { hobbies, toolboxItems } from "../constants";
import bookCover from "../assets/images/book-cover.png";
import Star from "../svg components/Star";
import grain from "../assets/images/grain.jpg";
import map from "../assets/images/map.png";
import home from "../assets/images/home.png";
import Toolboxes from "../UI components/Toolboxes";
import TechSvg from "../svg components/TechSvg";
import { useRef } from "react";

const About = () => {
  const dragControls = useDragControls();
  const constraintsRef = useRef();
  return (
    <div className="pb-16 lg:pb-24" id="about-section">
      <div className="container">
        <p className="flex justify-center mb-6 pt-16 md:pt-20 lg:pt-32">
          <span className="text-center text-base uppercase tracking-widest font-semibold bg-gradient-to-r  from-emerald-400 to-sky-400 text-transparent bg-clip-text">
            About Me
          </span>
        </p>
        <h2 className="font-calistoga text-center mb-4 text-3xl md:text-5xl">
          A Glimpse Into My World
        </h2>
        <p className="text-center text-lg text-white/60 mb-10 md:mb-20 md:max-w-md mx-auto lg:text-xl">
          Learn more about who I am, what I do, and what inspires me.
        </p>
        <div className="md:flex gap-8">
          <div className="mt-16 relative h-[320px] px-5 pt-5 bg-gray-800 rounded-3xl border-2 border-white/20 overflow-y-hidden z-0 md:mt-0 md:w-2/5 lg:w-1/3">
            <div
              className="absolute inset-0 -z-[30] opacity-5 text-em"
              style={{ backgroundImage: `url('${grain}')` }}
            />
            <div className="flex items-center gap-2">
              <Star size={36} starStyles={{ color: "#6ee7b7", flex: "none" }} />
              <h2 className="font-calistoga text-3xl">My Reads</h2>
            </div>
            <p className="text-white/60 text-sm mt-2 lg:text-base lg:max-w-sm">
              Explore the books shaping my perspectives.
            </p>
            <div className="mx-auto mt-8 -mb-16 w-fit lg:-mb-96">
              <img
                src={bookCover}
                alt="Atomic habits book cover"
                className="w-40 h-64"
              />
            </div>
          </div>
          <div className="mt-8 md:mt-0 md:w-3/5 lg:w-2/3">
            <div className="relative h-[320px] px-5 pt-5 pb-9 bg-gray-800 rounded-3xl border-2 border-white/20 z-0 ">
              <div
                className="absolute inset-0 -z-[30] opacity-5 text-em"
                style={{ backgroundImage: `url('${grain}')` }}
              />
              <h2 className="flex items-center gap-3">
                <Star
                  size={40}
                  starStyles={{ color: "#6ee7b7", flex: "none" }}
                />
                <span className="font-calistoga text-3xl">My Toolbox</span>
              </h2>
              <p className="text-white/50 text-sm mt-1 lg:text-base lg:max-w-sm">
                Explore the tools and technologies I use to craft exceptional
                digital experiences.
              </p>
              <TechSvg />
              <Toolboxes
                toolboxItems={toolboxItems}
                toolboxItemsStyles={{
                  animation: "move-tape-left 20s linear infinite",
                }}
              />
              <Toolboxes
                toolboxItems={toolboxItems}
                toolboxItemsStyles={{
                  animation: "move-tape-right 20s linear infinite",
                }}
              />
            </div>
          </div>
        </div>
        <div className="md:flex gap-8 md:mt-8">
          <div className="mt-8 md:mt-0 md:w-3/5 lg:w-2/3">
            <div className="relative h-[320px] p-0 bg-gray-800 rounded-3xl border-2 border-white/20 overflow-y-hidden z-0 flex flex-col">
              <div
                className="absolute inset-0 -z-[30] opacity-5 text-em"
                style={{ backgroundImage: `url('${grain}')` }}
              />
              <div className="p-5">
                <h2 className="flex items-center gap-3">
                  <Star
                    size={40}
                    starStyles={{ color: "#6ee7b7", flex: "none" }}
                  />
                  <span className="font-calistoga text-3xl">
                    Beyond the Code
                  </span>
                </h2>
                <p className="text-white/50 text-sm mt-1">
                  Explore my interests and hobbies beyond the digital realm.
                </p>
              </div>
              <div
                className="relative flex-1 overflow-x-hidden overflow-y-hidden"
                ref={constraintsRef}
              >
                {hobbies?.map((item) => {
                  return (
                    <motion.div
                      key={item.hobby}
                      className="absolute inline-flex gap-2 px-6 py-1.5 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400"
                      style={{
                        top: item.top,
                        left: item.left,
                        cursor: "grabbing",
                      }}
                      drag
                      dragControls={dragControls}
                      dragConstraints={constraintsRef}
                    >
                      <span className="font-medium text-gray-950">
                        {item.hobby}
                      </span>
                      <span>{item.emoji}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mt-8 h-[320px] rounded-3xl overflow-hidden relative md:mt-0 md:w-2/5 lg:w-1/3">
            <img
              src={map}
              alt="Map image."
              className="object-cover absolute inset-0 w-full h-full"
            />
            <div className="flex items-center justify-center size-20 bg-gradient-to-r from-emerald-300 to-sky-400 border rounded-full border-gray-930/30 animate-bounce-slow">
              <img
                src={home}
                alt="A home picture"
                className="size-14 shrink-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
