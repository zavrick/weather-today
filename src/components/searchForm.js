import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions/weatherActions';
import './searchForm.css';

const SearchForm = (props) => {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.fetchWeather(`${city}, ${country}`);
  };

  const handleClear = (e) => {
    e.preventDefault();
    setCity('');
    setCountry('');
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
  };
}

export default connect(mapStateToProps, { fetchWeather })(SearchForm);