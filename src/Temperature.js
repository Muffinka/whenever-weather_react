import React, { useState } from "react";

export default function Temperature(props) {
  let [apiTemperature, setApiTemperature] = useState(props.temperature);
  console.log(apiTemperature);

  function toFarenheit(event) {
    event.preventDefault();
    setApiTemperature(Math.round((props.temperature * 9) / 5 + 32));
  }

  function toCelsius(event) {
    event.preventDefault();
    setApiTemperature(props.temperature);
  }

  return (
    <div>
      <h1 className="d-inline">
        <span>{apiTemperature} </span>
      </h1>
      <h5 className="d-inline">
        <a href="/" onClick={toCelsius}>
          °C
        </a>{" "}
        |
        <a href="/" onClick={toFarenheit}>
          °F
        </a>
      </h5>
    </div>
  );
}
