import { useEffect, useState } from "react";
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
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    theme && document.body.classList.add(theme);
    setIsLightMode(theme === "lightmode");
  }, []);

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
    const isLightModeActive = document.body.classList.toggle("lightmode");

    if (isLightModeActive) {
      localStorage.setItem("theme", "lightmode");
    } else {
      localStorage.removeItem("theme");
      document.body.removeAttribute("class");
    }

    setIsLightMode(isLightModeActive);
  }

  return (
    <div>
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
    </div>
  );
}

function toggleMobileNav() {
  const prev = isMobileNavVisible;

  document.body.style.overflowY = !prev ? "hidden" : "auto";
  setIsMobileNavVisible(!prev);
}
