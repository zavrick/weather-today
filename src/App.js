import { connect, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import SearchForm from './components/searchForm';
import CurrentWeather from './components/currentWeather';
import SearchHistory from './components/searchHistory';
import { fetchSearches } from './actions/searchHistoryActions';
import './App.css';

const App = (props) => {
  const dispatch = useDispatch();
  const [weather, setWeather] = useState(props.weather);
  const [searchHistory, setSearchHistory] = useState(props.searchHistory);

  useEffect(() => {
    dispatch(fetchSearches());
  }, [dispatch]);

  useEffect(() => {
    setWeather(props.weather);
  }, [props.weather]);

  useEffect(() => {
    setSearchHistory(props.searchHistory);
  }, [props.searchHistory]);

  return (
    <div className="App">
      <h2>Today's Weather</h2>
      <hr/>
      <SearchForm />
      <CurrentWeather weather={weather}/>
      <SearchHistory history={searchHistory}/>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    weather: state.weather,
    searchHistory: state.searchHistory,
  };
};

export default connect(mapStateToProps)(App);
