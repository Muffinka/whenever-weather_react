import React, { useState } from "react";
import axios from "axios";
import Temperature from "./Temperature";

import clearSkyD from "./img/01d.png";
import clearSkyN from "./img/01n.png";
import fewCloudsD from "./img/02d.png";
import fewCloudsN from "./img/02n.png";
import scatteredCloudsD from "./img/03d.png";
import scatteredCloudsN from "./img/03n.png";
import brokenCloudsD from "./img/04d.png";
import brokenCloudsN from "./img/04n.png";
import showerRainD from "./img/09d.png";
import showerRainN from "./img/09n.png";
import rainD from "./img/10d.png";
import rainN from "./img/10n.png";
import thunderstormD from "./img/11d.png";
import thunderstormN from "./img/11n.png";
import snowD from "./img/13d.png";
import snowN from "./img/13n.png";
import mistD from "./img/50d.png";
import mistN from "./img/50n.png";

export default function Weather(props) {
  let apiKey = "992c88e05d9caeefb130effc34e9ce07";
  let [city, setCity] = useState("");

  let [apiTemperature, setApiTemperature] = useState("");
  let [apiDescription, setApiDescription] = useState("");
  let [apiHumidity, setApiHumidity] = useState("");
  let [apiPressure, setApiPressure] = useState("");
  let [apiWind, setApiWind] = useState(null);
  let [apiIcon, setApiIcon] = useState(null);
  let [apiCityName, setApiCityName] = useState(null);
  let [apiCountryName, setApiCountryName] = useState(null);

  //ICON--------------------------

  //-------------------------------------------

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(url).then(apiResponse);
  }

  function apiResponse(response) {
    setApiTemperature(Math.round(response.data.main.temp));
    setApiHumidity(response.data.main.humidity);
    setApiWind(response.data.wind.speed);
    setApiIcon(response.data.weather[0].icon);
    setApiCityName(response.data.name);
    setApiCountryName(response.data.sys.country);
    setApiPressure(response.data.main.pressure);
    console.log(response.data);
    iconShow();
    capitalize(response.data.weather[0].description);

    function capitalize(str) {
      return setApiDescription(str.charAt(0).toUpperCase() + str.slice(1));
    }

    function iconShow() {
      if (response.data.weather[0].icon === "01d") {
        return setApiIcon(clearSkyD);
      }
      if (response.data.weather[0].icon === "01n") {
        return setApiIcon(clearSkyN);
      }
      if (response.data.weather[0].icon === "02d") {
        return setApiIcon(fewCloudsD);
      }
      if (response.data.weather[0].icon === "02n") {
        return setApiIcon(fewCloudsN);
      }
      if (response.data.weather[0].icon === "03d") {
        return setApiIcon(scatteredCloudsD);
      }
      if (response.data.weather[0].icon === "03n") {
        return setApiIcon(scatteredCloudsN);
      }
      if (response.data.weather[0].icon === "04d") {
        return setApiIcon(brokenCloudsD);
      }
      if (response.data.weather[0].icon === "04n") {
        return setApiIcon(brokenCloudsN);
      }
      if (response.data.weather[0].icon === "09d") {
        return setApiIcon(showerRainD);
      }
      if (response.data.weather[0].icon === "09n") {
        return setApiIcon(showerRainN);
      }
      if (response.data.weather[0].icon === "10d") {
        return setApiIcon(rainD);
      }
      if (response.data.weather[0].icon === "10n") {
        return setApiIcon(rainN);
      }
      if (response.data.weather[0].icon === "11d") {
        return setApiIcon(thunderstormD);
      }
      if (response.data.weather[0].icon === "11n") {
        return setApiIcon(thunderstormN);
      }
      if (response.data.weather[0].icon === "13d") {
        return setApiIcon(snowD);
      }
      if (response.data.weather[0].icon === "13n") {
        return setApiIcon(snowN);
      }
      if (response.data.weather[0].icon === "50d") {
        return setApiIcon(mistD);
      }
      if (response.data.weather[0].icon === "50n") {
        return setApiIcon(mistN);
      } else {
        return setApiIcon(clearSkyD);
      }
    }
  }

  if (apiTemperature) {
    return (
      <div>
        <div className="row p-2 justify-content-center">
          <form className="col" onSubmit={handleSubmit}>
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
              aria-label="Search"
              onChange={updateCity}
            />
          </form>
        </div>

        <div className="row px-4 py-2 text-light cfstyle">
          <div className="col-4 align-self-center">
            <img src={apiIcon} alt="weather icon" id="weather-icon" />
          </div>
          <div className="col-4 px-3 align-self-center text-light">
            <div className="pb-2">
              {apiCityName}, {apiCountryName}
            </div>
            <h2 id="weather">{apiDescription}</h2>
            <Temperature temperature={apiTemperature} />
          </div>
          <div className="col-4 p-3 bg-info text-center">
            <h2 className="text-uppercase" id="current-day">
              SATURDAY
            </h2>
            <h4>
              <span id="current-date">23 </span>
              <span id="current-month">July</span>
            </h4>
            <h3>
              <span id="current-hours">00</span>:
              <span id="current-minutes">00</span>
            </h3>
            <h5>
              Pressure: <span id="current-pressure">{apiPressure}</span>hPa
              <br />
              Humidity: <span id="current-humidity"></span>
              {apiHumidity}%<br />
              Wind: {apiWind} <span id="current-wind"></span>km/h
            </h5>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="row p-2 justify-content-center">
        <form className="col" onSubmit={handleSubmit}>
          <input
            type="search"
            className="form-control"
            placeholder="Search..."
            aria-label="Search"
            onChange={updateCity}
          />
        </form>
        <div className="pt-3 text-light">Looking for something?</div>
      </div>
    );
  }
}
