import Navbar from "./components/Navbar";
import Contact from "./sections/contact/Contact";
import Home from "./sections/landing/Home";
import Projects from "./sections/projects/Projects";
import Timeline from "./sections/timeline/Timeline";
import Tools from "./sections/tools/Tools";

function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <Timeline/>
      <Projects/>
      <Tools/>
      <Contact/>
    </>
  )
}

export default App
