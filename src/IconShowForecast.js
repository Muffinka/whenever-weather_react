import React from "react";

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

export default function IconShowForecast(props) {
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

  return (
    <img
      className="inlineImg"
      src={codeMapping[props.code]}
      alt="weather icon"
    />
  );
}
