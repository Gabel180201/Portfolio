import '../Styles/hero.css';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="gradient-text">Gabriel</span>
        </h1>
        <p className="hero-subtitle">
          Full Stack Developer passionate about creating innovative digital experiences
        </p>
        <div className="hero-cta">
          <button className="btn btn-primary">View My Work</button>
          <button className="btn btn-secondary">Download CV</button>
        </div>
      </div>
      <div className="hero-background">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>
    </section>
  );
}

export default Hero;
