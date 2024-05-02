import React, { useState } from "react";
import "./index.css";
import { CiLocationOn } from "react-icons/ci";
import wind from "../../assests/icons/wind.png";
import humidity from "../../assests/icons/drop.png";
import SpinnerLoader from "../../loaders/spinner";
import { getCurrentDateAndDay } from "../../helpers/dateAndDay";
const WeatherCard = ({ currentWeather, currentLocation, loading }) => {
  const [toggleCToF, setToggle] = useState(false);

  const handleToggleCToF = () => {
    setToggle((prev) => !prev);
  };
  return !loading ? (
    currentWeather && (
      <div className="weather-card-container">
        <div className="location-area">
          <div className="location-card-container">
            <CiLocationOn />
          </div>
          <div className="location">
            <span>{currentLocation.name && currentLocation.name},</span>
            <b>{currentLocation.region && currentLocation.region}</b>
          </div>
        </div>
        <div className="current-weather-icon">
          <img src={currentWeather.condition.icon} alt="weather-icons" />
        </div>
        <div className="current_info">
          <span>{getCurrentDateAndDay()}</span>
        </div>
        <div className="current-degree">
          <span onClick={() => handleToggleCToF()}>
            {!toggleCToF
              ? currentWeather.temp_c && currentWeather.temp_c
              : currentWeather.temp_f && currentWeather.temp_f}
            &#176;
          </span>
          <b>{!toggleCToF ? "C" : "F"}</b>
        </div>
        <div className="current-condition">
          <h2>
            {currentWeather.condition.text && currentWeather.condition.text}
          </h2>
        </div>
        <div className="wind-hum-display-area">
          <div className="wind-area">
            <img src={wind} alt="wind-icon" />
            <span style={{ marginLeft: "10px" }}>
              {currentWeather.wind_kph && currentWeather.wind_kph}
            </span>
            <b>kmph</b>
          </div>
          <div className="humidity-area">
            <img src={humidity} alt="humidity-icon" />
            <span style={{ marginLeft: "10px" }}>
              {currentWeather.humidity && currentWeather.humidity}
            </span>
          </div>
        </div>
      </div>
    )
  ) : (
    <div className="weather-card-container">
      <SpinnerLoader />
    </div>
  );
};

export default WeatherCard;
