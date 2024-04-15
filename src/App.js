import Navbar from './Components/navbar/Navbar';
import './App.css';
import Banner from './Components/banner/Banner';
import Features from './Components/features/Features';
import Project from './Components/Projects/Project';
import Resume from './Components/Resume/Resume';
import Contact from './Components/Contact/Contact';
function App() {
  return (
    <div className="bg-bodyColor w-full h-auto text-lightText">
      <div className='max-w-screen-xl mx-auto '>
        <Navbar/>
        <Banner/>
        <Features/>
        <Project/>
        <Resume/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
 