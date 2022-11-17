import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import MainApp from "../Users/Teachers/DPS/Kavitha/Main App/MainApp";
import Sidebar from "../Users/Teachers/DPS/Kavitha/Sidebar";

const BigDeviceApp = () => {
  return (
    <div className="BigDeviceApp">
      {/* App Left */}
      <Sidebar />
      {/* App Right */}
      <MainApp />
    </div>
  );
};

export default BigDeviceApp;
