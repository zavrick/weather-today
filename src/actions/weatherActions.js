import { SET_WEATHER } from './types';

export const fetchWeather = (city) => (dispatch) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&units=metric`
  )
    .then((res) => res.json())
    .then((weather) => {
      dispatch({
        type: SET_WEATHER,
        payload: weather,
      })
  });
}