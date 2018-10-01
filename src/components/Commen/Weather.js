import React from 'react';
import WeatherInfo from '../Commen/WeatherInfo';

const Weather = ({city, country, error, dayArray}) =>
{
   return <div className="weather__info"> 
        { city && country && <p className="weather__key">Location: <span className="weather__value">{city}, {country}</span></p> } 
        {dayArray.map((item, i)=>( <WeatherInfo data={item} index={i} />))}
        { error && <p className="weather__error">{error}</p> } 
    </div>
}

export default Weather;