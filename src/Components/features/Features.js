import { IoGlobe } from "react-icons/io5";
import { SiRockylinux } from "react-icons/si";
import Title from "../layouts/Title"
import Card from "../layouts/Card"
import {  FaBars , FaMobile } from "react-icons/fa"
import { AiFillAppstore } from "react-icons/ai";
import { TbSeo } from "react-icons/tb";

const Features =()=>{
    return(
        <section id="features" className="w-full pb-20  border-b-[1px] border-b-black">
            <Title title="Features" des="What I Do"/>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap:6 xl:gap-20">
                <Card
                    title="Business Stratagy"
                    des="lorem ipsum dolor amet dlff mera paisa ha toh badi baat hai
                    hic consequuntur eum"
                    icon ={<FaBars/> }
                />
                    
                <Card
                    title="App Development"
                    des="lorem ipsum dolor amet dlff mera paisa ha toh badi baat hai
                    hic consequuntur eum"
                    icon={<AiFillAppstore/>}
                
                />
                <Card
                    title="SEO Optimisation"
                    des="lorem ipsum dolor amet dlff mera paisa ha toh badi baat hai
                    hic consequuntur eum"
                    icon={<TbSeo/>}
                />
                <Card
                    title="Mobile Development"
                    des="lorem ipsum dolor amet dlff mera paisa ha toh badi baat hai
                    hic consequuntur eum"
                    icon={<FaMobile/>}
                />
                <Card
                    title="UX Design"
                    des="lorem ipsum dolor amet dlff mera paisa ha toh badi baat hai
                    hic consequuntur eum"
                    icon={<SiRockylinux/>}
                />
                <Card
                    title="Hosting Websites"
                    des="lorem ipsum dolor amet dlff mera paisa ha toh badi baat hai
                    hic consequuntur eum"
                    icon={<IoGlobe/>}
                />
            </div>
        </section>
    )
}



export default Features