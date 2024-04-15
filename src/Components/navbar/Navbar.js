import { useState } from "react"
import { navlinksdata } from "../../Contants"
import {FiMenu} from "react-icons/fi"
import { Link } from "react-scroll"
import {MdClose} from "react-icons/md"




const Navbar = ()=>{
    const [showMenu,setShowMenu]=useState(false)
    console.log(showMenu)
    return (
        <div className="w-full h-24 mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-slate-400 sticky top-0 z-50 bg-bodyColor">
            <div>
                <img src="https://media.licdn.com/dms/image/D5635AQGMf4xKeSc-QQ/profile-framedphoto-shrink_200_200/0/1711462856751?e=1713762000&v=beta&t=iWV0s6NXvAS0rdJ9C_uF_UScRmpk8ZS55ljRAZdbrPI" alt="logo" className="w-20 h-20 rounded-full shadow"/>
            </div>
            <div >
                <ul className="hidden mdl:inline-flex items-center gap-6 lgl:gap-10">
                    {
                        navlinksdata.map(({_id,title,link})=>(

                            
                            <li key={_id} className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300">
                                

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
                        ))
                    }
                </ul>
                <span onClick={()=>setShowMenu(!showMenu)} className="text-xl md:hidden bg-black w-10 h-10 inline-flex items-center
                justify-center rounded-full text-designColor cursor-pointer">
                    <FiMenu/>
                </span>
                {
                    showMenu && (
                        <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0  bg-gray-900 p-4 scrollbar-hide">
                           <div className="flex flex-col gap-8 py-6">
                                <div>
                                    <img src="https://media.licdn.com/dms/image/D5635AQGMf4xKeSc-QQ/profile-framedphoto-shrink_200_200/0/1711462856751?e=1713762000&v=beta&t=iWV0s6NXvAS0rdJ9C_uF_UScRmpk8ZS55ljRAZdbrPI" alt="logo" className="w-32 rounded-full shadow"/>
                                    <p className="text-sm text-gray-400 mt-2">
                                        Hi, i am Abhishek nice to meet you i am a software developer
                                        who build amazing things on web. currently prusuing bsc Electronics
                                        from Delhi University.
                                    </p>
                                </div>
                                <ul className="flex flex-col gap-4">
                                  {
                                    navlinksdata.map((item)=>(
                                        <li key={item._id}  className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                                        >
                                            <Link
                                                onClick={()=>setShowMenu(false)}
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
                                    ))
                                  }  
                                    
                                </ul> 
                        
                            </div> 
                           <span className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer">
                                <MdClose onClick={()=>setShowMenu(false)}/>
                           </span>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Navbar