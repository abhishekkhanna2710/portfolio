import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/Intro/Intro';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Project from './Components/Projects/Project';
import Contact from './Components/Contacts/Contact';
import Footer from './Components/Footer/Footer';
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App">

    
      <Navbar />
        <Intro />
        <About />
        <Skills />
        <Project />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
