import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import SearchForm from './components/searchForm';
import CurrentWeather from './components/currentWeather';
import './App.css';

const App = (props) => {
  const [weather, setWeather] = useState(props.weather);
  useEffect(() => {
    setWeather(props.weather);
  }, [props.weather]);

  return (
    <div className="App">
      <h2>Today's Weather</h2>
      <hr/>
      <SearchForm />
      <CurrentWeather weather={weather} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    weather: state.weather,
  };
};

export default connect(mapStateToProps)(App);
