import { SET_WEATHER, SET_WEATHER_ERROR } from './types';
import { saveSearch } from './searchHistoryActions';

export const fetchWeather = (search) => (dispatch) => {
  const { city, country } = search;
  const searchString = `${city ? city : ''}${city && country ? ', ' : ''}${country}`;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${searchString}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&units=metric`
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
      saveSearch({searchString, search, time: Date.now(), result: weather})(dispatch);
})
    .catch((err) =>
      dispatch({
        type: SET_WEATHER_ERROR,
        payload: err.message,
      })
    );
};
