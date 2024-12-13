import { EXPERIENCES } from "../constants";
import "./Experience.css";

function Experience() {
  return (
    <div className="experience-container">
      <h1 className="experience-header">Experience</h1>

      <div className="experience-column">
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="experience-card">
            <div>
              <span className="year">{experience.year}</span>
              <h3 className="role">{experience.role}</h3>
              <p className="company">{experience.company}</p>
              <p className="description">{experience.description}</p>

              <div className="tech-stack">
                {experience.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
