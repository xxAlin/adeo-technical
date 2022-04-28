import AboutUsImage from "../../images/aboutus.png";
import "./AboutUs.css";

function AboutUs() {
  return (
    <>
      <div className="description-div">
        <p className="title-area">About us</p>
        <p className="description-area">
          Clarity was created in August 2020 to fill the gap in the market for
          premium compliance services delivery. Founded by two senior
          consultants eager to escape the corporate compliance worked, Clarity
          is all about bringing passion and energy to an area which is
          frequently underestimated or ignored.
          <br /> <br />
          At Clarity, compliance isn’t an afterthought, it underpins the
          structure of a company’s entire DIFC operation. Holding respect for
          that fact at the heart of everything we do means your interests are
          protected. Trust us to help you lay the right foundation so your
          business can shine.
        </p>
      </div>
      <div className="about-us-image-div">
        <img className="about-us-image" src={AboutUsImage} alt="" />
      </div>
    </>
  );
}

export default AboutUs;
