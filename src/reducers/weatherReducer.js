import { SET_WEATHER } from '../actions/types';

const initialState = {
  weather: {},
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WEATHER:
      return {
        ...state,
        weather: action.payload,
      }
    default:
      return state;
  }
}

export default weatherReducer;