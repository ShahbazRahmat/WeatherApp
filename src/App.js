import React,{ Component } from 'react';
import Axios from 'axios';
import Title from './components/Headers/Title';
import WeatherForm from './components/Forms/WeatherForm';
import Weather from './components/Commen/Weather';

const api_key = 'b7d416b5d5a5f1039ab985830f1f5d1c';

class App extends Component
{

  state = {
    city: "",
    country: "",
    dayArray:[],
    error: ""
  }
  
  getWeather = async (e) =>
  {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    await Axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${api_key}`)
    .then(res => {
      this.setState({
        city: res.data.city.name,
        country: res.data.city.country,
        dayArray: res.data.list.filter((weather, index) =>{
          return ((index % 8) === 0 || index === 0);
        }),
        error: ""
      });
    }).catch(err =>{
      const { message, cod} = err.response.data;
      this.setState({
        city: "",
        country: "",
        dayArray: [],
        error: `Provided country or ${message} and error cod is : ${cod}`
      })
    });
    
  }
    render()
  {
    const {city, country, error, dayArray} = this.state;
    return(
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-xs-5 title-container">
               <Title />
              </div>
              <div className="col-xs-7 form-container">
              <WeatherForm getWeather={this.getWeather} />
                <Weather
                city={city}
                country={country}
                error={error}
                dayArray={dayArray}
                /> 
              </div>
            </div>
          </div>
        </div>
      </div> 
    );
  }
  
}

export default App;