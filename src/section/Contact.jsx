import grain from "../assets/images/grain.jpg";
import ArrowUpRight from "../svg components/ArrowUpRight";
const Contact = () => {
  return (
    <div className="pt-16" id="contact-section">
      <div className="container">
        <div className="flex flex-col items-center relative p-8 z-0 rounded-3xl bg-gradient-to-r from-emerald-300 to-sky-400 md:flex-row md:justify-between md:p-10">
            <div className="absolute inset-0 z-[-1] opacity-5" style={{backgroundImage: `url(${grain})`}}/>
          <div className="md:max-w-sm lg:max-w-xl">
            <h2 className="text-gray-900 text-2xl font-calistoga text-center md:text-3xl md:text-left">
              Let's build something amazing together
            </h2>
            <p className="text-sm text-gray-900 text-center mt-2 md:text-base md:text-left">
              Ready to bring next project to life?
              Let's connect and discuss how I can help you achieve your goals.
            </p>
          </div>
          <div>
            <a className="flex items-center bg-gray-900 text-white text-base mt-7 px-8 py-3 rounded-xl" href="mailto:saish8110@gmail.com" target="_blank" rel="noopener noreferer">
              <span className="mr-1">Contact Me</span> <ArrowUpRight size={20}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
