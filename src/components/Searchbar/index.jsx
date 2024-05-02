import React from "react";
import "./index.css";
import { FiSearch } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { useState } from "react";
import { getAutofillLocation } from "../../services/locations";
import { getWeatherForcast } from "../../services/weatherReports";

const SearchBar = ({
  setCurrentWeather,
  setCurrentLocation,
  setForecastReport,
  setWLoading,
}) => {
  const [locationsList, setLocationsList] = useState([]);
  const [userInput, setUserInput] = useState("");
  const handleSearch = async (e) => {
    try {
      setUserInput(e.target.value);
      if (userInput.length > 0) {
        let data = await getAutofillLocation(userInput);
        setLocationsList(data);
      }
    } catch (e) {
      return false;
    }
  };

  const fetchWeather = async (location) => {
    try {
      setWLoading(true);
      let forecast = await getWeatherForcast(location);
      console.log(forecast);
      setCurrentWeather(forecast.current);
      setCurrentLocation(forecast.location);
      setForecastReport(forecast);
      setWLoading(false);
    } catch (e) {
      return false;
    } finally {
      setWLoading(false);
    }
  };

  const handleLocationSelection = async (location) => {
    try {
      setUserInput(location);
      setLocationsList([]);
      fetchWeather(location);
    } catch (e) {
      return false;
    }
  };
  return (
    <>
      <div className="search-bar-container">
        <div className="search-bar-layout">
          <div className="search-icon">
            <FiSearch />
          </div>
          <div className="input-space">
            <input
              type="text"
              name="location"
              id="location"
              placeholder="Search the location"
              value={userInput}
              onChange={(e) => handleSearch(e)}
            />
          </div>
          <div className="location-icons">
            <CiLocationOn />
          </div>
        </div>
        {locationsList.length > 0 ? (
          <div className="dropdown-layer">
            <LocationListDropdown
              lists={locationsList}
              handleLocationSelection={handleLocationSelection}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

const LocationListDropdown = ({ lists, handleLocationSelection }) => {
  return (
    <div className="dropdown-container">
      <div className="dropdown-list">
        {lists.map((i, index) => (
          <div
            className="list-item"
            onClick={() => handleLocationSelection(i.name)}
            key={index}
          >
            <div className="list-icon">
              <CiLocationOn />
            </div>
            <div className="list-name">
              <span>
                {i.name} - {i.region}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
