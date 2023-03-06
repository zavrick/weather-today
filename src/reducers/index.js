
import { combineReducers } from "redux";
import weatherReducer from "./weatherReducer";
import searchHistoryReducer from "./searchHistoryReducer";

const rootReducer = combineReducers({
  weather: weatherReducer,
  searchHistory: searchHistoryReducer,
});

export default rootReducer;