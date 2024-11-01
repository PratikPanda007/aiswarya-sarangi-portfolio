import { useState } from "react";
import { headerData } from "../constants";

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <header className="flex justify-center items-center fixed top-3 left-0 right-0 z-[999]">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-black/50 backdrop-blur">
        {headerData.map((item, index) => (
          <a
            key={item.title}
            href={item.link}
            onClick={()=> setCurrentIndex(index)}
            className={`nav-item ${
              index === currentIndex ? "bg-white text-gray-900" : ""
            }`}
          >
            {item.title}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
