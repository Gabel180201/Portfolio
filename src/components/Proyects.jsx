import '../Styles/projects.css';

function Proyects() {
  const projects = [
    {
      id: 1,
      title: 'Task & Reminder Organizer',
      description: 'Task list and organization page with reminders, basic CRUD, API, and database integration',
      tech: ['React', 'Node.js', 'Express', 'SQL', 'REST API'],
      image: '✅',
      link: 'https://resilient-seahorse-a0abc6.netlify.app/'
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'Personal portfolio built to showcase projects, skills, and contact information',
      tech: ['React', 'CSS', 'Bootstrap'],
      image: '💼',
      link: '#'
    },
    {
      id: 3,
      title: 'Comics & Superheroes',
      description: 'A comics page featuring powerful superheroes, character details, and comic universe navigation',
      tech: ['React', 'JavaScript', 'CSS'],
      image: '🦸',
      link: '#'
    },
    {
      id: 4,
      title: 'Video Games Page',
      description: 'Video games page with game highlights, genres, and interactive browsing experience',
      tech: ['React', 'HTML', 'CSS'],
      image: '🎮',
      link: '#'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">{project.image}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>
              <a href={project.link} className="project-link">
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Proyects;
