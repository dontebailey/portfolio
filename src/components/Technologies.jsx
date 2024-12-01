import { RiReactjsLine } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io5";
function Technologies() {
  return (
    <div className="technologies-container">
      <h1 className="technologies-header">Technologies</h1>
      <div className="widget-container">
        <p className="widget-border">
          <RiReactjsLine className="react-icon" />
        </p>
        <p className="widget-border">
          <SiJavascript className="javascript-icon" />
        </p>
        <p className="widget-border">
          <SiPython className="python-icon" />
        </p>
        <p className="widget-border">
          <TiHtml5 className="html-icon" />
        </p>
        <p className="widget-border">
          <IoLogoCss3 className="css-icon" />
        </p>
      </div>
    </div>
  );
}

export default Technologies;
