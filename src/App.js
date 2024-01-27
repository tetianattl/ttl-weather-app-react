import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <h1>Weather App</h1>
        <Weather defaultCity="Alicante" />
        <footer>
          This project was created by{" "}
          <a href="https://github.com/tetianattl">Tetiana Tiukhta</a> and is
          open-sourced on{" "}
          <a
            href="https://github.com/tetianattl/ttl-weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}