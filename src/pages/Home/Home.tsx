import NavBar from "../../components/NavBar/NavBar"
import Hero from "../section/Hero/Hero"
import About from "../section/About/About"
import Habilidades from "../section/About/Habilidades"
import Projects from "../section/Projects/Projects"
import Footer from "../section/Footer/Footer"


const Home = () => {


  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Habilidades />
      <Projects />
      <Footer />
    </>
  )
}

export default Home