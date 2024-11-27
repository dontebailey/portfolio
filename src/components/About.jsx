import { ABOUT_TEXT } from "../constants";
function About() {
  return (
    <div className="about-container">
      <h1 className="about-header">About Me</h1>
      <div className="about-image-container">
        <img src="/aboutPic.jpg" className="about-image"></img>
        <p className="about">{ABOUT_TEXT}</p>
      </div>
    </div>
  );
}

export default About;
