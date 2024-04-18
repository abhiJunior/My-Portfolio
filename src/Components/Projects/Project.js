import Title from "../layouts/Title"
import ProjectCard from "./ProjectCard"
const Project = ()=>{
    return (
        <section id="projects"
            className="w-full py-20 border-b-[1px] border-b-black"
        >
            <div className="flex justify-center items-center text-center">
                <Title
                    title="VISTI MY PORTOFOLIO AND KEEP YOUR FEEDBACK"
                    des="My Projects"
                />
            </div > 
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
                <ProjectCard
                    githublink = "https://github.com/abhiJunior/Weather-App"
                    projectlink = "https://abhijunior.github.io/Weather-App/"
                    title = "Weather App"
                    des="I designed and developed a weather application using vanilla JavaScript, HTML, and CSS. The app provides users with real-time weather updates for their location, displaying key information such as temperature, humidity, wind speed, and weather description. "
                    src="https://images.pexels.com/photos/125510/pexels-photo-125510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
                <ProjectCard
                    title = "E-commerce Website"
                    des="lorem ipsum dolor amet dlff mera paisa ha toh badi baat hai
                    hic consequuntur eum"
                    src="https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
                />
                <ProjectCard
                    
                    title = "Book My Show clone"
                    des="lorem ipsum dolor amet dlff mera paisa ha toh badi baat hai
                    hic consequuntur eum"
                    src="https://images.pexels.com/photos/2265487/pexels-photo-2265487.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
                <ProjectCard
                    title = "Kanban Board"
                    des="lorem ipsum dolor amet dlff mera paisa ha toh badi baat hai
                    hic consequuntur eum"
                    src="https://images.pexels.com/photos/18085329/pexels-photo-18085329/free-photo-of-azabudai-district-name-in-tokyo.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
                <ProjectCard
                    title = "Chatting App"
                    des="lorem ipsum dolor amet dlff mera paisa ha toh badi baat hai
                    hic consequuntur eum"
                    src="https://images.pexels.com/photos/4350099/pexels-photo-4350099.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
                <ProjectCard
                    title = "To Do List"
                    des="lorem ipsum dolor amet dlff mera paisa ha toh badi baat hai
                    hic consequuntur eum"
                    src="https://images.pexels.com/photos/1226398/pexels-photo-1226398.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
            </div>

        </section>
    )
}

export default Project