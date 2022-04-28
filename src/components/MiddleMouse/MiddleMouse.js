import MouseImage from "../../images/middlemouse.svg";
import "./MiddleMouse.css";

function MiddleMouse() {
  return (
    <img
      className="mouse-image"
      src={MouseImage}
      alt="Mouse Image in the middle"
    />
  );
}

export default MiddleMouse;
