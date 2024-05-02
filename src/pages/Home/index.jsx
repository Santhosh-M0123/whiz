import React from "react";
import "./index.css";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { Link } from "react-router-dom";
import mockup from "../../assests/images/mockup.png";
const HomePage = () => {
  const listItems = [
    "6 days forecast",
    "AQI ( Air Qualtiy Index )",
    "24 hrs forecast",
    "Current Weather",
    "Astro Report",
  ];
  return (
    <div className="home_page_layout">
      <div className="main_title">
        <h1>
          Discover the Weather in<br></br> every city you go!!
        </h1>
      </div>
      <div className="get_weather_btn">
        <Link to={"/weather"} className="link">
          <div className="btn_container_layout">
            <div className="icon_btn">
              <TiWeatherPartlySunny />
            </div>
            <div className="txt_btn">
              <span>Get Weather</span>
            </div>
          </div>
        </Link>
      </div>
      <div className="features_list">
        <div className="feature_listed">
          {listItems.map((i, index) => (
            <div className="list" key={index}>
              <span>{i}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mockup_container">
        <div className="mockup">
          <img src={mockup} alt="mockup_app" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
