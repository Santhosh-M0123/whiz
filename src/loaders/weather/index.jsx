import React from "react";
import "./index.css";

const WeatherLoader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
        letterSpacing: "3px",
        color: "gray",
      }}
    >
      <div className="container">
        <div className="cloud front">
          <span className="left-front"></span>
          <span className="right-front"></span>
        </div>
        <span className="sun sunshine"></span>
        <span className="sun"></span>
        <div className="cloud back">
          <span className="left-back"></span>
          <span className="right-back"></span>
        </div>
      </div>
      <div className="loading_title">
        <h1>Fetching the weather....</h1>
      </div>
    </div>
  );
};

export default WeatherLoader;
