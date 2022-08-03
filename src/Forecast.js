import React from "react";
import Rainy from "./img/04n.png";

export default function Weather() {
  return (
    <div className="row px-4 py-2 text-light">
      <div className="col-2 p-3 gx-2 border-start border-3 border-danger bg-info text-center">
        <h5 className="text-uppercase" id="current-day"></h5>
        <h3 id="current-date"></h3>
        <h4 id="current-month"></h4>
        <img className="inlineImg" src={Rainy} alt="Rainy" id="weather-icon" />
        <div className="row">
          <div className="col-6 p-0">
            min
            <br />
            <span id="current-min-temperature"></span>
          </div>
          <div className="col-6 p-0">
            max
            <br />
            <span id="current-max-temperature"></span>
          </div>
        </div>
      </div>
      <span className="col-2 p-3 border-start border-3 border-warning bg-secondary bg-opacity-25 text-center">
        <h5 className="text-uppercase" id="current-day1"></h5>
        <h3 id="current-date1"></h3>
        <h4 id="current-month1"></h4>
        <img className="inlineImg" src={Rainy} alt="Rainy" id="weather-icon1" />
        <div className="row">
          <div className="col-6 p-0">
            min
            <br />
            <span id="current-min-temperature1"></span>
          </div>
          <div className="col-6 p-0">
            max
            <br />
            <span id="current-max-temperature1"></span>
          </div>
        </div>
      </span>
      <span className="col-2 p-3 border-start border-3 border-warning bg-secondary bg-opacity-25 text-center">
        <h5 className="text-uppercase" id="current-day2"></h5>
        <h3 id="current-date2"></h3>
        <h4 id="current-month2"></h4>
        <img className="inlineImg" src={Rainy} alt="Rainy" id="weather-icon2" />
        <div className="row">
          <div className="col-6 p-0">
            min
            <br />
            <span id="current-min-temperature2"></span>
          </div>
          <div className="col-6 p-0">
            max
            <br />
            <span id="current-max-temperature2"></span>
          </div>
        </div>
      </span>
      <span className="col-2 p-3 border-start border-3 border-warning bg-secondary bg-opacity-25 text-center">
        <h5 className="text-uppercase" id="current-day3"></h5>
        <h3 id="current-date3"></h3>
        <h4 id="current-month3"></h4>
        <img className="inlineImg" src={Rainy} alt="Rainy" id="weather-icon3" />
        <div className="row">
          <div className="col-6 p-0">
            min
            <br />
            <span id="current-min-temperature3"></span>
          </div>
          <div className="col-6 p-0">
            max
            <br />
            <span id="current-max-temperature3"></span>
          </div>
        </div>
      </span>
      <span className="col-2 p-3 border-start border-3 border-warning bg-secondary bg-opacity-25 text-center">
        <h5 className="text-uppercase" id="current-day4"></h5>
        <h3 id="current-date4"></h3>
        <h4 id="current-month4"></h4>
        <img className="inlineImg" src={Rainy} alt="Rainy" id="weather-icon4" />
        <div className="row">
          <div className="col-6 p-0">
            min
            <br />
            <span id="current-min-temperature4"></span>
          </div>
          <div className="col-6 p-0">
            max
            <br />
            <span id="current-max-temperature4"></span>
          </div>
        </div>
      </span>
      <span className="col-2 p-3 border-start border-3 border-warning bg-secondary bg-opacity-25 text-center">
        <h5 className="text-uppercase" id="current-day5"></h5>
        <h3 id="current-date5"></h3>
        <h4 id="current-month5"></h4>
        <img className="inlineImg" src={Rainy} alt="Rainy" id="weather-icon5" />
        <div className="row">
          <div className="col-6 p-0">
            min
            <br />
            <span id="current-min-temperature5"></span>
          </div>
          <div className="col-6 p-0">
            max
            <br />
            <span id="current-max-temperature5"></span>
          </div>
        </div>
      </span>
    </div>
  );
}
