import React from 'react';
import cloudy from '../img/cloudy.png';
import rainny from '../img/Rainny.png';
import sunny from '../img/sunny.png';
import snowy from '../img/snowy.png';

const WeatherInfo=(prop)=>{
    debugger;
    const e=prop.data;
    const index = prop.index;
return(
    <div>
        { e.dt_txt && index ===0 && <p className="weather__key">Date : <span className="weather__value">{e.dt_txt}</span></p> }
        { e.main.temp && index ===0 && <p className="weather__key">Temprature: <span className="weather__value">{(e.main.temp - 273.15).toFixed(2)}°C  ({(e.main.temp_max - 273.15).toFixed(2)}-{(e.main.temp_min - 273.15).toFixed(2)})°C</span></p> }
        { e.main.humidity && index ===0 && <p className="weather__key">humidity : <span className="weather__value">{e.main.humidity} %</span></p> }
        { e.weather[0].description && index ===0 && <p className="weather__key">Condition: <span className="weather__value">{e.weather[0].description}</span>
        
        { e.weather[0].description.includes('clouds') && <img className="imgclass" src={cloudy} alt="Cloudy"/>}
        { e.weather[0].description.includes('rain') && <img className="imgclass" src={rainny} alt="Rainny"/>}
        { e.weather[0].description.includes('clear') && <img className="imgclass" src={sunny} alt="Sunny"/>}
        { e.weather[0].description.includes('snow') && <img className="imgclass" src={snowy} alt="Snowy"/>}
        </p> }
        { index === 0 && <div className="detail_title">Detail Weather Conditions</div>}

        { e.weather[0].description && index !==0 && <p className="weather__detailkey">
        <span  className="display__detailinfo">
        <span className="weather__detailvalue"> <span className="weather__detailkey">{e.dt_txt.substring(0, 10)}</span></span>
        <span className="weather__detailvalue"><span className="weather__detailkey"> {(e.main.temp_max - 273.15).toFixed(2)}°C - {(e.main.temp_min - 273.15).toFixed(2)}°C </span></span>
        <span className="weather__detailvalue">
        {e.weather[0].description.includes('clouds') && <img className="imgclass" src={cloudy} alt="Cloudy"/>}
        { e.weather[0].description.includes('rain') && <img className="imgclass" src={rainny} alt="Rainny"/>}
        { e.weather[0].description.includes('clear') && <img className="imgclass" src={sunny} alt="Sunny"/>}
        { e.weather[0].description.includes('snow') && <img className="imgclass" src={snowy} alt="Snowy"/>}
        </span>
        </span> 
        </p> }
    </div>
    );
}

export default WeatherInfo;