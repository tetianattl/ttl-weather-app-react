import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="weather-app-current-region col-6">
          <h1>
            <span className="city">{props.data.city}</span>
            <br />
            <span className="country">{props.data.country}</span>
          </h1>
          <div className="weather-app-details">
            <div className="text-capitalize">
              <FormattedDate date={props.data.date} />
              <span>{props.data.description}</span>
            </div>
            <br />
            <span>Humidity: {props.data.humidity}%</span>
            <br />
            <span>Wind: {props.data.wind}km/h</span>
          </div>
        </div>
        <div className="weather-app-temperature-container col-6">
          <div>
            <WeatherIcon code={props.data.icon} />
          </div>
          <div>
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
      </div>
    </div>
  );
}
