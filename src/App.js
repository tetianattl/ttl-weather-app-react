import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <Weather defaultCity="Kyiv" />
        <footer>
          This project was created by{" "}
          <a
            href="https://github.com/tetianattl"
            target="_blank"
            rel="noreferrer"
          >
            Tetiana Tiukhta
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/tetianattl/ttl-weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://ttl-weatherapp-react.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
