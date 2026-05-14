import '../Styles/skills.css';

function Skills() {
  const skillsData = [
    {
      category: 'Frontend',
      skills: ['React', 'Angular', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'Responsive Design']
    },
    {
      category: 'Backend',
      skills: ['Python', 'API Development', 'API Consumption', 'Web Development']
    },
    {
      category: 'Databases',
      skills: ['SQL', 'Relational Databases', 'Data Management']
    },
    {
      category: 'Full Stack',
      skills: ['Full Stack Web Development', 'Web Architecture', 'End-to-End Development', 'Mobile Development']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skillsData.map((skillGroup, index) => (
            <div key={index} className="skill-card">
              <h3>{skillGroup.category}</h3>
              <div className="skills-list">
                {skillGroup.skills.map((skill, i) => (
                  <span key={i} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
