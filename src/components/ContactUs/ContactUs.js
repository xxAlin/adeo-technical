import "./ContactUs.css";
import AddressIcon from "../../images/formicon/location-icon.svg";
import EmailIcon from "../../images/formicon/email-icon.svg";
import PhoneIcon from "../../images/formicon/phone-icon.svg";

function AboutUs() {
  return (
    <>
      <div className="contact-us-div">
        <p className="brand">
          <span>Contact Us</span>
        </p>

        <div className="wrapper">
          <div className="company-info">
            <p className="company-info-title">Contact Information</p>
            <p className="company-info-desc">
              Complete the form or use the contact details below to get in touch
              with us.
            </p>

            <ul>
              <li>
                <img alt="example" className="" src={EmailIcon} />{" "}
                <p>hello@claritysolutions.ae</p>
              </li>
              <li>
                <img alt="example" className="" src={PhoneIcon} />{" "}
                <p>+971 (0)4 439 6761</p>
              </li>
              <li>
                <img alt="example" className="" src={AddressIcon} />
                <p>
                  123 Fake St <br /> Central Business Centre <br />
                  Dubai
                  <br /> United Arab Emirates
                </p>
              </li>
            </ul>
          </div>

          <div className="contact">
            <form id="contact-form">
              <p>
                <label>First Name</label>
                <input type="text" name="name" id="name" required />
              </p>

              <p>
                <label>Last Name</label>
                <input type="text" name="company" id="company" />
              </p>

              <p>
                <label>E-mail</label>
                <input type="email" name="email" id="email" required />
              </p>

              <p>
                <label>Phone</label>
                <input type="text" name="phone" id="phone" />
              </p>

              <p className="full">
                <label>Message</label>
                <textarea name="message" rows="5" id="message"></textarea>
              </p>

              <p className="full">
                <button type="submit">Send message</button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
