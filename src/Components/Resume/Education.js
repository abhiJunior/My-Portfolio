import ResumeCard from "./ResumeCard"

import {motion} from "framer-motion"


const Education = ()=>{ 
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{duration:.5}}} className="w-full flex flex-col p-2  ">
            <div className="py-12 font-titleFont">
                <p className="text-sm text-designColor tracking-[4px]">2022 - 2024</p>
                <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
            </div>
            <div className=" w-3/4 md:w-2/3 h-[1000px] border-l-[6px] border-l-black 
            border-opacity-30 flex flex-col gap-10">
                <ResumeCard
                    title="BSc in Electronic"
                    subtitle="University of Delhi (2022 - 2024)"
                    
                />

                <ResumeCard
                    title="Full Stack Development Course"
                    subtitle="Scaler Academy (2023 - 2025)"
                    
                />

                <ResumeCard
                    title="12th Standard"
                    subtitle="Govt senior secondary school (Delhi)"
                    
                />



            </div>
    
        
        </motion.div>
    )
}


export default Education
