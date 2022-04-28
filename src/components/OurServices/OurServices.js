import Outsourced from "../../images/outsourced.svg";
import Compliance from "../../images/compliancesupport.svg";
import Bespoke from "../../images/bespokereviews.svg";
import Licence from "../../images/licenceapplications.svg";
import Training from "../../images/training.svg";
import Remediation from "../../images/remediationsupport.svg";

import "./OurServices.css";

function OurServices() {
  return (
    <>
      <div className="main-container">
        <div className="child-container" id="firstDiv">
          <div></div>
          <div></div>
          <div>
            <img className="" src={Outsourced} alt="" />
          </div>
          <div className="text-div">
            <p className="service-name">Outsourced compliance</p>
            <p className="service-desc">
              Our experienced team can fulfil compliance officer and MLRO
              requirements for any business.
            </p>
          </div>
          <div>
            <img className="" src={Licence} alt="" />
          </div>
          <div className="text-div">
            <p className="service-name">Licence applications</p>
            <p className="service-desc">
              We can assist financial services firms wanting to set up regulated
              entities.
            </p>
          </div>
        </div>
        <div className="child-container" id="secondDiv">
          <div></div>
          <div>
            <p className="our-services-title">Our Services</p>
          </div>
          <div>
            <img className="" src={Compliance} alt="" />
          </div>
          <div className="text-div">
            <p className="service-name">Compliance support</p>
            <p className="service-desc">
              We provide ad hoc and continuing support to a firm’s inhouse
              compliance team seamlessly.
            </p>
          </div>
          <div>
            <img className="" src={Training} alt="" />
          </div>
          <div className="text-div">
            <p className="service-name">Training</p>
            <p className="service-desc">
              We can provide tailored material covering areas such as anti-money
              laundering, compliance, and corporate governance.
            </p>
          </div>
        </div>
        <div className="child-container" id="thirdDiv">
          <div></div>
          <div></div>
          <div>
            <img className="" src={Bespoke} alt="" />
          </div>
          <div className="text-div">
            <p className="service-name">Bespoke reviews</p>
            <p className="service-desc">
              We can conduct detailed reviews of firm’s operations against
              regulatory requirements and identify any gaps.
            </p>
          </div>
          <div>
            <img className="" src={Remediation} alt="" />
          </div>
          <div className="text-div">
            <p className="service-name">Remediation support</p>
            <p className="service-desc">
              We can assist firms to remediate deficiencies uncovered by
              Internal Audits or regulators.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurServices;
