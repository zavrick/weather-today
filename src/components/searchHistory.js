import React from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { loadWeather } from '../actions/weatherActions';
import { deleteSearch } from '../actions/searchHistoryActions';
import './searchHistory.css';

const SearchHistory = (props) => {
  const results = [...props.history.results].reverse();
  const dispatch = useDispatch();

  const renderHistory = (results) => {
    if (results.length > 0) {
      return (
        <ol>
          {
            results.map((item, index) => {
              const time = item.dt && moment.unix(item.dt).format('hh:mm:ss A');
              return (
                <li key={index}>
                  <div className="search-history-item-container">
                    <div className="search-history-name">{item.name}</div>
                    <div className="search-history-right">
                      <div className="search-history-time">{time}</div>
                      <div className="search-history-actions">
                        <div className="search-history-action-button" onClick={() => dispatch(loadWeather(item))}>
                          View
                        </div>
                        <div className="search-history-action-button" onClick={() => dispatch(deleteSearch(item.id))}>
                          Delete
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
      {renderHistory(results)}
    </div>
  );
}

export default SearchHistory;