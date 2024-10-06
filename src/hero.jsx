/* eslint-disable react/no-unescaped-entities */
import "../styles/Hero.scss";

export default function Hero() {
	return (
		<section className="hero container ">
			<img src="./hero.jpg" alt="Profile" className="hero__img" />
			<h2 className="hero__subtitle">Hi, I'm Ramzi 👋</h2>
			<h1 className="hero__title">FRONT-END <br /> WEB DEVELOPER. </h1>
      <p className="hero__description">A passionate <strong>Frontend / Fullstack-Jamstack</strong> web developer and <strong>UI/UX</strong> enthusiast specialized in building stunning pixel-perfect interactive websites/applications.</p>
      <button className="hero__btn btn" type="button">Reach Out</button>
		</section>
	);
}
