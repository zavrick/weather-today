import { SET_WEATHER, SET_WEATHER_ERROR } from './types';
import { saveSearch } from './searchHistoryActions';

export const fetchWeather = (city) => (dispatch) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&units=metric`
  )
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json()
    })
    .then((weather) => {
      dispatch({
        type: SET_WEATHER_ERROR,
        payload: null,
      })
      dispatch({
        type: SET_WEATHER,
        payload: weather,
      })
      saveSearch(weather)(dispatch);
})
    .catch((err) =>
      dispatch({
        type: SET_WEATHER_ERROR,
        payload: err.message,
      })
    );
}

export const loadWeather = (weather) => (dispatch) => {
  dispatch({
    type: SET_WEATHER,
    payload: weather,
  });
}