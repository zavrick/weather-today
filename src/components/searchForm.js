import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { setSearch } from '../actions/searchHistoryActions';
import { fetchWeather } from '../actions/weatherActions';
import './searchForm.css';

const SearchForm = (props) => {
  const dispatch = useDispatch();
  const [city, setCity] = useState(props.search?.city);
  const [country, setCountry] = useState(props.search?.country);

  useEffect(() => {
    setCity(props.search?.city);
    setCountry(props.search?.country);
  }, [props.search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.fetchWeather({ city, country });
  };

  const handleClear = (e) => {
    e.preventDefault();
    setCity('');
    setCountry('');
    dispatch(setSearch({ city: '', country: ''}))
  };

  return (
    <div className="search-form">
      <form onSubmit={handleSubmit}>
        <label>City: </label>
        <input
          type="text"
          name="city"
          onChange={(e) => setCity(e.target.value)}
          value={city}
        />
        <label>Country: </label>
        <input
          type="text"
          name="country"
          onChange={(e) => setCountry(e.target.value)}
          value={country}
        />
        <button type="submit">Search</button>
        <button onClick={handleClear}>Clear</button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    weather: state.weather,
    search: state.searchHistory.search,
  };
}

export default connect(mapStateToProps, { fetchWeather })(SearchForm);