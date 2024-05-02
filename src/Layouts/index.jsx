import React from "react";
import TopNav from "../components/TopNav";
import WeatherPage from "../pages/Weather";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home";
import { Toaster } from "react-hot-toast";
const Layouts = () => {
  return (
    <div className="layout-container">
      <Toaster />
      <div className="general-layout-component">
        <TopNav />
      </div>
      <div className="pages-component">
        <Routes>
          <Route path="/weather" element={<WeatherPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </div>
  );
};

export default Layouts;
