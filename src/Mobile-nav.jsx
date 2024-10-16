import "../styles/mobile-nav.scss"


// eslint-disable-next-line react/prop-types
export default function  MobileNav({linksHandler, toggleTheme}) {

  return (
    <div className="mobile-nav">
      <nav>
        <ul className="mobile-nav__menu">
          <li><a href="#about" onClick={linksHandler} className="mobile-nav__link">About</a></li>
          <li><a href="#featured" onClick={linksHandler} className="mobile-nav__link">Work</a></li>
          <li><a href="#contact" onClick={linksHandler} className="mobile-nav__link">Contact</a></li>
          <li className="mobile-nav__link-line"></li>
          <li><button onClick={toggleTheme} className="mobile-nav__sun"><i className="ri-sun-fill" /></button></li>
          <li><a href="" className="mobile-nav__btn btn">Resume</a></li>
        </ul>
      </nav>
    </div>
  )
}
