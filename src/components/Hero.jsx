import { HERO_CONTENT } from "../constants";
function Hero() {
  return (
    <div className="hero-container">
      <div className="text-section">
        <h1 className="name">Donte Bailey</h1>
        <span className="title">Software Developer</span>
        <p className="intro">{HERO_CONTENT}</p>
      </div>

      <div className="image-section">
        <img src="/donteBaileyProfile.jpg" className="profile-image"></img>
      </div>
    </div>
  );
}

export default Hero;
