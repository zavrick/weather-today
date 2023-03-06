import React from 'react';
import moment from 'moment';
import './currentWeather.css';

const CurrentWeather = (props) => {
  const weather = props.weather?.weather
  const weatherError = props.weather?.error;
  const name = weather?.weather?.[0].main;
  const description = weather?.weather?.[0].description;
  const temperature = weather?.main && `${weather?.main?.temp_min}°C ~ ${weather?.main?.temp_max}°C`
  const humidity = weather?.main?.humidity && `${weather?.main?.humidity}%`;
  const time = weather?.dt && moment.unix(weather?.dt).format('YYYY-MM-DD hh:mm A');

  const errorNotice = weatherError ? (
    <h5 className="error-text">{weatherError}</h5>
  ) : null;

  return (
    <>
      {
        errorNotice ? (
          errorNotice
        ) : (
          weather?.main && (
            <div className="current-weather-container">
              <h5 className="light-text">{weather?.name}</h5>
              <h1>{name}</h1>
              <table>
                <tbody>
                  <tr>
                    <td className="label-cell">Description: </td>
                    <td>{description}</td>
                  </tr>
                  <tr>
                    <td className="label-cell">Temperature: </td>
                    <td>{temperature}</td>
                  </tr>
                  <tr>
                    <td className="label-cell">Humidity: </td>
                    <td>{humidity}</td>
                  </tr>
                  <tr>
                    <td className="label-cell">Time: </td>
                    <td>{time}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )
        )
      }
    </>
  );
}

export default CurrentWeather;