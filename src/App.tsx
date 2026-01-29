import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import ProductView from "./components/ProductView"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ShowcaseView from "./components/ShowcaseView";

gsap.registerPlugin(ScrollTrigger) // MAKES IT GLOBALLY ACCESSiBLE 

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductView />
      <ShowcaseView />
    </main>
  )
}

export default App

