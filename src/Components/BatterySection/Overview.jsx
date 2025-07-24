import React from "react";
import BatteryMenu from "./BatteryMenu";
import batteryImg from "../../assets/react.svg"; // Replace with actual battery image if available

const Overview = ({ onSelect, active }) => (
  <div className="battery-section-page">
    <BatteryMenu onSelect={onSelect} active={active || "overview"} />
    <div className="battery-content">
      <h2>Battery Overview</h2>
      <img
        src={batteryImg}
        alt="Battery Overview"
        style={{ maxWidth: 300, borderRadius: 12, margin: "24px 0" }}
      />
      <p>
        Discover the next generation of battery technology powering our
        vehicles. Our batteries are designed for maximum efficiency, safety, and
        longevity, ensuring a smooth and reliable ride every time.
      </p>
    </div>
  </div>
);

export default Overview;
