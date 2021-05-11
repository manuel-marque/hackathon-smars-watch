import React, { useState, useEffect } from "react";
import axios from "axios";

const WeatherData = (props) => {
  const [data, setData] = useState({});
  console.log(data);

  useEffect(() => {
    axios
      .get(
        "//api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0"
      )
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="content">
      <div className="mainInfo">
        <h3>Sol:{} </h3>
        <h5>
          <em>Earth Date:</em>
        </h5>
        <h5>Season: </h5>
      </div>

      <div className="weatherInfo">
        <h3>Temprature Today at Elysium Planitia</h3>
        <h5>Hi Temp:</h5>
        <h5>Lo Temp:</h5>
      </div>
    </div>
  );
};

export default WeatherData;