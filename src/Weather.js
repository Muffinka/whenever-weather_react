import React, { useState } from "react";
import axios from "axios";
import Temperature from "./Temperature";
import ClipLoader from "react-spinners/BarLoader";

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
  let units = `metric`;
  let [city, setCity] = useState("");

  let [apiTemperature, setApiTemperature] = useState(null);
  let [apiDescription, setApiDescription] = useState(null);
  let [apiHumidity, setApiHumidity] = useState(null);
  let [apiPressure, setApiPressure] = useState(null);
  let [apiWind, setApiWind] = useState(null);
  let [apiIcon, setApiIcon] = useState(null);
  let [apiCityName, setApiCityName] = useState(null);
  let [apiCountryName, setApiCountryName] = useState(null);
  let [minTemperature, setMinTemperature] = useState(null);
  let [maxTemperature, setMaxTemperature] = useState(null);
  let [minTemperature1, setMinTemperature1] = useState(null);
  let [maxTemperature1, setMaxTemperature1] = useState(null);
  let [minTemperature2, setMinTemperature2] = useState(null);
  let [maxTemperature2, setMaxTemperature2] = useState(null);
  let [minTemperature3, setMinTemperature3] = useState(null);
  let [maxTemperature3, setMaxTemperature3] = useState(null);
  let [minTemperature4, setMinTemperature4] = useState(null);
  let [maxTemperature4, setMaxTemperature4] = useState(null);
  let [minTemperature5, setMinTemperature5] = useState(null);
  let [maxTemperature5, setMaxTemperature5] = useState(null);
  // let [icon1, setIcon1] = useState(null);

  let now = new Date();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let daysAbb = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  let day = days[now.getDay()];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  Date.prototype.NextDay = function (e) {
    return new Date(
      this.getFullYear(),
      this.getMonth(),
      this.getDate() + ("string" == typeof e ? parseInt(e, 10) : e)
    );
  };

  /////

  let now1 = new Date().NextDay(1);
  let date1 = now1.getDate();
  let month1 = months[now1.getMonth()];
  let day1 = daysAbb[now1.getDay()];

  let now2 = new Date().NextDay(2);
  let date2 = now2.getDate();
  let month2 = months[now2.getMonth()];
  let day2 = daysAbb[now2.getDay()];

  let now3 = new Date().NextDay(3);
  let date3 = now3.getDate();
  let month3 = months[now3.getMonth()];
  let day3 = daysAbb[now3.getDay()];

  let now4 = new Date().NextDay(4);
  let date4 = now4.getDate();
  let month4 = months[now4.getMonth()];
  let day4 = daysAbb[now4.getDay()];

  let now5 = new Date().NextDay(5);
  let date5 = now5.getDate();
  let month5 = months[now5.getMonth()];
  let day5 = daysAbb[now5.getDay()];

  let month = months[now.getMonth()];
  let date = now.getDate();
  let hours = now.getHours();

  if (hours < 10) {
    hours = "0" + hours;
  }

  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(url).then(apiResponse);
  }

  function applyLink5(locationLink) {
    let weatherLink = `https://api.openweathermap.org/data/2.5/onecall?${locationLink}&exclude=minutely,hourly,alerts&units=${units}&appid=${apiKey}`;
    axios.get(weatherLink).then(logWeatherData5);
  }

  function apiResponse(response) {
    setApiTemperature(Math.round(response.data.main.temp));
    setApiHumidity(response.data.main.humidity);
    setApiWind(response.data.wind.speed);
    setApiIcon(response.data.weather[0].icon);
    iconShow(response.data.weather[0].icon);
    console.log(setApiIcon);
    setApiCityName(response.data.name);
    setApiCountryName(response.data.sys.country);
    setApiPressure(response.data.main.pressure);
    capitalize(response.data.weather[0].description);

    let lat = response.data.coord.lat;
    let lon = response.data.coord.lon;
    applyLink5(`lat=${lat}&lon=${lon}`);

    function capitalize(str) {
      return setApiDescription(str.charAt(0).toUpperCase() + str.slice(1));
    }

    function iconShow(response) {
      console.log(response);
      const codeMapping = {
        "01d": clearSkyD,
        "01n": clearSkyN,
        "02d": fewCloudsD,
        "02n": fewCloudsN,
        "03d": scatteredCloudsD,
        "03n": scatteredCloudsN,
        "04d": brokenCloudsD,
        "04n": brokenCloudsN,
        "09d": showerRainD,
        "09n": showerRainN,
        "10d": rainD,
        "10n": rainN,
        "11d": thunderstormD,
        "11n": thunderstormN,
        "13d": snowD,
        "13n": snowN,
        "50d": mistD,
        "50n": mistN,
      };

      return setApiIcon(codeMapping[response]);
    }
  }

  function logWeatherData5(response5) {
    setMinTemperature(Math.round(response5.data.daily[0].temp.min));
    setMaxTemperature(Math.round(response5.data.daily[0].temp.max));
    setMinTemperature1(Math.round(response5.data.daily[1].temp.min));
    setMaxTemperature1(Math.round(response5.data.daily[1].temp.max));
    setMinTemperature2(Math.round(response5.data.daily[2].temp.min));
    setMaxTemperature2(Math.round(response5.data.daily[2].temp.max));
    setMinTemperature3(Math.round(response5.data.daily[3].temp.min));
    setMaxTemperature3(Math.round(response5.data.daily[3].temp.max));
    setMinTemperature4(Math.round(response5.data.daily[4].temp.min));
    setMaxTemperature4(Math.round(response5.data.daily[4].temp.max));
    setMinTemperature5(Math.round(response5.data.daily[5].temp.min));
    setMaxTemperature5(Math.round(response5.data.daily[5].temp.max));
    // iconShow5(
    //   response5.data.weather[1].icon,
    //   response5.data.weather[2].icon,
    //   response5.data.weather[3].icon,
    //   response5.data.weather[4].icon,
    //   response5.data.weather[5].icon
    // );

    // function iconShow5(response5) {
    //   console.log(response5);
    //   const codeMapping = {
    //     "01d": clearSkyD,
    //     "01n": clearSkyN,
    //     "02d": fewCloudsD,
    //     "02n": fewCloudsN,
    //     "03d": scatteredCloudsD,
    //     "03n": scatteredCloudsN,
    //     "04d": brokenCloudsD,
    //     "04n": brokenCloudsN,
    //     "09d": showerRainD,
    //     "09n": showerRainN,
    //     "10d": rainD,
    //     "10n": rainN,
    //     "11d": thunderstormD,
    //     "11n": thunderstormN,
    //     "13d": snowD,
    //     "13n": snowN,
    //     "50d": mistD,
    //     "50n": mistN,
    //   };

    //   return setApiIcon(codeMapping[respons5]);
    // }
    // setIcon1(response5.data.daily[1].weather[0].icon);
    // console.log(setIcon1);

    // function iconShow5(name) {
    //   if (response5.data.weather[0].icon === "01d") {
    //     return name(clearSkyD);
    //   }
    //   if (response5.data.weather[0].icon === "01n") {
    //     return name(clearSkyN);
    //   }
    //   if (response5.data.weather[0].icon === "02d") {
    //     return name(fewCloudsD);
    //   }
    //   if (response5.data.weather[0].icon === "02n") {
    //     return name(fewCloudsN);
    //   }
    //   if (response5.data.weather[0].icon === "03d") {
    //     return name(scatteredCloudsD);
    //   }
    //   if (response5.data.weather[0].icon === "03n") {
    //     return name(scatteredCloudsN);
    //   }
    //   if (response5.data.weather[0].icon === "04d") {
    //     return name(brokenCloudsD);
    //   }
    //   if (response5.data.weather[0].icon === "04n") {
    //     return name(brokenCloudsN);
    //   }
    //   if (response5.data.weather[0].icon === "09d") {
    //     return name(showerRainD);
    //   }
    //   if (response5.data.weather[0].icon === "09n") {
    //     return name(showerRainN);
    //   }
    //   if (response5.data.weather[0].icon === "10d") {
    //     return name(rainD);
    //   }
    //   if (response5.data.weather[0].icon === "10n") {
    //     return name(rainN);
    //   }
    //   if (response5.data.weather[0].icon === "11d") {
    //     return name(thunderstormD);
    //   }
    //   if (response5.data.weather[0].icon === "11n") {
    //     return name(thunderstormN);
    //   }
    //   if (response5.data.weather[0].icon === "13d") {
    //     return name(snowD);
    //   }
    //   if (response5.data.weather[0].icon === "13n") {
    //     return name(snowN);
    //   }
    //   if (response5.data.weather[0].icon === "50d") {
    //     return name(mistD);
    //   }
    //   if (response5.data.weather[0].icon === "50n") {
    //     return name(mistN);
    //   } else {
    //     return name(clearSkyD);
    //   }
    // }
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
            <img src={apiIcon} alt="weather icon" />
          </div>
          <div className="col-4 px-3 align-self-center text-light">
            <div className="pb-2">
              {apiCityName}, {apiCountryName}
            </div>
            <h2 id="weather">{apiDescription}</h2>
            <Temperature temperature={apiTemperature} />
          </div>
          <div className="col-4 p-3 bg-info text-center">
            <h2 className="text-uppercase">{day}</h2>
            <h4>
              <span>{date}</span>
              <span>{month}</span>
            </h4>
            <h3>
              <span>{hours}</span>:<span>{minutes}</span>
            </h3>
            <h5>
              Pressure: <span>{apiPressure}</span>hPa
              <br />
              Humidity: <span></span>
              {apiHumidity}%<br />
              Wind: {apiWind} <span></span>km/h
            </h5>
          </div>
        </div>
        <div className="row px-4 py-2 text-light">
          <div className="col-2 p-3 gx-2 border-start border-3 border-danger bg-info text-center">
            <h5 className="text-uppercase">{day}</h5>
            <h3>{date}</h3>
            <h4>{month}</h4>
            <img
              className="inlineImg"
              src={apiIcon}
              alt="Rainy"
              id="weather-icon"
            />
            <div className="row">
              <div className="col-6 p-0">
                min
                <br />
                <span id="current-min-temperature">{minTemperature}°C</span>
              </div>
              <div className="col-6 p-0">
                max
                <br />
                <span id="current-max-temperature">{maxTemperature}°C</span>
              </div>
            </div>
          </div>
          <span className="col-2 p-3 border-start border-3 border-warning bg-secondary bg-opacity-25 text-center">
            <h5 className="text-uppercase">{day1}</h5>
            <h3>{date1}</h3>
            <h4>{month1}</h4>
            <img
              className="inlineImg"
              src={apiIcon}
              alt="Rainy"
              id="weather-icon1"
            />
            <div className="row">
              <div className="col-6 p-0">
                min
                <br />
                <span id="current-min-temperature1">{minTemperature1}°C</span>
              </div>
              <div className="col-6 p-0">
                max
                <br />
                <span id="current-max-temperature1">{maxTemperature1}°C</span>
              </div>
            </div>
          </span>
          <span className="col-2 p-3 border-start border-3 border-warning bg-secondary bg-opacity-25 text-center">
            <h5 className="text-uppercase" id="current-day2">
              {day2}
            </h5>
            <h3>{date2}</h3>
            <h4>{month2}</h4>
            <img
              className="inlineImg"
              src={apiIcon}
              alt="Rainy"
              id="weather-icon2"
            />
            <div className="row">
              <div className="col-6 p-0">
                min
                <br />
                <span id="current-min-temperature2">{minTemperature2}°C</span>
              </div>
              <div className="col-6 p-0">
                max
                <br />
                <span id="current-max-temperature2">{maxTemperature2}°C</span>
              </div>
            </div>
          </span>
          <span className="col-2 p-3 border-start border-3 border-warning bg-secondary bg-opacity-25 text-center">
            <h5 className="text-uppercase">{day3}</h5>
            <h3>{date3}</h3>
            <h4>{month3}</h4>
            <img
              className="inlineImg"
              src={apiIcon}
              alt="Rainy"
              id="weather-icon3"
            />
            <div className="row">
              <div className="col-6 p-0">
                min
                <br />
                <span id="current-min-temperature3">{minTemperature3}°C</span>
              </div>
              <div className="col-6 p-0">
                max
                <br />
                <span id="current-max-temperature3">{maxTemperature3}°C</span>
              </div>
            </div>
          </span>
          <span className="col-2 p-3 border-start border-3 border-warning bg-secondary bg-opacity-25 text-center">
            <h5 className="text-uppercase">{day4}</h5>
            <h3>{date4}</h3>
            <h4>{month4}</h4>
            <img
              className="inlineImg"
              src={apiIcon}
              alt="Rainy"
              id="weather-icon4"
            />
            <div className="row">
              <div className="col-6 p-0">
                min
                <br />
                <span id="current-min-temperature4">{minTemperature4}°C</span>
              </div>
              <div className="col-6 p-0">
                max
                <br />
                <span id="current-max-temperature4">{maxTemperature4}°C</span>
              </div>
            </div>
          </span>
          <span className="col-2 p-3 border-start border-3 border-warning bg-secondary bg-opacity-25 text-center">
            <h5 className="text-uppercase">{day5}</h5>
            <h3>{date5}</h3>
            <h4>{month5}</h4>
            <img
              className="inlineImg"
              src={apiIcon}
              alt="Rainy"
              id="weather-icon5"
            />
            <div className="row">
              <div className="col-6 p-0">
                min
                <br />
                <span id="current-min-temperature5">{minTemperature5}°C</span>
              </div>
              <div className="col-6 p-0">
                max
                <br />
                <span id="current-max-temperature5">{maxTemperature5}°C</span>
              </div>
            </div>
          </span>
        </div>
        //END FORECAST
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
        <div className="pt-3 text-center text-light">
          Want to know weather in your city?
        </div>
        <div className="row pt-2 justify-content-center">
          <ClipLoader color="#ffffff" width={150} margin="5" />
        </div>
      </div>
    );
  }
}
