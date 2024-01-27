import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city.."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>Kyiv</h1>
      <ul>
        <li>Friday, 17:17</li>
        <li>Friday, 17:17</li>
      </ul>
      <div className="row">
        <div className="col-3">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Cloudy"
          />
          <span className="temperature">5</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-9 w-100">
          <ul>
            <li>text01</li>
            <li>text02</li>
            <li>text03</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
