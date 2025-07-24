import React from "react";
import "./BatteryMenu.css";

const BatteryMenu = ({ onSelect, active }) => {
  const menuItems = [
    { label: "Overview", key: "overview" },
    { label: "Features", key: "features" },
    { label: "Gallery", key: "gallery" },
    { label: "Tech", key: "tech" },
  ];

  return (
    <nav className="battery-menu">
      <ul>
        {menuItems.map((item) => (
          <li
            key={item.key}
            className={active === item.key ? "active" : ""}
            onClick={() => onSelect && onSelect(item.key)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BatteryMenu;
