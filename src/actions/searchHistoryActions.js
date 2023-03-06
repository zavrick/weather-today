import { SAVE_SEARCH, FETCH_SEARCHES } from "./types";

export const saveSearch = (search) => (dispatch) => {
  const searches = JSON.parse(localStorage.getItem("searches"));
  const newSearches = searches ? searches.concat(search) : [search];
  localStorage.setItem("searches", JSON.stringify(newSearches));
  console.log(newSearches)
  dispatch({
    type: SAVE_SEARCH,
    payload: newSearches,
  });
};

export const fetchSearches = () => (dispatch) => {
  const searches = JSON.parse(localStorage.getItem("searches"));
  dispatch({
    type: FETCH_SEARCHES,
    payload: searches,
  });
}

export const deleteSearch = (id) => (dispatch) => {
  const searches = JSON.parse(localStorage.getItem("searches"));
  const index = searches.findIndex((search) => search.id === id);
  searches.splice(index, 1);
  localStorage.setItem("searches", JSON.stringify(searches));
  dispatch({
    type: FETCH_SEARCHES,
    payload: searches,
  });
}