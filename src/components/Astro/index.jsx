import React from "react";
import "./index.css";
import { WiSunrise } from "react-icons/wi";
import { TbSunset2 } from "react-icons/tb";

const AstroCard = ({ astroData }) => {
  return (
    astroData && (
      <div className="astro-card-container">
        <div className="astro-card-day-selection">
          <div className="astro-top-list">
            <div className="astro_title">
              <b>Astro Report</b>
            </div>
          </div>
        </div>
        <div className="astro_report" style={{ marginTop: "30px" }}>
          <div className="astro-card-sunrise">
            <div className="astro-icon">
              <WiSunrise />
            </div>
            <div className="astro-time">
              <span>Sunrise</span>
              <br />
              <b>{astroData.sunrise}</b>
            </div>
          </div>
          <div className="astro-card-sunset">
            <div className="astro-icon">
              <TbSunset2 />
            </div>
            <div className="astro-time">
              <span>Sunset</span>
              <br></br>
              <b>{astroData.sunset}</b>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default AstroCard;
