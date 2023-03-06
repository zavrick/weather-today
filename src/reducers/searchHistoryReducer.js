import { SAVE_SEARCH, FETCH_SEARCHES } from "../actions/types";

const initialState = {
  searches: [],
};

const searchHistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_SEARCH:
      return {
        ...state,
        searches: action.payload,
      };
    case FETCH_SEARCHES:
      return {
        ...state,
        searches: action.payload,
      };
    default:
      return state;
  }
}

export default searchHistoryReducer;