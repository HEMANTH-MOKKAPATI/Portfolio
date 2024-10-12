import About from "./About";
import Contact from "./Contact";
import Featured from "./Featured";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Work from "./Work";
import Hero from "./hero";

export default function App() {
  return (
    <>
      <NavBar />

      <Hero />
      <About />
      <Featured />
      <Work />
      <Contact />

      <Footer />
    </>
  );
} 
