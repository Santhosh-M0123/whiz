import React from "react";
import "./index.css";
import { getTimeFromFormat } from "../../helpers/time";

const HourForecastCard = ({ hourlyForecast }) => {
  return (
    <>
      <div>
        <h3>Hourly forecast Report</h3>
      </div>
      <br></br>
      <div className="hour-forecast-card-container">
        {hourlyForecast.length > 0
          ? hourlyForecast.map((i, index) => (
              <div className="hour-forecast-card-lists" key={index}>
                <div className="hour-forecast-card-list">
                  <div className="current-card-time">
                    <span>{getTimeFromFormat(i.time)}</span>
                  </div>
                  <div className="hour-forecast-icon">
                    <img src={i.condition.icon} alt="icon-weather" />
                  </div>
                  <div
                    className="hour-forecast-condition"
                    title={i.condition.text}
                  >
                    <b>{i.condition.text.slice(0, 6)}...</b>
                  </div>
                  <div className="hour-forecast-temp">
                    <span>{i.feelslike_c}&#176; C</span>
                  </div>
                </div>
              </div>
            ))
          : ""}
      </div>
    </>
  );
};

export default HourForecastCard;
