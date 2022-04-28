import mainHeader from "../../images/mainheaderimage.png";
import "./MainContent.css";

function MainContent() {
  return (
    <>
      <div>
        <p className="main-text">
          We deliver worry free <br /> compliance solutions that let <br /> you
          focus on what you do best
        </p>
        <p className="secondary-text">
          Our people, knowledge, experience, and connections are focused on{" "}
          <br />
          removing the stress from navigating the complex regulatory landscape.
        </p>
      </div>

      <div className="button-links">
        <button className="our-services-button">Our services</button>

        <a className="contact-us-link" href="">
          Contact us
        </a>
      </div>
    </>
  );
}

export default MainContent;
