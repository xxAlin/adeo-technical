import { Card } from "antd";
import { useState } from "react";
import { Modal } from "antd";

import "./OurTeam.css";
import AnaSewell from "../../images/staff/ana-sewell.jpg";
import BarryCotter from "../../images/staff/barry-cotter.jpg";
import BhavikaAsar from "../../images/staff/bhavika-asar.jpg";
import FloraHoward from "../../images/staff/flora-howard.jpg";
import JadeEfole from "../../images/staff/jade-efole.jpg";
import JaquilineMartin from "../../images/staff/jaquiline-martin.jpg";
import JenniferCurtin from "../../images/staff/jennifer-curtin.jpg";
import KashifKhan from "../../images/staff/kashif-khan.jpg";
import NatalieHodgins from "../../images/staff/natalie-hodgins.jpg";
import ShamshadKhan from "../../images/staff/shamshad-khan.jpg";
import VaishnaviSrinivasan from "../../images/staff/vaishnavi-srinivasan.jpg";
import LinkedIn from "../../images/formicon/linkedin.svg";
import React from "react";

const { Meta } = Card;

const cards = [
  {
    key: "1",
    imagePath: "../../images/staff/natalie-hodgins.jpg",
    cardTitle: "Natalie Hodgins",
    staffRole: "FOUNDING PARTNER",
    cardImage: NatalieHodgins,
    modalDescription:
      "Natalie has worked in the field of anti-money laundering both as a lawyer and as a compliance professional for the past 20 years. She has worked in the DIFC since 2014 specialising in assisting firms in the insurance sector. Her clients included some of the world’s largest reinsurance companies and brokerages operating within the DIFC. Natalie has a Bachelor of Arts degree in law from the University of Oxford and a Master of Science degree in forensic psychology and criminology from the Open University. She has also completed the Diploma in Compliance awarded by the International Compliance Association.",
  },
  {
    key: "2",
    cardTitle: "Shamshad Khan",
    staffRole: "FOUNDING PARTNER",
    cardImage: ShamshadKhan,
    modalDescription:
      "Shamshad has more than 20 years' experience in the financial services industry and has held senior compliance positions with several financial institutions in the insurance, asset management, investment banking, and private banking sectors in both Canada and the UAE. Having worked as an inhouse and outsourced Compliance Officer/MLRO for several firms authorised by the DFSA, Shamshad has a Bachelor of Commerce degree in Accounting from Concordia University. She has completed the Investment Funds course from the Institute of Canadian Bankers as well as the Officers', Partners’, and Directors' course from the Investment Funds Institute of Canada.",
  },
  {
    key: "3",
    cardTitle: "Barry Cotter",
    staffRole: "PARTNER",
    cardImage: BarryCotter,
    modalDescription:
      "Having begun his career in financial services compliance in London, Barry has been in the UAE since 2012. Having worked in both consulting and inhouse capacities across a range of financial services firms, Barry has a broad range of experience that he brings to Clarity. Barry has a Bachelor of Science degree in Chemistry from the University of Nottingham. He has also obtained the Advanced Diploma from the Chartered Insurance Institute and the Diploma in Compliance awarded by the International Compliance Association.",
  },

  {
    key: "4",
    cardTitle: "Ana Sewell",
    staffRole: "CONSULTANT",
    cardImage: AnaSewell,
    modalDescription:
      "Natalie has worked in the field of anti-money laundering both as a lawyer and as a compliance professional for the past 20 years. She has worked in the DIFC since 2014 specialising in assisting firms in the insurance sector. Her clients included some of the world’s largest reinsurance companies and brokerages operating within the DIFC. Natalie has a Bachelor of Arts degree in law from the University of Oxford and a Master of Science degree in forensic psychology and criminology from the Open University. She has also completed the Diploma in Compliance awarded by the International Compliance Association.",
  },
  {
    key: "5",
    cardTitle: "Bhavika Asar",
    staffRole: "CONSULTANT",
    cardImage: BhavikaAsar,
    modalDescription:
      "Natalie has worked in the field of anti-money laundering both as a lawyer and as a compliance professional for the past 20 years. She has worked in the DIFC since 2014 specialising in assisting firms in the insurance sector. Her clients included some of the world’s largest reinsurance companies and brokerages operating within the DIFC. Natalie has a Bachelor of Arts degree in law from the University of Oxford and a Master of Science degree in forensic psychology and criminology from the Open University. She has also completed the Diploma in Compliance awarded by the International Compliance Association.",
  },
  {
    key: "6",
    cardTitle: "Flora Howard",
    staffRole: "SENIOR CONSULTANT",
    cardImage: FloraHoward,
    modalDescription:
      "Natalie has worked in the field of anti-money laundering both as a lawyer and as a compliance professional for the past 20 years. She has worked in the DIFC since 2014 specialising in assisting firms in the insurance sector. Her clients included some of the world’s largest reinsurance companies and brokerages operating within the DIFC. Natalie has a Bachelor of Arts degree in law from the University of Oxford and a Master of Science degree in forensic psychology and criminology from the Open University. She has also completed the Diploma in Compliance awarded by the International Compliance Association.",
  },
  {
    key: "7",
    cardTitle: "Jade Efole",
    staffRole: "CONSULTANT",
    cardImage: JadeEfole,
    modalDescription:
      "Natalie has worked in the field of anti-money laundering both as a lawyer and as a compliance professional for the past 20 years. She has worked in the DIFC since 2014 specialising in assisting firms in the insurance sector. Her clients included some of the world’s largest reinsurance companies and brokerages operating within the DIFC. Natalie has a Bachelor of Arts degree in law from the University of Oxford and a Master of Science degree in forensic psychology and criminology from the Open University. She has also completed the Diploma in Compliance awarded by the International Compliance Association.",
  },
  {
    key: "8",
    cardTitle: "Jaquiline Martin",
    staffRole: "DIRECTOR",
    cardImage: JaquilineMartin,
    modalDescription:
      "Natalie has worked in the field of anti-money laundering both as a lawyer and as a compliance professional for the past 20 years. She has worked in the DIFC since 2014 specialising in assisting firms in the insurance sector. Her clients included some of the world’s largest reinsurance companies and brokerages operating within the DIFC. Natalie has a Bachelor of Arts degree in law from the University of Oxford and a Master of Science degree in forensic psychology and criminology from the Open University. She has also completed the Diploma in Compliance awarded by the International Compliance Association.",
  },
  {
    key: "9",
    cardTitle: "Jennifer Curtin",
    staffRole: "CONSULTANT",
    cardImage: JenniferCurtin,
    modalDescription:
      "Natalie has worked in the field of anti-money laundering both as a lawyer and as a compliance professional for the past 20 years. She has worked in the DIFC since 2014 specialising in assisting firms in the insurance sector. Her clients included some of the world’s largest reinsurance companies and brokerages operating within the DIFC. Natalie has a Bachelor of Arts degree in law from the University of Oxford and a Master of Science degree in forensic psychology and criminology from the Open University. She has also completed the Diploma in Compliance awarded by the International Compliance Association.",
  },
  {
    key: "10",
    cardTitle: "Kashif Khan",
    staffRole: "ANALYST",
    cardImage: KashifKhan,
    modalDescription:
      "Natalie has worked in the field of anti-money laundering both as a lawyer and as a compliance professional for the past 20 years. She has worked in the DIFC since 2014 specialising in assisting firms in the insurance sector. Her clients included some of the world’s largest reinsurance companies and brokerages operating within the DIFC. Natalie has a Bachelor of Arts degree in law from the University of Oxford and a Master of Science degree in forensic psychology and criminology from the Open University. She has also completed the Diploma in Compliance awarded by the International Compliance Association.",
  },
  {
    key: "11",
    cardTitle: "Vaishnavi Srinivasan",
    staffRole: "DIRECTOR",
    cardImage: VaishnaviSrinivasan,
    modalDescription:
      "Natalie has worked in the field of anti-money laundering both as a lawyer and as a compliance professional for the past 20 years. She has worked in the DIFC since 2014 specialising in assisting firms in the insurance sector. Her clients included some of the world’s largest reinsurance companies and brokerages operating within the DIFC. Natalie has a Bachelor of Arts degree in law from the University of Oxford and a Master of Science degree in forensic psychology and criminology from the Open University. She has also completed the Diploma in Compliance awarded by the International Compliance Association.",
  },
  {
    //EMPYT DIV CONTAINER
    key: "12",
    cardTitle: "",
    staffRole: "",
    cardImage: "",
    modalDescription: "",
  },
];

function DataModal(cardKey) {
  let result = cards.filter((card) => card.key == cardKey);
  let staffName = result[0].cardTitle;
  let staffRole = result[0].staffRole;
  let staffImage = result[0].imagePath;
  let staffDesc = result[0].modalDescription;
  console.log(result);
  Modal.info({
    content: (
      <div className="modal-container">
        <div className="modal-images">
          <div className="profile-photo">
            <img alt="example" className="modal-profile" src={AnaSewell} />
          </div>
          <div className="linkedin">
            <img alt="example" className="" src={LinkedIn} />
            <span>LinkedIn</span>
          </div>
        </div>
        <div className="modal-description">
          <span className="staff-name">{staffName}</span>
          <span className="staff-role">{staffRole}</span>
          <span className="staff-desc">{staffDesc}</span>
        </div>
      </div>
    ),
    style: { top: 0, height: 500 },
    width: "70%",
    onOk() {},
    closable: true,
    maskClosable: true,
    centered: true,
    icon: false,
  });
}

function OurTeam() {
  return (
    <>
      <div className="our-team-title">
        <p>Our team</p>
      </div>
      <div className="staff-card">
        {cards.map((card) => {
          if (card.cardTitle) {
            return (
              <div className="staff-individual">
                <Card
                  hoverable
                  className="each-card"
                  key={card.key}
                  onClick={() => DataModal(card.key)}
                  cover={
                    <img
                      alt="example"
                      className="card-image"
                      src={card.cardImage}
                    />
                  }
                  actions={[<a href="">View Bio</a>]}
                >
                  <Meta title={card.cardTitle} description={card.staffRole} />
                </Card>
              </div>
            );
          } else {
            return <div className="staff-individual"></div>;
          }
        })}
      </div>
    </>
  );
}
export default OurTeam;
