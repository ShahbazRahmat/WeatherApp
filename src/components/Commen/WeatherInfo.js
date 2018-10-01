import React from 'react';
import cloudy from '../../img/cloudy.png';
import rainny from '../../img/Rainny.png';
import sunny from '../../img/sunny.png';
import snowy from '../../img/snowy.png';

const WeatherInfo = ({data, index}) => {
    
    const {temp, temp_max, temp_min, humidity} = data.main;
return(<div>
        { data.dt_txt && index ===0 && <p className="weather__key">Date : <span className="weather__value">{data.dt_txt}</span></p> }
        { temp && index ===0 && <p className="weather__key">Temprature: <span className="weather__value">{(temp - 273.15).toFixed(2)}°C  ({(temp_max - 273.15).toFixed(2)}-{(temp_min - 273.15).toFixed(2)})°C</span></p> }
        { humidity && index ===0 && <p className="weather__key">humidity : <span className="weather__value">{humidity} %</span></p> }
        { data.weather[0].description && index ===0 && <p className="weather__key">Condition: <span className="weather__value">{data.weather[0].description}</span>
        
        { data.weather[0].description.includes('clouds') && <img className="imgclass" src={cloudy} alt="Cloudy"/>}
        { data.weather[0].description.includes('rain') && <img className="imgclass" src={rainny} alt="Rainny"/>}
        { data.weather[0].description.includes('clear') && <img className="imgclass" src={sunny} alt="Sunny"/>}
        { data.weather[0].description.includes('snow') && <img className="imgclass" src={snowy} alt="Snowy"/>}
        </p> }
        { index === 0 && <div className="detail_title">Detail Weather Conditions</div>}

        { data.weather[0].description && index !==0 && <p className="weather__detailkey">
        <span  className="display__detailinfo">
        <span className="weather__detailvalue"> <span className="weather__detailkey">{data.dt_txt.substring(0, 10)}</span></span>
        <span className="weather__detailvalue"><span className="weather__detailkey"> {(temp_max - 273.15).toFixed(2)}°C - {(temp_min - 273.15).toFixed(2)}°C </span></span>
        <span className="weather__detailvalue">
        { data.weather[0].description.includes('clouds') && <img className="imgclass" src={cloudy} alt="Cloudy"/>}
        { data.weather[0].description.includes('rain') && <img className="imgclass" src={rainny} alt="Rainny"/>}
        { data.weather[0].description.includes('clear') && <img className="imgclass" src={sunny} alt="Sunny"/>}
        { data.weather[0].description.includes('snow') && <img className="imgclass" src={snowy} alt="Snowy"/>}
        </span>
        </span> 
        </p> }
    </div>
    );
}

export default WeatherInfo;