import { IoGlobe } from "react-icons/io5";
import { SiRockylinux } from "react-icons/si";
import Title from "../layouts/Title";
import Card from "../layouts/Card";
import { FaBars, FaMobile } from "react-icons/fa";
import { AiFillAppstore } from "react-icons/ai";
import { TbSeo } from "react-icons/tb";

const Features = () => {
  return (
    <section id="features" className="w-full px-4 sm:px-8 lg:px-20 pb-20 border-b-[1px] border-b-black">
      <Title title="Features" des="What I Do" />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-20 mt-10">
        <Card
          title="Business Strategy"
          des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget."
          icon={<FaBars />}
        />
        <Card
          title="App Development"
          des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget."
          icon={<AiFillAppstore />}
        />
        <Card
          title="SEO Optimisation"
          des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget."
          icon={<TbSeo />}
        />
        <Card
          title="Web Development"
          des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget."
          icon={<FaMobile />}
        />
        <Card
          title="UX Design"
          des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget."
          icon={<SiRockylinux />}
        />
        <Card
          title="Hosting Websites"
          des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget."
          icon={<IoGlobe />}
        />
      </div>
    </section>
  );
};

export default Features;
