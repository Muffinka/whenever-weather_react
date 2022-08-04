import "./styles.css";

import WeatherWork from "./Weather";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div>
      <div className="container rounded p-4 bg-dark">
        <WeatherWork />
        <Forecast />
        <h5 className="text-center text-light">
          Go to my&nbsp;&nbsp;
          <a
            href="https://github.com/Muffinka/whenever-weather_react"
            target="_blank"
            alt="Github repository @Muffinka"
          >
            GitHub repository
          </a>
          .
        </h5>
      </div>
    </div>
  );
}
