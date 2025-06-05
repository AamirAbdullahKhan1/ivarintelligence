import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import About from "./components/About"
import Features from "./components/Features"
import Contact from "./components/Contact"
import Footer from "./components/Footer"


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <Features />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
