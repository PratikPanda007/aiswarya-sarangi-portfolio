import ArrowUpRight from "../svg components/ArrowUpRight";

const Footer = () => {
  return (
    <div className="pt-16 bg-gradient-to-b from-gray-900/25 to-emerald-300/20">
      <div className="container">
        <hr className="border-gray-600" />
        <div className="p-5 flex flex-col md:flex-row md:justify-between">
          <p className="text-center text-sm text-gray-400">
            &copy; 2024 All rights reserved.
          </p>
          <div className="flex flex-col items-center gap-6 mt-5 md:mt-0 md:flex-row">
            <div className="text-sm tracking-widest">
              <a
                className="flex gap-1 items-center"
                href="https://github.com/aiswarya8110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>GitHub</span>
                <span>
                  <ArrowUpRight size={15} />
                </span>
              </a>
            </div>
            <div className="text-sm tracking-widest">
              <a
                className="flex gap-1 items-center"
                href="https://x.com/aiswaryaS__"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Twitter</span>
                <span>
                  <ArrowUpRight size={15} />
                </span>
              </a>
            </div>
            <div className="text-sm tracking-widest">
              <a
                href="https://www.linkedin.com/in/aiswaryasarangi/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-1 items-center"
              >
                <span>LinkedIn</span>
                <span>
                  <ArrowUpRight size={15} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
