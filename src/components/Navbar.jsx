import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-icons">
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
      </div>
    </nav>
  );
}

export default Navbar;
