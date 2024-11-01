import Circle from "../svg components/Circle";
import Sparkle from "../svg components/Sparkle";
import Star from "../svg components/Star";

const HeroOrbit = ({ starSize, orbitSize, starColor, rotation, type, opacity = 1 }) => {
  return (
    <div
      className="size-[800px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      style={{ height: `${orbitSize}px`, width: `${orbitSize}px` }}
    >
      <div
        className="absolute inset-0 animate-spin-slowest"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <div
          className="inline-block"
          style={{ color: starColor, opacity: `${opacity}` }}
        >
          {type === "star" ? (
            <Star size={starSize} />
          ) : (
            type === "sparkle" ? <Sparkle size={starSize} /> : (
              <Circle size={starSize}/>
            )
          )}
        </div>
      </div>
    </div>
  );
};
export default HeroOrbit;
