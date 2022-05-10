import Hero from "../components/Hero"
import About from "../components/About"
import Projects from '../components/Projects'


const Home = () => {
  return (
    <main className="home">
        <Hero />
        <About />
        <Projects />
    </main>
  )
}

export default Home