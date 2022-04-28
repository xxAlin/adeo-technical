import React, { Fragment } from "react";
import AppNavbar from "../AppNavbar/AppNavbar";
import MainContent from "../MainContent/MainContent";
import MiddleMouse from "../MiddleMouse/MiddleMouse";
import OurServices from "../OurServices/OurServices";
import OurCoreValues from "../OurCoreValues/OurCoreValues";
import OurCoreValuesGraphic from "../OurCoreValues/OurCoreValuesGraphic";
import AboutUs from "../AboutUs/AboutUs";
import OurTeam from "../OurTeam/OurTeam";
import ContactUs from "../ContactUs/ContactUs";
import Footer from "../Footer/Footer";

function Dashboard() {
  return (
    <Fragment>
      <div className="container">
        <div className="nav-bar-container">
          <AppNavbar />{" "}
        </div>
        {/* <div className="main-content-container">
          <div className="main-content-left">
            <MainContent />
          </div>
        </div> */}
        {/* <div className="middle-mouse-container">
          <MiddleMouse />
        </div> */}
        <div className="our-services-container">
          <OurServices />
        </div>
      </div>
      <div className="core-values-container">
        <div className="core-values-container2">
          <div className="core-values-graphic-container">
            <OurCoreValuesGraphic />
          </div>
          <div className="core-values-data-container">
            <OurCoreValues />
          </div>
        </div>
      </div>
      <div className="big-container">
        <div className="about-us-container">
          <AboutUs />
        </div>
        <div>
          <OurTeam />
        </div>
        <div>
          <ContactUs />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </Fragment>
  );
}

export default Dashboard;
