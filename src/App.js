import logo from './logo.svg';
import './App.css';
import SearchBar from './component/search-bar/search-bar';
import {useState} from "react"
import WeatherResult from './component/weather-result/weather-result';

function App() {

  const [city, setCity] = useState()

  const onWeatherSearch = (city) => {
    setCity(city)
  }

  return (
    <div className="App">
      <SearchBar onSearch={onWeatherSearch} placeHolder="Insérez une ville"/>
      {
        !city ? (
          <p>Aucune ville recherchée</p>
        ) : (
          <WeatherResult city={city}/>
        )
      }
    </div>
  );
}

export default App;
