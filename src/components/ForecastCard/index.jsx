import React from "react";
import "./index.css";
import { useState } from "react";
import { getDayFromDate } from "../../helpers/dateAndDay";
const ForecastCard = ({
  forecastData,
  setGraphData,
  setAstroData,
  setAirQuality,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleForecastReport = (index) => {
    setGraphData(forecastData.forecast.forecastday[index].hour);
    setCurrentIndex(index);
    setAstroData(forecastData.forecast.forecastday[index].astro);
    setAirQuality(forecastData.forecast.forecastday[index].day.air_quality);
  };
  return (
    forecastData &&
    forecastData.forecast.forecastday.map((i, index) => (
      <div
        className={
          currentIndex === index ? "forecast-card-active" : "forecast-card"
        }
        key={index}
        onClick={() => handleForecastReport(index)}
      >
        <div className="forecast-img">
          <img src={i.day.condition.icon} alt="icon-condition" />
        </div>
        <div className="forcast-day">
          <b>{getDayFromDate(i.date)}</b>
        </div>
        <div className="forecast-celsius-report">
          <span>{i.day.maxtemp_c}&#176;c</span>
        </div>
      </div>
    ))
  );
};

export default ForecastCard;
