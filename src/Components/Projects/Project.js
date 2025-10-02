import Title from "../layouts/Title";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <section
      id="projects"
      className="w-full px-4 sm:px-8 lg:px-20 py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND LEAVE YOUR FEEDBACK"
          des="My Projects"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-14 mt-10">
        <ProjectCard
          githublink="https://github.com/abhiJunior/Weather-App"
          src="/projectPhotos/WeatherPhoto.jpg"
          projectlink="https://abhijunior.github.io/Weather-App/"
          title="Weather App"
          des="I designed and developed a weather application using vanilla JavaScript, HTML, and CSS. The app provides users with real-time weather updates for their location."
        />
        <ProjectCard
          githublink="https://github.com/abhiJunior/movie-app"
          projectlink="https://movie-app-black-rho.vercel.app/"
          title="Movie Explorer App"
          des="Developed a responsive movie browsing platform using React, Redux, and TailwindCSS with real-time data from RapidAPI."
          src="/projectPhotos/movieappPhoto.jpg"
        />
        <ProjectCard
          githublink="https://bookmyseat-frontend.onrender.com/"
          projectlink="https://github.com/abhiJunior/movie-app"
          title="BookMySeat"
          des="Full-stack ticket booking platform using MERN stack with real-time seat selection and secure authentication."
          src="/projectPhotos/BookMySeatPhoto.jpg"
        />
        <ProjectCard
          projectlink="https://hockeyrk-website.vercel.app/"
          title="Hockey Academy Website"
          des="Modern, SEO-friendly website using React and Vite with responsive layouts and smooth animations, boosting user engagement by 30%."
          src="/projectPhotos/hockeyPhoto.jpg"
        />
        <ProjectCard
          projectlink="https://padelic-project.vercel.app/"
          title="Padelic Project"
          des="Dynamic website for a premier padel club using React and Vite, with real-time court booking and event scheduling."
          src="/projectPhotos/padelicPhoto.jpg"
        />
        <ProjectCard
          projectlink="https://sanatana-dharma-yatra.vercel.app/"
          title="Sanatana Dharma Yatra"
          des="Responsive, SEO-optimized website using React and Vite for promoting spiritual pilgrimages and cultural events."
          src="/projectPhotos/dharmaPhoto.jpg"
        />
      </div>
    </section>
  );
};

export default Project;
