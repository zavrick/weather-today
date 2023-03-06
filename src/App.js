import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import SearchForm from './components/searchForm';
import './App.css';

const App = (props) => {
  const [weather, setWeather] = useState(props.weather);
  useEffect(() => {
    setWeather(props.weather);
  }, [props.weather]);

  return (
    <div className="App">
      <h1>Today's Weather</h1>
      <hr/>
      <SearchForm />
      <div>
        <h3>{weather?.weather?.name}</h3>
        <p>{weather?.weather?.main?.temp}</p>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    weather: state.weather,
  };
};

export default connect(mapStateToProps)(App);
