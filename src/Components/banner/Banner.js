import Leftbanner from "./Leftbanner"
import RightBanner from "./RightBanner"
const Banner =()=>{
    return(
        <section id="home" className="w-full h-auto pt-10 pb-20 flex flex-col gap-10 lgl:flex-row xl:gap-0 border-b-[1px] border-b-black font-titleFont">
            <Leftbanner/>
            <RightBanner/>  
        </section>
    )
}



export default Banner