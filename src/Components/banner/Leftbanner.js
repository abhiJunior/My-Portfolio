import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import {
  SiTailwindcss,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMysql,
} from "react-icons/si";

const Leftbanner = () => {
  const [text] = useTypewriter({
    words: [
      "Good Problem Solver",
      "Full Stack Developer",
      "Web Developer",
      "Frontend Developer",
      "MERN Stack Developer",
      "Backend Developer",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className=" w-full lgl:w-1/2 h-auto flex flex-col gap-20 p-8">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal mt-10">WELCOME TO MY Portfolio</h4>
        <h1 className=" text-3xl md:text-6xl font-bold text-white">
          Hi, I'm <span className=" text-designColor capitalize">Abhishek</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}.</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          Hello! I’m a Full Stack Developer (MERN) passionate
          about building scalable, user-centric web applications. I specialize
          in crafting responsive interfaces with React, TailwindCSS, Framer
          Motion and Antdesign, and developing robust backends using Node.js, Express.js, and
          MongoDB.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex  gap-4">
            <span className="bannerIcon">
              <a href="https://www.linkedin.com/in/abhishek-kumar-812a5a27b/">
                <FaLinkedinIn />
              </a>
            </span>
            <span className="bannerIcon">
              <a href="https://twitter.com/Abhishek_640">
                <FaTwitter />
              </a>
            </span>
            <span className="bannerIcon">
              <a href="https://www.instagram.com/abhi_kumr05/">
                <FaInstagram />
              </a>
            </span>
          </div>
        </div>
        <div className="ml-3">
          <h2 className="text-base uppercase font-titleFont mb-4 ">
            BEST SKILL ON
          </h2>
          <div className="flex flex-wrap gap-4">
            <span className="bannerIcon p-5">
              <SiReact />
            </span>
            <span className="bannerIcon p-5">
              <SiNodedotjs />
            </span>
            <span className="bannerIcon p-5">
              <SiTailwindcss/>
            </span>
            <span className="bannerIcon p-5">
              <SiExpress />
            </span>
            <span className="bannerIcon p-5">
              <SiMysql />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftbanner;
