import { SET_WEATHER } from '../actions/types';

const initialState = {
  weather: [],
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WEATHER:
      const weatherArray = state.weather;
      const index = weatherArray.findIndex(weather => weather.name === action.payload.name);

      if (index !== -1) {
        weatherArray[index] = action.payload
        return {
          ...state,
          weather: weatherArray,
        };
      }

      return {
        ...state,
        weather: weatherArray.concat(action.payload),
      };
    default:
      return state;
  }
}

export default weatherReducer;