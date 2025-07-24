import React from "react";
import BatteryMenu from "./BatteryMenu";
import batteryImg from "../../assets/react.svg"; // Replace with actual tech image if available

const Tech = ({ onSelect, active }) => (
  <div className="battery-section-page">
    <BatteryMenu onSelect={onSelect} active={active || "tech"} />
    <div className="battery-content">
      <h2>Battery Technology</h2>
      <img
        src={batteryImg}
        alt="Battery Tech"
        style={{ maxWidth: 300, borderRadius: 12, margin: "24px 0" }}
      />
      <p>
        Our batteries use state-of-the-art lithium-ion cells, advanced thermal
        management, and smart monitoring systems to deliver unmatched
        performance and safety.
      </p>
    </div>
  </div>
);

export default Tech;
