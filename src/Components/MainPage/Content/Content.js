import React, { useContext } from 'react';
import { AnimateOnChange } from 'react-animation';

import { WeatherDataContext } from '../../../contexts/WeatherDataContext';

import './Content.css';

const Content = () => {

    const [weatherData, setWeatherData] = useContext(WeatherDataContext);


    if(!weatherData) {
        return <div>Error</div>
    }

    return(
        <AnimateOnChange>
            <div className="content">
                <span>{weatherData.weather[0].description.toUpperCase()}</span>
                <span className="temperature">{weatherData.main.temp.toFixed()}°</span>
                <span>IN {weatherData.name.toUpperCase()}, {weatherData.sys.country.toUpperCase()}</span>
            </div>
        </AnimateOnChange>
        
    );
};

export default Content;