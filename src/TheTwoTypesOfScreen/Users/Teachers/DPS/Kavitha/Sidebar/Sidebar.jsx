import React from "react";
import "../index.css";
import logo from "./Logo (2).svg";

const Sidebar = () => {
  return (
    <div className="AppLeft">
      <div className="logo">
        <img className="logo-text" src={logo} alt="Logo" />
      </div>
    </div>
  );
};

export default Sidebar;
