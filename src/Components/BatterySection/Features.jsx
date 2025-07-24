import React from "react";
import BatteryMenu from "./BatteryMenu";
import batteryImg from "../../assets/react.svg"; // Replace with actual feature image if available

const Features = ({ onSelect, active }) => (
  <div className="battery-section-page">
    <BatteryMenu onSelect={onSelect} active={active || "features"} />
    <div className="battery-content">
      <h2>Battery Features</h2>
      <img
        src={batteryImg}
        alt="Battery Features"
        style={{ maxWidth: 300, borderRadius: 12, margin: "24px 0" }}
      />
      <ul>
        <li>Fast Charging</li>
        <li>Longer Range</li>
        <li>Advanced Safety</li>
        <li>Lightweight Design</li>
      </ul>
    </div>
  </div>
);

export default Features;
