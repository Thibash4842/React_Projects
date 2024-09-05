import React, { useState } from 'react'
import './Weather.css';

// import { FaSearchengin } from "react-icons/fa";
// images
import sun from './asserts/sun1.png';
import humidityIcon from './asserts/humidity.png';
import cloudsun from './asserts/cloudsun2.webp';
import searchIcon from './asserts/search1.png';
import snowIcon from './asserts/sunny-and-snowy.webp';
import rainIcon from './asserts/rain.jpeg';
import windIcon from './asserts/wind-.webp';

const WeatherDetails = ({ icon, temp, city, country, lat, log,humidity,wind }) => {
  return (
    <>
      <div className='image'>
        <img className="weather-img" src={icon} alt="sun.jpg" />
      </div>
      <div className='temp'>{temp}°C</div>
      <div className="location">{city}</div>
      <div className="country">{country}</div>
      <div className="cord">
        <div>
          <span className='lat'>latitude </span>
          <span>{lat}</span>
        </div>
        <div>
          <span className='lat'>lagitude </span>
          <span>{log}</span>
        </div>
      </div>
      <div className='data-container'>
        <div className='element'>
          <img src={humidityIcon} alt="humidity.jpg" className='humidity-icon' />
          <div className='data'>
            <div className="humidity-percent">{humidity}%</div>
            <div className='text'>Humidity</div>
          </div>
        </div>
        <div className='element'>
          <img src={windIcon} alt="wind.jpg" className='humidity-icon' />
          <div className='data'>
            <div className="humidity-percent">{wind}km/h</div>
            <div className='text'>Wind Speed</div>
          </div>
        </div>
      </div>
    </>
  )
};
// https://api.openweathermap.org/data/2.5/weather?q=Chennai&appid=7ecbf816c456806473f5b1927cb0b939&units=Metric

const Weather = () => {
  let api_key ="7ecbf816c456806473f5b1927cb0b939";

  const [text,setText]=useState("Chennai");

  const [icon, setIcon] = useState(snowIcon);
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("Chennai");
  const [country, setCountry] = useState("India");
  const [lat, setLat] = useState(0);
  const [log, setLog] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [wind, setWind] = useState(0);
  const [cityNotFound,setCityNotFound]=useState(false);
  const[loading,setLoading]=useState(false);

  const weatherIconMap = {
    "01d":sun,
    "01n":sun,
    "02d":sun,
    "02n":sun,
    "03d":cloudsun,
    "03n":cloudsun,
    "04d":cloudsun,
    "04n":cloudsun,
    "09d":rainIcon,
    "09n":rainIcon,
    "010d":rainIcon,
    "010n":rainIcon,
    "013d":snowIcon,
    "013n":snowIcon,
  }
  const search =async()=> {
    setLoading(true);
  
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${api_key}&units=Metric`;

    try{
      let res =await fetch(url);
      let data = await res.json();
      // console.log(data);
      if(data.cod === "404"){
        console.log("City not found");
        setCityNotFound(true);
        setLoading(false);
        return;
      }
      setHumidity(data.main.humidity);
      setWind(data.wind.speed);
      setTemp(Math.floor(data.main.temp));
      setCity(data.name);
      setCountry(data.sys.country);
      setLat(data.coord.lat);
      setLog(data.coord.lon);
      const weatherIconCode = data.weather[0].icon;
      setIcon(weatherIconCode || sun);
      setCityNotFound(false);
    }catch(error){
      console.error("An error occurred: ", error.message);
      
    }finally{
      setLoading(false);
    }
  };
  const handleCity=(e)=>{
    setText(e.target.value);
  };
  const handleKeyDown=(e)=>{
    if(e.key === "Enter"){
      search();
    }
  };
  return (
    <div className='weather-container'>
      <div className="container">
        <div className='input-container'>
          <input type="text" className='cityInput' placeholder='Search City' onChange={handleCity} value={text} onKeyDown={handleKeyDown}/>
          <img className='search-icon' src={searchIcon} onClick={search()} alt="search.jpg" />
          {/* <FaSearchengin /> */}
        </div>
        <WeatherDetails icon={icon} temp={temp} city={city} country={country} lat={lat} log={log} humidity={humidity} wind={wind}/>

        <p className='copy-write'>Designed by <span>Thibash Innocent</span></p>
      </div>
    </div>
  )
};

export default Weather;
