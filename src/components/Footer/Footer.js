import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="left-menu">
          <p className="claritysolutions">© 2022 Clarity Solutions</p>
          {/* <p className="">Terms and Conditions</p> */}
          <p className="terms-link">
            <Link to="/termsandconditions">Terms and Conditions</Link>
          </p>
        </div>
        <div className="right-menu">
          <p className="websitebyadeo">Website by Adeo</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
