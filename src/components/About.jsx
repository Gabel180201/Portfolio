import '../Styles/about.css';

function About() {
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Angular',
    'Bootstrap',
    'Node.js',
    'Express',
    'SQL',
    'REST APIs',
    'Python',
    'Git & GitHub'
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Graduated in Full Stack Web Development with training in modern frontend and backend technologies.
            </p>
            <p>
              I have experience building dynamic web applications, responsive user interfaces, and functional APIs using technologies such as React, Angular, JavaScript, Node.js, SQL databases, HTML, CSS, Bootstrap, and Python.
            </p>
            <p>
              I am passionate about creating clean, functional, and visually appealing web solutions while continuing to strengthen my skills as a full stack developer.
            </p>
            <div className="tech-stack">
              <h3>Tech Stack</h3>
              <div className="tech-badges">
                {skills.map((skill, index) => (
                  <span key={index} className="tech-badge">{skill}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="about-card">
            <div className="card-item">
              <h3>4</h3>
              <p>Personal Projects</p>
            </div>
            <div className="card-item">
              <h3>Full Stack</h3>
              <p>Web Developer</p>
            </div>
            <div className="card-item">
              <h3>100%</h3>
              <p>Commitment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
