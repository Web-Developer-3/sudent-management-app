import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import Header from "./Header";
import Left_Part from "./Left_Part";
import Right_Part from "./Right_Part";

const MainApp = () => {
  return (
    <div className="AppRight">
      <Header />
      <div className="app"></div>
      <Routes>
        <Route element={<App />} path="/" />
      </Routes>
    </div>
  );
};

export default MainApp;
