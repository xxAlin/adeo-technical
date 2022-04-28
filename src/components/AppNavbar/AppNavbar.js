import { React, useState } from "react";
import "./AppNavbar.css";
import clarityLogo from "../../images/claritylogo2.png";

import MouseImage from "../../images/middlemouse.svg";

function AppNavbar() {
  const [isActive, setActive] = useState("false");
  const ToggleClass = () => {
    setActive(!isActive);
  };

  return (
    <>
      <nav className={isActive ? "navbar nav-active" : "navbar"}>
        <div className="logo-div">
          <img
            alt=""
            className={isActive ? "clarity-logo active" : "clarity-logo"}
            src={clarityLogo}
          />
        </div>
        <div>
          <ul className={isActive ? "nav-list" : "nav-list  active"}>
            <li className="list-item">
              <a href="#">Our services </a>
            </li>
            <li className="list-item">
              <a href="#">Core values</a>
            </li>
            <li className="list-item">
              <a href="#">About us</a>
            </li>
            <li className="list-item">
              <a href="#">Our team</a>
            </li>
          </ul>
        </div>

        <div>
          <button className={isActive ? "contact-us" : "contact-us active"}>
            Contact us
          </button>
        </div>

        <div className="menu" onClick={ToggleClass}>
          {/* <div className="menu-line"></div>
          <div className="menu-line"></div>
          <div className="menu-line"></div> */}

          <div id="nav-icon1" className={isActive ? "" : "open"}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      <div
        className={
          isActive
            ? "main-content-left active-main-content"
            : "main-content-left"
        }
      >
        <div>
          <p className="main-text">
            We deliver worry free <br /> compliance solutions that let <br />{" "}
            you focus on what you do best
          </p>
          <p className="secondary-text">
            Our people, knowledge, experience, and connections are focused on{" "}
            <br />
            removing the stress from navigating the complex regulatory
            landscape.
          </p>
        </div>

        <div className="button-links">
          <button className="our-services-button">Our services</button>

          <a className="contact-us-link" href="">
            Contact us
          </a>
        </div>
      </div>

      <div
        className={
          isActive
            ? "middle-mouse-container flex-centre"
            : "middle-mouse-container"
        }
      >
        <img
          className="mouse-image"
          src={MouseImage}
          alt="Mouse Image in the middle"
        />
      </div>
    </>
  );
}

export default AppNavbar;
