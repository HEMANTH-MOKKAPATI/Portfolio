import "../styles/NavBar.scss";

//prettier-ignore
// eslint-disable-next-line react/prop-types
export default function NavBar({toggleMobileNav, toggleTheme}) {
  return (
    <nav className="header container">

      <ul className="header__menu">

        <li><a className="header__link" href="#about">About</a></li>
        <li><a className="header__link" href="#featured">Work</a></li>
        <li><a className="header__link" href="#contact">Contact</a></li>

        <li className="header__line" />

        <li><button  onClick={toggleTheme} className="header__sun" type="button"><i className="ri-sun-fill" /></button></li>
        <li><a className="header__resume btn" href="#Resume">Resume</a></li>
        
      </ul>
      
      <button onClick={toggleMobileNav} className="header__bars" type="button"><i className="ri-menu-line" /></button>
    </nav>
  );
}
