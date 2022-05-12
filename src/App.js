import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from './components/Projects'
import Contact from "./components/Contact"

function App() {
  return (
    <>
    <Router>
      <Navbar />
        <main className="home">
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
    </Router>
    </>
  );
}

export default App;
