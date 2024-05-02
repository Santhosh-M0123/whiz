import React from "react";
import weatherLogo from "../../assests/images/weather_logo.webp";
import "./index.css";

const TopNav = () => {
  return (
    <div className="top-nav-container">
      <div className="top-nav-left">
        {/* <div className="logo-container">
                <img src={weatherLogo} alt='weather_logo'/>
            </div> */}
        <div className="logo">
          <h2>
            <span className="logo_char">W</span>hiz
          </h2>
        </div>
      </div>
      {/* <div className="top-nav-right"></div> */}
    </div>
  );
};

export default TopNav;
