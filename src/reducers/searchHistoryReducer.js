import { SAVE_RESULT, FETCH_RESULTS } from "../actions/types";

const initialState = {
  results: [],
};

const searchHistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_RESULT:
      return {
        ...state,
        results: action.payload,
      };
    case FETCH_RESULTS:
      return {
        ...state,
        results: action.payload,
      };
    default:
      return state;
  }
}

export default searchHistoryReducer;