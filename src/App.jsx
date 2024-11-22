 import About from "./components/About";
 import Getintouch from "./components/Getintouch";
 import HeroSection from "./components/HeroSection";
 import Mymantra from "./components/Mymantra";
 import Work from "./components/Work";
import Skills from "./components/Skills";

function App() {
  return (
    <>
       <HeroSection />
      <About /> 
      <Skills/>
        <Work />
      <Mymantra/>
      <Getintouch/>  
    </>
  );
}

export default App;
