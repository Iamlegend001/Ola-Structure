import React from "react";
import BatteryMenu from "./BatteryMenu";
import batteryImg from "../../assets/react.svg"; // Replace with actual gallery images if available

const images = [batteryImg, batteryImg, batteryImg]; // Replace with real images

const Gallery = ({ onSelect, active }) => (
  <div className="battery-section-page">
    <BatteryMenu onSelect={onSelect} active={active || "gallery"} />
    <div className="battery-content">
      <h2>Battery Gallery</h2>
      <div
        style={{ display: "flex", gap: 16, flexWrap: "wrap", margin: "24px 0" }}
      >
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Gallery ${idx + 1}`}
            style={{ width: 180, borderRadius: 10 }}
          />
        ))}
      </div>
      <p>Explore our battery technology in action through these images.</p>
    </div>
  </div>
);

export default Gallery;
