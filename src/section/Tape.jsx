import { useId } from "react";
import Star from "../svg components/Star";

const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Reliable",
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Reliable",
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Reliable",
];
const Tape = () => {
  return (
    <div className="py-16 overflow-x-clip lg:py-24">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-2">
        <div className="inline-flex items-center gap-4 overflow-x-clip h-14 animate-move-tape-left">
          {words.map((word) => (
            <div key={useId()} className="flex items-center gap-4 text-gray-950">
              <Star size={24} starStyles={{ transform: "rotate(15deg)" }} />
              <span className="uppercase  text-gray-950 font-bold text-sm text-nowrap">
                {word}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tape;
