import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div>
        <h1 className="weather-app-current-region">
          <span className="city">{props.data.city}</span>
          <br />
          <span className="country">{props.data.country}</span>
        </h1>
        <p className="weather-app-details">
          <FormattedDate date={props.data.date} />
          <span className="weather-app-details-description text-capitalize">
            {props.data.description}
          </span>
          <br />
          <span>Humidity: {props.data.humidity}%</span>
          <br />
          <span>Wind: {props.data.wind}km/h</span>
        </p>
      </div>
      <div className="weather-app-temperature-container">
        <div>
          <img src={props.data.icon} alt={props.data.descriptionIcon} />
        </div>
        <div className="temperature">{Math.round(props.data.temperature)}</div>
        <div className="unit">°C</div>
      </div>
    </div>
  );
}
