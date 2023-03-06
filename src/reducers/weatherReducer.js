import { SET_WEATHER, SET_WEATHER_ERROR } from '../actions/types';

const initialState = {
  weather: {},
  error: null,
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WEATHER:
      return {
        ...state,
        weather: action.payload,
      }
    case SET_WEATHER_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state;
  }
}

export default weatherReducer;