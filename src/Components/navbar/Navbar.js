import { useState } from "react";
import { navlinksdata } from "../../Contants"; // ✅ make sure this path is correct
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { Link } from "react-scroll"; // ✅ install: npm install react-scroll

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full h-20 sm:h-24 mx-auto flex justify-between items-center font-titleFont border-b border-slate-400 sticky top-0 z-50 bg-bodyColor px-4 sm:px-8">
      {/* Logo */}
      <div>
        <img
          src="/Photos/logo.jpg"
          alt="logo"
          className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full shadow object-cover"
        />
      </div>

      {/* Nav Links */}
      <div>
        <ul className="hidden md:inline-flex items-center gap-6 lg:gap-10">
          {navlinksdata.map(({ _id, title, link }) => (
            <li
              key={_id}
              className="text-sm md:text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl md:hidden bg-black w-9 h-9 sm:w-10 sm:h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>

        {/* Mobile Sidebar */}
        {showMenu && (
          <div className="w-[80%] h-screen overflow-y-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-6">
              {/* Mobile Logo */}
              <div>
                <img
                  src="/Photos/logo.jpg"
                  alt="logo"
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full shadow object-cover"
                />
                <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                  Hi, I am Abhishek 👋 Nice to meet you! I am a Full Stack
                  Developer passionate about building amazing things on the web.
                  
                </p>
              </div>

              {/* Mobile Links */}
              <ul className="flex flex-col gap-4">
                {navlinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Close Button */}
            <span className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer">
              <MdClose onClick={() => setShowMenu(false)} />
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
