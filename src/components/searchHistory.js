import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeather } from '../actions/weatherActions';
import { deleteSearch, setSearch } from '../actions/searchHistoryActions';
import './searchHistory.css';

const SearchHistory = (props) => {
  const searches = props.history?.searches?.length > 1 ? [...props.history.searches].reverse() : props.history?.searches;
  const dispatch = useDispatch();

  const handleSearch = (item) => {
    dispatch(fetchWeather({ city: item.search?.city, country: item.search?.country }));
    dispatch(setSearch({ city: item.search?.city, country: item.search?.country }));
  };
  const handleDelete = (item) => {
    dispatch(deleteSearch(item.time));
  };

  const renderHistory = (searches) => {
    if (searches && searches.length > 0) {
      return (
        <ol>
          {
            searches.map((item, index) => {
              const time = item.time && new Date(item.time).toLocaleTimeString('en-SG', { hour12: true }).toUpperCase()
              return (
                <li key={index}>
                  <div className="search-history-item-container">
                    <div className="search-history-name">{item.searchString}</div>
                    <div className="search-history-right">
                      <div className="search-history-time">{time}</div>
                      <div className="search-history-actions">
                        <div className="search-history-action-button" onClick={() => handleSearch(item)}>
                          <img src={`/search.png`} alt="Search" />
                        </div>
                        <div className="search-history-action-button" onClick={() => handleDelete(item)}>
                        <img src={`/delete.png`} alt="Delete" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              )
            })
          }
        </ol>
      )
    }

    return <div className="search-history-placeholder-container">No Record</div>;
  }

  return (
    <div className="search-history-container">
      <h2>Search History</h2>
      <hr/>
      {renderHistory(searches)}
    </div>
  );
}

export default SearchHistory;