import memojiAvatar1 from "../assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "../assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "../assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "../assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "../assets/images/memoji-avatar-5.png";
import grain from "../assets/images/grain.jpg";
const testimonials = [
  {
    name: "Alex Turner",
    position: "Marketing Manager @ TechStartups",
    text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: "Olivia Green",
    position: "Head of Design @ GreenLeaf",
    text: "Working with Alex was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: memojiAvatar2,
  },
  {
    name: "Daniel White",
    position: "CEO @ InnovateCo",
    text: "Alex's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: memojiAvatar3,
  },
  {
    name: "Emily Carter",
    position: "Product Manager @ GlobalTech",
    text: "Alex is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: memojiAvatar4,
  },
  {
    name: "Michael Brown",
    position: "Director of IT @ MegaCorp",
    text: "Alex's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
    avatar: memojiAvatar5,
  },
  {
    name: "Alex Turner",
    position: "Marketing Manager @ TechStartups",
    text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: "Olivia Green",
    position: "Head of Design @ GreenLeaf",
    text: "Working with Alex was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: memojiAvatar2,
  },
  {
    name: "Daniel White",
    position: "CEO @ InnovateCo",
    text: "Alex's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: memojiAvatar3,
  },
  {
    name: "Emily Carter",
    position: "Product Manager @ GlobalTech",
    text: "Alex is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: memojiAvatar4,
  },
  {
    name: "Michael Brown",
    position: "Director of IT @ MegaCorp",
    text: "Alex's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
    avatar: memojiAvatar5,
  },
];
const Testimonials = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <p className="flex justify-center mb-6 md:mt-7 lg:mt-32">
          <span className="text-center text-base uppercase tracking-widest font-semibold bg-gradient-to-r  from-emerald-400 to-sky-400 text-transparent bg-clip-text">
            Happy Clients
          </span>
        </p>
        <h2 className="font-calistoga text-center mb-4 text-3xl md:text-5xl">
          What Clients Say about Me
        </h2>
        <p className="text-center text-lg text-white/60 mb-10 md:mb-20 md:max-w-md mx-auto lg:text-xl">
          Don't just take my word for it. See what my clients have to say about
          my work.
        </p>
        <div className="mt-16 lg:mt-20 overflow-x-scroll no-scrollbar [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="inline-flex justify-start gap-8 animate-move-tape-left">
            {testimonials.map((testimonial) => {
              return (
                <div
                  key={testimonial.name}
                  className="relative z-0 bg-gray-800 border-2 border-white/20 rounded-3xl p-6 shrink-0 sm:max-w-xs md:max-w-md md:p-8 hover:-rotate-3 transition duration-300"
                >
                  <div
                    className="absolute inset-0 z-[-1] opacity-5"
                    style={{ backgroundImage: `url(${grain})` }}
                  />
                  <div className="flex items-center gap-4">
                    <div className="bg-gray-700 size-14 rounded-full flex items-center justify-center shrink-0">
                      <img
                        src={testimonial.avatar}
                        alt={`${testimonial.name} Image`}
                        className="size-14"
                      />
                    </div>
                    <div>
                      <p>{testimonial.name}</p>
                      <p className="text-sm text-white/40 font-light">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm mt-4 md:mt-6 md:text-base">
                    {testimonial.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
