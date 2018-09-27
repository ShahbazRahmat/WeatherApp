import React,{ Component } from 'react';
import Title from './components/Title';
import WeatherForm from './components/WeatherForm';
import Weather from './components/Weather';

const api_key = 'b7d416b5d5a5f1039ab985830f1f5d1c';

class App extends Component
{

  state = {
    city: undefined,
    country: undefined,
    dayArray:[],
    error: undefined,
    dateArray: []
  }
  
  getDateTime(){
    const dateArray=[];
    for (let index = 0; index <= 4; index++) {
       var currentDate = new Date();
      currentDate.setDate(currentDate.getDate() + index);
      dateArray.push(currentDate);
    }
   return dateArray;
  }
  getWeather = async (e) =>
  {
    debugger;
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    if(city && country)
    {
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${api_key}`);
    const data = await api_call.json();

    const dateArray = this.getDateTime();
    const daysArray = [];
    dateArray.forEach( d => {
      daysArray.push(data.list.find(e => {return new Date(e.dt_txt).getDate() === d.getDate()}));
     });

      this.setState({
        dayArray: daysArray,
        city: data.city.name,
        country: data.city.country,
        error: "",
        dateArray: this.getDateTime(),
      });
    }
    else
    {
      this.setState({
        city: undefined,
        country: undefined,
        dayArray:[],
        dateArray: undefined,
        error: "Please enter the value."
      }); 
    }
  }
  
  render()
  {
    this.getDateTime();
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