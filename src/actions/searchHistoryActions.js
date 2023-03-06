import { SAVE_RESULT, FETCH_RESULTS } from "./types";

export const saveSearch = (result) => (dispatch) => {
  const results = JSON.parse(localStorage.getItem("results"));
  const newResults = results ? results.concat(result) : [result];
  localStorage.setItem("results", JSON.stringify(newResults));
  console.log(newResults)
  dispatch({
    type: SAVE_RESULT,
    payload: newResults,
  });
};

export const fetchSearches = () => (dispatch) => {
  const results = JSON.parse(localStorage.getItem("results"));
  dispatch({
    type: FETCH_RESULTS,
    payload: results,
  });
}