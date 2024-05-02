import { useState, useEffect } from "react";
import "./index.css";
import { getWeatherForcast } from "../../services/weatherReports";
import { fetchUserCurrentLocation } from "../../utils/userLocation";
import { LuSun } from "react-icons/lu";
import ForecastCard from "../../components/ForecastCard";
import SearchBar from "../../components/Searchbar";
import WeatherCard from "../../components/WeatherCard";
import AirQualityCard from "../../components/AirQuality";
import AstroCard from "../../components/Astro";
import WeatherLoader from "../../loaders/weather";
import toast from "react-hot-toast";
import {
  getCurrentTime,
  getCurrentDate,
  getGreeting,
} from "../../helpers/time";
import HourForecastCard from "../../components/24HrsForecastCard";
import AreaGraph from "../../components/Graph/Area";
const WeatherPage = () => {
  const [currentLocation, setCurrentLocation] = useState("London");
  const [errorInfo, setErrorInfo] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastReport, setForecastReport] = useState(null);
  const [graphData, setGraphData] = useState([]);
  const [airQuality, setAirQuality] = useState(null);
  const [astroData, setAstroData] = useState(null);
  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  const [currentDate, setCurrentDate] = useState(getCurrentDate());
  const [greeting, setGreeting] = useState(getGreeting());
  const [w_loading, setWLoading] = useState(false);

  const fetchWeatherReports = async (coordinates) => {
    try {
      setLoading(true);
      if (coordinates) {
        let forecastReportResponse = await getWeatherForcast(coordinates);
        setCurrentWeather(forecastReportResponse.current);
        setCurrentLocation(forecastReportResponse.location);
        setForecastReport(forecastReportResponse);
        setAirQuality(forecastReportResponse.current.air_quality);
        setAstroData(forecastReportResponse.forecast.forecastday[0].astro);
        setGraphData(forecastReportResponse.forecast.forecastday[0].hour);
        setLoading(false);
      } else {
        let forecastReportResponse = await getWeatherForcast(currentLocation);
        setCurrentWeather(forecastReportResponse.current);
        setCurrentLocation(forecastReportResponse.location);
        setForecastReport(forecastReportResponse);
        setAirQuality(forecastReportResponse.current.air_quality);
        setAstroData(forecastReportResponse.forecast.forecastday[0].astro);
        setGraphData(forecastReportResponse.forecast.forecastday[0].hour);
        setLoading(false);
      }
    } catch (e) {
      return false;
    } finally {
      setLoading(false);
    }
  };

  const userCurrentLocation = async () => {
    try {
      let userLocationCoordinates = await fetchUserCurrentLocation();
      if (userLocationCoordinates) {
        let coordinates =
          userLocationCoordinates.latitude +
          "," +
          userLocationCoordinates.longitude;
        setCurrentLocation(coordinates);
        fetchWeatherReports(coordinates);
      } else {
        fetchWeatherReports();
      }
    } catch (e) {
      fetchWeatherReports();
      setErrorInfo(e.message);
      toast(
        "Geo location permission denied :| please turn on for better experience"
      );
      return false;
    }
  };

  useEffect(() => {
    userCurrentLocation();
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTime());
      setCurrentDate(getCurrentDate());
      setGreeting(getGreeting());
    }, 10000); // Update every 10 seconds

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);
  return !loading ? (
    <div className="weather-page-main-layout">
      <div className="weather-layout-left">
        <div className="time-day-slot">
          <h1>{currentTime}</h1>
          <span>{currentDate}</span>
        </div>
        <div className="greeting-slot">
          <div className="icon-greeting">
            <LuSun />
          </div>
          <b>{greeting}</b>
        </div>
        <div className="forcast-report-section">
          <div className="forcast-list-container">
            <div
              className="forecast-list-title"
              style={{ padding: "30px 0px 10px 0px" }}
            >
              <h3>6 days forecast report</h3>
            </div>
            <div className="forcast-report">
              <ForecastCard
                forecastData={forecastReport}
                setCurrentWeather={setCurrentWeather}
                setGraphData={setGraphData}
                setAstroData={setAstroData}
                setAirQuality={setAirQuality}
              />
            </div>
            <div className="forecast-graph-analysis">
              {/* {graphData.length > 0 && <LineGraph data={graphData} />} */}
              {graphData.length > 0 && <AreaGraph data={graphData} />}
            </div>
            <div className="hourly_forecast">
              <HourForecastCard hourlyForecast={graphData} />
            </div>
          </div>
        </div>
      </div>
      <div className="weather-layout-right">
        <div className="search-area">
          <SearchBar
            setCurrentWeather={setCurrentWeather}
            setCurrentLocation={setCurrentLocation}
            setForecastReport={setForecastReport}
            setWLoading={setWLoading}
          />
        </div>
        <div className="current-weather-area">
          <WeatherCard
            currentWeather={currentWeather}
            currentLocation={currentLocation}
            loading={w_loading}
          />
        </div>
        <div className="astro-container-right">
          {astroData && <AstroCard astroData={astroData} />}
        </div>
        <div className="air-quality-container-right">
          <AirQualityCard data={airQuality} />
        </div>
      </div>
    </div>
  ) : (
    <div className="weather-loader">
      <WeatherLoader />
    </div>
  );
};

export default WeatherPage;
