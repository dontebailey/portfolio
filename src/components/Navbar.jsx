import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-icons">
        <a
          href="https://www.linkedin.com/in/donte-bailey-082884184/"
          className="navbar-icon"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/dontebailey" className="navbar-icon">
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/donte_bailey/"
          className="navbar-icon"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
