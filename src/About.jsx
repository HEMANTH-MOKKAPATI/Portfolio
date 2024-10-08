import "../styles/About.scss";

/* eslint-disable react/no-unescaped-entities */
export default function About() {
	return (
		<section className="about container section">
			<div className="about__content">
				<h2 className="about__title">About</h2>

				<p className="about__description">
					Hello there! I'm Ramzi, a{" "}
					<strong>Frontend / Fullstack-Jamstack</strong> web developer based
					near Montreal. I wake up in the morning, grab a cup of timmies coffee,
					open up my laptop and build things that live on the web all day,
					everyday.
				</p>

				<p className="about__description">
					People who know me say I'm obsessed, that's fair, I am very driven and
					love learning new things.
				</p>

				<p className="about__description">
					I recently created a YouTube channel 
					called <a>Slaying The Dragon</a> where I upload videos on front-end web
					development topics.
				</p>

				<hr className="about__hr"/>

				<h3 className="about__subtitle">Technologies</h3>
				<div className="about__ul-container">
					<ul className="about__ul">
						<li className="about__list">JavaScript (ES6+)</li>
						<li className="about__list">CSS</li>
						<li className="about__list">HTML</li>
					</ul>
					<ul className="about__ul">
						<li className="about__list">ReactJS</li>
						<li className="about__list">NextJS</li>
						<li className="about__list">TailwindCSS</li>
					</ul>
				</div>
			</div>

			<div className="about__img-container">
				<img src="./about.jpg" alt="Profile pic" className="about__img" />
			</div>
		</section>
	);
}
