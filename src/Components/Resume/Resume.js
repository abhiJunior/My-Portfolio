import  { useState } from "react"
import Education from "./Education"
import Title from "../layouts/Title"
import Skill from "./Skill"
 
const Resume = ()=>{
    const [education,seteducation] = useState(true)
    const [skill , setSkill] = useState(false)
    return(
        <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
            <div className="flex justify-center items-center text-center">
                <Title des="My Resume" title="Motivated recent graduate with strong Development skills seeking entry-level role in Software Engineer" />
            </div>
            <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
                <li onClick={()=> seteducation(true) & setSkill(false)} className={`${education?" border-designColor rounded-lg":"border-transparent"} resumeli`}>Education</li>
                <li onClick={()=>seteducation(false) & setSkill(true) } className={`${skill?" border-designColor rounded-lg":"border-transparent"} resumeli`}>Professional Skills</li>
            </ul>
            {
                education && <Education/>
            }
            {
                skill && <Skill/>
            }

            {/*
            <div className="py-12 font-titleFont">
                <p className="text-sm text-designColor tracking-[4px]">2022 - 2024</p>
                <h2 className="text-4xl font-bold">Education</h2>
            </div>
            <div className=" w-2/3 h-[1000px] border-l-[6px] border-l-black
             border-opacity-30 flex flex-col gap-10">
                <ResumeCard
                    title="BSc in Electronic"
                    subtitle="University of Delhi (2022 - 2024)"
                    des="The training provided by Universities in order to prepare people to
                     work in various sectors of the economy or areas of culture"
                />

                <ResumeCard
                    title="BSc in Electronic"
                    subtitle="University of Delhi (2022 - 2024)"
                    des="The training provided by Universities in order to prepare people to
                     work in various sectors of the economy or areas of culture"
                />

                <ResumeCard
                    title="BSc in Electronic"
                    subtitle="University of Delhi (2022 - 2024)"
                    des="The training provided by Universities in order to prepare people to
                     work in various sectors of the economy or areas of culture"
                />



            </div>
    */}
        </section>
    )
}

export default Resume