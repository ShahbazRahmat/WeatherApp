import React from 'react';
import WeatherInfo from './WeatherInfo'

// const Weather = ({temprature, temprature_max, temprature_min, city, country, humidity, description,error, dayArray}) =>
// (
//     <div className="weather__info">
//         { city && country && <p className="weather__key">Location: <span className="weather__value">{city}, {country}</span></p> } 
//         { dayArray[0].main.temp && <p className="weather__key">Temprature: <span className="weather__value">{dayArray[0].main.temp}  ({dayArray[0].main.temp_max}-{dayArray[0].main.temp_min})</span></p> }
//         { humidity && <p className="weather__key">humidity : <span className="weather__value">{humidity} %</span></p> }
//         { description && <p className="weather__key">Condition: <span className="weather__value">{description}</span></p> }
//         { error && <p className="weather__error">{error}</p> }
//     </div>
// );

class Weather extends React.Component
{
    // renderGamesList() {
    //     const { navigate } = this.props.navigation;
    //     const { characters } = this.props.home;
    //     return (
    //     <View style={{ paddingTop: 5 }}>
    //     {characters.map((character, i) => (
    //     <CharacterEditForm
    //     key={i}
    //     characterName={character.characterName}
    //     gameName={character.gameName}
    //     dungeonMaster={character.dungeonMaster}
    //     characterId={character.characterId}
    //     onPress={() => this.navigateToCharacter(character.characterId)}
    //     navigation={navigate}
    //     />
    //     ))
    //     }
    //     </View>
    //     );
    //     }
    // mappingWeatherData(city, country, error, dayArray){
    //     var aa;
    //     debugger;
    //     return (
    //         <div>
            
    //         </div>
    //     );
       
    // }
    render()
    {
        const {city, country, error, dayArray} = this.props;
        debugger;
        console.log(dayArray);
        return(
            <div className="weather__info"> 
                { city && country && <p className="weather__key">Location: <span className="weather__value">{city}, {country}</span></p> } 
                {
                 dayArray.map((item, i)=>(
                       <WeatherInfo data={item} index={i} />
                     ))
                }
               
                { error && <p className="weather__error">{error}</p> } 
            </div> 
        );
    }
}

export default Weather;