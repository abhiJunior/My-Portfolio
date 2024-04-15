import ResumeCard from "./ResumeCard"

import {motion} from "framer-motion"


const Education = ()=>{ 
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{duration:.5}}} className="w-full flex flex-col  ">
            <div className="py-12 font-titleFont">
                <p className="text-sm text-designColor tracking-[4px]">2022 - 2024</p>
                <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
            </div>
            <div className=" w-3/4 md:w-2/3 h-[1000px] border-l-[6px] border-l-black 
            border-opacity-30 flex flex-col gap-10">
                <ResumeCard
                    title="BSc in Electronic"
                    subtitle="University of Delhi (2022 - 2024)"
                    des="The training provided by Universities in order to prepare people to
                    work in various sectors of the economy or areas of culture"
                />

                <ResumeCard
                    title="Full Stack Development Course"
                    subtitle="Scaler Academy (2023 - 2024)"
                    des="Scaler Academy is an Edtech Company which provides training , development skill and problem solving skill  to become a Software Developer ."
                />

                <ResumeCard
                    title="12th Standard"
                    subtitle="Govt senior secondary school (Delhi)"
                    des="12th standard marks the final year of secondary education before students transition to higher education or vocational pursuits."
                />



            </div>
    
        
        </motion.div>
    )
}


export default Education

