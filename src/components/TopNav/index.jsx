import React from "react";
import weatherLogo from "../../assests/images/weather_logo.webp";
import "./index.css";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <div className="top-nav-container">
      <div className="top-nav-left">
        <div className="logo">
          <Link to={"/"} className="link" style={{ color: "black" }}>
            <h2>
              <span className="logo_char">W</span>hiz
            </h2>
          </Link>
        </div>
      </div>
      {/* <div className="top-nav-right"></div> */}
    </div>
  );
};

export default TopNav;
