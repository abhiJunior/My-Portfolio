
import {motion} from "framer-motion"

const Skill = ()=>{
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{duration:.5}}} className="w-full">
            <div className="py-12 font-titleFont">
                <p className="text-sm text-designColor tracking-[4px]">Features</p>
                <h2 className="md:text-4xl text-3xl font-bold">Development Skill</h2>
            </div>
            <div className="w-full flex flex-col gap-10">
                <div className=" w-full">
                    <p className="text-m uppercase font-medium">React</p>
                    <span className="w-3/4 h-2 bgOpacity inline-flex rounded-md mt-2">
                        <span className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500
                        to-red-500 rounded-sm relative">
                            <span className="absolute -top-7 right-0">90%</span>
                        </span>
                    </span>
                </div>
                <div className=" w-full">
                    <p className="text-m uppercase font-medium">html 5</p>
                    <span className="w-3/4 h-2 bgOpacity inline-flex rounded-md mt-2">
                        <span className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500
                        to-red-500 rounded-sm relative">
                            <span className="absolute -top-7 right-0">95%</span>
                        </span>
                    </span>
                </div>
                <div className=" w-full">
                    <p className="text-m uppercase font-medium">css</p>
                    <span className="w-3/4 h-2 bgOpacity inline-flex rounded-md mt-2">
                        <span className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500
                        to-red-500 rounded-sm relative">
                            <span className="absolute -top-7 right-0">95%</span>
                        </span>
                    </span>
                </div>
                <div className=" w-full">
                    <p className="text-m uppercase font-medium">javascript</p>
                    <span className="w-3/4 h-2 bgOpacity inline-flex rounded-md mt-2">
                        <span className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500
                        to-red-500 rounded-sm relative">
                            <span className="absolute -top-7 right-0">80%</span>
                        </span>
                    </span>
                </div>
                <div className=" w-full">
                    <p className="text-m uppercase font-medium">python</p>
                    <span className="w-3/4 h-2 bgOpacity inline-flex rounded-md mt-2">
                        <span className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500
                        to-red-500 rounded-sm relative">
                            <span className="absolute -top-7 right-0">80%</span>
                        </span>
                    </span>
                </div>
                <div className=" w-full">
                    <p className="text-m uppercase font-medium">tailwind css</p>
                    <span className="w-3/4 h-2 bgOpacity inline-flex rounded-md mt-2">
                        <span className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500
                        to-red-500 rounded-sm relative">
                            <span className="absolute -top-7 right-0">95%</span>
                        </span>
                    </span>
                </div>
                <div className=" w-full">
                    <p className="text-m uppercase font-medium">node js</p>
                    <span className="w-3/4 h-2 bgOpacity inline-flex rounded-md mt-2">
                        <span className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500
                        to-red-500 rounded-sm relative">
                            <span className="absolute -top-7 right-0">90%</span>
                        </span>
                    </span>
                </div>
                <div className=" w-full">
                    <p className="text-m uppercase font-medium">express</p>
                    <span className="w-3/4 h-2 bgOpacity inline-flex rounded-md mt-2">
                        <span className="w-[85%] h-full bg-gradient-to-r from-blue-600 via-pink-500
                        to-red-500 rounded-sm relative">
                            <span className="absolute -top-7 right-0">85%</span>
                        </span>
                    </span>
                </div>
                <div className=" w-full">
                    <p className="text-m uppercase font-medium">mysql</p>
                    <span className="w-3/4 h-2 bgOpacity inline-flex rounded-md mt-2">
                        <span className="w-[85%] h-full bg-gradient-to-r from-blue-600 via-pink-500
                        to-red-500 rounded-sm relative">
                            <span className="absolute -top-7 right-0">85%</span>
                        </span>
                    </span> 
                </div>
                <div className=" w-full">
                    <p className="text-m uppercase font-medium">mongo db</p>
                    <span className="w-3/4 h-2 bgOpacity inline-flex rounded-md mt-2">
                        <span className="w-[85%] h-full bg-gradient-to-r from-blue-600 via-pink-500
                        to-red-500 rounded-sm relative">
                            <span className="absolute -top-7 right-0">85%</span>
                        </span>
                    </span>
                </div>
            </div>
            
    
        </motion.div>
    )
}


export default Skill