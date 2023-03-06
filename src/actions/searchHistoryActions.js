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

export const deleteSearch = (id) => (dispatch) => {
  const results = JSON.parse(localStorage.getItem("results"));
  const index = results.findIndex((result) => result.id === id);
  results.splice(index, 1);
  localStorage.setItem("results", JSON.stringify(results));
  dispatch({
    type: FETCH_RESULTS,
    payload: results,
  });
}