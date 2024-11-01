import './App.css'
import About from './section/About'
import Contact from './section/Contact'
import Footer from './section/Footer'
import Header from './section/Header'
import Hero from './section/Hero'
import MiniProjects from './section/MiniProjects'
import Projects from './section/Projects'
import Tape from './section/Tape'
import Testimonials from './section/Testimonials'
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <Tape />
      {/* <Testimonials /> */}
      <MiniProjects />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default App
