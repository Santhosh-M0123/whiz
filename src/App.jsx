import React from "react";
import "./App.css";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import WeatherPage from "./pages/Weather";
import Layouts from "./Layouts";
function App() {
  return (
    <Router>
      <Layouts />
    </Router>
  );
}

export default App;
