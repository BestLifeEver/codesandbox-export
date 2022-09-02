import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherAppData = {
    city: "Seattle",
    date: "Monday 12:00pm",
    description: "cloudy",
    temp: 15,
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
    humidity: 60,
    wind: 10
  };

  return (
    <main>
      <div className="App">
        <form>
          <div classNmae="card">
            <div className="search">
              <input
                type="text"
                className="search-bar"
                placeholder="Type a City.."
                autocomplete="off"
                autofocus="on"
                id="search-text-input"
              />
              <button type="button" className="btn btn-primary myBtn">
                Search
              </button>
            </div>
          </div>
        </form>
        <div className="app"></div>
        <div className="Weather">
          <h1>{weatherAppData.city}</h1>
          <h2>
            <small>{weatherAppData.date}</small>
          </h2>
          <h3>
            <small>Partially Cloudy</small>
          </h3>
        </div>
        <br />

        <div className="row">
          <div className="col-6">
            <div className="clearfix">
              <img
                src={weatherAppData.imgUrl}
                alt={weatherAppData.description}
                className="weather-icon float-left"
              />
              <div className="float-left">
                <span className="temperature" id="temperature">
                  {weatherAppData.temp}
                </span>
                <span className="units">
                  <a
                    href="#"
                    style={{ textDecoration: `none` }}
                    id="celsius-link"
                  >
                    °C
                  </a>{" "}
                  |
                  <a
                    href="#"
                    style={{ textDecoration: `none` }}
                    id="fahrenheit-link"
                  >
                    °F
                  </a>
                </span>
                <h5>
                  <a
                    className="textDecoration"
                    href="https://github.com/BestLifeEver/codesandbox-export"
                  >
                    Open Source
                  </a>{" "}
                  by Victoria Saunders from
                  <a
                    className="textDecoration"
                    href="https://www.shecodes.io/workshops"
                  >
                    {" "}
                    She Codes
                  </a>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>
                Wind: <span>{weatherAppData.humidity}</span>
              </li>
              <li>
                Humidity: <span>{weatherAppData.wind}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
