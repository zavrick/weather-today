import { connect } from 'react-redux';
import './App.css';
import { fetchWeather } from './actions/weatherActions';

const App = (state) => {
  return (
    <div className="App">
      <h1>Today's Weather</h1>
      <button onClick={() => state.fetchWeather('Singapore')}>Singapore</button>
      <hr/>
      {state.weather.weather.map((item, index) => {
        return (
          <div key={index}>
            <h3>{item.name}</h3>
            <p>{item.main.temp}</p>
          </div>
        );}
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    weather: state.weather,
  };
};

export default connect(mapStateToProps, { fetchWeather })(App);
