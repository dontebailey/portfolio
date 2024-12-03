import { EXPERIENCES } from "../constants";
function Experience() {
  return (
    <div className="experience-container">
      <h1 className="experience-header">Experience</h1>
      <div className="sections-container">
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="experience">
            <div className="year-section">
              <p className="year">{experience.year}</p>
            </div>
            <div className="role-section">
              <h6 className="role">{experience.role}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
