import "../styles/featured.scss";

export default function Featured() {
  return (
    <section id="featured" className="featured container section">
      <h3 className="featured__subtitle">Featured Project</h3>
      <div className="featured__wrapper">
        <h2 className="featured__title">Slaying The Dragon</h2>
        <a href="#" className="featured__link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037.75.75 0 0 1-.646 1.353 5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353 5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037.75.75 0 0 1-.354-1Z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
      <p className="featured__description">
        Cillum voluptate tempor cillum culpa cupidatat labore voluptate ullamco
        voluptate culpa sunt nulla non. Ad cupidatat dolore quis amet pariatur
        consectetur ullamco. Officia quis id velit duis cupidatat sunt deserunt
        do aliquip nulla laboris.
      </p>
      <div className="featured__info-container">
        <div>
          <h3 className="featured__label">Tech stack</h3>
          <ul className="featured__tech-stack">
            <li className="featured__info">TailwindCSS</li>
            <li className="featured__info">ReactJS</li>
            <li className="featured__info">React-hook-form</li>
            <li className="featured__info">NextJS</li>
            <li className="featured__info">Axios</li>
            <li className="featured__info">Supabase</li>
            <li className="featured__info">Stripe</li>
          </ul>
        </div>

        <div>
          <h3 className="featured__label">Project type</h3>
          <p className="featured__info">Fullstack-Jamstack</p>
        </div>

        <div>
          <h3 className="featured__label">Timeline</h3>
          <p className="featured__info">December 2022 - present</p>
        </div>
      </div>

      <div className="featured__img-container">
        <div className="featured__img-wrapper">
          <img src="/slayingthedragon.png" alt=" slayingthedragon" />
        </div>

        <div className="featured__img-wrapper">
          <img src="/courses.png" alt="courses-img" />
        </div>

        <div className="featured__img-wrapper">
          <img src="/pricing.png" alt="pricing-img" />
        </div>

        <div className="featured__img-wrapper">
          <img src="/features.png" alt="features-img" />
        </div>

        <div className="featured__img-wrapper">
          <img src="/faq.png" alt="faq-img" />
        </div>

        <div className="featured__img-wrapper">
          <img src="/blog.png" alt="blog-img" />
        </div>

        <div className="featured__img-wrapper">
          <img src="/signin.png" alt="signin-img" />
        </div>

        <div className="featured__img-wrapper">
          <img src="/app.png" alt="app-img" />
        </div>
      </div>
    </section>
  );
}
