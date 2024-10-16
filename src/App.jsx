import { useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Featured from "./Featured";
import Footer from "./Footer";
import MobileNav from "./Mobile-nav";
import NavBar from "./NavBar";
import Work from "./Work";
import Hero from "./hero";

export default function App() {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  function toggleMobileNav() {
    // -----------------------------------------
    // setIsMobileNavVisible(!isMobileNavVisible);
    // if (isMobileNavVisible) {
    //   document.body.style.overflowY = "hidden";
    // } else {
    //   document.body.style.overflowY = "auto";
    // }
    // ------------------------------------------

    //  NOTE: if we write the code as shown above , the component rerenders after
    //  updating the state and the function logic is skipped(applies in the next render)
    //  so use the below way to solve this problem( seems like a professional solution)

    setIsMobileNavVisible((prev) => {
      document.body.style.overflowY = !prev ? "hidden" : "auto";
      return !prev;
    });
  }

  function linksHandler() {
    setIsMobileNavVisible((prev) => {
      document.body.style.overflowY = "auto";
      return !prev;
    });
  }

  function toggleTheme() {
    document.body.classList.toggle("lightmode");
  }

  return (
    <>
      <NavBar toggleMobileNav={toggleMobileNav} toggleTheme={toggleTheme} />
      {isMobileNavVisible && (
        <MobileNav linksHandler={linksHandler} toggleTheme={toggleTheme} />
      )}

      <Hero />
      <About />
      <Featured />
      <Work />
      <Contact />

      <Footer />
    </>
  );
}
