import Background from "./components/Background";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./sections/landing/Home";
import Projects from "./sections/projects/Projects";
import Timeline from "./sections/timeline/Timeline";
import Tools from "./sections/tools/Tools";

function App() {

  return (
    <>
      <Background/>
      <div style={{ position: "relative" }}>
        <Navbar/>
        <Home/>
        <Timeline/>
        <Projects/>
        <Tools/>
        <Footer/>
      </div>
    </>
  )
}

export default App
