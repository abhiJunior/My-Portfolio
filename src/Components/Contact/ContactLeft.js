
import {FaTwitter,FaLinkedinIn} from "react-icons/fa"
const ContactLeft = ()=>{
    return (
        
            <div className="w-full lgl:w-[35%] h-auto bg-gradient-to-r from-[#1e2024] to -[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
                <img className="w-full h-64 object-cover rounded-lg mb-2" src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
                    <div className="flex flex-col gap-3">
                        <h3 className="text-3xl font-bold text-white">Abhishek Kumar</h3>
                        <p className="text-lg font-normal text-gray-400">MERN Stack Developer</p>
                        <p className="text-base text-gray-400 tracking-wide">
                            Hello! I am a college student currently pursuing a BSc in Electronics from Delhi University. 
                            Alongside my academic studies
                        </p>
                        <p className="text-base text-gray-400 flex items-center gap-2">
                            Phone: <span className="text-lightText">+91 8826511494</span>
                        </p>
                        <p className="text-base text-gray-400 flex items-center gap-2">
                            Email
                            <span className="text-lightText">mr.abhikush@gmail.com</span>
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-base uppercase font-titleFont mb-4">
                            Find me in
                        </h2> 
                        <div className="flex justify-start gap-5">
                            <span className="bannerIcon">
                                <a href="https://www.linkedin.com/in/abhishek-kumar-812a5a27b/"><FaLinkedinIn/></a>
                            </span>
                            <span className="bannerIcon">
                                <a href="https://twitter.com/Abhishek_640"><FaTwitter/></a>
                            </span>
                        </div>
                    </div>
            </div>
        
    )
}


export default ContactLeft