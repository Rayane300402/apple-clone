import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import ProductView from "./components/ProductView"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ShowcaseView from "./components/ShowcaseView";
import Performance from "./components/Performance";
import Features from "./components/Features";
import Highlights from "./components/Highlights";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger) // MAKES IT GLOBALLY ACCESSiBLE 

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductView />
      <ShowcaseView />
      <Performance />
      <Features />
      <Highlights />
      <Footer />
    </main>
  )
}

export default App

