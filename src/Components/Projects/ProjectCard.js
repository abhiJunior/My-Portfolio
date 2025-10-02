import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const ProjectCard = ({ title, des, src, githublink, projectlink }) => {
  return (
    <div className="w-full p-4 sm:p-6 rounded-lg shadow-lg flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 transition-colors duration-500">
      <div className="w-full overflow-hidden rounded-lg">
        <img
          src={src}
          alt={title}
          className="w-full h-60 sm:h-64 md:h-72 object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
        />
      </div>

      <div className="w-full mt-4 flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <h3 className="text-sm sm:text-base uppercase text-designColor font-medium">{title}</h3>
          <div className="flex gap-2 sm:gap-3">
            {githublink && (
              <a
                href={githublink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black flex justify-center items-center text-gray-400 hover:text-designColor transition-colors duration-300"
              >
                <BsGithub />
              </a>
            )}
            {projectlink && (
              <a
                href={projectlink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black flex justify-center items-center text-gray-400 hover:text-designColor transition-colors duration-300"
              >
                <FaGlobe />
              </a>
            )}
          </div>
        </div>
        <p className="text-sm sm:text-base text-gray-300 tracking-wide mt-2">{des}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
