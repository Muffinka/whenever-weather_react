import React from "react";
import Rainy from "./img/04n.png";

export default function Weather() {
  return (
    <div className="row px-4 py-2 text-light">
      <div className="col-2 p-3 gx-2 border-start border-3 border-danger bg-info text-center">
        <h5 className="text-uppercase" id="current-day">
          Sunday
        </h5>
        <h3 id="current-date">23</h3>
        <h4 id="current-month">July</h4>
        <img className="inlineImg" src={Rainy} alt="Rainy" id="weather-icon" />
        <div className="row">
          <div className="col-6 p-0">
            min
            <br />
            <span id="current-min-temperature">16</span>
          </div>
          <div className="col-6 p-0">
            max
            <br />
            <span id="current-max-temperature">25</span>
          </div>
        </div>
      </div>
      <span className="col-2 p-3 border-start border-3 border-warning bg-secondary bg-opacity-25 text-center">
        <h5 className="text-uppercase" id="current-day1">
          Monday
        </h5>
        <h3 id="current-date1">24</h3>
        <h4 id="current-month1">July</h4>
        <img className="inlineImg" src={Rainy} alt="Rainy" id="weather-icon1" />
        <div className="row">
          <div className="col-6 p-0">
            min
            <br />
            <span id="current-min-temperature1">15</span>
          </div>
          <div className="col-6 p-0">
            max
            <br />
            <span id="current-max-temperature1">26</span>
          </div>
        </div>
      </span>
      <span className="col-2 p-3 border-start border-3 border-warning bg-secondary bg-opacity-25 text-center">
        <h5 className="text-uppercase" id="current-day2">
          Tuesday
        </h5>
        <h3 id="current-date2">25</h3>
        <h4 id="current-month2">July</h4>
        <img className="inlineImg" src={Rainy} alt="Rainy" id="weather-icon2" />
        <div className="row">
          <div className="col-6 p-0">
            min
            <br />
            <span id="current-min-temperature2">12</span>
          </div>
          <div className="col-6 p-0">
            max
            <br />
            <span id="current-max-temperature2">24</span>
          </div>
        </div>
      </span>
      <span className="col-2 p-3 border-start border-3 border-warning bg-secondary bg-opacity-25 text-center">
        <h5 className="text-uppercase" id="current-day3">
          Wednesday
        </h5>
        <h3 id="current-date3">26</h3>
        <h4 id="current-month3">July</h4>
        <img className="inlineImg" src={Rainy} alt="Rainy" id="weather-icon3" />
        <div className="row">
          <div className="col-6 p-0">
            min
            <br />
            <span id="current-min-temperature3">17</span>
          </div>
          <div className="col-6 p-0">
            max
            <br />
            <span id="current-max-temperature3">24</span>
          </div>
        </div>
      </span>
      <span className="col-2 p-3 border-start border-3 border-warning bg-secondary bg-opacity-25 text-center">
        <h5 className="text-uppercase" id="current-day4">
          Thursday
        </h5>
        <h3 id="current-date4">27</h3>
        <h4 id="current-month4">July</h4>
        <img className="inlineImg" src={Rainy} alt="Rainy" id="weather-icon4" />
        <div className="row">
          <div className="col-6 p-0">
            min
            <br />
            <span id="current-min-temperature4">15</span>
          </div>
          <div className="col-6 p-0">
            max
            <br />
            <span id="current-max-temperature4">36</span>
          </div>
        </div>
      </span>
      <span className="col-2 p-3 border-start border-3 border-warning bg-secondary bg-opacity-25 text-center">
        <h5 className="text-uppercase" id="current-day5">
          Friday
        </h5>
        <h3 id="current-date5">28</h3>
        <h4 id="current-month5">July</h4>
        <img className="inlineImg" src={Rainy} alt="Rainy" id="weather-icon5" />
        <div className="row">
          <div className="col-6 p-0">
            min
            <br />
            <span id="current-min-temperature5">12</span>
          </div>
          <div className="col-6 p-0">
            max
            <br />
            <span id="current-max-temperature5">19</span>
          </div>
        </div>
      </span>
    </div>
  );
}
