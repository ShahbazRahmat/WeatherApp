import React from 'react';

const WeatherForm = ({getWeather}) =>
(
    <form onSubmit={getWeather}>
        <input type='text' name='city' placeholder='City...' />
        <input type='text' name='country' placeholder='Country...' />
        <button>Search</button>
    </form>
);

export default WeatherForm;