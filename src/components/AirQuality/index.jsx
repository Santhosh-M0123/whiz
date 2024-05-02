import React from "react";
import "./index.css";

const AirQualityCard = ({ data }) => {
  return (
    data && (
      <div className="air-quality-card-container">
        <div className="air-quality-title">
          <b>Air Quality Index</b>
        </div>
        <div className="air-quality-report-card-area">
          <div
            className="air-quality-report-card"
            style={{ backgroundColor: "#D9EDBF" }}
          >
            <span>CO</span>
            <br></br>
            <br />
            <b>{data.co && data.co.toFixed(1)}</b>
          </div>

          <div
            className="air-quality-report-card"
            style={{ backgroundColor: "#C65BCF" }}
          >
            <span>no2</span>
            <br></br>
            <br />
            <b>{data.no2 && data.no2.toFixed(1)}</b>
          </div>

          <div
            className="air-quality-report-card"
            style={{ backgroundColor: "#F27BBD" }}
          >
            <span>O3</span>
            <br></br>
            <br />
            <b>{data.o3 && data.o3.toFixed(1)}</b>
          </div>

          <div
            className="air-quality-report-card"
            style={{ backgroundColor: "#D895DA" }}
          >
            <span>pm2</span>
            <br></br>
            <br />
            <b>{data.pm2_5 && data.pm2_5.toFixed(1)}</b>
          </div>

          <div
            className="air-quality-report-card"
            style={{ backgroundColor: "#C4E4FF" }}
          >
            <span>so2</span>
            <br></br>
            <br />
            <b>{data.so2 && data.so2.toFixed(1)}</b>
          </div>
        </div>
      </div>
    )
  );
};

export default AirQualityCard;
