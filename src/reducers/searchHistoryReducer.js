import { SAVE_SEARCH, FETCH_SEARCHES, SET_SEARCH } from "../actions/types";

const initialState = {
  searches: [],
  search: {
    city: '',
    country: '',
  },
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
    case SET_SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
}

export default searchHistoryReducer;