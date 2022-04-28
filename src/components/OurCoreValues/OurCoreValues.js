import React from "react";
import "antd/dist/antd.min.css";
import "./OurCoreValues.css";
import { Collapse } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

const description = {
  text1:
    "Our clients are the lifeblood of our business. When we partner up with clients, we represent them and priorities their needs. We strive to deliverer the best possible experience and are passionate about helping them success.",
  text2:
    "Our success is dependent upon the collective knowledge, skills, energy, and contribution of all our colleagues. That’s why, in an industry that requires us to be on the front foot, we make it a priority to support our team member’s growth.",
  text3:
    "We are always searching for more efficient ways to comply with the regulations and to simplify the process. Compliance can be overwhelming aspect of your business, but with our industry knowledge, we can identify and resolve any potential issues.",
  text4:
    "We respond to the client’s requirements and work with them to deliver our services and compliance solutions that best fit their business. We appreciate that every business has different needs and with our expansive industry knowledge, we can help deliver results.",
  text5:
    "We respond to the client’s requirements and work with them to deliver our services and compliance solutions that best fit their business. We appreciate that every business has different needs and with our expansive industry knowledge, we can help deliver results.",
  text6:
    "It can be scary not knowing where to start with a new business but don’t worry. We find solutions to help small businesses looking to make an impact in financial services.",
};

export default () => (
  <>
    <div className="core-values-accordion">
      <p className="core-values-title">Our core values</p>
      <Collapse
        accordion
        defaultActiveKey={["1"]}
        bordered={false}
        expandIcon={({ isActive }) => (
          <CaretRightOutlined
            style={{ color: "#EC7D9F" }}
            rotate={isActive ? 270 : 90}
          />
        )}
        ghost
      >
        <Panel
          header="01. Client-focused"
          key="1"
          className="site-collapse-custom-panel"
        >
          <p>{description.text1}</p>
        </Panel>
        <Panel
          header="02. Team member growth"
          key="2"
          className="site-collapse-custom-panel"
        >
          <p>{description.text2}</p>
        </Panel>
        <Panel
          header="03. Solve problems"
          key="3"
          className="site-collapse-custom-panel"
        >
          <p>{description.text3}</p>
        </Panel>
        <Panel
          header="04. Agile"
          key="4"
          className="site-collapse-custom-panel"
        >
          <p>{description.text4}</p>
        </Panel>
        <Panel
          header="05. Provide clarity"
          key="5"
          className="site-collapse-custom-panel"
        >
          <p>{description.text5}</p>
        </Panel>
        <Panel
          header="06. Support start-ups"
          key="6"
          className="site-collapse-custom-panel"
        >
          <p>{description.text6}</p>
        </Panel>
      </Collapse>
    </div>
  </>
);
