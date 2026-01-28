import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import ProductView from "./components/ProductView"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger) // MAKES IT GLOBALLY ACCESSiBLE 

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductView />
    </main>
  )
}

export default App

