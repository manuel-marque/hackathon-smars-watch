import React from "react";
import "./index.css";
import WeatherData from "./WeatherData";

export default function App() {
  return (
    <div className="App">
      <h1>Solis Weather</h1>
      <p>
        <em>Your weather authority for the Solar System and beyond!</em>
      </p>

      <h2>Weather Location: MARS</h2>

      <WeatherData />
    </div>
  );
}

