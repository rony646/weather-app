import React from 'react';

import './WeatherCard.css';



const WeatherCard = props => {


    return(
        <div className="weather-card">
            <p className="date">{props.date}</p>
            <p className="description">{props.weatherResume}</p>
            <p className="current-temp">{props.dayTemp.toFixed(0)}°</p>
            <p className="min-max">{props.maxTemp.toFixed(0)}° / {props.minTemp.toFixed(0)}°</p>
        </div>
    );
};

export default WeatherCard;