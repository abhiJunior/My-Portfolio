import { useTypewriter, Cursor} from "react-simple-typewriter"
import {FaInstagram, FaTwitter, FaLinkedinIn} from "react-icons/fa"
import {SiTailwindcss,SiReact, SiNodedotjs, SiExpress, SiMysql} from "react-icons/si"


const Leftbanner = ()=>{
    const [text] = useTypewriter({
        words:["Good Coder","Full Stack Developer","UI Designer","MERN Stack Developer"],
        loop:true,
        typeSpeed:20,
        deleteSpeed:10,
        delaySpeed:2000,
        
    })

    return(
        <div className=" w-full lgl:w-1/2 h-auto flex flex-col gap-20">

                <div className="flex flex-col gap-5">
                    <h4 className="text-lg font-normal mt-10">WELCOME TO MY WORLD</h4>
                    <h1 className="text-6xl font-bold text-white">
                        Hi, I'm {" "}
                        <span className=" text-designColor capitalize">Abhishek</span>
                    </h1>
                    <h2 className="text-4xl font-bold text-white">a <span>{text}.</span>
                    <Cursor 
                        cursorBlinking="false"
                        cursorStyle="|"
                        cursorColor="#ff014f"
                    /></h2>
                    <p className="text-base font-bodyFont leading-6 tracking-wide">
                        Hello! I am a college student currently pursuing a BSc in Electronics from Delhi University.
                        Alongside my academic studies, I have developed a strong interest in web development and have honed my skills in various technologies. 
                        My tech stack includes Python, JavaScript, HTML, CSS, ReactJS, NodeJS, and Express, making me a proficient MERN stack developer. 
                        
                    </p>
                </div>
                <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
                    <div>
                        <h2 className="text-base uppercase font-titleFont mb-4">
                            Find me in
                        </h2>
                        <div className="flex  gap-4">
                            <span className="bannerIcon">
                                <a href="https://www.linkedin.com/in/abhishek-kumar-812a5a27b/"><FaLinkedinIn/></a>
                            </span>
                            <span className="bannerIcon">
                                <a href="https://twitter.com/Abhishek_640"><FaTwitter/></a>
                            </span>
                            <span className="bannerIcon">
                                <a href="https://www.instagram.com/abhi_kumr05/"><FaInstagram/></a>
                            </span>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-base uppercase font-titleFont mb-4">
                            BEST SKILL ON
                        </h2>
                        <div className="flex gap-4">
                            <span className="bannerIcon">
                                <SiReact/>
                            </span>
                            <span className="bannerIcon">
                                <SiNodedotjs/>
                            </span>
                            <span className="bannerIcon">
                                <SiTailwindcss/>
                            </span>
                            <span className="bannerIcon">
                                <SiExpress/>
                            </span>
                            <span className="bannerIcon">
                                <SiMysql/>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
    )
}



export default Leftbanner