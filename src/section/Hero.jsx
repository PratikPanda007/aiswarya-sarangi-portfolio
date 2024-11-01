import memojiComputer from "../assets/images/memoji-computer.png";
import grain from "../assets/images/grain.jpg";
import HeroOrbit from "../UI components/HeroOrbit";
import ArrowDown from "../svg components/ArrowDown";
const Hero = () => {
  return (
    <div id="home-section" className="py-32 relative md:py-48 lg:py-60 z-0 overflow-x-clip overflow-y-hidden">
      <div
        className="absolute inset-0 z-[-50] opacity-5"
        style={{ backgroundImage: `url('${grain}')` }}
      />
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]" />
      <HeroOrbit
        orbitSize={800}
        starSize={28}
        starColor="#10b981"
        rotation={-72}
        type="star"
      />
      <HeroOrbit
        orbitSize={550}
        starSize={80}
        rotation={20}
        starColor="#10b981"
        type="star"
      />
      <HeroOrbit
        orbitSize={590}
        starSize={40}
        rotation={98}
        starColor="#10b981"
        type="star"
      />
      <HeroOrbit
        orbitSize={430}
        starSize={50}
        rotation={-14}
        starColor="#10b981"
        type="sparkle"
        opacity={0.2}
      />
      <HeroOrbit
        orbitSize={440}
        starSize={5}
        rotation={79}
        starColor="#6ee7b733"
        type="sparkle"
        opacity={0.2}
      />
      <HeroOrbit
        orbitSize={530}
        starSize={10}
        rotation={178}
        starColor="#6ee7b733"
        type="sparkle"
        opacity={0.2}
      />
      <HeroOrbit
        orbitSize={710}
        starSize={14}
        rotation={144}
        starColor="#6ee7b733"
        type="sparkle"
        opacity={0.2}
      />
      <div className="size-[620px] hero-ring" />
      <div className="size-[820px] hero-ring" />
      <div className="size-[1020px] hero-ring" />
      <div className="size-[1220px] hero-ring" />
      <div className="container relative flex flex-col items-center justify-center z-[998]">
        <div className="flex flex-col items-center">
          <img
            src={memojiComputer}
            alt="Person peeking from behind laptop"
            className="size-[100px]"
          />
          <div className="flex items-center gap-4 bg-gray-950/70 border border-gray-700 px-4 py-1.5 rounded-lg">
            <div className="relative size-2.5 bg-green-500 rounded-full">
              <div className="absolute inset-0 bg-green-500 rounded-full animate-ping-large" />
            </div>
            <p className="text-sm font-medium">Available for new projects</p>
          </div>
        </div>
        <h1 className="font-calistoga text-center text-3xl mt-8 tracking-wide md:text-5xl">
          Building Unique
          <br />
          User Experiences
        </h1>
        <p className="mt-4 text-white/60 text-center md:max-w-lg md:text-lg">
          I specialize in transforming designs into functional, high-performing
          web applications. Let's discuss your next project.
        </p>
        <div className="flex flex-col items-center gap-4 mt-8 md:flex-row">
          <a className="flex items-center gap-2 border border-white/15 rounded-lg px-6 h-12 no-underline cursor-pointer" href="#projects-section">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown size={15} />
          </a>
          <a className="flex items-center gap-2 border border-white/15 rounded-lg px-6 h-12 bg-white text-gray-900 font-semibold" href="#contact-section">
            <span>👋</span>
            <span className="font-semibold">Let's Connect</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
