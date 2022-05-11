import Hero from "../components/Hero"
import About from "../components/About"
import Projects from '../components/Projects'
import Contact from "../components/Contact"


const Home = () => {
  return (
    <main className="home">
        <Hero />
        <About />
        <Projects />
        <Contact />
    </main>
  )
}

export default Home